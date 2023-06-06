// ? 리액트 라이브러리
import React from "react";

// ? 리액트 컴포넌트
import ContentsBox from "../utils/ContentsBox";
import ContentsBoxProps from "../utils/ContentsBoxProps";
// ? CSS 모듈
import style from "../css/style.module.css";

export default function Main() {
  return (
    <>
      <div className={style.main}>
        main 영역입니다.
        <ContentsBoxProps stockName="APPLE" stockPrice="179.58 USD" stockChartGraph="Graph" stockChangePercentage="-1.37%"/>
      </div>
    </>
  );
}
