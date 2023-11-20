// import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useState, useEffect } from 'react';

const { VITE_API_URL } = import.meta.env;
interface Account {
  account: string;
  Money: string;
  CardNumber: string;
  ExpirationDate: string;
  SecurityCode: string;
  FullName: string;
}

const PaymentForm = () => {
  // const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(true);
  const [accountInfo, setAccountInfo] = useState<Account[]>([]);
  const [formData, setFormData] = useState({
    FullName: '',
    CardNumber: '',
    ExpirationDate: '',
    SecurityCode: '',
  });
  console.log(accountInfo, 'this is accoutn info');
  console.log(accountInfo[0]?.CardNumber, 'this is accoutn info');
  const instance = axios.create({
    baseURL: VITE_API_URL,
  });
  async function getAccountInfo() {
    const res = await instance.get('/card/accountInfo');
    setAccountInfo(res.data);
  }
  useEffect(() => {
    getAccountInfo();
  }, []);
  const storedItems = localStorage.getItem('basketItems');
  const items = storedItems ? JSON.parse(storedItems) : [];
  console.log(items, 'these are the items');

  if (items.length > 0) {
    items.forEach((item: any, index: any) => {
      console.log(
        `Item ${index + 1}:`,
        item.name,
        item.price,
        item.shoe,
        item.amount,
        accountInfo[0]?.account,
        'this is the data sent to the database'
      );
    });
  } else {
    console.log('No items in the array');
  }
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const submitPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData, 'this is form data');

    if (
      formData.CardNumber === accountInfo[0]?.CardNumber &&
      formData.FullName === accountInfo[0]?.FullName &&
      formData.ExpirationDate === accountInfo[0]?.ExpirationDate &&
      formData.SecurityCode === accountInfo[0]?.SecurityCode
    ) {
      const storedItems = localStorage.getItem('basketItems');
      const items = storedItems ? JSON.parse(storedItems) : [];

      try {
        await Promise.all(
          items.map(async (item: any) => {
            const res = await instance.post('/items/purchasedItems', {
              name: item.name,
              price: item.price,
              shoe: item.shoe,
              amount: item.amount,
              account: accountInfo[0]?.account,
            });
            console.log(res, 'this is res for item:', item);
          })
        );
        console.log('All purchases successful');
        localStorage.removeItem('basketItems');
        // navigate('/PurchasedItems');
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('Incorrect payment details');
    }
  };

  return (
    <>
      <h2 className='text-5xl text-center p-10'>Payment</h2>
      <div className='min-w-screen flex items-center justify-center px-5 pb-10 '>
        <form className='w-full rounded-lg bg-white shadow-lg p-5 pt-1 pb-5'>
          <h1 className='text-center font-bold text-xl mb-10 pt-10'>
            Secure payment info
          </h1>
          <div className='mb-3 flex -mx-2 px-2'>
            <label className='flex items-center cursor-pointer'>
              <input
                type='radio'
                className='h-5 w-5'
                checked
                onChange={() => setIsChecked(!isChecked)}
              />
              <img
                src='https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png'
                className='h-8 ml-3'
              />
            </label>
          </div>
          <div className='mb-3'>
            <label className='font-bold text-sm mb-2 ml-1'>Full Name</label>
            <input
              className='w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
              placeholder='John Doe'
              type='text'
              onChange={handleInputChange}
              name='FullName'
            />
          </div>
          <div className='mb-3'>
            <label className='font-bold text-sm mb-2 ml-1'>Card number</label>
            <input
              className='w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
              placeholder='0000 0000 0000 0000'
              type='text'
              maxLength={16}
              onChange={handleInputChange}
              name='CardNumber'
            />
          </div>
          <div className='mb-3'>
            <label className='font-bold text-sm mb-2 ml-1'>
              Expiration date
            </label>
            <input
              className='w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
              placeholder='10/25'
              type='text'
              maxLength={5}
              name='ExpirationDate'
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-10 flex flex-col'>
            <label className='font-bold text-sm mb-2 ml-1'>Security code</label>
            <input
              className='w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
              placeholder='000'
              type='text'
              maxLength={3}
              onChange={handleInputChange}
              name='SecurityCode'
            />
          </div>
          <div>
            <input
              type='submit'
              onClick={submitPayment}
              className='block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold'
              value='PAY NOW'
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;
