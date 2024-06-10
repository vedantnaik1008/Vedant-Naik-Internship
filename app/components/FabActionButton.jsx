'use client';
import React, { useContext } from 'react';
import { poppins } from '../page';
import { MyContext } from '../Provider/contextProvider';
import report_issue from '@/public/svg/report-issue.svg';
import Share_feedback from '@/public/svg/share-feedback.svg';
import Give_suggestion from '@/public/svg/give-suggestion.svg';
import Contact_us from '@/public/svg/contact-us.svg';
import fab_mobile_svg from '@/public/svg/fab-mobile-star-hand.svg';
import fab_desktop_svg from '@/public/svg/fab-desktop-svg.svg';
import close_form from '@/public/svg/close-form.svg';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const ReportIssue = dynamic(() => import('./ReportIssue'));
const ShareFeedback = dynamic(() => import('./ShareFeedback'));
const GiveSuggestion = dynamic(() => import('./GiveSuggestion'));
const ContactUs = dynamic(() => import('./ContactUs'));

const FabActionButton = () => {
    const {
        click,
        setClick,
        optionClick,
        setOptionClick,
        tab,
        setTab,
        auth
    } = useContext(MyContext);

    console.log(tab);
    return (
        <>
            {click && <div className='overlay' />}
            <div className='fab-parent'>
                <div
                    className={`${poppins.className} ${
                        click
                            ? `option-list ${
                                  optionClick
                                      ? 'option-animate-show option-list-unfloat'
                                      : 'option-list-1 option-list-float'
                              } `
                            : `close ${
                                  optionClick
                                      ? 'option-animate-close .close-unfloat'
                                      : 'close-1 close-float'
                              }`
                    }`}>
                    <div
                        className={`  ${
                            click
                                ? 'smart-animate-option-list'
                                : 'reverse-smart-animate-option-list'
                        } flex`}
                        onClick={() => {
                            setTab('report issue');
                            setOptionClick(true);
                        }}>
                        <p className={optionClick && `removed`}>
                            Report an Issue
                        </p>
                        <button
                            className={`${
                                tab === 'report issue' ? 'rounded-outline' : ''
                            } fab-mobile-bgcolor-option`}>
                            <Image
                                src={report_issue}
                                width={19}
                                height={20}
                                alt='svg'
                            />
                        </button>
                    </div>
                    <div
                        className={`${
                            click
                                ? 'smart-animate-option-list'
                                : 'reverse-smart-animate-option-list'
                        } flex`}
                        onClick={() => {
                            setTab('share feedback');
                            setOptionClick(true);
                        }}>
                        <p className={optionClick && `removed`}>
                            Share Feedback
                        </p>
                        <button
                            className={`${
                                tab === 'share feedback'
                                    ? 'rounded-outline'
                                    : ''
                            } fab-mobile-bgcolor-option`}>
                            <Image
                                src={Share_feedback}
                                width={28}
                                height={28}
                                alt='svg'
                            />
                        </button>
                    </div>
                    <div
                        className={`${
                            click
                                ? 'smart-animate-option-list'
                                : 'reverse-smart-animate-option-list'
                        } flex`}
                        onClick={() => {
                            setTab('give suggestion');
                            setOptionClick(true);
                        }}>
                        <p className={optionClick && `removed`}>
                            Give Suggestion
                        </p>
                        <button
                            className={`${
                                tab === 'give suggestion'
                                    ? 'rounded-outline'
                                    : ''
                            } fab-mobile-bgcolor-option`}>
                            <Image
                                src={Give_suggestion}
                                width={28}
                                height={21}
                                alt='svg'
                            />
                        </button>
                    </div>
                    <div
                        className={`${
                            click
                                ? 'smart-animate-option-list'
                                : 'reverse-smart-animate-option-list'
                        } flex`}
                        onClick={() => {
                            setTab('contact us');
                            setOptionClick(true);
                        }}>
                        <p className={optionClick && `removed`}>Contact Us</p>
                        <button
                            className={`${
                                tab === 'contact us' ? 'rounded-outline' : ''
                            } fab-mobile-bgcolor-option`}>
                            <Image
                                src={Contact_us}
                                width={22}
                                height={22}
                                alt='svg'
                            />
                        </button>
                    </div>

                    <div className='fab-messages'>
                        {auth.logged && auth.submitEvent.fireSubmit ? (
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
                </div>
                {tab === 'report issue' ? <ReportIssue /> : null}
                {tab === 'share feedback' ? <ShareFeedback /> : null}
                {tab === 'give suggestion' ? <GiveSuggestion /> : null}
                {tab === 'contact us' ? <ContactUs /> : null}
            </div>
        </>
    );
};

export default FabActionButton;
