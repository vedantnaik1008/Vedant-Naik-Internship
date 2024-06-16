'use client';
import fab_mobile_svg from '@/public/svg/fab-mobile-star-hand.svg';
import fab_desktop_svg from '@/public/svg/fab-desktop-svg.svg';
import close_form from '@/public/svg/close-form.svg';
import Image from 'next/image';
import { useEmail } from '../hooks/useEmail';
import { useContext, useEffect } from 'react';
import { MyContext } from '../Provider/contextProvider';

const FabButton = ({ click, setClick, setOptionClick }) => {
    const { form, setForm } = useEmail();
    const { setAuth, auth } = useContext(MyContext);

    useEffect(() => {
        let timer;
        if (auth.logged && auth.submitEvent) {
            timer = setTimeout(() => {
                setAuth((prev) => ({ ...prev, submitEvent: false }));
            }, 3000);
            if (timer) {
                return () => clearTimeout(timer);
            }
        }
    }, [auth.logged, auth.submitEvent]);

    const currentTabMessage = auth.logged && auth.submitEvent;
    console.log(
        `currentTabMessage, auth.logged: ${auth.logged} && auth.submitEvent: ${auth.submitEvent} && ${auth.submitMessage}`
    );

    return (
        <div className='fab-messages'>
            {currentTabMessage && <p>{auth.submitMessage}</p>}
            <button
                className={`fab-mobile ${
                    !click
                        ? 'fab-mobile-bgcolor-open'
                        : 'fab-mobile-bgcolor-close'
                } `}
                onClick={() => {
                    setOptionClick(false);
                    setClick(!click);
                }}>
                {!click ? (
                    <>
                        <Image
                            className='fab-mobile-svg'
                            src={fab_mobile_svg}
                            width={26}
                            height={26}
                            alt='svg'
                        />
                        <Image
                            className='fab-desktop-svg'
                            src={fab_desktop_svg}
                            width={76}
                            height={76}
                            alt='svg'
                        />
                    </>
                ) : (
                    <>
                        <Image
                            src={close_form}
                            width={32}
                            height={32}
                            alt='svg'
                        />
                    </>
                )}
            </button>
        </div>
    );
};

export default FabButton;
