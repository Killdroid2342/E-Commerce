import React, { useState } from 'react';

const Home = () => {
  const [dropdownNav, setDropdownNav] = useState(false);

  const hover = () => {
    setDropdownNav(true);
  };

  const leave = () => {
    setDropdownNav(false);
  };

  return (
    <>
      <nav className='flex p-2 border-2 border-white'>
        <div>
          <img
            src='src/assets/images/logo.png'
            alt=''
            width='200px'
            className='p-5'
          />
        </div>
        <input
          type='search'
          name=''
          id=''
          placeholder='Search Item'
          className='text-black w-3/6 ml-10 pl-10'
        />
        <ul className='flex justify-end'>
          <li
            className='p-5 cursor-pointer relative'
            onMouseEnter={hover}
            onMouseLeave={leave}
          >
            Browse
            {dropdownNav && (
              <ul className='absolute bg-white p-2 mt-2 text-black'>
                <li className='hover:bg-neutral-400 cursor-pointer'>Shoes</li>
                <li className='hover:bg-neutral-400 cursor-pointer'>
                  Accessories
                </li>
                <li className='hover:bg-neutral-400 cursor-pointer'>
                  Electronics
                </li>
              </ul>
            )}
          </li>
          <li className='p-5 ml-auto'>Account: {'1'}</li>
          <li className='p-5 cursor-pointer relative'>{'Basket: 🛒'}</li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
