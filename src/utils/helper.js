import { TOKEN_STORAGE_KEY, USER_ID_STORAGE_KEY } from "./request";

export const tokenIsStored = () => {
  return (
    localStorage.getItem(TOKEN_STORAGE_KEY) !== null &&
    localStorage.getItem(TOKEN_STORAGE_KEY) !== undefined
  );
};

export const userIdIsStored = () => {
  return (
    localStorage.getItem(USER_ID_STORAGE_KEY) !== null &&
    localStorage.getItem(USER_ID_STORAGE_KEY) !== undefined
  );
};

export const resetLogin = () => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  localStorage.removeItem(USER_ID_STORAGE_KEY);
  window.location = "/";
};

export const getDateFormattedFromIsoDate = (date) => {
  return new Date(Date.parse(date)).toLocaleString("fr-CH", {
    day: "numeric",
    year: "numeric",
    month: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};

export const getDateFormattedFromIsoDateOffer = (date) => {
  return new Date(Date.parse(date)).toLocaleString("fr-CH", {
    day: "numeric",
    year: "numeric",
    month: "numeric",
  });
};
