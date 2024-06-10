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
        submitEvent: {
            submitMessage: '',
            fireSubmit: false
        }
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
                submitEvent: auth.submitEvent
            }}>
            {children}
        </MyContext.Provider>
    );
};
