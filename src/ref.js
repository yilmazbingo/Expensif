import { createStore } from "redux";

const store = createStore((stat = { count: 0, er: 0 }) => {
  return stat;
});

console.log(store.getState());

const name = { name: "yila", age: 23 };

const news = { age: 27, ...name };
console.log(news);
