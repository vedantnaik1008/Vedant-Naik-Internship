import  { useContext, useEffect, useState } from 'react';
import { MyContext } from '../Provider/contextProvider';

export const useEmail = () => {
    const { click, auth, setAuth, setClick, setOptionClick, tab } =
        useContext(MyContext);
        console.log(tab);
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
        useEffect(()=> {
            const storedData = localStorage.getItem('formData')
            if(storedData){
                 const parsedData = JSON.parse(storedData);
                 setForm(parsedData);
            }
        }, [])

        const handleChange = (e) => {
            setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        };
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const handleSubmit = (e) => {
            e.preventDefault();

            if (auth.logged || form.message.length > 0) {
                console.log(form.message);
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
            function getCurrentTabMessage(curtab) {
                if (curtab === 'report issue') {
                    return `Thanks for bringing the issue to our attention.We'll review it shortly and provide an update soon!`;
                } else if (curtab === 'share feedback') {
                    return 'Thanks for your valuable feedback!';
                } else if (curtab === 'give suggestion') {
                    return 'Thanks for your valuable Suggestion!';
                } else if (curtab === 'contact us') {
                    return 'Thanks for reaching out to us! We will get back to you as soon as possible';
                }
            }
            let currentTabMessage = getCurrentTabMessage(tab);
            if (auth.logged) {
                setForm((prev) => {
                    
                    const newForm = {
                        ...prev,
                        submitMessage: currentTabMessage,
                        submit: true
                    };

                    localStorage.setItem('formData', JSON.stringify(newForm));
                    return newForm;
                });
            } else {
                localStorage.setItem(
                    'formData',
                    JSON.stringify({
                        ...form,
                        submitMessage: currentTabMessage
                    })
                );
            }
            setClick(() => !click);
            setOptionClick(false);
            console.log(auth.logged, form.submit);
        };
  return { handleChange, handleSubmit, emailRegex, form, setForm}
}