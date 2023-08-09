const NotFound = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='mb-4 text-2xl font-bold'>Page Not Found</h1>
        <div className='flex items-center'>
          <div className='mr-4'>
            <img src='src/assets/images/NotFound.png' alt='X' />
          </div>
          <p className='text-center font-bold'>
            Hey there user, This page does not exist. Try again Later.
          </p>
          <div className='ml-4'>
            <img src='src/assets/images/NotFound.png' alt='X' />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
