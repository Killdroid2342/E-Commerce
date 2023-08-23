import { useEffect, useState } from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { Item } from './Shoes';
import Auth from '../hooks/Auth';
import axios from 'axios';
const { VITE_API_URL } = import.meta.env;

const instance = axios.create({
  baseURL: VITE_API_URL,
});

interface AccessoriesItems {
  img: string;
  des: string;
  lowPrice: string;
  price: string;
  name: string;
}
const Accessories = () => {
  Auth();
  const [modalI, setModalI] = useState(null);
  const [amount, setAmount] = useState(1);
  const initialBasketItems = localStorage.getItem('basketItems');
  const [basketItems, setBasketItems] = useState<Item[]>(
    initialBasketItems ? JSON.parse(initialBasketItems) : []
  );
  const [accessories, setAccessories] = useState<AccessoriesItems[]>([]);
  async function getAccessories() {
    const res = await instance.get('/items/getaccessoriesitems');
    setAccessories(res.data);
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
      const selectedShoe = accessories.find(
        (accessories) => accessories.img === modalI
      );
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
    getAccessories();
  }, []);
  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
  }, [basketItems, accessories]);

  return (
    <div className='flex flex-col'>
      <Nav basketItems={basketItems} setBasketItems={setBasketItems} />
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
        {accessories.slice(0, 4).map((image, index) => (
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
        {accessories.slice(4, 8).map((image, index) => (
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
        {accessories.slice(8, 12).map((image, index) => (
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

export default Accessories;
