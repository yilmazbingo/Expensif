const promise = new Promise((resolve, reject) => {
  reject("this si my resolved data");
});

promise.then(
  data => {
    console.log("tes");
  },
  error => {
    console.log(error);
  }
);
