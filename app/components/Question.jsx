import { Hind } from 'next/font/google';
import { questions } from '../data/QuestionsData.';
import Image from 'next/image';
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
                            <svg
                                width='13'
                                height='20'
                                viewBox='0 0 13 20'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M3.95833 2.36832C3.74837 2.36832 3.54701 2.47978 3.39854 2.67816C3.25007 2.87655 3.16667 3.14562 3.16667 3.42619C3.16667 3.70675 3.25007 3.97582 3.39854 4.17421C3.54701 4.3726 3.74837 4.48405 3.95833 4.48405C4.1683 4.48405 4.36966 4.3726 4.51813 4.17421C4.66659 3.97582 4.75 3.70675 4.75 3.42619C4.75 3.14562 4.66659 2.87655 4.51813 2.67816C4.36966 2.47978 4.1683 2.36832 3.95833 2.36832ZM1.71792 2.36832C1.88148 1.74891 2.18479 1.21253 2.58606 0.833137C2.98732 0.45374 3.46678 0.25 3.95833 0.25C4.44989 0.25 4.92934 0.45374 5.33061 0.833137C5.73187 1.21253 6.03519 1.74891 6.19875 2.36832H11.875C12.085 2.36832 12.2863 2.47978 12.4348 2.67816C12.5833 2.87655 12.6667 3.14562 12.6667 3.42619C12.6667 3.70675 12.5833 3.97582 12.4348 4.17421C12.2863 4.3726 12.085 4.48405 11.875 4.48405H6.19875C6.03519 5.10347 5.73187 5.63984 5.33061 6.01924C4.92934 6.39863 4.44989 6.60237 3.95833 6.60237C3.46678 6.60237 2.98732 6.39863 2.58606 6.01924C2.18479 5.63984 1.88148 5.10347 1.71792 4.48405H0.791667C0.581704 4.48405 0.38034 4.3726 0.231874 4.17421C0.0834076 3.97582 0 3.70675 0 3.42619C0 3.14562 0.0834076 2.87655 0.231874 2.67816C0.38034 2.47978 0.581704 2.36832 0.791667 2.36832H1.71792ZM8.70833 8.71551C8.49837 8.71551 8.29701 8.82696 8.14854 9.02535C8.00007 9.22374 7.91667 9.49281 7.91667 9.77337C7.91667 10.0539 8.00007 10.323 8.14854 10.5214C8.29701 10.7198 8.49837 10.8312 8.70833 10.8312C8.91829 10.8312 9.11966 10.7198 9.26812 10.5214C9.41659 10.323 9.5 10.0539 9.5 9.77337C9.5 9.49281 9.41659 9.22374 9.26812 9.02535C9.11966 8.82696 8.91829 8.71551 8.70833 8.71551ZM6.46792 8.71551C6.63148 8.0961 6.93479 7.55972 7.33606 7.18032C7.73732 6.80093 8.21678 6.59719 8.70833 6.59719C9.19989 6.59719 9.67934 6.80093 10.0806 7.18032C10.4819 7.55972 10.7852 8.0961 10.9487 8.71551H11.875C12.085 8.71551 12.2863 8.82696 12.4348 9.02535C12.5833 9.22374 12.6667 9.49281 12.6667 9.77337C12.6667 10.0539 12.5833 10.323 12.4348 10.5214C12.2863 10.7198 12.085 10.8312 11.875 10.8312H10.9487C10.7852 11.4507 10.4819 11.987 10.0806 12.3664C9.67934 12.7458 9.19989 12.9496 8.70833 12.9496C8.21678 12.9496 7.73732 12.7458 7.33606 12.3664C6.93479 11.987 6.63148 11.4507 6.46792 10.8312H0.791667C0.581704 10.8312 0.38034 10.7198 0.231874 10.5214C0.0834076 10.323 0 10.0539 0 9.77337C0 9.49281 0.0834076 9.22374 0.231874 9.02535C0.38034 8.82696 0.581704 8.71551 0.791667 8.71551H6.46792ZM3.95833 15.0627C3.74837 15.0627 3.54701 15.1742 3.39854 15.3725C3.25007 15.5709 3.16667 15.84 3.16667 16.1206C3.16667 16.4011 3.25007 16.6702 3.39854 16.8686C3.54701 17.067 3.74837 17.1784 3.95833 17.1784C4.1683 17.1784 4.36966 17.067 4.51813 16.8686C4.66659 16.6702 4.75 16.4011 4.75 16.1206C4.75 15.84 4.66659 15.5709 4.51813 15.3725C4.36966 15.1742 4.1683 15.0627 3.95833 15.0627ZM1.71792 15.0627C1.88148 14.4433 2.18479 13.9069 2.58606 13.5275C2.98732 13.1481 3.46678 12.9444 3.95833 12.9444C4.44989 12.9444 4.92934 13.1481 5.33061 13.5275C5.73187 13.9069 6.03519 14.4433 6.19875 15.0627H11.875C12.085 15.0627 12.2863 15.1742 12.4348 15.3725C12.5833 15.5709 12.6667 15.84 12.6667 16.1206C12.6667 16.4011 12.5833 16.6702 12.4348 16.8686C12.2863 17.067 12.085 17.1784 11.875 17.1784H6.19875C6.03519 17.7978 5.73187 18.3342 5.33061 18.7136C4.92934 19.093 4.44989 19.2967 3.95833 19.2967C3.46678 19.2967 2.98732 19.093 2.58606 18.7136C2.18479 18.3342 1.88148 17.7978 1.71792 17.1784H0.791667C0.581704 17.1784 0.38034 17.067 0.231874 16.8686C0.0834076 16.6702 0 16.4011 0 16.1206C0 15.84 0.0834076 15.5709 0.231874 15.3725C0.38034 15.1742 0.581704 15.0627 0.791667 15.0627H1.71792Z'
                                    fill='#2A2A2A'
                                />
                            </svg>
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
                            <svg
                                width='10'
                                height='5'
                                viewBox='0 0 10 5'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M0 0L5 5L10 0L0 0Z' fill='#2A2A2A' />
                            </svg>
                        </span>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <p>Complexity</p>
                        </div>
                        <span className='box-svg'>
                            <svg
                                width='10'
                                height='5'
                                viewBox='0 0 10 5'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M0 0L5 5L10 0L0 0Z' fill='#2A2A2A' />
                            </svg>
                        </span>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <p>Industry Type</p>
                        </div>
                        <span className='box-svg'>
                            <svg
                                width='10'
                                height='5'
                                viewBox='0 0 10 5'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M0 0L5 5L10 0L0 0Z' fill='#2A2A2A' />
                            </svg>
                        </span>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <p>Industry</p>
                        </div>
                        <span className='box-svg'>
                            <svg
                                width='10'
                                height='5'
                                viewBox='0 0 10 5'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M0 0L5 5L10 0L0 0Z' fill='#2A2A2A' />
                            </svg>
                        </span>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <p>Company Type</p>
                        </div>
                        <span className='box-svg'>
                            <svg
                                width='10'
                                height='5'
                                viewBox='0 0 10 5'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M0 0L5 5L10 0L0 0Z' fill='#2A2A2A' />
                            </svg>
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
