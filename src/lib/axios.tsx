import { env } from "@/env";
import axios from "axios";

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, // envia automaticamente os cookies do front-end para o back-end
});

// antes de todas as requisições do axios, essa função é executada,
// caso a variável de ambiente abaixo seja true
// if (env.VITE_API_ENABLE_DELAY) {
//   api.interceptors.request.use(async (config) => {
//     await new Promise((resolve) => setTimeout(resolve, 2000));

//     return config;
//   });
// }
