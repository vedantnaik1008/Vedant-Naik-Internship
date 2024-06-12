'use client';
import { useContext } from 'react';
import { poppins } from '../page';
import { MyContext } from '../Provider/contextProvider';
import { useEmail } from '../hooks/useEmail';
import SubmitButton from './submitButton';
import Input from './Input';
import Textarea from './Textarea';

const ReportIssue = () => {
    const { optionClick, auth, setAuth } = useContext(MyContext);
    const { handleChange, handleSubmit, emailRegex, form, setForm } = useEmail();

    const disabledLoggedOutState = !auth.logged
        ? form.message.length === 0 || !emailRegex.test(form.email)
        : form.message.length === 0;
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
                        <option value='Interview questions'>
                            Interview Questions
                        </option>
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
                    handleChange={handleChange}
                    value={form.message}
                    require={true}
                    requireLabelName={true}
                    className={'attach'}
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