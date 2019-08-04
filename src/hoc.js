import React from "react";
import ReactDOM from "react-dom";

//this is the regular component yet.
const Info = props => (
  <div>
    <h1>info</h1>
    <p>the info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  //the compoenent here will be HOC
  //our goal is to display a warning message for private information
  return props => (
    <div>
      {props.isAdmin && <p>this is a private info. please do not share</p>}
      {/* this is hoc  */}
      <WrappedComponent {...props} />
    </div>
  );
};

const Auth = props => {
  return (
    <div>
      {" "}
      <p>something</p>
    </div>
  );
};
const requireAuthentication = WrappedComponent => {
  return props => {
    return (
      <div>
        {props.isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
          <p>u r not authenticated</p>
        )}
      </div>
    );
  };
};

const AuthInfo = requireAuthentication(Auth);
const AdminInfo = withAdminWarning(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="this is the detail" />,
  document.getElementById("app")
);
