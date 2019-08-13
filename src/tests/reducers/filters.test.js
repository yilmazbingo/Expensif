import filtersReducers from "../../reducers/filters";
import moment from "moment";

//we are gonna dispatch @@INIT to test the defaults.this is used internally by redux.
test("should setup default filter values", () => {
  const state = filtersReducers(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducers(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toEqual("amount");
});

test("should set sortBy to date", () => {
  const state = {
    text: "",
    sortBy: "amount", // it is by default date
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: "SORT_BY_DATE" };
  const result = filtersReducers(state, action);
  expect(result.sortBy).toEqual("date");
});

test("should set text filter", () => {
  const state = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const action = { type: "SET_TEXT_FILTER", text: "tex" };
  const result = filtersReducers(state, action);
  expect(result.text).toEqual("tex");
});

test("should set start date", () => {
  const state = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const action = { type: "SET_START_DATE", startDate: 1000 };
  const result = filtersReducers(state, action);
  expect(result.startDate).toEqual(1000);
});
