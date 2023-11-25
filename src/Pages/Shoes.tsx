import { useState, useEffect } from 'react';
const { VITE_API_URL } = import.meta.env;
import Footer from '../components/Footer';
import Nav from '../components/nav/Nav';
import Modal from '../components/Modal';
import Auth from '../hooks/Auth';
import axios from 'axios';

const instance = axios.create({
  baseURL: VITE_API_URL,
});

export interface Item {
  name: string;
  shoe: string;
  price: number;
  amount: number;
}
interface ShoeItem {
  img: string;
  des: string;
  lowPrice: string;
  price: number;
  name: string;
}
const Shoes = () => {
  Auth();
  const [modalI, setModalI] = useState(null);
  const [amount, setAmount] = useState(1);
  const initialBasketItems = localStorage.getItem('basketItems');
  const [basketItems, setBasketItems] = useState<Item[]>(
    initialBasketItems ? JSON.parse(initialBasketItems) : []
  );
  const [shoes, setShoes] = useState<ShoeItem[]>([]);

  async function getShoes() {
    const res = await instance.get('/items/allItems');
    setShoes(res.data);
  }

  const openModal = (image: any) => {
    setModalI(image);
  };

  const closeModal = () => {
    setModalI(null);
  };

  const add = () => {
    setAmount(amount + 1);
  };

  const remove = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const addBasket = () => {
    if (modalI) {
      const selectedShoe = shoes.find((shoe) => shoe.img === modalI);
      if (selectedShoe) {
        const newItem = {
          shoe: modalI,
          price: amount * 100,
          amount: amount,
          name: selectedShoe.name,
        };
        setBasketItems([...basketItems, newItem]);
        closeModal();
      }
    }
  };

  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
    getShoes();
  }, [shoes, basketItems]);

  return (
    <div className='flex flex-col'>
      <Nav basketItems={basketItems} setBasketItems={setBasketItems} />
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
        {shoes.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className='border border-neutral-400 m-10 cursor-pointer w-60'
          >
            <img
              src={image.img}
              alt={`Product ${index}`}
              className='w-56 h-48 m-1 '
              onClick={() => openModal(image.img)}
            />
            <p className='font-bold'>{image.name}</p>
            <p>{image.des}</p>
            <p className='text-xs'>{image.lowPrice}</p>
            <p className='font-bold text-xl'>{image.price}</p>
          </div>
        ))}
        {modalI && (
          <Modal
            onClose={closeModal}
            image={modalI}
            amount={amount}
            add={add}
            remove={remove}
            addBasket={addBasket}
          />
        )}
      </div>
      <div className='flex justify-center flex-row mt-20'>
        {shoes.slice(4, 8).map((image, index) => (
          <div
            key={index}
            className='border border-neutral-400 m-10 cursor-pointer w-60'
          >
            <img
              src={image.img}
              alt={`Product ${index}`}
              className='w-56 h-48 m-1 '
              onClick={() => openModal(image.img)}
            />
            <p className='font-bold'>{image.name}</p>
            <p>{image.des}</p>
            <p className='text-xs'>{image.lowPrice}</p>
            <p className='font-bold text-xl'>{image.price}</p>
          </div>
        ))}
        {modalI && (
          <Modal
            onClose={closeModal}
            image={modalI}
            amount={amount}
            add={add}
            remove={remove}
            addBasket={addBasket}
          />
        )}
      </div>
      <div className='flex justify-center flex-row mt-20'>
        {shoes.slice(8, 12).map((image, index) => (
          <div
            key={index}
            className='border border-neutral-400 m-10 cursor-pointer w-60'
          >
            <img
              src={image.img}
              alt={`Product ${index}`}
              className='w-56 h-48 m-1 '
              onClick={() => openModal(image.img)}
            />
            <p className='font-bold'>{image.name}</p>
            <p>{image.des}</p>
            <p className='text-xs'>{image.lowPrice}</p>
            <p className='font-bold text-xl'>{image.price}</p>
          </div>
        ))}
        {modalI && (
          <Modal
            onClose={closeModal}
            image={modalI}
            amount={amount}
            add={add}
            remove={remove}
            addBasket={addBasket}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Shoes;
