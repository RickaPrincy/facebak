import { useState } from 'react';

export function usePopup(defaultStatus = false) {
    const [popup, setPopup] = useState(defaultStatus);

    const changePopup = () => {
        setPopup(!popup);
    };

    return [popup, changePopup];
}
