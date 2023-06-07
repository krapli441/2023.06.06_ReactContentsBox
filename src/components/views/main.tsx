// ? 리액트 라이브러리
import React from "react";

// ? 리액트 컴포넌트
import ContentsBox from "../utils/ContentsBox";

// ? CSS 모듈
import style from "../css/style.module.css";

// ? 주식 데이터
import AAPLstockData from "../../models/data/AAPL.json";
import { timeStamp } from "console";

type StockData = {
  [timeStamp: string]: {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. volume": string;
  };
};

let domesticStockMarket = [];
// 주식 데이터를 담기 위해 우선 비어있는 배열을 생성하였다.

const stockDataKeys = Object.keys(AAPLstockData);
for (let i = 0; i < stockDataKeys.length; i++) {
  const key = stockDataKeys[i];
  const stockData = AAPLstockData[key];
  const { "1.open": open, "4.close": close } = stockData;

  domesticStockMarket.push(
    <ContentsBox
      stockName={stockData.stockName}
      stockPrice={stockData.stockPirce}
      stockChangePercentage={stockData.stockChangePercentage}
      stockChartGraph={stockData.stockChartGraph}
      open={open}
      close={close}
    />
  );
}

//   for (let i = 0; i < AAPLstockData.length; i++) {
// // 가상의 주식 데이터의 length만큼 .push() 메서드를 실행하는 반복문을 제작한다.
// // 만약 주식 데이터의 길이가 많이 길어진다면 그만큼 ContentsBox가 많이 생성되니
// // 필요에 따라 .length를 넣지 말고 원하는 길이만큼 숫자를 넣어 조절해도 좋다.

//     domesticStockMarket.push(
//       <ContentsBox
//         stockName={AAPLstockData[i].stockName}
//         stockPrice={AAPLstockData[i].stockPrice}
//         stockChangePercentage={AAPLstockData[i].stockChangePercentage}
//         stockChartGraph={AAPLstockData[i].stockChartGraph}
//       />

// // 컴포넌트 안의 각 props에 주식 데이터를 넣는다.
//     );
//   }

export default function Main() {
  return (
    <>
      <div className={style.main}>main 영역입니다.</div>
    </>
  );
}
