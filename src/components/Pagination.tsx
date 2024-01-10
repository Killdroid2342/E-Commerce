import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='flex justify-center mt-4'>
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`mx-2 px-2 py-1 border rounded ${
            page === currentPage ? 'bg-blue-500 text-white' : 'bg-white'
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
