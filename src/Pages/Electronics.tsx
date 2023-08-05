import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const electronics = [
  {
    img: 'src/assets/images/ps5.png',
    des: 'This is a Electronics',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
  {
    img: 'src/assets/images/mouse.png',
    des: 'This is a Electronics',
    lowPrice: 'Lowest Ask',
    price: '£200',
  },
  {
    img: 'src/assets/images/airpods.png',
    des: 'This is a Electronics',
    lowPrice: 'Lowest Ask',
    price: '£150',
  },
  {
    img: 'src/assets/images/ps5.png',
    des: 'This is Electronics',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
];

const Electronics = () => {
  return (
    <div className='flex flex-col'>
      <Nav />
      <div className='flex justify-center'>
        <div className='mt-40 p-16 w-8/12 bg-neutral-200'>
          <h2 className='text-4xl'>Electronics</h2>
          <p>
            Buy and Sell Electronics on StockX. Every item is
            <a className='text-green-900'> StockX Verified.</a>
          </p>
        </div>
      </div>
      <div className='flex justify-center flex-row mt-20'>
        {electronics.map((image, index) => (
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
        {electronics.map((image, index) => (
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
        {electronics.map((image, index) => (
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

export default Electronics;
