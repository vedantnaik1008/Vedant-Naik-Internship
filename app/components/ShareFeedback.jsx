'use client';
import { useContext } from 'react';
import { poppins } from '../page';
import { MyContext } from '../Provider/contextProvider';
import { useEmail } from '../hooks/useEmail';
import SubmitButton from './submitButton';
import Input from './Input';
import Textarea from './Textarea';

const ShareFeedback = () => {
    const { optionClick, auth, setAuth } = useContext(MyContext);
    const { handleChange, handleSubmit, emailRegex, form, setForm } =
        useEmail();
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
                <Textarea
                    redAsterix={false}
                    labelName={''}
                    placeholder={'Write here...'}
                    name={'message'}
                    handleChange={handleChange}
                    value={form.message}
                    require={true}
                    requireLabelName={false}
                    className={'attach-sharefeedback'}
                />
                {auth.logged && (
                    <label htmlFor='' className='anonymous'>
                        <input type='checkbox' name='' id='' required /> Send
                        feedback anonymously
                    </label>
                )}
                {!auth.logged && (
                    <Input
                        redAsterix={false}
                        type={'text'}
                        labelName={'Enter your email to receive an update'}
                        className={'report-issue-input'}
                        placeholder={'Enter your Email'}
                        name={'email'}
                        handleChange={handleChange}
                        value={form.email}
                        require={true}
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

export default ShareFeedback;