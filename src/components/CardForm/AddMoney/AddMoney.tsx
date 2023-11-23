import { useState } from 'react';
import axios from 'axios';
import ResModal from '../../Forms/Form-Modal/ResModal';
const { VITE_API_URL } = import.meta.env;

interface Money {
  money: Number;
  account: String;
}

const AddMoney = ({ setMoneyModal, clientUsername }: any) => {
  const [addMoney, setAddMoney] = useState<Money>({
    account: clientUsername,
    money: 0,
  });
  const [modal, setModal] = useState(false);

  const instance = axios.create({
    baseURL: VITE_API_URL,
  });
  const closeModal = () => {
    setMoneyModal(false);
  };

  const addMoneyForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await instance.post('/card/addMoney', {
      money: addMoney.money,
      account: clientUsername,
    });
    setModal(res.data.message);
    setTimeout(() => {
      setModal(false);
    }, 2000);
  };

  function addMoneyInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setAddMoney((data) => ({
      ...data,
      [name]: parseFloat(value),
    }));
  }
  return (
    <>
      {modal !== false ? <ResModal responseMessage={modal} /> : ''}
      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black'>
        <div className='bg-white p-4 rounded-lg overflow-auto max-h-96'>
          <button
            onClick={closeModal}
            className='mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg'
          >
            X
          </button>
          <h2 className='text-2xl font-semibold mb-4'>Add Money Here</h2>
          <form action='' className='flex flex-col' onSubmit={addMoneyForm}>
            <input
              className='border border-neutral-500 p-2 focus:outline-none appearance-none rounded-lg'
              type='number'
              name='money'
              placeholder='Add Money'
              onChange={addMoneyInput}
            />
            <input
              type='submit'
              value='Add More Money'
              className='bg-blue-500 text-white p-2 rounded-lg cursor-pointer hover:bg-blue-700 m-2'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMoney;
