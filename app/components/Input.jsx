import Image from 'next/image';
import redStar from '@/public/svg/red-star.svg';

const Input = ({require, redAsterix, type, labelName, className, placeholder, name, handleChange, value}) => {
  return (
      <div className='flex'>
          <label htmlFor=''>
              <p>{labelName}</p>
              {redAsterix && (
                  <span>
                      <Image src={redStar} width={10} height={10} alt='svg' />
                  </span>
              )}
          </label>
          <input
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              className={className}
              {...(require && { required: true })}
          />
      </div>
  );
}

export default Input