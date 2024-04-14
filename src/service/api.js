import axios from "axios";

const BASE_URL = "https://vocab-builder-backend.p.goit.global/api";
const $instance = axios.create({ baseURL: BASE_URL });

export const setToken = (token) => {
  $instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  $instance.defaults.headers.common.Authorization = "";
};

export const register = async (credentials) => {
  const { data } = await $instance.post("/users/signup", credentials);
  setToken(data.token);
  return data;
};

export const login = async (credentials) => {
  const { data } = await $instance.post("/users/signin", credentials);
  setToken(data.token);
  return data;
};

export const logout = async () => {
  const { data } = await $instance.post("/users/signout");
  clearToken();
  return data;
};
