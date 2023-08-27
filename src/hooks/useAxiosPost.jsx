import axios from 'axios';
import { useState } from 'react';
import {
    BASE_API_URL,
    HEADERS
} from '../api/api.config';
import Cookies from 'js-cookie';

export function useAxiosPost(url, data, defaultValue = [], tokenName = 'token'){
    const [data, setData] = useState(defaultValue);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    console.log(Cookies,tokenName);
    const begin = () =>{
        axios.post(`${BASE_API_URL}${url}`,data,{
            headers: {
                ...HEADERS,
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0NjhjYjcyLTcwYWQtNDY1NC1iZWU2LTk2ODQ1NTM0OTIyZSIsImVtYWlsIjoicmNrcHJpbmN5QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoicmlja2EiLCJqb2luZWRBdCI6IjIwMjMtMDgtMjdUMTg6MTM6MjUuMDUzWiIsImJpbyI6bnVsbCwicGhvdG8iOm51bGwsImlhdCI6MTY5MzE2MDAzOH0.SWG6evfLelpG3VxsfiiaxDz1jOnJtyGXmE5sYdhuCJ4'
            }
        }).then(response => {
            setError(false);
            setData(response.data);
        })
            .catch(error => {
                setError(true);
                console.log(error);
            })
            .finally(() => setPending(false));
    };

    return [data,begin,pending, error];
}