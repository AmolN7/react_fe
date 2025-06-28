import { getData, getDataById, postData } from './services';

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