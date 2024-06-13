'use client'

const SubmitButton = ({ disabledLoggedOutState, setForm, setAuth, form }) => {
    // const handleChange = () => {
    //     localStorage.setItem('formData', JSON.stringify(setForm((prev) => ({ ...prev, submit: true }))))
        
    // }

    return (
        <div className='submit-buttons'>
            <button
                disabled={disabledLoggedOutState}
                // onClick={handleChange}
                type='submit'>
                Submit
            </button>
        </div>
    );
};

export default SubmitButton
