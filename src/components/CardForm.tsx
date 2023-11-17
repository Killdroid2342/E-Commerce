const CardForm = ({ submitCard, cardInput }: any) => {
  return (
    <div className='flex flex-col items-center'>
      <form className='border border-red-900 p-4 w-96' onSubmit={submitCard}>
        <div className='mb-2 flex flex-col'>
          <label>FullName:</label>
          <input
            type='text'
            placeholder='John Doe'
            required
            maxLength={16}
            className='border border-neutral-500 p-2 focus:outline-none'
            name='FullName'
            onChange={cardInput}
          />
        </div>

        <div className='mb-2 flex flex-col'>
          <label>Card Number:</label>
          <input
            type='text'
            placeholder='1234 1234 1234 1234'
            required
            maxLength={16}
            className='border border-neutral-500 p-2 focus:outline-none'
            name='CardNumber'
            onChange={cardInput}
          />
        </div>

        <div className='mb-2 flex flex-col'>
          <label>Expiration Date:</label>
          <input
            type='text'
            placeholder='10/25'
            maxLength={5}
            required
            className='border border-neutral-500 p-2 focus:outline-none'
            name='ExpirationDate'
            onChange={cardInput}
          />
        </div>

        <div className='mb-2 flex flex-col'>
          <label>Security Code:</label>
          <input
            type='text'
            placeholder='123'
            maxLength={3}
            required
            className='border border-neutral-500 p-2 focus:outline-none'
            name='SecurityCode'
            onChange={cardInput}
          />
        </div>
        <div className='mb-2 flex flex-col'>
          <label>Add Money:</label>
          <input
            type='number'
            placeholder='£0'
            required
            className='border border-neutral-500 p-2 focus:outline-none appearance-none'
            name='Money'
            onChange={cardInput}
          />
        </div>

        <input
          type='submit'
          value='Create Card'
          className='bg-blue-500 text-white p-2 rounded-lg cursor-pointer hover:bg-blue-700'
        />
      </form>
    </div>
  );
};

export default CardForm;
