import { useState } from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Auth from '../hooks/Auth';
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
    img: 'src/assets/images/LatestShoe2.png',
  },
  {
    name: 'this is an image of the shoe1',
    img: 'src/assets/images/shoe1.png',
  },
  {
    name: 'this is an image of the shoe2',
    img: 'src/assets/images/LatestShoe2.png',
  },
  {
    name: 'this is an image of the shoe1',
    img: 'src/assets/images/shoe1.png',
  },
  {
    name: 'this is an image of the shoe2',
    img: 'src/assets/images/LatestShoe2.png',
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
const igImage = [
  {
    img: 'src/assets/images/igImage1.png',
  },
  {
    img: 'src/assets/images/igImage2.png',
  },
  {
    img: 'src/assets/images/igImage3.png',
  },
  {
    img: 'src/assets/images/igImage4.png',
  },
];
const Home = () => {
  Auth();
  const [img, setImg] = useState(0);
  const navigate = useNavigate();
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
      <Nav />
      <div className='flex flex-col '>
        <div className='flex justify-center mt-10'>
          <button className='font-bold text-2xl' onClick={preivImg}>
            {'<'}
          </button>
          <img
            className='w-9/12'
            src={carouselImages[img]}
            alt={`Carousel Slide ${img}`}
          />
          <button className='font-bold text-2xl' onClick={nextImg}>
            {'>'}
          </button>
        </div>
        <p className='font-bold ml-80 mt-10'>Recommended For You</p>
        <div className='flex justify-center'>
          <div className='flex justify-center'>
            {productImages.map((image, index) => (
              <div key={index} className='relative group'>
                <img
                  src={image.img}
                  alt={`Product ${index}`}
                  className='w-56 h-48 m-1 border border-neutral-400 transition duration-300 ease-in-out transform group-hover:scale-105'
                />
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 backdrop-blur-md transition-opacity duration-300'>
                  <div
                    onClick={() => navigate('/shoes')}
                    className='bg-black text-white text-center p-2 rounded-md'
                  >
                    <p className='cursor-pointer'>
                      Click here to go to shoes page
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
        <div className='border border-neutral-400 rounded-md m-5  flex flex-col items-center justify-center'>
          <p className='font-bold'>Get The Latest Shoes</p>
          <div className='flex flex-row'>
            <img className='' src='src/assets/images/LatestShoe3.png' alt='' />
            <img className='' src='src/assets/images/LatestShoe2.png' alt='' />
            <img className='' src='src/assets/images/LatestShoe.png' alt='' />
          </div>
        </div>
        <p className='font-bold ml-80 mt-10'>As Seen On Instagram</p>
        <div className='flex justify-center'>
          {igImage.map((image, index) => (
            <div key={index} className='flex flex-col items-center'>
              <img
                src={image.img}
                alt={'IG Images'}
                className='w-72 h-72 m-10 border border-neutral-400'
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
