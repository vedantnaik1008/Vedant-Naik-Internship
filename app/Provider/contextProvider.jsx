'use client'
import React, { useState } from 'react';

// Create a Context
export const MyContext = React.createContext();

export const ContextProvider = ({ children }) => {
    const [click, setClick] = useState(false);
    const [optionClick, setOptionClick] = useState(false)

    return (
        <MyContext.Provider
            value={{ click, setClick, optionClick, setOptionClick }}>
            {children}
        </MyContext.Provider>
    );
};
