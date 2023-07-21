import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'ec2d1815236b255505db833f2fd8eaa3',
    language: 'es-ES',
  },
});

export default movieDB;
