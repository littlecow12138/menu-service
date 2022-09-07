import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  addGlobalUncaughtErrorHandler,
  registerMicroApps,
  setDefaultMountApp,
  start,
} from "qiankun";
import { Microconfig } from "./registerMicroAppsConfig";
import "antd/dist/antd.min.css";

// register micro app
registerMicroApps(Microconfig, {
  beforeLoad: (app: any) => {
    console.log("before load", app.name);
    return Promise.resolve();
  },
  afterMount: (app: any) => {
    console.log("after mount", app.name);
    return Promise.resolve();
  },
});

// start qiankun
start();

// 添加全局异常捕获
addGlobalUncaughtErrorHandler((handler) => {
  console.log("异常捕获", handler);
});

setDefaultMountApp("/notes");

const root = ReactDOM.createRoot(
  document.getElementById("root-main") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
