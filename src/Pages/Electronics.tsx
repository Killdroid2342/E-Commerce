import { useEffect, useState } from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { Item } from './Shoes';
import axios from 'axios';
import Pagination from '../components/Pagination';
const { VITE_API_URL } = import.meta.env;

const instance = axios.create({
  baseURL: VITE_API_URL,
});

interface ElectronicsItems {
  img: string;
  des: string;
  lowPrice: string;
  price: number;
  name: string;
}

const Electronics = () => {
  const [modalI, setModalI] = useState(null);
  const [amount, setAmount] = useState(1);
  const initialBasketItems = localStorage.getItem('basketItems');
  const [basketItems, setBasketItems] = useState<Item[]>(
    initialBasketItems ? JSON.parse(initialBasketItems) : []
  );
  const [electronics, setElectronics] = useState<ElectronicsItems[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  async function getElectronics() {
    const res = await instance.get('/items/allItems');
    const ElectronicItems = res.data.filter(
      (item: any) => item.des === 'This is a Electronics'
    );

    setElectronics(ElectronicItems);
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
      const selectedShoe = electronics.find(
        (electronics) => electronics.img === modalI
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
    getElectronics();
  }, []);
  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
  }, [basketItems, electronics]);

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
      <div className='grid grid-cols-4 gap-4'>
        {electronics.slice(startIndex, endIndex).map((image, index) => (
          <div
            key={index}
            className='border border-neutral-400 cursor-pointer mt-10'
          >
            <img
              src={image.img}
              alt={`Product ${index}`}
              className='w-56 h-48'
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
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(electronics.length / itemsPerPage)}
        onPageChange={(page: any) => setCurrentPage(page)}
      />
      <Footer />
    </div>
  );
};

export default Electronics;
