import axios from "axios";

const baseURL = '/api'

const service = axios.create({
    baseURL,
    timeout: 50000
})

service.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if(token) {
        config.headers['x-access-token'] = token;
    }
    return config;
}, error => {
    return Promise.reject(error);
})

service.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
})

export default service;