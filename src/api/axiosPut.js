import axios from 'axios';
import { HEADERS, BASE_API_URL } from './api.config';
import Cookies from 'js-cookie';

export function axiosPut(url, body, tokenName = 'token') {
    return axios.put(`${BASE_API_URL}${url}`, body, {
        headers: {
            ...HEADERS,
            Authorization: `Bearer ${Cookies.get(tokenName) || ''}`
        }
    });
}