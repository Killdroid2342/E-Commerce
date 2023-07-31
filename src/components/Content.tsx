import React, { useState } from 'react';

const carouselImages = [
  'src/assets/images/dummyImage1.png',
  'src/assets/images/dummyImage2.png',
];

const productImages = [
  {
    name: 'this is an image of the shoe1',
    img: 'src/assets/images/shoe1.png',
  },
  {
    name: 'this is an image of the shoe2',
    img: 'src/assets/images/shoe2.png',
  },
  {
    name: 'this is an image of the shoe1',
    img: 'src/assets/images/shoe1.png',
  },
  {
    name: 'this is an image of the shoe2',
    img: 'src/assets/images/shoe2.png',
  },
  {
    name: 'this is an image of the shoe1',
    img: 'src/assets/images/shoe1.png',
  },
  {
    name: 'this is an image of the shoe2',
    img: 'src/assets/images/shoe2.png',
  },
];
const brands = [
  {
    name: 'Jordan',
    img: 'src/assets/images/Jordan.png',
  },
  {
    name: 'Yeezy',
    img: 'src/assets/images/Yeezy.png',
  },
  {
    name: 'Jordan',
    img: 'src/assets/images/Jordan.png',
  },
  {
    name: 'Yeezy',
    img: 'src/assets/images/Yeezy.png',
  },
  {
    name: 'Jordan',
    img: 'src/assets/images/Jordan.png',
  },
  {
    name: 'Yeezy',
    img: 'src/assets/images/Yeezy.png',
  },
];
const Content = () => {
  const [img, setImg] = useState(0);

  const preivImg = () => {
    setImg((prevImg) => (prevImg + 1) % carouselImages.length);
  };

  const nextImg = () => {
    setImg((prevImg) =>
      prevImg === 0 ? carouselImages.length - 1 : prevImg - 1
    );
  };

  return (
    <>
      <div className='flex justify-center mt-10'>
        <button className='font-bold text-2xl' onClick={preivImg}>
          {'<'}
        </button>
        <img src={carouselImages[img]} alt={`Carousel Slide ${img}`} />
        <button className='font-bold text-2xl' onClick={nextImg}>
          {'>'}
        </button>
      </div>
      <p className='font-bold ml-80 mt-10'>Recommended For You</p>
      <div className='flex justify-center'>
        {productImages.map((image, index) => (
          <div key={index} className='flex flex-col items-center'>
            <img
              src={image.img}
              alt={`Product ${index}`}
              className='w-56 h-48 m-1 border border-neutral-400'
            />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
      <p className='font-bold ml-80 mt-10'>Popular Brands</p>
      <div className='flex justify-center'>
        {brands.map((image, index) => (
          <div key={index} className='flex flex-col items-center'>
            <img
              src={image.img}
              alt={`Product ${index}`}
              className='w-56 h-48 m-1 border border-neutral-400'
            />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
