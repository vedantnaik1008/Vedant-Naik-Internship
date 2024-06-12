'use client';
import fab_mobile_svg from '@/public/svg/fab-mobile-star-hand.svg';
import fab_desktop_svg from '@/public/svg/fab-desktop-svg.svg';
import close_form from '@/public/svg/close-form.svg';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { MyContext } from '../Provider/contextProvider';

const FabButton = ({ click, setClick, setOptionClick, setTab, auth, tab }) => {
    const {setAuth} = useContext(MyContext)
    useEffect(() => {
        let timer;
        if (auth.logged === true && auth.submitEvent.fireSubmit === true) {
            timer = setTimeout(() => {
                setAuth((prevAuth) => ({
                    ...prevAuth,
                    submitEvent: {
                        ...prevAuth.submitEvent,
                        fireSubmit: false,
                        submitMessage: ''
                    }
                }));
                console.log('before', auth.submitEvent.submitMessage);
                console.log('before', tab);
                setTab('');
                console.log('after',tab);
                console.log('after', auth.submitEvent.submitMessage);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [auth.logged, auth.submitEvent.fireSubmit, setAuth, setTab]);

    useEffect(() => {
        if (!auth.submitEvent.submitMessage) {
            console.log(
                'submitMessage cleared:',
                auth.submitEvent.submitMessage
            );
            // Perform any action here when submitMessage is cleared
            // For demonstration, we're just logging it
        }
    }, [auth.submitEvent.submitMessage]);
    const currentTabMessage = auth.logged && auth.submitEvent.fireSubmit
    console.log(tab);
    return (
        <div className='fab-messages'>
            {currentTabMessage ? (
                <p>{auth.submitEvent.submitMessage}</p>
            ) : null}
            <button
                className={`fab-mobile ${
                    !click
                        ? 'fab-mobile-bgcolor-open'
                        : 'fab-mobile-bgcolor-close'
                } `}
                onClick={() => {
                    setClick(!click);
                    setOptionClick(false);
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