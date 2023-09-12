// calculate Profit
export function profitCalculation(amount: number, duration: string) {
  let profit: number;
  if (duration == "24 hours") {
    return (profit = amount + amount * 0.15);
  }
  if (duration == "4 days") {
    return (profit = amount + amount * 0.3);
  }
  if (duration == "7 days") {
    return (profit = amount + amount * 0.4);
  }
}
