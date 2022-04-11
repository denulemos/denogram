import {TOKEN} from './constants';
import jwtDecode from 'jwt-decode';

export const saveToken = (token) => {
    // save to localstorage
    localStorage.setItem(TOKEN, token);
}

export const getToken = () => {
    return localStorage.getItem(TOKEN);
}

export const decodeToken = (token) => {
    return jwtDecode(token);
}