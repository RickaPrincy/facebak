import Cookies from 'js-cookie';
import React, { createContext, useState } from 'react';
export const ConnectionContext = createContext();

function getDefaultValue() {
    if (Cookies.get('token') && Cookies.get('user')) {
        return JSON.parse(Cookies.get('user'));
    }
    return null;
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(getDefaultValue());

    const isConnected = () => user !== null;

    const login = (newUser, token) => {
        setUser({ ...user, ...newUser });
        Cookies.set('user', JSON.stringify({ ...user, ...newUser }));
        Cookies.set('token', token);
    };
    const logout = () => {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
        document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
        setUser(null);
    };

    const me = () => {
        if (isConnected()) return user.id;
        return null;
    };
    return <ConnectionContext.Provider value={{ user, login, logout, isConnected, me }}>{children}</ConnectionContext.Provider>;
}
