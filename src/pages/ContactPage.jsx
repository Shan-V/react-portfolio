import { useState } from 'react';

function ContractPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function validateEmail(email) {
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
    }
  };

  const handleChange = (e) => {
    console.log('hi');
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };
  return (
    <div className='container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
      <section className='w-full'>
        <h2 id='hire' className='secondary-title'>
          Hire me
        </h2>
        <p className='section-paragraph'>
          Feel free to to contact me any time, through any method below.
        </p>

        <div className='w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-8'>
          <div className='space-y-12'>
            <div>
              <label className='text-white block mb-6 text-xl font-bold'>
                Name
              </label>
              <input
                className='w-full border border-input-border bg-input px-4 py-4'
                onBlur={handleChange}
              />
            </div>
            <div>
              <label className='text-white block mb-6 text-xl font-bold'>
                Email
              </label>
              <input
                type='email'
                className='w-full border border-input-border bg-input px-4 py-4'
                onBlur={handleChange}
              />
            </div>
            <div>
              <label className='text-white block mb-6 text-xl font-bold'>
                Message
              </label>
              <textarea
                type='email'
                className='w-full border border-input-border bg-input px-4 py-4 h-56 resize-none'
                onBlur={handleChange}
              ></textarea>
            </div>
            {errorMessage && (
              <div>
                <p className='text-white'>{errorMessage}</p>
              </div>
            )}
            <button
              className='px-6 py-2 bg-theme text-white font-bold'
              onSubmit={handleSubmit}
            >
              Send it!
            </button>
          </div>

          <div className='mt-12'>
            <p className='text-secondary'>555-555-1234</p>
            <a
              href='mailto:email@mydomain.com'
              className='text-secondary underline mt-3 block'
            >
              email@mydomain.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContractPage;
