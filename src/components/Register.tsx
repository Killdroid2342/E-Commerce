import React, { useState } from 'react';

const Register = ({ changeForm }: any) => {
  const [register, setRegister] = useState({
    username: '',
    password: '',
  });
  function submitRegForm(e: any) {
    e.preventDefault();
    console.log('submitted form: ', register);
  }

  function loginRegInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setRegister((data) => ({
      ...data,
      [name]: value,
    }));
  }
  return (
    <>
      <h1 className='text-center mt-10 text-2xl'>Register Here</h1>
      <form className='py-2' onSubmit={submitRegForm}>
        <div className='flex flex-col mx-auto w-fit'>
          <label className=' text-lg py-2 font-semibold'>Username</label>
          <input
            type='text'
            name='username'
            placeholder='Username'
            className='p-2 rounded-md text-black border border-black'
            required
            onChange={loginRegInput}
          />
        </div>
        <div className='flex flex-col mx-auto w-fit'>
          <label className=' text-lg py-2 pt-5 font-semibold'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='p-2 rounded-md text-black border border-black'
            required
            onChange={loginRegInput}
          />
        </div>
        <div className='flex flex-col mx-auto w-fit'>
          <input
            type='submit'
            value='Register Account'
            className='mt-10 text-xl cursor-pointer border-2 border-white p-3 rounded-lg font-semibold'
          />
          <p className='mt-5 cursor-pointer font-semibold' onClick={changeForm}>
            Not A User? Register Here.
          </p>
        </div>
      </form>
    </>
  );
};

export default Register;
