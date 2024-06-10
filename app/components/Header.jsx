import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import userProfile from '@/public/svg/user-profile.svg';
import headerDown from '@/public/svg/header-down-arrow.svg';
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
                            <Image
                                src={headerDown}
                                alt='svg'
                                width={21}
                                height={13}
                            />
                        </span>
                    </li>
                    <li>
                        <p>Practice</p>
                        <span>
                            <Image
                                src={headerDown}
                                alt='svg'
                                width={21}
                                height={13}
                            />
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
