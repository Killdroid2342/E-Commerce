import { useState, useEffect } from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
const { VITE_API_URL } = import.meta.env;
import axios from 'axios';
import { Item } from './Shoes';
import '../Main.css';
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
  '/assets/images//dummyImage1.png',
  '/assets/images//dummyImage2.png',
];

const Main = () => {
  const [img, setImg] = useState(0);
  const [accessories, setAccessories] = useState<Items[]>([]);
  const [main, setMain] = useState<Main[]>([]);
  const initialBasketItems = localStorage.getItem('basketItems');
  const [basketItems, setBasketItems] = useState<Item[]>(
    initialBasketItems ? JSON.parse(initialBasketItems) : []
  );
  const navigate = useNavigate();
  const prevImg = () => {
    setImg((prevImg) => (prevImg + 1) % carouselImages.length);
  };

  const nextImg = () => {
    setImg((prevImg) =>
      prevImg === 0 ? carouselImages.length - 1 : prevImg - 1
    );
  };
  async function getAccessories() {
    const res = await instance.get('/items/allItems');
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
  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
  }, [basketItems]);
  return (
    <>
      <Nav basketItems={basketItems} setBasketItems={setBasketItems} />
      <div className='outerAlign'>
        <div className='flex flex-col mb-10'>
          <div className='wholeCarousel'>
            <div className='carouselContainer'>
              <button className='carouselButton' onClick={prevImg}>
                {'<'}
              </button>
              <img
                className='carousel'
                src={carouselImages[img]}
                alt={`Carousel Slide ${img}`}
              />
              <button className='carouselButton' onClick={nextImg}>
                {'>'}
              </button>
            </div>
          </div>

          <p className='font-bold mt-10'>Recommended For You</p>
          <div className='flex flex-row'>
            {main.slice(0, 6).map((image, index) => (
              <div key={index} className='relative group'>
                <img
                  src={image.img}
                  alt={`Product ${index}`}
                  className='w-56 h-48  border border-neutral-400 transition duration-300 ease-in-out transform group-hover:scale-105'
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
          <p className='font-bold mt-10'>Popular Brands</p>
          <div className='flex flex-row'>
            {main.slice(6, 12).map((image, index) => (
              <div key={index} className='flex flex-col'>
                <img
                  src={image.img}
                  alt={`Product ${index}`}
                  className='w-56 h-48  border border-neutral-400'
                />
                <p>{image.name}</p>
              </div>
            ))}
          </div>
          <p className='font-bold mt-10'>Get The Latest Shoes</p>
          <div className='flex flex-row justify-between'>
            {main.slice(16, 20).map((image, index) => (
              <div key={index} className='flex flex-col '>
                <img
                  src={image.img}
                  alt={'shoe Images'}
                  className='w-56 h-48  border border-neutral-400'
                />
              </div>
            ))}
          </div>
          <p className='font-bold mt-10'>Get The Latest Items</p>
          <div className='flex flex-row justify-between'>
            {accessories.slice(20, 24).map((image, index) => (
              <div key={index} className=''>
                <img
                  src={image.img}
                  alt={'shoe Images'}
                  className='w-56 h-48 border border-neutral-400'
                />
              </div>
            ))}
          </div>
          <p className='font-bold mt-10'>As Seen On Instagram</p>
          <div className='flex flex-row justify-between'>
            {main.slice(12, 16).map((image, index) => (
              <div key={index} className='flex flex-col items-center'>
                <img
                  src={image.img}
                  alt={'IG Images'}
                  className='w-56 h-48 border border-neutral-400'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
