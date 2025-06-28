import axios from 'axios';
// Define the base URL for the API
import { BASE_URL } from './endpoints';

const API_BASE_URL = BASE_URL

//get data
export const getData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
//postData
export const postData = async (endpoint, postData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/${endpoint}`, postData);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
//get data by Id
export const getDataById = async (endpoint, id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
//patch data
export const patchData = async (endpoint, postData) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/${endpoint}`, postData);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
//put data
export const puttData = async (endpoint, postData) => {
    try {
        const response = await axios.poputst(`${API_BASE_URL}/${endpoint}`, postData);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
//delete data
export const deleteData = async (endpoint, id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${endpoint}`, id);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const setAuth = (loginData) => {
    if (loginData.token) {
        sessionStorage.setItem('auth', JSON.stringify(loginData));
    } else {
        throw ('Auth not set')
    }
}
export const getAuth = () => {
    const authData = (sessionStorage.getItem('auth')) ? JSON.parse(sessionStorage.getItem('auth')) : {};
    let isAuthSet = false;
    if (authData.token) {
        isAuthSet = true;
    }
    return { isAuthSet, authData };
}
export const removeAuth = () => {
    return sessionStorage.removeItem("auth");
}
