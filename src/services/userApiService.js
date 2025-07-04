import { getData, getDataById, postData } from './services';
import axios from 'axios';
// Define the base URL for the API
import { BASE_URL } from './endpoints';

const API_BASE_URL = BASE_URL
// GET request for users
export const getUsers = async (endpoint) => {
    return getData(endpoint);
};

export const postUser = async (endpoint, postData) => {
    return postData(endpoint, postData);
};

export const userLogin = async (endpoint, postData) => {
    try {
        //const response = await axios.post(`${API_BASE_URL}/${endpoint}`, postData);
        const response = await axios.get(`${API_BASE_URL}/${endpoint}/1`, postData);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};