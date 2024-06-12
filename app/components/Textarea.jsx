import Image from 'next/image';
import redStar from '@/public/svg/red-star.svg';
import attach from '@/public/svg/attach.svg';

const Textarea = ({
    require,
    redAsterix,
    labelName,
    placeholder,
    name,
    handleChange,
    value,
    requireLabelName,
    className
}) => {
    return (
        <div className='flex'>
            <label htmlFor=''>
                {requireLabelName && <p>{labelName} </p>}{' '}
                {redAsterix && (
                    <Image src={redStar} width={10} height={10} alt='svg' />
                )}
            </label>
            <textarea
                name={name}
                {...(require && { required: true })}
                placeholder={placeholder}
                onChange={handleChange}
                value={value}></textarea>
            <button className={className}>
                <span>
                    <Image src={attach} width={10} height={20} alt='svg' />
                </span>
                <p>Attach</p>
            </button>
        </div>
    );
};

export default Textarea;