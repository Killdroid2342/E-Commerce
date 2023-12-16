import React, { useEffect, useState } from 'react';
import Nav from '../components/nav/Nav';
import CardForm from '../components/CardForm/CardForm';
import { Item } from './Shoes';
import { Canvas } from '@react-three/fiber';
const { VITE_API_URL } = import.meta.env;
import Card from '../components/Card';
import axios from 'axios';
import Cookies from 'js-cookie';
import { decodeToken } from 'react-jwt';
import ResModal from '../components/Forms/Form-Modal/ResModal';
interface CreditCard {
  CardNumber: string;
  ExpirationDate: string;
  FullName: string;
  Money: number;
  SecurityCode: string;
}
const CreateCard = () => {
  const [creditCard, setCreditCard] = useState<CreditCard>({
    CardNumber: '',
    ExpirationDate: '',
    FullName: '',
    Money: 0,
    SecurityCode: '',
  });
  const initialBasketItems = localStorage.getItem('basketItems');
  const [basketItems, setBasketItems] = useState<Item[]>(
    initialBasketItems ? JSON.parse(initialBasketItems) : []
  );
  const [modal, setModal] = useState(false);

  const [clientUsername, setClientUsername] = useState('');
  const instance = axios.create({
    baseURL: VITE_API_URL,
  });
  const usernameJWT = () => {
    const getJWT = Cookies.get('UserjwtToken');
    if (getJWT) {
      const decodedTokenUsername = (decodeToken(getJWT) as { username: string })
        .username;
      setClientUsername(decodedTokenUsername);
    } else return;
  };
  useEffect(() => {
    usernameJWT();
  }, []);
  async function submitCard(e: React.FormEvent) {
    e.preventDefault();

    const res = await instance.post('/card/uploadDetails', {
      CardNumber: creditCard.CardNumber,
      ExpirationDate: creditCard.ExpirationDate,
      FullName: creditCard.FullName,
      Money: creditCard.Money,
      SecurityCode: creditCard.SecurityCode,
      account: clientUsername,
    });
    setModal(res.data.message);

    setTimeout(() => {
      setModal(false);
    }, 2000);
  }

  function cardInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCreditCard((data) => ({
      ...data,
      [name]: value,
    }));
  }
  const removeCard = async () => {
    try {
      const res = await instance.post('/card/removeCard', {
        account: clientUsername,
      });

      setModal(res.data.message);

      setTimeout(() => {
        setModal(false);
      }, 2000);
    } catch (error) {
      console.error('Error removing card:', error);
    }
  };

  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
  }, [basketItems]);

  return (
    <>
      <Nav basketItems={basketItems} setBasketItems={setBasketItems} />
      {modal !== false ? <ResModal responseMessage={modal} /> : ''}
      <h1 className='text-center p-2 text-2xl mt-5'>Create Your Own Card</h1>
      <h2 className='text-center p-2 text-2xl mt-5'>
        Disclaimer: Do Not Put any real credit card details inside of these
        forms. This is only a demo and make your own details up.
      </h2>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-col md:flex-row items-center justify-center mt-10 md:mt-2 w-8/12'>
          <div className='border border-red-900 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-96 rounded-md mb-5'>
            <Canvas>
              <ambientLight />
              <pointLight position={[5, 5, 5]} />
              <Card />
            </Canvas>
          </div>
          <div className='w-full md:w-1/2 lg:w-2/3 xl:w-3/4'>
            <CardForm
              submitCard={submitCard}
              cardInput={cardInput}
              removeCard={removeCard}
              clientUsername={clientUsername}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCard;
