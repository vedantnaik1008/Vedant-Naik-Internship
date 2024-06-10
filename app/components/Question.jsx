import { Hind } from 'next/font/google';
import { questions } from '../data/QuestionsData.';
import Image from 'next/image';
import mobile_down_arrow from '@/public/svg/mobile-down-arrow.svg'
import filter_svg from '@/public/svg/filter-svg.svg';
const hind = Hind({ subsets: ['latin'], weight: '400' });

const Question = () => {
    return (
        <section className='question-section'>
            <h2>Practice Interview Questions</h2>
            <div className='question-filter-box'>
                <div className='question-filter-box-flex'>
                    <h3 className={`${hind.className}`}>
                        Embark on an Exploration: 800 Questions Await!
                    </h3>
                    <button>
                        <span>
                            <Image
                                src={filter_svg}
                                alt='svg'
                                width={13}
                                height={20}
                            />
                            
                        </span>
                        <p>FILTERS</p>
                    </button>
                </div>
                <div className='option-container'>
                    <div className='box'>
                        <div className='icon'>
                            <div className='bar'>
                                <span className='bar-line'></span>
                                <span className='bar-line'></span>
                                <span className='bar-line'></span>
                            </div>{' '}
                            <p>Popular</p>
                        </div>
                        <span className='box-svg'>
                            <Image
                                src={mobile_down_arrow}
                                alt='svg'
                                width={10}
                                height={5}
                            />
                        </span>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <p>Complexity</p>
                        </div>
                        <span className='box-svg'>
                            <Image
                                src={mobile_down_arrow}
                                alt='svg'
                                width={10}
                                height={5}
                            />
                        </span>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <p>Industry Type</p>
                        </div>
                        <span className='box-svg'>
                            <Image
                                src={mobile_down_arrow}
                                alt='svg'
                                width={10}
                                height={5}
                            />
                        </span>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <p>Industry</p>
                        </div>
                        <span className='box-svg'>
                            <Image
                                src={mobile_down_arrow}
                                alt='svg'
                                width={10}
                                height={5}
                            />
                        </span>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <p>Company Type</p>
                        </div>
                        <span className='box-svg'>
                            <Image
                                src={mobile_down_arrow}
                                alt='svg'
                                width={10}
                                height={5}
                            />
                        </span>
                    </div>
                </div>
                <hr />
                <div className='question-container'>
                    {questions.map((value) => (
                        <div className='question-cards' key={value.id}>
                            <div className='first-row'>
                                <h4>{value.date}</h4>
                                <div className='category'>
                                    <Image
                                        src={value.category.image}
                                        width={25}
                                        height={25}
                                        alt='rocket-icon'
                                    />
                                    <p>{value.category.text}</p>
                                </div>
                            </div>
                            <div className='second-row'>
                                <p>{value.paragraph}</p>
                                <div className='role-level'>
                                    <div className={`role ${hind.className}`}>
                                        {value.role.map((item) => (
                                            <button key={item}>{item}</button>
                                        ))}
                                    </div>
                                    <button className='level'>
                                        {value.complexity}
                                    </button>
                                </div>
                            </div>
                            <div className='third-row'>
                                <div href={'/answers'}>
                                    <div className='flex'>
                                        <Image
                                            src={value.comment.image}
                                            width={14.71}
                                            height={14.13}
                                            alt='comment'
                                        />{' '}
                                        <p>{value.comment.text}</p>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <Image
                                        src={value.Views.image}
                                        width={15.88}
                                        height={10}
                                        alt='eye'
                                    />{' '}
                                    <p>{value.Views.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Question;
