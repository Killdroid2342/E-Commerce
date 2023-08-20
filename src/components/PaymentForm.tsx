const PaymentForm = () => {
  return (
    <>
      <h2 className='text-5xl text-center p-10'>Payment</h2>
      <div className='min-w-screen flex items-center justify-center px-5 pb-10 '>
        <div className='w-full rounded-lg bg-white shadow-lg p-5'>
          <div className='w-full pt-1 pb-5'></div>
          <div className='mb-10'>
            <h1 className='text-center font-bold text-xl'>
              Secure payment info
            </h1>
          </div>
          <div className='mb-3 flex -mx-2'>
            <div className='px-2'>
              <label
                htmlFor='type1'
                className='flex items-center cursor-pointer'
              >
                <input
                  type='radio'
                  className='form-radio h-5 w-5'
                  name='type'
                  id='type1'
                  checked
                />
                <img
                  src='https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png'
                  className='h-8 ml-3'
                  alt='Type 1'
                />
              </label>
            </div>
            <div className='px-2'>
              <label
                htmlFor='type2'
                className='flex items-center cursor-pointer'
              >
                <input
                  type='radio'
                  className='form-radio h-5 w-5'
                  name='type'
                  id='type2'
                />
                <img
                  src='https://www.sketchappsources.com/resources/source-image/PayPalCard.png'
                  className='h-8 ml-3'
                  alt='Type 2'
                />
              </label>
            </div>
          </div>
          <div className='mb-3'>
            <label className='font-bold text-sm mb-2 ml-1'>Card number</label>
            <div>
              <input
                className='w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
                placeholder='0000 0000 0000 0000'
                type='text'
              />
            </div>
          </div>
          <div className='mb-3 -mx-2 flex items-end'>
            <div className='px-2 w-1/2'>
              <label className='font-bold text-sm mb-2 ml-1'>
                Expiration date
              </label>
              <div>
                <select className='form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer'>
                  <option value='Jan'>January</option>
                  <option value='Feb'>February</option>
                  <option value='Mar'>March</option>
                  <option value='Apr'>April</option>
                  <option value='May'>May</option>
                  <option value='Jun'>June</option>
                  <option value='Jul'>July</option>
                  <option value='Aug'>August</option>
                  <option value='Sep'>September</option>
                  <option value='Oct'>October</option>
                  <option value='Nov'>November</option>
                  <option value='Dec'>December</option>
                </select>
              </div>
            </div>
            <div className='px-2 w-1/2'>
              <select className='form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer'>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
                <option value='2025'>2025</option>
                <option value='2026'>2026</option>
                <option value='2027'>2027</option>
                <option value='2028'>2028</option>
                <option value='2029'>2029</option>
                <option value='2030'>2030</option>
                <option value='2031'>2031</option>
              </select>
            </div>
          </div>
          <div className='mb-10'>
            <label className='font-bold text-sm mb-2 ml-1'>Security code</label>
            <div>
              <input
                className='w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
                placeholder='000'
                type='text'
              />
            </div>
          </div>
          <div>
            <button className='block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold'>
              PAY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
