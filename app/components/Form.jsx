import React from 'react'

const Form = () => {
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
                          <Image
                              src={redStar}
                              width={10}
                              height={10}
                              alt='svg'
                          />
                      </span>
                  </label>
                  <textarea
                      name='message'
                      placeholder='Write here...'
                      onChange={handleChange}
                      value={form?.message}
                      required
                  />
                  <button className='attach'>
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

              {!auth.logged && (
                  <div className='flex'>
                      <label htmlFor=''>
                          <p>Enter your email to receive an update</p>
                          <span>
                              <Image
                                  src={redStar}
                                  width={10}
                                  height={10}
                                  alt='svg'
                              />
                          </span>
                      </label>
                      <input
                          type='text'
                          name='email'
                          value={form.email}
                          onChange={handleChange}
                          className='report-issue-input'
                          placeholder='Enter your Email (optional)'
                      />
                  </div>
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
}

export default Form
