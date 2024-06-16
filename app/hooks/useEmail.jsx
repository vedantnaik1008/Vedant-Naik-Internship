import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../Provider/contextProvider';
import { getCurrentTabMessage } from '../utils/CurrentTab';

export const useEmail = () => {
    const { click, auth, setAuth, setClick, setOptionClick, tab } =
        useContext(MyContext);

    const [form, setForm] = useState({
        email: '',
        emailError: false,
        emailErrorMessage: '',
        phoneNumber: 0,
        name: '',
        message: '',
        submit: false,
        submitMessage: ''
    });
    
    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setForm(parsedData);
        }
    }, []);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleSubmit = (e) => {
        e.preventDefault();

        if (auth.logged || form?.message.length > 0) {
            if (emailRegex.test(form.email)) {
                console.log(form.email);
                form.emailError = false;
                setForm((prev) => ({
                    ...prev,
                    emailErrorMessage: ''
                }));
            } else {
                form.emailError = true;

                setForm((prev) => ({
                    ...prev,
                    emailErrorMessage: 'invalid email'
                }));
            }
        }
        if (form.email.length > 0) {
            setAuth((prev) => ({ ...prev, logged: true }));
        }

        setClick(() => !click);
        setOptionClick(false);

        let currentTabMessage = getCurrentTabMessage(tab);
        if (auth.logged === true) {
            setAuth((prev) => ({
                ...prev,
                submitEvent: true,
                submitMessage: currentTabMessage
            }));
        }
    };

    return { handleChange, handleSubmit, emailRegex, form, setForm };
};
