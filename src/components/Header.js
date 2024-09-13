import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='flex items-center space-x-8'>
      <Link to="/" className='flex items-center space-x-4'>
        <div className="w-10 h-10 bg-rose rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <span className='font-bold text-xl text-gray-800'>Movie Box</span>
      </Link>
      <nav>
        <ul className='flex items-start space-x-2'>
          {/* <li className='text-gray-600 hover:text-gray-800'>
            <Link to="/">Home</Link>
          </li> */}
          <li className='text-gray-600 hover:text-gray-800'>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;