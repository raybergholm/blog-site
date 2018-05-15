import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/rootReducer";

import mainSagas from "./sagas/mainSagas";

import "./index.css";

import AppContainer from "./pages/AppContainer";
import registerServiceWorker from "./registerServiceWorker";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mainSagas);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
