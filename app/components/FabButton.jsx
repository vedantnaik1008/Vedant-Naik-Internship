'use client';
import fab_mobile_svg from '@/public/svg/fab-mobile-star-hand.svg';
import fab_desktop_svg from '@/public/svg/fab-desktop-svg.svg';
import close_form from '@/public/svg/close-form.svg';
import Image from 'next/image';
import { useEffect } from 'react';
import { useEmail } from '../hooks/useEmail';

const FabButton = ({ click, setClick, setOptionClick, setTab, auth, tab }) => {
    const { form, setForm } = useEmail();
        let nn;
        if (typeof window !== 'undefined') {
            nn = JSON.parse(window.localStorage.getItem('formData'));
        }

    useEffect(() => {
        let timer;
        if (auth.logged && nn?.submit) {
            timer = setTimeout(() => {
                const updatedFormData = { ...nn, submit: false };

                 if (typeof window !== 'undefined') {
                     window.localStorage.setItem(
                         'formData',
                         JSON.stringify(updatedFormData)
                     );
                 }

                setForm(updatedFormData);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [auth.logged, setForm, nn?.submit, nn]);


    const currentTabMessage = auth.logged && nn?.submit;

    console.log(nn?.submit);
    return (
        <div className='fab-messages'>
            {currentTabMessage && <p>{nn.submitMessage}</p>}
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
