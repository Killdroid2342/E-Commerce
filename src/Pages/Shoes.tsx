import React, { useState, useEffect } from 'react';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

const shoes = [
  {
    img: 'src/assets/images/shoe1.png',
    des: 'This is a shoe',
    lowPrice: 'Lowest Ask',
    price: '£100',
    UUID: '1',
  },
  {
    img: 'src/assets/images/LatestShoe2.png',
    des: 'This is a shoe',
    lowPrice: 'Lowest Ask',
    price: '£100',
  },
  {
    img: 'src/assets/images/shoe1.png',
    des: 'This is a shoe',
    lowPrice: 'Lowest Ask',
    price: '£100',
  },
  {
    img: 'src/assets/images/LatestShoe2.png',
    des: 'This is a shoe',
    lowPrice: 'Lowest Ask',
    price: '£100',
  },
];

const Shoes = () => {
  return (
    <div className='flex flex-col'>
      <Nav />
      <div className='flex justify-center'>
        <div className='mt-40 p-16 w-8/12 bg-neutral-200'>
          <h2 className='text-4xl'>Shoes</h2>
          <p>
            Buy and Sell Shoes on StockX. Every item is
            <a className='text-green-900'> StockX Verified.</a>
          </p>
        </div>
      </div>
      <div className='flex justify-center flex-row mt-20'>
        {shoes.map((image, index) => (
          <div key={index} className='border border-neutral-400 m-10'>
            <img
              src={image.img}
              alt={`Product ${index}`}
              className='w-56 h-48 m-1 '
            />
            <p>{image.des}</p>
            <p className='text-xs'>{image.lowPrice}</p>
            <p className='font-bold text-xl'>{image.price}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center flex-row'>
        {shoes.map((image, index) => (
          <div key={index} className='border border-neutral-400 m-10'>
            <img
              src={image.img}
              alt={`Product ${index}`}
              className='w-56 h-48 m-1 '
            />
            <p>{image.des}</p>
            <p className='text-xs'>{image.lowPrice}</p>
            <p className='font-bold text-xl'>{image.price}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center flex-row'>
        {shoes.map((image, index) => (
          <div key={index} className='border border-neutral-400 m-10'>
            <img
              src={image.img}
              alt={`Product ${index}`}
              className='w-56 h-48 m-1 '
            />
            <p>{image.des}</p>
            <p className='text-xs'>{image.lowPrice}</p>
            <p className='font-bold text-xl'>{image.price}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Shoes;
