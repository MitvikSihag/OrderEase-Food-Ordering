import React from "react";
import ReactDOM from 'react-dom';
import App from "./app";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));