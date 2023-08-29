import axios from 'axios';
import { useState } from 'react';
import {
    BASE_API_URL,
    HEADERS
} from '../api';
import Cookies from 'js-cookie';

export function useAxiosGet(url,tokenName = 'token', defaultValue = []) {
    const [data, setData] = useState(defaultValue);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    
    const begin = () => {
        axios.get(`${BASE_API_URL}${url}`, {
            headers: {
                ...HEADERS,
                Authorization: `Bearer ${Cookies.get(tokenName) || ''}`
            }
        })
            .then(response => {
                setError(false);
                setData(response.data);
            })
            .catch(error => {
                setError(true);
                console.log(error);
            })
            .finally(() => setPending(false));
    };

    return [data, begin, pending, error];
}