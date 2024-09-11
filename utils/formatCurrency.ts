export const formatCurrency = (
  price: number = 0,
  fractionUnits: number = 0
) => {
  if (typeof price === "string") {
    parseInt(price);
  }
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    notation: "standard",
    maximumFractionDigits: fractionUnits,
  }).format(price);
};

export const convertCurrency = (
  coins: any[],
  amount: number = 0,
  coinName: string
) => {
  const name = coins.find((coin) => coin.sym === coinName);
  const coinPrice = name?.price;
  const result = amount * coinPrice;

  return formatCurrency(result);
};

// function to convert coins
export const convertCoin = (
  coins: any[],
  amount: number | any,
  conTo: string | undefined | null,
  conFrom: string | undefined | null
) => {
  // convert coin to dollars first
  const prevCoin = coins.find((coin) => coin.sym === conFrom);
  const prevCoinPrice = +prevCoin?.price;

  const amtDollar = amount * prevCoinPrice;

  // convert to new Coin
  const newCoin = coins.find((coin) => coin.sym === conTo);
  const newCoinPrice = newCoin?.price;
  const result = amtDollar / newCoinPrice;

  return {
    result: result.toFixed(5),
    newCoin: newCoin,
    oldCoin: prevCoin,
  };
};

export function getSum(firstNum: number, secondNum: number) {
  const answer = firstNum + secondNum;

  return answer;
}
export function Sub(firstNum: number, secondNum: number) {
  const answer = firstNum - secondNum;

  return answer;
}


export const formatCurrencyTwo = (
  price: number = 0,
  fractionUnits: number = 0
) => {
  if (typeof price === "string") {
    parseInt(price);
  }
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    notation: "standard",
    maximumFractionDigits: fractionUnits,
  }).format(price);
};