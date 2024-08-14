import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

// User Authentication and Profile Management
export const login = async (credentials) => {
    return axios.post(`${API_URL}/u/login/`, credentials);
};

export const logout = async (token) => {
    return axios.post(`${API_URL}/u/logout/`, {}, {
        headers: { Authorization: `Token ${token}` }
    });
};

export const getUserDetails = async (token) => {
    return axios.get(`${API_URL}/u/details/`, {
        headers: { Authorization: `Token ${token}` }
    });
};

export const updateUser = async (token, data) => {
    return axios.post(`${API_URL}/u/update/`, data, {
        headers: { Authorization: `Token ${token}` }
    });
};

// Event Management
export const getEvents = async () => {
    return axios.get(`${API_URL}/e/`);
};

export const getFeaturedEvents = async () => {
    return axios.get(`${API_URL}/e/featured/`);
};

export const getEventDetails = async (eventCode) => {
    return axios.get(`${API_URL}/e/${eventCode}/`);
};

export const registerForEvent = async (token, eventData) => {
    return axios.post(`${API_URL}/e/register/`, eventData, {
        headers: { Authorization: `Token ${token}` }
    });
};

export const unregisterFromEvent = async (token, eventData) => {
    return axios.post(`${API_URL}/e/unregister/`, eventData, {
        headers: { Authorization: `Token ${token}` }
    });
};

// Additional functions for other operations can be added here
