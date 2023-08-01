import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='bg-neutral-800'>
        <h2 className='text-white ml-80 pt-10 text-3xl'>
          StockX. Access the Now.
        </h2>
        <ul className='flex flex-row'>
          <li className='text-white ml-80 text-2xl mt-10'>Shoes</li>
          <li className='text-white ml-80 text-2xl mt-10'>Accessories</li>
          <li className='text-white ml-80 text-2xl mt-10'>Electronics</li>
        </ul>
        <p className='font-bold text-white text-center mt-10 text-3xl'>
          This is not the real StockX. This is just a project for my GitHub. DO
          NOT ENTER ANY DETAILS ON THE SITE
        </p>
        <div className='border border-neutral-500 mt-5'></div>
        <p className='text-white ml-80 mt-10 w-96 pl-5 p-2 text-2xl border-2 border-white'>
          United Kingdom | English | £GBP
        </p>
        <div className='bg-neutral-950 text-center text-white p-10 mt-8'>
          This GitHub repository, authored by Killdroid2342, is intended as a
          non-functional practice project, distinct from the actual StockX
          platform, and should not be mistaken for the genuine service. Serving
          as a learning exercise, this dummy project potentially allows
          Killdroid2342 to develop skills in web development, UI/UX design, and
          collaboration using Git and GitHub workflows. By clearly stating its
          purpose as a learning tool, this repository might offer a space for
          experimentation, skill showcase, and collaboration, while also serving
          as a portfolio piece to demonstrate growth and proficiency over time.
          It provides a valuable resource for learning and development,
          featuring a disclaimer to emphasize its non-official status compared
          to StockX.
        </div>
      </footer>
    </>
  );
};

export default Footer;
