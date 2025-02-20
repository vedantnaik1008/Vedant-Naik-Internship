'use client';
import { useContext, useEffect, useState } from 'react';
import { poppins } from '../page';
import { MyContext } from '../Provider/contextProvider';
// import { useEmail } from '../hooks/useEmail';
import SubmitButton from './SubmitButton';
import Input from './Input';
import Textarea from './Textarea';
import { getCurrentTabMessage } from '../utils/CurrentTab';

const ReportIssue = () => {
    // const { optionClick, auth, setAuth } = useContext(MyContext);
    // const {
    //     handleRemoveFile,
    //     handleChange,
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
        ? form?.message.length === 0 || !emailRegex.test(form.email)
        : form?.message.length === 0;
    return (
        <form
            onSubmit={handleSubmit}
            className={`${poppins.className} form-parent  ${
                optionClick ? 'form-show' : 'form-close'
            }`}>
            <h2>
                Let us know about the <span>Issue</span> you are facing right
                now!
            </h2>
            <hr />
            <div className={`form-container`}>
                <div className='flex'>
                    <label htmlFor=''>Choose a section</label>
                    <select>
                        <option value=''></option>
                        <option value='Concept cards'>Concept cards</option>
                        <option value='Interview Questions'>
                            Interview Questions
                        </option>
                        <option value='Practice Questions'>
                            Practice Questions
                        </option>
                        <option value='Quizzes'>Quizzes</option>
                    </select>
                </div>

                <Textarea
                    redAsterix={true}
                    labelName={'Describe the issue in detail'}
                    placeholder={'Write here...'}
                    name={'message'}
                    form={form}
                    handleChange={handleChange}
                    handleRemoveFile={handleRemoveFile}
                    value={form?.message}
                    require={true}
                    requireLabelName={true}
                    className={'attach'}
                    createImagePreview={createImagePreview}
                />

                {!auth.logged && (
                    <Input
                        redAsterix={true}
                        type={'text'}
                        labelName={'Enter your email to receive an update'}
                        className={'report-issue-input'}
                        placeholder={'Enter your Email (optional)'}
                        name={'email'}
                        handleChange={handleChange}
                        value={form.email}
                        require={false}
                    />
                )}
                {auth.logged && !form.emailError && (
                    <p className='error'>{form.emailErrorMessage}</p>
                )}
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

export default ReportIssue;