import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
// const AUTH_URL = `${SERVER_API_URL}/auth`;
// const AUTH_URL = 'http://localhost:4000/api/auth'
const AUTH_URL = "https://tuiter-node-server-app2-cwf7.onrender.com/api/auth";


const api = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
    const response = await api.post(`${AUTH_URL}/login`, { username, password });

    const user = response.data;
    return user;
};

export const logout = async () => {
    const response = await api.post(`${AUTH_URL}/logout`);
    return response.data;
};
export const profile = async () => {
    const response = await api.post(`${AUTH_URL}/profile`);
    return response;
};
export const updateUser = async (user) => {
    const response = await api.put(`${AUTH_URL}/${user._id}`, user);
    return response.data;
};
export const register = async ({ username, password }) => {
    const response = await api.post(`${AUTH_URL}/register`, { username, password });
    const user = response.data;
    return user;
}
