'use client'
import React, { useContext, useState } from 'react'
import { poppins } from '../page';
import { MyContext } from '../Provider/contextProvider';
const ReportIssue = () => {
    const { click, setClick, optionClick, setOptionClick } =
        useContext(MyContext);
        const [auth, setAuth] = useState({
            logged: false,
            email: '',
            emailError: ''
        })
        const [message, setMessage] = useState('')

        const handleChange = (e) => {
            setAuth((prev)=> ({...prev, [e.target.name]: e.target.value}))
        }

       const handleSubmit = (e) => {
           let emailErrorB = false;
           e.preventDefault();
           if (auth.logged && auth.email.length === 0 && message.length === 0)
               return;
           if (
               !auth.logged &&
               auth.email.trim().length > 0 &&
               message.length > 0
           ) {
               const emailRegex =
                   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
               console.log(message);
               if (emailRegex.test(auth.email)) {
                   console.log(auth.email);
                   emailErrorB = false;
                   setAuth((prev) => ({
                       ...prev,
                       emailError: ''
                   }));
               } else {
                   emailErrorB = true;

                   setAuth((prev) => ({
                       ...prev,
                       emailError: 'invalid email'
                   }));
               }
           }
           if (click === false) {
               setAuth((prev) => ({ ...prev, email: '' }));
               setMessage('');
           }
       };


const disabledLoggedOutState = auth.email.length === 0 || message.length === 0;
  return (
      <form
          onSubmit={handleSubmit}
          className={`${poppins.className} form-parent  ${
              optionClick ? 'form-show' : 'form-close'
          }`}>
          <h2>
              Let us know about the <span>Issue</span> you are facing right now!
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

              <div className='flex'>
                  <label htmlFor=''>
                      <p>Describe the issue in detail</p>{' '}
                      <span>
                          <svg
                              width='10'
                              height='10'
                              viewBox='0 0 10 10'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                  d='M5.00013 1V9M8.46413 3L1.53613 7M1.53613 3L8.46413 7'
                                  stroke='#FD443A'
                                  stroke-width='1.33333'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                              />
                          </svg>
                      </span>
                  </label>
                  <textarea
                      name='message'
                      placeholder='Write here...'
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      required
                  />
                  <button className='attach'>
                      <span>
                          <svg
                              width='10'
                              height='20'
                              viewBox='0 0 10 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                  d='M8.74968 5.62309V14.4398C8.74968 16.1814 7.47468 17.7314 5.74134 17.8981C5.2783 17.9444 4.8107 17.893 4.36874 17.7473C3.92678 17.6016 3.5203 17.3648 3.17554 17.0523C2.83078 16.7397 2.55542 16.3583 2.36723 15.9327C2.17904 15.5071 2.08222 15.0468 2.08301 14.5814V4.28142C2.08301 3.18975 2.86634 2.19809 3.94968 2.08975C4.2402 2.05937 4.53387 2.09043 4.81162 2.18091C5.08937 2.27138 5.34499 2.41926 5.56188 2.61493C5.77877 2.81061 5.95209 3.0497 6.07058 3.3167C6.18907 3.5837 6.25009 3.87264 6.24968 4.16475V12.9148C6.24968 13.3731 5.87468 13.7481 5.41634 13.7481C4.95801 13.7481 4.58301 13.3731 4.58301 12.9148V5.62309C4.58301 5.28142 4.29968 4.99809 3.95801 4.99809C3.61634 4.99809 3.33301 5.28142 3.33301 5.62309V12.7981C3.33301 13.8898 4.11634 14.8814 5.19968 14.9898C5.4902 15.0201 5.78387 14.9891 6.06162 14.8986C6.33937 14.8081 6.59499 14.6602 6.81188 14.4646C7.02877 14.2689 7.20209 14.0298 7.32058 13.7628C7.43907 13.4958 7.50009 13.2069 7.49968 12.9148V4.30642C7.49968 2.56475 6.22468 1.01475 4.49134 0.848085C4.02843 0.802477 3.56109 0.854309 3.11942 1.00024C2.67775 1.14618 2.27153 1.38298 1.92691 1.69541C1.5823 2.00784 1.30693 2.38897 1.11852 2.81427C0.93012 3.23956 0.832861 3.6996 0.833008 4.16475V14.3898C0.833008 16.7814 2.58301 18.9231 4.96634 19.1481C7.70801 19.3981 9.99968 17.2648 9.99968 14.5814V5.62309C9.99968 5.28142 9.71634 4.99809 9.37468 4.99809C9.03301 4.99809 8.74968 5.28142 8.74968 5.62309Z'
                                  fill='#333333'
                              />
                          </svg>
                      </span>
                      <p>Attach</p>
                  </button>
              </div>

              {!auth.logged && (
                  <div className='flex'>
                      <label htmlFor=''>
                          <p>Enter your email to receive an update</p>
                          <span>
                              <svg
                                  width='10'
                                  height='10'
                                  viewBox='0 0 10 10'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'>
                                  <path
                                      d='M5.00013 1V9M8.46413 3L1.53613 7M1.53613 3L8.46413 7'
                                      stroke='#FD443A'
                                      stroke-width='1.33333'
                                      stroke-linecap='round'
                                      stroke-linejoin='round'
                                  />
                              </svg>
                          </span>
                      </label>
                      <input
                          type='text'
                          name='email'
                          value={auth.email}
                          onChange={handleChange}
                          className='report-issue-input'
                          placeholder='Enter your Email (optional)'
                      />
                  </div>
              )}
              {auth.emailError && <p className='error'>{auth.emailError}</p>}
              <button disabled={disabledLoggedOutState} type='submit'>
                  Submit
              </button>
          </div>
      </form>
  );
}

export default ReportIssue
