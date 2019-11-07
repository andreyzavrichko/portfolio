import axios from 'axios';
import {CONSTS} from "../helpers/consts";


const token = localStorage.getItem('token');

axios.defaults.baseURL = CONSTS.BASEURL;

axios.defaults.headers['Authorization'] = `Bearer ${token}`;

axios.interceptors.response.use(
    function(response) {
        return response;
    }, 
    error => {
        const originalRequest = error.config; 

        if (error.response.status === 401) {            
            return axios.post('/refreshToken').then( response => {
                const token = response.data.token;
                localstorage.setItem('token', token);                
                axios.defaults.headers['Authorization'] = `Bearer ${token}`;
                
                originalRequest.headers['Authorization'] = `Bearer ${token}`;
                return axios(originalRequest); 
            })
        }

        if (error.response.status === 422) {             
            throw new Error('Не заполнены поля');
        }

        if (error.response.status === 403) {             
            throw new Error('Неверное имя пользователя или пароль');
        }
        
    });


export default axios;