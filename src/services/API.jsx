import axios from 'axios';

const API = axios.create({
	baseURL: 'https://jv-meeting-api.herokuapp.com/'
});

export default API;
