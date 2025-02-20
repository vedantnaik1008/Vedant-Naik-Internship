'use client';
import { useContext, useEffect, useState } from 'react';
import { poppins } from '../page';
import { MyContext } from '../Provider/contextProvider';
// import { useEmail } from '../hooks/useEmail';
import SubmitButton from './SubmitButton';
import Input from './Input';
import Textarea from './Textarea';
import { getCurrentTabMessage } from '../utils/CurrentTab';
const ContactUs = () => {
    // const { optionClick, auth, setAuth } = useContext(MyContext);

    // const {
    //     handleRemoveFile, handleChange,
    //     handleSubmit,
    //     emailRegex,
    //     form,
    //     setForm
    // } = useEmail();
    const { click, auth, setAuth, setClick, setOptionClick, optionClick, tab } =
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
    
        // useEffect(() => {
        //     const storedData = localStorage.getItem(`formData_${tab}`);
        //     if (storedData) {
        //         const parsedData = JSON.parse(storedData);
        //         setForm(parsedData);
        //     }
        // }, []);
    
        // useEffect(() => {
        //     localStorage.setItem(`formData_${tab}`, JSON.stringify(form));
        // }, [form, tab]);
        
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
            // localStorage.setItem(`formData_${tab}`, JSON.stringify(form));
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
            
            // localStorage.clear(`formData_${tab}`);
        };

    const disabledLoggedOutState = !auth.logged
        ? form.name.length === 0 ||
          form.phoneNumber.toString().length <= 9 ||
          form?.message.length === 0 ||
          !emailRegex.test(form.email)
        : form.name.length === 0 || form?.message.length === 0;

    return (
        <form
            onSubmit={handleSubmit}
            className={`${poppins.className} form-parent  ${
                optionClick ? 'form-show' : 'form-close'
            }`}>
            <h2>
                Let us know what <span>your queries</span> are!
            </h2>
            <hr />
            <div className={`form-container`}>
                {!auth.logged ? (
                    <Input
                        redAsterix={true}
                        type={'text'}
                        labelName={'Your Name'}
                        className={'contact-input'}
                        placeholder={'Enter your Name'}
                        name={'name'}
                        handleChange={handleChange}
                        value={form.name}
                        require={true}
                    />
                ) : (
                    <Input
                        redAsterix={false}
                        type={'text'}
                        labelName={'Your Name'}
                        className={'contact-input'}
                        placeholder={'Enter your Name'}
                        name={'name'}
                        handleChange={handleChange}
                        value={form.name}
                        require={true}
                    />
                )}

                {!auth.logged && (
                    <Input
                        redAsterix={false}
                        type={'text'}
                        labelName={'Your Email'}
                        className={'report-issue-input'}
                        placeholder={'Enter your Email'}
                        name={'email'}
                        handleChange={handleChange}
                        value={form.email}
                        require={false}
                    />
                )}
                {auth.logged && !form.emailError && (
                    <p className='error'>{form.emailErrorMessage}</p>
                )}
                {!auth.logged && (
                    <Input
                        redAsterix={true}
                        type={'tel'}
                        labelName={'Your Mobile Number'}
                        className={'contact-input'}
                        placeholder={'Enter your number'}
                        name={'phoneNumber'}
                        handleChange={handleChange}
                        value={Number(form.phoneNumber)}
                        require={true}
                    />
                )}
                <Textarea
                    redAsterix={true}
                    labelName={'What would you like to ask?'}
                    placeholder={'Write here...'}
                    name={'message'}
                    handleChange={handleChange}
                    handleRemoveFile={handleRemoveFile}
                    value={form?.message}
                    form={form}
                    require={true}
                    requireLabelName={true}
                    className={'attach'}
                    createImagePreview={createImagePreview}
                />
                <SubmitButton
                    disabledLoggedOutState={disabledLoggedOutState}
                    setForm={setForm}
                    setAuth={setAuth}
                    form={form}
                />
            </div>
        </form>
    );
};

export default ContactUs;