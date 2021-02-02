import axios from 'axios';

const instance = axios.create({
   baseURL : 'https://heroku-aws-deploy.herokuapp.com' 
});

export default instance;