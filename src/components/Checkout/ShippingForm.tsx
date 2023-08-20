import Countries from './Countries/Countries';

const ShippingForm = () => {
  return (
    <>
      <div className='flex justify-center p-10 border-b border-neutral-300 bg-white'>
        <img src='src/assets/images/logo.png' alt='' className='w-80' />
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='text-5xl'>Shipping</h2>
        <p className='text-2xl mt-3'>Please provide your shipping info</p>
        <p className='font-bold mt-10 text-2xl'>Shipping Info</p>
        <div className='flex flex-col'>
          <label className='mt-5 text-xl text-black'>First Name</label>
          <input
            type='text'
            className='w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
            placeholder='John'
          />
          <label>Last Name</label>
          <input
            type='text'
            className='w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
            placeholder='Doe'
          />
          <label>Country</label>
          <Countries />
          <label>Address</label>
          <input
            type='text'
            className='w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
            placeholder='Street Address'
          />
          <label>Address 2</label>
          <input
            type='text'
            className='w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
            placeholder='Apartment, suite, unit, building, floor, etc.'
          />
          <label>City</label>
          <input
            type='text'
            className='w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
          />
          <label>Postal Code</label>
          <input
            type='text'
            className='w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
          />
          <label>Phone Number</label>
          <input
            type='number'
            className='w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
          />
        </div>
      </div>
    </>
  );
};

export default ShippingForm;
