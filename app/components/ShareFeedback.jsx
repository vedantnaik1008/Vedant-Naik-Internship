'use client';
import React, { useContext, useState } from 'react';
import { poppins } from '../page';
import { MyContext } from '../Provider/contextProvider';
import attach from '@/public/svg/attach.svg';
import Image from 'next/image';
const ShareFeedback = () => {
    const { click, optionClick, auth, setAuth, setClick, setOptionClick } =
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

     if (form.submit === true && auth.logged) {
         setForm((prev) => ({
             ...prev,
             submitMessage: 'Thanks for your valuable feedback!'
         }));
     }

     setClick(() => !click);
     setOptionClick(false);

     if (click === false) {
         setForm({
             email: '',
             emailError: false,
             emailErrorMessage: '',
             phoneNumber: 0,
             name: '',
             message: '',
             submit: false,
             submitMessage: ''
         });
     }
 };
const disabledLoggedOutState = !auth.logged
    ? form.message.length === 0 || !emailRegex.test(form.email)
    : form.message.length === 0;
    return (
        <form
            onSubmit={handleSubmit}
            className={`${poppins.className} form-parent ${
                optionClick ? 'form-show' : 'form-close'
            }`}>
            <h2>
                Let us know your <span>Feedback</span> about us!
            </h2>
            <hr />
            <div className={`form-container`}>
                <div className='flex'>
                    <textarea
                        name='message'
                        id=''
                        placeholder='Write here...'
                        onChange={handleChange}
                        value={form.message}
                        required></textarea>
                    <button className='attach-sharefeedback'>
                        <span>
                            <Image
                                src={attach}
                                width={10}
                                height={20}
                                alt='svg'
                            />
                        </span>
                        <p>Attach</p>
                    </button>
                </div>
                {auth.logged && (
                    <label htmlFor='' className='anonymous'>
                        <input type='checkbox' name='' id='' required /> Send
                        feedback anonymously
                    </label>
                )}
                {!auth.logged && (
                    <div className='flex'>
                        <label htmlFor=''>
                            <p>Enter your email to receive an update</p>
                        </label>
                        <input
                            type='text'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            className='report-issue-input'
                            placeholder='Enter your Email'
                            required
                        />
                    </div>
                )}
                {auth.logged && !form.emailError && (
                    <p className='error'>{form.emailErrorMessage}</p>
                )}
                <div className='submit-buttons'>
                    <button
                        type='button'
                        onClick={() =>
                            setAuth((prev) => ({
                                ...prev,
                                logged: !auth.logged
                            }))
                        }>
                        {auth.logged ? 'Logout' : 'Login'}
                    </button>
                    <button
                        disabled={disabledLoggedOutState}
                        onClick={() => {
                            setForm((prev) => ({ ...prev, submit: true }));
                            setAuth((prev) => ({
                                ...prev,
                                submitEvent: {
                                    submitMessage: form.submitMessage,
                                    fireSubmit: form.submit
                                }
                            }));
                        }}
                        type='submit'>
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ShareFeedback;
