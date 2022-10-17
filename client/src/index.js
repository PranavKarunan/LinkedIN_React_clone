import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from "./reducer";
import { createStore } from 'redux'
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer,composeWithDevTools())
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
