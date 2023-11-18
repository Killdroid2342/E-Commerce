import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const PaymentForm = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(true);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const years = [
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030',
    '2031',
    '2032',
    '2033',
    '2034',
    '2035',
    '2036',
    '2037',
    '2038',
  ];
  return (
    <>
      <h2 className='text-5xl text-center p-10'>Payment</h2>
      <div className='min-w-screen flex items-center justify-center px-5 pb-10 '>
        <form className='w-full rounded-lg bg-white shadow-lg p-5'>
          <div className='w-full pt-1 pb-5'></div>
          <div className='mb-10'>
            <h1 className='text-center font-bold text-xl'>
              Secure payment info
            </h1>
          </div>
          <div className='mb-3 flex -mx-2'>
            <div className='px-2'>
              <label className='flex items-center cursor-pointer'>
                <input
                  type='radio'
                  className=' h-5 w-5'
                  checked
                  onChange={() => setIsChecked(!isChecked)}
                />
                <img
                  src='https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png'
                  className='h-8 ml-3'
                />
              </label>
            </div>
            <div className='px-2'>
              <label className='flex items-center cursor-pointer'></label>
            </div>
          </div>
          <div className='mb-3'>
            <label className='font-bold text-sm mb-2 ml-1'>Card number</label>
            <input
              className='w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
              placeholder='0000 0000 0000 0000'
              type='text'
              maxLength={16}
            />
          </div>
          <div className='mb-3 -mx-2 flex items-end'>
            <div className='px-2 w-1/2'>
              <label className='font-bold text-sm mb-2 ml-1'>
                Expiration date
              </label>

              <select className='form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer'>
                {months.map((allMonths, key) => {
                  return (
                    <option key={key} value={allMonths}>
                      {allMonths}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className='px-2 w-1/2'>
              <select className='form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer'>
                {years.map((allYears, key) => (
                  <option key={key} value={allYears}>
                    {allYears}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='mb-10 flex flex-col'>
            <label className='font-bold text-sm mb-2 ml-1'>Security code</label>
            <input
              className='w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
              placeholder='000'
              type='text'
              maxLength={3}
            />
          </div>
          <div>
            <input
              type='submit'
              onClick={() => navigate('/main')}
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
