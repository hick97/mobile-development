import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rocketbox-omni-backend.herokuapp.com/',
});

export default api;