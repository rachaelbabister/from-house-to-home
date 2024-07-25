import axios from 'axios';

axios.defaults.baseURL = 'https://home-api-58bb6b7692c8.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();