'use client';
import React, { useState } from 'react';

// Create a Context
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
        submitMessage: '',
    });
    const [message, setMessage] = useState('');
    const [submit, setSubmit] = useState(false);

    const handleChange = (e) => {
        setAuth((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };



    const handleSubmit = (e) => {
        let emailErrorB = false;
        e.preventDefault();
        if (auth.logged && auth.email.length === 0 && message.length === 0)
            return;
        if (
            !auth.logged &&
            auth.email.trim().length > 0 &&
            message.length > 0
        ) {
            const emailRegex =
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            console.log(message);
            if (emailRegex.test(auth.email)) {
                console.log(auth.email);
                emailErrorB = false;
                setAuth((prev) => ({
                    ...prev,
                    emailError: ''
                }));
            } else {
                emailErrorB = true;

                setAuth((prev) => ({
                    ...prev,
                    emailError: 'invalid email'
                }));
            }
        }
        handleClose();
    };

    const handleClose = () => {
        if (click === false) {
            setAuth({
                logged: false,
                email: '',
                name: '',
                number: 0,
                emailError: ''
            });
            setMessage('');
        }
    };
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
                message,
                setMessage,
                handleChange,
                handleClose,
                handleSubmit,
                submit,
            }}>
            {children}
        </MyContext.Provider>
    );
};
