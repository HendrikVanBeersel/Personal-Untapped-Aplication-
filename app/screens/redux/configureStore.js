import { configureStore } from "@reduxjs/toolkit";
import { root } from "./saga/saga";
import createSagaMiddleware from "@redux-saga/core";
import loginInfoSlice from "./loginInfoSlice";

const reducer = {
  loginInfo: loginInfoSlice,
};

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(root);

export default store;
