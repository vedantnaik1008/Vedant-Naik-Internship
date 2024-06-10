'use client'

import Image from 'next/image';
import React, { useContext } from 'react'
import leftArrow from '@/public/left-arrow.png'
import { poppins } from '../page';
import { eye, Rocket } from '../data/QuestionsData.';
import information from '@/public/information.png';
import { inter } from '../layout';
import userProfile from '@/public/user-profile.png';
import likesImg from '@/public/Likes-img.png'
import message from '@/public/message.png';
import { MyContext } from '../Provider/contextProvider';
import downArrrow from '@/public/svg/down-arrow.svg'
import edit from '@/public/svg/edit.svg';

const Answers = () => {
    const { click, auth } = useContext(MyContext);
  return (
      <section className='main-container section'>
          <div className='section-container'>
              <div href={'/'} className='back-to-questions'>
                  <Image src={leftArrow} alt='lefft-arrow' width={40} />
                  <p className={`${poppins.className}`}>Back to Questions</p>
              </div>

              <div className='answer-container-flex'>
                  <div
                      className={`section-question-frame ${
                          click ? 'question-frame-margin' : ''
                      }`}>
                      <div className='question-first-row'>
                          <div className={`question-row ${inter.className}`}>
                              <button>Design</button>
                              <button>Technology</button>
                          </div>
                          <div className='category'>
                              <Image
                                  src={Rocket}
                                  width={50}
                                  height={50}
                                  alt='rocket-icon'
                              />
                              <p className={poppins.className}>Startup</p>
                          </div>
                      </div>
                      <div
                          className={`question-second-row ${poppins.className}`}>
                          <p>
                              A travel startup wants Amazon to pre-install their
                              personal travel agent bot on existing Amazon
                              Echos. What is the value of the partnership to the
                              travel startup?{' '}
                          </p>
                          <p>
                              Lorem ipsum dolor sit amet consectetur. Orci
                              elementum aliquet nec viverra tincidunt ? Amet
                              ullamcorper velit tristique scelerisque donec sed
                              viverra arcu. Amet arcu vitae sit scelerisque
                              ultrices magna cursus se?{' '}
                          </p>
                      </div>
                      <div
                          className={`question-third-row ${poppins.className}`}>
                          <div className='flex'>
                              <Image
                                  src={eye}
                                  width={23.82}
                                  height={15}
                                  alt='eye'
                              />{' '}
                              <p>100 Views</p>
                          </div>
                          <div className='flex'>
                              <Image
                                  src={information}
                                  width={22}
                                  height={22}
                                  alt='information'
                              />{' '}
                              <p>How should you word your answer?</p>
                          </div>
                      </div>
                  </div>

                  <div
                      className={`answers-sortby ${poppins.className} ${
                          click ? 'answer-sortby-order' : ''
                      }`}>
                      <p>Answers (23)</p>
                      <label htmlFor=''>
                          <p className={inter.className}>Sort By:</p>
                          <Image
                              className='down-arrow'
                              src={downArrrow}
                              alt='svg'
                              width={21}
                              height={9}
                          />
                          <select className={poppins.className}>
                              <option value='popular'>Popular</option>
                          </select>
                      </label>
                  </div>

                  <div className='section-answer-frame'>
                      <div className={`user-answer-frame ${poppins.className}`}>
                          <div className='user'>
                              <div className='user-profile'>
                                  <Image
                                      src={userProfile}
                                      alt='user-profile'
                                      width={60}
                                      height={60}
                                  />
                                  <div className='user-info'>
                                      <h3>
                                          Neha Bhat <span>{'(You)'}</span>
                                      </h3>
                                      <p>Jun 27, 2023</p>
                                  </div>
                              </div>
                              <div className='edit'>
                                  <span>
                                      <Image
                                          src={edit}
                                          alt='svg'
                                          width={20}
                                          height={20}
                                      />
                                  </span>
                                  <p>Edit</p>
                              </div>
                          </div>
                          <p className='user-answer'>
                              Lorem ipsum dolor sit amet consectetur. Elit et ut
                              at vestibulum enim ornare feugi vitae. Eget proin
                              aliquam blandit eget vitae erat fermentum lacus.
                              Dignissim done mi vel fermentum. Id ultrices risus
                              sit pel sit elit morbi. Mi sed mauris aenean odio
                              egestas ullamcorper. Dignissim in vel fusce id.
                              Sit blandit diam ridiculus ipsum{' '}
                              <span>
                                  interdum ut velit quam. Bibendum amet mi....
                              </span>{' '}
                              <span>Show more</span>
                          </p>
                          <div className='comment-frame'>
                              <div className='upvote'>
                                  <Image
                                      src={likesImg}
                                      alt='like-emoji'
                                      width={25}
                                      height={25}
                                  />
                                  <p>Like</p>
                              </div>
                              <div className='comment-box'>
                                  <Image
                                      src={message}
                                      alt='message'
                                      width={25}
                                      height={25}
                                  />
                                  <input
                                      type='text'
                                      placeholder='Add a comment'
                                  />
                                  <button className={poppins.className}>
                                      Post
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Answers
