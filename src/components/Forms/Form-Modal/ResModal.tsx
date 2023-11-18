const ResModal = (props: any) => {
  return (
    <div className='fixed top-0 left-0 w-full mt-5 flex items-center justify-center z-50'>
      <div className='w-96 bg-black bg-opacity-60 p-4 flex items-center justify-center rounded-xl '>
        <p className='w-40 text-2xl text-white'>{props.responseMessage}</p>
      </div>
    </div>
  );
};

export default ResModal;
