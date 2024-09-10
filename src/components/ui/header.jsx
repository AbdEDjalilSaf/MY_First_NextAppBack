// components/Header.js
"use client"
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-100 py-4 font-bold shadow ">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
         <h3 className='text-black text-3xl'>Logo</h3>
        </div>
        <nav className="flex items-center space-x-4 text-lg">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/Team" className="text-gray-700 hover:text-gray-900">
          Team
          </Link>
          <button
          className="bg-red-500 text-white text-base px-4 py-2 rounded hover:bg-red-600">
          Log Out
        </button>
        </nav>
       
      </div>
    </header>
  );
};

export default Header;
