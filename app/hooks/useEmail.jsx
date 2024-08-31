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
        files: [],
        message: '',
        submit: false,
        submitMessage: ''
    });

    // const array = [
    //     'report issue',
    //     'share feedback',
    //     'give suggestion',
    //     'contact us'
    // ];
    useEffect(() => {
        const storedData = localStorage.getItem(`formData_${tab}`);
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setForm(parsedData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(`formData_${tab}`, JSON.stringify(form));
    }, [form, tab]);
    
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file') {
            setForm((prev) => ({
                ...prev,
                files: [...prev.files, ...Array.from(files)]
            }));
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
        localStorage.setItem(`formData_${tab}`, JSON.stringify(form));
    };

    const handleRemoveFile = (index) => {
        setForm((prev) => ({
            ...prev,
            files: prev.files.filter((_, i) => i !== index)
        }));
    };

      const createImagePreview = (file) => {
          if (!(file instanceof File)) {
              console.warn('Not a valid File object:', file);
              return;
          }

          const reader = new FileReader();
          reader.onloadend = () => {
              setForm((prev) => ({
                  ...prev,
                  files: prev.files.map((f) =>
                      f === file ? { ...f, preview: reader.result } : f
                  )
              }));
          };
          reader.readAsDataURL(file);
      };

     useEffect(() => {
         form.files.forEach(createImagePreview);
     }, [form.files]);

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
        
        localStorage.clear(`formData_${tab}`);
    };

    return {
        handleRemoveFile,
        handleChange,
        handleSubmit,
        emailRegex,
        form,
        createImagePreview,
        setForm
    };
};
