import { useEffect, useState } from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { Item } from './Shoes';
import Auth from '../hooks/Auth';
const accessories = [
  {
    img: 'src/assets/images/bag.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£100',
  },
  {
    img: 'src/assets/images/glasses.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£100',
  },
  {
    img: 'src/assets/images/bag.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£100',
  },
  {
    img: 'src/assets/images/glasses.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£100',
  },
];
const accessoriesTwo = [
  {
    img: 'src/assets/images/watch.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£100',
  },
  {
    img: 'src/assets/images/nike.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£100',
  },
  {
    img: 'src/assets/images/watch.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£100',
  },
  {
    img: 'src/assets/images/nike.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£100',
  },
];
const accessoriesThree = [
  {
    img: 'src/assets/images/utopia.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£100',
  },
  {
    img: 'src/assets/images/waistBag.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£100',
  },
  {
    img: 'src/assets/images/utopia.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£100',
  },
  {
    img: 'src/assets/images/waistBag.png',
    des: 'This is an accessories',
    lowPrice: 'Lowest Ask',
    price: '£100',
  },
];
const Accessories = () => {
  Auth();
  const [modalI, setModalI] = useState(null);
  const [amount, setAmount] = useState(1);
  const initialBasketItems = localStorage.getItem('basketItems');
  const [basketItems, setBasketItems] = useState<Item[]>(
    initialBasketItems ? JSON.parse(initialBasketItems) : []
  );
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
        name: 'Accessories',
      };
      setBasketItems([...basketItems, newItem]);
      closeModal();
    }
  };

  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
  }, [basketItems]);

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
        {accessories.map((image, index) => (
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
      <div className='flex justify-center flex-row mt-20'>
        {accessoriesTwo.map((image, index) => (
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
      <div className='flex justify-center flex-row mt-20'>
        {accessoriesThree.map((image, index) => (
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

export default Accessories;
