import axios from 'axios';
import { useState } from 'react';
import {
    BASE_API_URL,
    HEADERS
} from '../api';
import Cookies from 'js-cookie';

export function useAxiosPost(tokenName = 'token', defaultValue = null) {
    const [data, setData] = useState(defaultValue);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    const begin = (url, body) => {
        setPending(true);
        setError(null);
        setData(null);

        axios.post(`${BASE_API_URL}${url}`, body, {
            headers: {
                ...HEADERS,
                Authorization: `Bearer ${Cookies.get(tokenName) || ''}`
            }
        })
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => setPending(false));
    };

    return [data, begin, pending, error];
}