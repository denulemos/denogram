import {TOKEN} from './constants';

export const saveToken = (token) => {
    // save to localstorage
    localStorage.setItem(TOKEN, token);
}

export const getToken = () => {
    return localStorage.getItem(TOKEN);
}