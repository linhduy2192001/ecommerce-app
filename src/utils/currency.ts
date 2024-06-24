export const currency = (num: number) => {
  const exchangeRate = 23500;

  // Chuyển đổi USD sang VND
  const vnd = num * exchangeRate;
  return vnd.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};
