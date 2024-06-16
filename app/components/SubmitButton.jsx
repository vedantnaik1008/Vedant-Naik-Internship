'use client'

const SubmitButton = ({ disabledLoggedOutState, setForm, setAuth, form }) => {
    

    return (
        <div className='submit-buttons'>
            <button
                disabled={disabledLoggedOutState}
                type='submit'>
                Submit
            </button>
        </div>
    );
};

export default SubmitButton
