import { useState } from 'react';

export function useForm(values) {
    const [state, setState] = useState(values);

    const onChange = event => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };

    return [state, onChange];
}