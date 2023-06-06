// ? 리액트 라이브러리
import React from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

// ? 리액트 컴포넌트
import App from "./App";
import "./components/css/style.module.css";

// ? CSS 모듈
import Style from "./components/css/style.module.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <div id={Style.root}>
    <App />
  </div>
);
