import React, { useEffect, useState } from 'react';
import Nav from '../components/nav/Nav';
import CardForm from '../components/CardForm';
import { Item } from './Shoes';
import { Canvas } from '@react-three/fiber';

import Card from '../components/Card';

const CreateCard = () => {
  const [creditCard, setCreditCard] = useState({});
  const [cardForm, setCardForm] = useState(false);
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
  const openCardForm = () => {
    setCardForm(!cardForm);
  };
  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
  }, [basketItems]);

  return (
    <>
      <Nav basketItems={basketItems} setBasketItems={setBasketItems} />
      <h1 className='text-center p-2 text-2xl mt-5'>Create Your Own Card</h1>
      <div className='flex flex-col justify-center items-center mt-24'>
        <div className='border border-black w-96 h-96'>
          <Canvas>
            <ambientLight />
            <pointLight position={[5, 5, 5]} />
            <Card />
          </Canvas>
        </div>
        <p onClick={openCardForm} className='cursor-pointer mt-20 text-2xl'>
          Edit Card
        </p>
        {cardForm && (
          <CardForm
            submitCard={submitCard}
            cardInput={cardInput}
            cardForm={cardForm}
            setCardForm={setCardForm}
          />
        )}
      </div>
    </>
  );
};

export default CreateCard;
