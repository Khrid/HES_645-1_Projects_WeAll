import { TOKEN_STORAGE_KEY } from "./request";

export const logged = () => {
  console.log(
    TOKEN_STORAGE_KEY,
    localStorage.getItem(TOKEN_STORAGE_KEY) !== null &&
      localStorage.getItem(TOKEN_STORAGE_KEY) !== undefined,
    localStorage.getItem(TOKEN_STORAGE_KEY)
  );
  return (
    localStorage.getItem(TOKEN_STORAGE_KEY) !== null &&
    localStorage.getItem(TOKEN_STORAGE_KEY) !== undefined
  );
};

export const resetLogin = () => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  window.location = "/";
};
export const getDateFormattedFromIsoDate = (date) => {
  return new Date(Date.parse(date)).toLocaleString("fr-CH", {
    day: "numeric", // numeric, 2-digit
    year: "numeric", // numeric, 2-digit
    month: "numeric", // numeric, 2-digit, long, short, narrow
    hour: "numeric", // numeric, 2-digit
    minute: "numeric",
  });
};
