'use client';
import React, { useState } from 'react';

export const MyContext = React.createContext();

export const ContextProvider = ({ children }) => {
    const [click, setClick] = useState(false);
    const [optionClick, setOptionClick] = useState(false);
    const [tab, setTab] = useState('');
    const [auth, setAuth] = useState({
        logged: false,
        email: '',
        name: '',
        number: 0,
        emailError: '',
        submitEvent: false,
        submitMessage: ''
    });

    return (
        <MyContext.Provider
            value={{
                click,
                setClick,
                optionClick,
                setOptionClick,
                tab,
                setTab,
                auth,
                setAuth,
            }}>
            {children}
        </MyContext.Provider>
    );
};
