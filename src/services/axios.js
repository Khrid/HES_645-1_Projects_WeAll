import axios from "axios";


const config = {
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: 'Basic YWRtaW46a2lzc2tpc3NAMTk1MA==',
    lang: 'fr',
    accept: 'application/json'
  }
}

export const axiosService = axios.create(config);