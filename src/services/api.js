import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=685662d1a94232ea92f0488797df277e&language=pt-BR&page=1'
});

export default api;