import Image from 'next/image';
import redStar from '@/public/svg/red-star.svg';
import attach from '@/public/svg/attach.svg';
import { useEmail } from '../hooks/useEmail';
import { useEffect } from 'react';

const Textarea = ({
    form,
    require,
    redAsterix,
    labelName,
    placeholder,
    name,
    handleRemoveFile,
    handleChange,
    value,
    requireLabelName,
    className
}) => {
    const {createImagePreview} = useEmail()
    useEffect(() => {
        // Re-create previews for existing files after initial render
        form.files.forEach(createImagePreview);
    }, []);
    return (
        <div className='flex'>
            <label htmlFor=''>
                {requireLabelName && <p>{labelName} </p>}{' '}
                {redAsterix && (
                    <Image src={redStar} width={10} height={10} alt='svg' />
                )}
            </label>
            <div className='textarea-attach'>
                <textarea
                    name={name}
                    {...(require && { required: true })}
                    placeholder={placeholder}
                    onChange={handleChange}
                    value={value}></textarea>
                <div className='custom-file-flex'>
                    <label
                        htmlFor='custom-file'
                        class={`custom-file-upload ${className}`}>
                        <input
                            type='file'
                            id='custom-file'
                            multiple
                            name='files'
                            onChange={(e) => {
                                handleChange(e);
                                Array.from(e.target.files).forEach(
                                    createImagePreview
                                );
                            }}
                        />
                        <span>
                            <Image
                                src={attach}
                                width={10}
                                height={20}
                                alt='svg'
                            />
                        </span>
                        Attach
                    </label>
                    <div className='file-remover-container'>
                        {form.files.map((file, index) => (
                            <div key={index} >
                                {file.preview ? (
                                    <Image
                                        src={file.preview}
                                        alt={file.name}
                                        width={30}
                                        height={30}
                                    />
                                ) : (
                                    file.name
                                )}
                                <button type='button' onClick={() => handleRemoveFile(index)}>
                                    x
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Textarea;