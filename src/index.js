import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/tailwind.css";

import { Provider } from 'react-redux';

import {store} from './redux/store'

console.log("hi");

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>, 
  document.getElementById("root")
);
