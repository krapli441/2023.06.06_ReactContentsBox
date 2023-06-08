import React, { useState, useEffect } from "react";
import ContentsBox from "../utils/ContentsBox";
import style from "../css/style.module.css";
import AAPLstockData from "../../models/data/AAPL.json";

interface StockData {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

const StockDataComponent = (): JSX.Element => {
  const [stock, setStocks] = useState<StockData[]>([]);

  useEffect(() => {
    setStocks(AAPLstockData);
    console.log("stockData 컴포넌트 불러옴");
  }, []);

  return (
    <>
      {stock.length > 0 ? (
        stock.map((element: StockData, index: number) => (
          <ContentsBox
            key={index}
            stockName=""
            stockPrice={element["4. close"]}
            stockChangePercentage=""
            stockChartGraph=""
            open={element["1. open"]}
            close={element["4. close"]}
          />
        ))
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default StockDataComponent;
