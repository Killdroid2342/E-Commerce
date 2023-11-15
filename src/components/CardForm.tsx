const CardForm = ({ submitCard, cardInput, cardForm, setCardForm }: any) => {
  const closeCardForm = () => {
    setCardForm(!cardForm);
  };

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black'>
        <div className='bg-white p-8 rounded-lg overflow-auto max-h-96 w-96'>
          <button
            onClick={closeCardForm}
            className='absolute top-2 right-2 px-3 py-2 bg-gray-500 text-white rounded-lg mt-40'
          >
            X
          </button>
          <form
            className='border border-red-900 flex flex-col'
            onSubmit={submitCard}
          >
            <label>First Name: </label>
            <input
              placeholder='John'
              type='text'
              required
              maxLength={16}
              className='border border-neutral-500 focus:outline-none'
              name='FirstName'
              onChange={cardInput}
            />
            <label>Last Name: </label>
            <input
              placeholder='Doe'
              type='text'
              required
              maxLength={16}
              className='border border-neutral-500 focus:outline-none'
              name='LastName'
              onChange={cardInput}
            />
            <label>Card Number: </label>
            <input
              placeholder='1234 1234 1234 1234'
              type='text'
              required
              maxLength={16}
              className='border border-neutral-500 focus:outline-none'
              name='cardNumber'
              onChange={cardInput}
            />
            <label>Expiration Date: </label>
            <input
              type='text'
              placeholder='10/25'
              maxLength={5}
              required
              className='border border-neutral-500 focus:outline-none'
              name='expirationDate'
              onChange={cardInput}
            />
            <label>Security Code: </label>
            <input
              type='text'
              placeholder='123'
              maxLength={3}
              required
              className='border border-neutral-500 focus:outline-none'
              name='securityCode'
              onChange={cardInput}
            />
            <input
              type='submit'
              value='Create Card'
              className='border border-black rounded-lg'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CardForm;
