import request from "../utils/request";

export const ENDPOINTS = {
  LOGIN: `${process.env.REACT_APP_BACKEND_URL}/user/login`,
  COMPANIES: `${process.env.REACT_APP_BACKEND_URL}/entreprise`,
  CHAT: `${process.env.REACT_APP_BACKEND_URL}/chat`,
  OFFERS: `${process.env.REACT_APP_BACKEND_URL}/offre`,
  ENTERPRISE: `${process.env.REACT_APP_BACKEND_URL}/entreprise`,
};

export const Backend = {
  login: async (email, password) => {
    console.log(process.env.REACT_APP_BACKEND_URL);
    return request(ENDPOINTS.LOGIN, {
      method: "POST",
      data: { email, password },
    });
  },

  companies: async () => {
    return request(ENDPOINTS.COMPANIES);
  },
  getConversation: async () => {
    return request(ENDPOINTS.CHAT + "/conversation");
  },
  getOffers: async () => {
    return request(ENDPOINTS.OFFERS);
  },
  getEnterprise: async (id) => {
    return request(ENDPOINTS.ENTERPRISE + "/" + id);
  },
};
