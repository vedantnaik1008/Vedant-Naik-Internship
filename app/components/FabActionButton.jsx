'use client';
import React, { useContext } from 'react';
import { MyContext } from '../Provider/contextProvider';
import dynamic from 'next/dynamic';
import FabOptionList from './FabOptionList';
const ReportIssue = dynamic(() => import('./ReportIssue'));
const ShareFeedback = dynamic(() => import('./ShareFeedback'));
const GiveSuggestion = dynamic(() => import('./GiveSuggestion'));
const ContactUs = dynamic(() => import('./ContactUs'));

const FabActionButton = () => {
    const { click, optionClick, setOptionClick, tab, setTab, auth, setClick } =
        useContext(MyContext);
    return (
        <>
            {click && <div className='overlay' />}
            <div className='fab-parent'>
                <FabOptionList
                    click={click}
                    setClick={setClick}
                    optionClick={optionClick}
                    setOptionClick={setOptionClick}
                    tab={tab}
                    setTab={setTab}
                    auth={auth}
                />
                {tab === 'report issue' ? <ReportIssue /> : null}
                {tab === 'share feedback' ? <ShareFeedback /> : null}
                {tab === 'give suggestion' ? <GiveSuggestion /> : null}
                {tab === 'contact us' ? <ContactUs /> : null}
            </div>
        </>
    );
};

export default FabActionButton;