export const convert100ToTarget = (percent, name) => {
  return name === "price"
    ? (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10
    : name === "area"
    ? Math.ceil(Math.round(percent * 0.9) / 5) * 5
    : 0;
};
export const convertTo100 = (percent, name) => {
  let target = name === "price" ? 15 : name === "area" ? 90 : 1;
  return Math.floor((percent / target) * 100);
};

export const getNumbersPrice = (string) =>
  string
    .split(" ")
    .map((item) => +item)
    .filter((item) => !item === false);
export const getNumbersArea = (string) =>
  string
    .split(" ")
    .map((item) => +item.match(/\d+/))
    .filter((item) => item !== 0);
