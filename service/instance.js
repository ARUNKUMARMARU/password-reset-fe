import axios from 'axios';

const baseURL = "http://localhost:5000/api";

const authInstance = axios.create({
    baseURL : baseURL,
    timeout : 5000,
    headers :{
        'content-type' : 'aplication/json'
    }
});

const protectedInstance = axios.create({
    baseURL : baseURL,
    timeout : 5000,
    headers :{
        'content-type' : 'aplication/json'
    }
});

protectedInstance.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'bearer ' + token;
        }
        return config;
    }
);

export default{
    authInstance,
    protectedInstance
}