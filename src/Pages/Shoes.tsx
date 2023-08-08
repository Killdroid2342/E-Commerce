import { useState, useEffect } from 'react';

import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Modal from '../components/Modal';

const shoes = [
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
interface Item {
  shoe: string;
  price: number;
  amount: number;
}

const Shoes = () => {
  const [modalI, setModalI] = useState(null);
  const [amount, setAmount] = useState(1);
  const [basketItems, setBasketItems] = useState<Item[]>([]);

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
      const newItem = {
        shoe: modalI,
        price: 100,
        amount: amount,
      };
      setBasketItems([...basketItems, newItem]);
      closeModal();
    }
  };
  useEffect(() => {
    console.log(basketItems);
  }, [basketItems]);

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
              onClick={() => openModal(image.img)}
            />
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
