import { getData, getDataById, postData, deleteData } from './services';
import axios from 'axios';
// Define the base URL for the API
import { BASE_URL } from './endpoints';

const API_BASE_URL = BASE_URL
// Product API's
export const getProducts = async (endpoint) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a 1-second delay
    return getData(endpoint);
}
export const getProductsById = async (endpoint, id) => {
    return getDataById(endpoint, id);
}
export const postProducts = async (endpoint, postData) => {
    return postData(endpoint, postData)
};
export const deleteProduct = async (endpoint, id) => {
    return deleteData(endpoint, id);
};
export const getCart = async (endpoint, id) => {
    try {
        //const response = await axios.post(`${API_BASE_URL}/${endpoint}`, postData);
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};