// ? 리액트 라이브러리
import React from "react";

// ? 리액트 컴포넌트
import Header from "./components/views/header";
import Main from "./components/views/main";
import Bottom from "./components/views/bottom";

// ? CSS 모듈
import ContainerStyle from "./components/css/style.module.css";
// import rootStyle from "./components/css/root.css";

export default function App() {
  return (
    <>
        <div className={ContainerStyle.container}>
          <Header />
          <Main />
          <Bottom />
        </div>
    </>
  );
}
