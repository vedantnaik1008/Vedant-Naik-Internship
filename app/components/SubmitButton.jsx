'use client'

const SubmitButton = ({ disabledLoggedOutState, setForm, setAuth, form }) => {
    return (
        <div className='submit-buttons'>
            <button
                disabled={disabledLoggedOutState}
                onClick={() => {
                    setForm((prev) => ({ ...prev, submit: true }));
                    setAuth((prev) => ({
                        ...prev,
                        submitEvent: {
                            submitMessage: form.submitMessage,
                            fireSubmit: form.submit
                        }
                    }));
                }}
                type='submit'>
                Submit
            </button>
        </div>
    );
};

export default SubmitButton
