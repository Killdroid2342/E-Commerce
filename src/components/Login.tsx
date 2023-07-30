import React, { useState } from 'react';

const Login = ({ changeForm }: any) => {
  const [login, setLogin] = useState({ username: '', password: '' });
  function submitForm(e: any) {
    e.preventDefault();
    console.log('submitted form: ', login);
  }

  function loginInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLogin((data) => ({
      ...data,
      [name]: value,
    }));
  }
  return (
    <>
      <h1 className='text-center mt-10 text-2xl'>Login Here</h1>
      <form className='py-2' onSubmit={submitForm}>
        <div className='flex flex-col mx-auto w-fit'>
          <label className=' text-lg py-2'>Username</label>
          <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={loginInput}
            className='p-2 rounded-md text-black border border-black'
            required
          />
        </div>
        <div className='flex flex-col mx-auto w-fit'>
          <label className=' text-lg py-2 pt-5 '>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={loginInput}
            className='p-2 rounded-md text-black border border-black'
            required
          />
        </div>
        <div className='flex flex-col mx-auto w-fit'>
          <input
            type='submit'
            value='Login'
            className='mt-10 text-xl cursor-pointer border-2 border-white p-3 rounded-lg'
          />
          <p className='mt-5 cursor-pointer' onClick={changeForm}>
            Not A User? Register Here.
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
