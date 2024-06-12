'use client';
import { useContext } from 'react';
import { poppins } from '../page';
import { MyContext } from '../Provider/contextProvider';
import { useEmail } from '../hooks/useEmail';
import SubmitButton from './SubmitButton';
import Input from './Input';
import Textarea from './Textarea';
const ContactUs = () => {
    const { optionClick, auth, setAuth } = useContext(MyContext);

    const { handleChange, handleSubmit, emailRegex, form, setForm } =
        useEmail();

    const disabledLoggedOutState = !auth.logged
        ? form.name.length === 0 ||
          form.phoneNumber.toString().length <= 9 ||
          form.message.length === 0 ||
          !emailRegex.test(form.email)
        : form.name.length === 0 || form.message.length === 0;

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
                    value={form.message}
                    require={true}
                    requireLabelName={true}
                    className={'attach'}
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