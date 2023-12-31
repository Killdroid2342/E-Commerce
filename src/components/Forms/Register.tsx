import React, { useState } from 'react';
import axios from 'axios';
const { VITE_API_URL } = import.meta.env;
import ResModal from './Form-Modal/ResModal';

const Register = ({ changeForm }: any) => {
  const instance = axios.create({
    baseURL: VITE_API_URL,
  });
  const [register, setRegister] = useState({
    username: '',
    password: '',
  });
  const [modal, setModal] = useState(false);
  async function submitRegForm(e: any) {
    e.preventDefault();
    const res = await instance.post('/user/register-user', {
      username: register.username,
      password: register.password,
    });
    setModal(res.data.message);
    setTimeout(() => {
      setModal(false);
    }, 2000);
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
      {modal !== false ? <ResModal responseMessage={modal} /> : ''}
      <div className='flex justify-center'>
        <div className='border border-neutral-300 rounded-md w-80 mt-20 bg-white'>
          <h1 className='text-center mt-10 text-2xl'>Register Here</h1>
          <form className='py-2' onSubmit={submitRegForm}>
            <div className='flex flex-col mx-auto w-fit'>
              <label className=' text-lg py-2 font-semibold'>Username</label>
              <input
                type='text'
                name='username'
                placeholder='Username'
                className='p-2 rounded-md text-black border border-neutral-300 focus:outline-none'
                required
                onChange={loginRegInput}
              />
            </div>
            <div className='flex flex-col mx-auto w-fit'>
              <label className=' text-lg py-2 pt-5 font-semibold'>
                Password
              </label>
              <input
                type='password'
                name='password'
                placeholder='Password'
                className='p-2 rounded-md text-black border border-neutral-300 focus:outline-none'
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
              <p
                className='mt-5 cursor-pointer font-semibold'
                onClick={changeForm}
              >
                Not A User? Register Here.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
