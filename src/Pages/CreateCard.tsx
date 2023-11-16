import React, { useEffect, useState } from 'react';
import Nav from '../components/nav/Nav';
import CardForm from '../components/CardForm';
import { Item } from './Shoes';
import { Canvas } from '@react-three/fiber';

import Card from '../components/Card';

const CreateCard = () => {
  const [creditCard, setCreditCard] = useState({});
  const initialBasketItems = localStorage.getItem('basketItems');
  const [basketItems, setBasketItems] = useState<Item[]>(
    initialBasketItems ? JSON.parse(initialBasketItems) : []
  );
  function submitCard(e: React.FormEvent) {
    e.preventDefault();
    console.log('FORM CLICKED');
    console.log(creditCard);
  }

  function cardInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCreditCard((data) => ({
      ...data,
      [name]: value,
    }));
  }

  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
  }, [basketItems]);

  return (
    <>
      <Nav basketItems={basketItems} setBasketItems={setBasketItems} />
      <h1 className='text-center p-2 text-2xl mt-5'>Create Your Own Card</h1>
      <h2 className='text-center p-2 text-2xl mt-5'>
        Disclaimer: Do Not Put any real credit card details inside of these
        forms. This is only a demo and make your own details up.
      </h2>
      <div className='flex flex-row justify-center items-center mt-24'>
        <div className='border border-black w-96 h-96 mr-4'>
          {' '}
          <Canvas>
            <ambientLight />
            <pointLight position={[5, 5, 5]} />
            <Card />
          </Canvas>
        </div>
        <div className='w-96'>
          <CardForm submitCard={submitCard} cardInput={cardInput} />
        </div>
      </div>
    </>
  );
};

export default CreateCard;
