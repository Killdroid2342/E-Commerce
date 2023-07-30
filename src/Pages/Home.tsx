import React, { useState } from 'react';

const Home = () => {
  const [login, setLogin] = useState({ username: '', password: '' });

  function submitForm(e: any) {
    e.preventDefault();
    console.log('submitted form: ', login);
  }

  function handleLoginInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLogin((data) => ({
      ...data,
      [name]: value,
    }));
  }

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={submitForm}>
        <input type='text' name='username' onChange={handleLoginInputChange} />
        <input
          type='password'
          name='password'
          onChange={handleLoginInputChange}
        />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default Home;
