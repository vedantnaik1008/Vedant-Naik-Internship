import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import leftArrow from '@/public/left-arrow.png'
import { poppins } from '../page';
import { eye, Rocket } from '../data/QuestionsData.';
import information from '@/public/information.png';
import { inter } from '../layout';
import userProfile from '@/public/user-profile.png';
import likesImg from '@/public/Likes-img.png'
import message from '@/public/message.png';

const Answers = () => {
  return (
      <section className='main-container section'>
          <div className='section-container'>
              <Link href={'/'} className='back-to-questions Link'>
                  <Image src={leftArrow} alt='lefft-arrow' width={40} />
                  <p className={`${poppins.className}`}>Back to Questions</p>
              </Link>

              <div className='section-question-frame'>
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
                  <div className={`question-second-row ${poppins.className}`}>
                      <p>
                          A travel startup wants Amazon to pre-install their
                          personal travel agent bot on existing Amazon Echos.
                          What is the value of the partnership to the travel
                          startup?{' '}
                      </p>
                      <p>
                          Lorem ipsum dolor sit amet consectetur. Orci elementum
                          aliquet nec viverra tincidunt ? Amet ullamcorper velit
                          tristique scelerisque donec sed viverra arcu. Amet
                          arcu vitae sit scelerisque ultrices magna cursus se?{' '}
                      </p>
                  </div>
                  <div className={`question-third-row ${poppins.className}`}>
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
              <div className='section-answer-frame'>
                  <div className={`answers-sortby ${poppins.className}`}>
                      <p>Answers (23)</p>
                      <label htmlFor=''>
                          <p className={inter.className}>Sort By:</p>
                          <svg
                              className='down-arrow'
                              width='21'
                              height='9'
                              viewBox='0 0 21 9'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                  d='M0.919067 0.231445L10.9596 8.76876L21 0.231445H0.919067Z'
                                  fill='#2A2A2A'
                              />
                          </svg>

                          <select className={poppins.className}>
                              <option value='popular'>Popular</option>
                          </select>
                      </label>
                  </div>
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
                                  <svg
                                      width='20'
                                      height='20'
                                      viewBox='0 0 20 20'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                          d='M19.2 18.1H0.8C0.3575 18.1 0 18.4575 0 18.9V19.8C0 19.91 0.09 20 0.2 20H19.8C19.91 20 20 19.91 20 19.8V18.9C20 18.4575 19.6425 18.1 19.2 18.1ZM3.6425 16C3.6925 16 3.7425 15.995 3.7925 15.9875L7.9975 15.25C8.0475 15.24 8.095 15.2175 8.13 15.18L18.7275 4.5825C18.7507 4.55937 18.7691 4.5319 18.7816 4.50166C18.7942 4.47141 18.8006 4.43899 18.8006 4.40625C18.8006 4.37351 18.7942 4.34109 18.7816 4.31084C18.7691 4.2806 18.7507 4.25313 18.7275 4.23L14.5725 0.0725C14.525 0.025 14.4625 0 14.395 0C14.3275 0 14.265 0.025 14.2175 0.0725L3.62 10.67C3.5825 10.7075 3.56 10.7525 3.55 10.8025L2.8125 15.0075C2.78818 15.1414 2.79687 15.2793 2.83782 15.4091C2.87877 15.5389 2.95074 15.6568 3.0475 15.7525C3.2125 15.9125 3.42 16 3.6425 16Z'
                                          fill='#0F0F0F'
                                      />
                                  </svg>
                              </span>
                              <p>Edit</p>
                          </div>
                      </div>
                      <p className='user-answer'>
                          Lorem ipsum dolor sit amet consectetur. Elit et ut at
                          vestibulum enim ornare feugi vitae. Eget proin aliquam
                          blandit eget vitae erat fermentum lacus. Dignissim
                          done mi vel fermentum. Id ultrices risus sit pel sit
                          elit morbi. Mi sed mauris aenean odio egestas
                          ullamcorper. Dignissim in vel fusce id. Sit blandit
                          diam ridiculus ipsum{' '}
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
                              <input type='text' placeholder='Add a comment' />
                              <button className={poppins.className}>
                                  Post
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Answers
