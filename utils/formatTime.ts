export const formatTime = (date: number) => {
  return new Intl.DateTimeFormat("en-US").format(date);
};


export const relativeTime = (date: Date | any) => {
  return new Intl.RelativeTimeFormat("en", { style: "short" }).format(
    date,
    "days"
  );
};

export const addDay = (date: Date, days: number) => {
  return date.setDate(date.getDate() + days);
};