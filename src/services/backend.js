import request from "../utils/request";

export const ENDPOINTS = {
  LOGIN: `${process.env.REACT_APP_BACKEND_URL}/user/login`,
  COMPANIES: `${process.env.REACT_APP_BACKEND_URL}/entreprise`,
  CHAT: `${process.env.REACT_APP_BACKEND_URL}/chat`,
  OFFERS: `${process.env.REACT_APP_BACKEND_URL}/offre`,
  ENTERPRISE: `${process.env.REACT_APP_BACKEND_URL}/entreprise`,
  POSTULANT: `${process.env.REACT_APP_BACKEND_URL}/postulant`,
  LANGUE: `${process.env.REACT_APP_BACKEND_URL}/langue`,
  LANGUESEJOUR: `${process.env.REACT_APP_BACKEND_URL}/langue`,
  COMPETENCE: `${process.env.REACT_APP_BACKEND_URL}/competence`,
  SOFTSKILL: `${process.env.REACT_APP_BACKEND_URL}/softskill`,
  EXPERIENCE: `${process.env.REACT_APP_BACKEND_URL}/experience`,
  FORMATION: `${process.env.REACT_APP_BACKEND_URL}/formation`,
};

export const Backend = {
  login: async (email, password) => {
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

  getPostulants: async () => {
    return request(ENDPOINTS.POSTULANT + "/");
  },

  getLangues: async (idPostulant) => {
    return request(ENDPOINTS.LANGUE + "/postulant/"+idPostulant);
  },

  getSejours: async (idPostulant) => {
    return request(ENDPOINTS.LANGUESEJOUR + "/sejours/"+idPostulant);
  },

  getCompetence: async (idPostulant) => {
    return request(ENDPOINTS.COMPETENCE + "/postulant/"+idPostulant);
  },

  getSoftSkill: async (idPostulant) => {
    return request(ENDPOINTS.SOFTSKILL + "/postulant/"+idPostulant);
  },

  getExperience: async (idPostulant) => {
    return request(ENDPOINTS.EXPERIENCE + "/postulant/"+idPostulant);
  },

  getFormation: async (idPostulant) => {
    return request(ENDPOINTS.FORMATION + "/postulant/"+idPostulant);
  },

  getSpecificConversation: (idUser1, idUser2) => {
    return request(ENDPOINTS.CHAT +"/message/" +idUser1 +"/"+idUser2)
  },

  sendMessage: (idUser1, idUser2, message) => {
    return request(ENDPOINTS.CHAT + "/message/" + idUser1 + "/" + idUser2 , { method:'POST', data: { message: message }});
  },

  createConversation: (idUser1, idUser2) => {
    return request(ENDPOINTS.CHAT + "/conversation/" + idUser1 + "/" + idUser2 , { method:'POST' });
  },

  closeConversation: (idUser1, idUser2) => {
    return request(ENDPOINTS.CHAT + "/conversation/" + idUser1 + "/" + idUser2 , { method:'DELETE'});
  }
};
