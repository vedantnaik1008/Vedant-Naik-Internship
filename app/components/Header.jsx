import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import userProfile from '@/public/svg/user-profile.svg';
import { inter } from '../layout';

const montserrat = Montserrat({ subsets: ['latin'] });

const Header = () => {
    return (
        <header>
            <div className={`header-title ${montserrat.className}`}>
                <span className=''>THE</span>
                <span className=''>PRODUCT</span>
                <span className=''>PLATFORM</span>
            </div>
            <nav>
                <ul className={inter.className}>
                    <li>
                        <p>Learn</p>
                        <span>
                            <svg
                                width='21'
                                height='13'
                                viewBox='0 0 21 13'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M2.7395 2L10.4034 10L18.3698 2'
                                    stroke='#FEFEFE'
                                    stroke-opacity='0.5'
                                    stroke-width='4'
                                    stroke-linecap='round'
                                />
                            </svg>
                        </span>
                    </li>
                    <li>
                        <p>Practice</p>
                        <span>
                            <svg
                                width='21'
                                height='13'
                                viewBox='0 0 21 13'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M2.7395 2L10.4034 10L18.3698 2'
                                    stroke='#FEFEFE'
                                    stroke-opacity='0.5'
                                    stroke-width='4'
                                    stroke-linecap='round'
                                />
                            </svg>
                        </span>
                    </li>
                    <li>
                        <Image
                            src={userProfile}
                            alt='user-profile'
                            width={30}
                            height={30}
                        />
                    </li>
                </ul>
            </nav>
            <Image
                src={userProfile}
                alt='user-profile'
                width={30}
                height={30}
                className='user-img'
            />
        </header>
    );
};

export default Header;
