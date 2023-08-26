import { useState, useEffect } from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Auth from '../hooks/Auth';
const { VITE_API_URL } = import.meta.env;
import axios from 'axios';

const instance = axios.create({
  baseURL: VITE_API_URL,
});
interface Items {
  img: string;
  des: string;
  lowPrice: string;
  price: string;
  name: string;
}
interface Main {
  name: string;
  img: string;
}
const carouselImages = [
  'src/assets/images/dummyImage1.png',
  'src/assets/images/dummyImage2.png',
];

const Home = () => {
  Auth();
  const [img, setImg] = useState(0);
  const [accessories, setAccessories] = useState<Items[]>([]);
  const [main, setMain] = useState<Main[]>([]);
  const navigate = useNavigate();
  const preivImg = () => {
    setImg((prevImg) => (prevImg + 1) % carouselImages.length);
  };

  const nextImg = () => {
    setImg((prevImg) =>
      prevImg === 0 ? carouselImages.length - 1 : prevImg - 1
    );
  };
  async function getAccessories() {
    const res = await instance.get('/items/getaccessoriesitems');
    setAccessories(res.data);
  }
  async function getMainItems() {
    const res = await instance.get('/items/getMainItems');
    setMain(res.data);
  }
  useEffect(() => {
    getAccessories();
    getMainItems();
  }, []);
  return (
    <>
      <Nav />
      <div className='flex flex-col '>
        <div className='flex justify-center mt-10'>
          <button className='font-bold text-2xl' onClick={preivImg}>
            {'<'}
          </button>
          <img
            className='w-9/12 h-96'
            src={carouselImages[img]}
            alt={`Carousel Slide ${img}`}
          />
          <button className='font-bold text-2xl' onClick={nextImg}>
            {'>'}
          </button>
        </div>
        <p className='font-bold ml-80 mt-10'>Recommended For You</p>
        <div className='flex justify-center'>
          {main.slice(0, 6).map((image, index) => (
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
        <p className='font-bold ml-80 mt-10'>Popular Brands</p>
        <div className='flex justify-center'>
          {main.slice(6, 12).map((image, index) => (
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
        <p className='font-bold ml-80 mt-10'>Get The Latest Shoes</p>
        <div className='flex justify-center'>
          {main.slice(16, 20).map((image, index) => (
            <div key={index} className='flex flex-col items-center'>
              <img
                src={image.img}
                alt={'shoe Images'}
                className='w-72 h-60 m-10 border border-neutral-400'
              />
            </div>
          ))}
        </div>
        <p className='font-bold ml-80 mt-10'>Get The Latest Items</p>
        <div className='flex justify-center'>
          {accessories.slice(0, 4).map((image, index) => (
            <div key={index} className='flex flex-col items-center'>
              <img
                src={image.img}
                alt={'shoe Images'}
                className='w-72 h-60 m-10 border border-neutral-400'
              />
            </div>
          ))}
        </div>
        <p className='font-bold ml-80 mt-10'>As Seen On Instagram</p>
        <div className='flex justify-center'>
          {main.slice(12, 16).map((image, index) => (
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
