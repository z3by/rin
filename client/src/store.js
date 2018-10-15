import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const middleWares = [thunk];
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleWares))
);

export default store;
