import axios from 'axios';
import { HEADERS, BASE_API_URL } from './api.config';
import Cookies from 'js-cookie';

export function axiosPost(url, body, tokenName) {
    return axios.post(`${BASE_API_URL}${url}`, body, {
        headers: {
            ...HEADERS,
            Authorization: `Bearer ${Cookies.get(tokenName) || ''}`
        }
    });
}
