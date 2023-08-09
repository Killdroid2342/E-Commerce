import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/Footer';
const accessories = [
  {
    img: 'src/assets/images/bag.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
  {
    img: 'src/assets/images/glasses.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
  {
    img: 'src/assets/images/bag.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
  {
    img: 'src/assets/images/glasses.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
];
const accessoriesTwo = [
  {
    img: 'src/assets/images/watch.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
  {
    img: 'src/assets/images/nike.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
  {
    img: 'src/assets/images/watch.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
  {
    img: 'src/assets/images/nike.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
];
const accessoriesThree = [
  {
    img: 'src/assets/images/utopia.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
  {
    img: 'src/assets/images/waistBag.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
  {
    img: 'src/assets/images/utopia.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
  {
    img: 'src/assets/images/waistBag.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
];
const Accessories = () => {
  return (
    <div className='flex flex-col'>
      <Nav />
      <div className='flex justify-center'>
        <div className='mt-40 p-16 w-8/12 bg-neutral-200'>
          <h2 className='text-4xl'>Accessories</h2>
          <p>
            Buy and Sell Accessories on StockX. Every item is
            <a className='text-green-900'> StockX Verified.</a>
          </p>
        </div>
      </div>
      <div className='flex justify-center flex-row mt-20'>
        {accessories.map((image, index) => (
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
        {accessoriesTwo.map((image, index) => (
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
        {accessoriesThree.map((image, index) => (
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

export default Accessories;
