import fs from "fs";

const apiKey: string = "4IED2HP9THEKZPFG";

async function getIntervalInfo(symbol: string) {
  try {
    const intervalResponse = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`
    );
    const responseData = await intervalResponse.json(); // JSON 데이터로 응답을 분석함
    const timeSeries = responseData["Time Series (5min)"]; // 5분마다의 주식 정보를 포함하는 객체
    await fs.writeFile(
      "./data/AAPL.json",
      JSON.stringify(timeSeries),
      (error) => {
        if (error) {
          console.log(error);
        }
      }
    );
    for (const key in timeSeries) {
      const intervalData = timeSeries[key];
      console.log(`시간 : ${timeSeries[key]}`);
      console.log(`시가 : ${intervalData["1. open"]}`);
      console.log(`시가 : ${intervalData["4. close"]}`);
    }
  } catch (error) {
    console.error(error);
  }
}

setInterval(() => {
  getIntervalInfo("AAPL");
}, 1000); // 요청 한 건당 20초의 대기 시간이 필요한다고 했으니 25초 뒤에 실행하도록 함.

//
