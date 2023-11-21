const AddMoney = ({ setMoneyModal }: any) => {
  const closeModal = () => {
    setMoneyModal(false);
  };
  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black'>
        <div className='bg-white p-4 rounded-lg overflow-auto max-h-96'>
          <button
            onClick={closeModal}
            className='mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg'
          >
            X
          </button>
          <h2 className='text-2xl font-semibold mb-4'>Add Money Here</h2>
          <form action=''>
            <input type='number' name='money' placeholder='Add Money' />
            <input type='submit' />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMoney;
