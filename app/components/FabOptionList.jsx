'use client';
import Image from 'next/image';
import { optionList } from '../data/OptionListData';
import FabButton from './FabButton';
import { poppins } from '../page';

const FabOptionList = ({
    tab,
    click,
    optionClick,
    setTab,
    setOptionClick,
    auth,
    setClick
}) => {
    console.log(optionList);
    return (
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
            {optionList.map((item) => (
                <div
                    key={item.id}
                    className={`  ${
                        click
                            ? 'smart-animate-option-list'
                            : 'reverse-smart-animate-option-list'
                    } flex`}
                    onClick={() => {
                        setTab(item.tabName);
                        setOptionClick(true);
                    }}>
                    <p className={optionClick && `removed`}>{item.paragraph}</p>
                    <button
                        className={`${
                            tab === item.tabName ? 'rounded-outline' : ''
                        } fab-mobile-bgcolor-option`}>
                        <Image
                            src={item.image}
                            width={item.width}
                            height={item.height}
                            alt='svg'
                        />
                    </button>
                </div>
            ))}
            <FabButton
                click={click}
                optionClick={optionClick}
                setOptionClick={setOptionClick}
                auth={auth}
                setTab={setTab}
                setClick={setClick}
                tab={tab}
            />
        </div>
    );
};

export default FabOptionList;