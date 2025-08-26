import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center h-16 px-4 justify-between">
       
        <div className="flex items-center space-x-10"> 
          <h1 className="text-2xl font-bold">TimeZone</h1>
          <ul className="hidden md:flex space-x-6 font-medium">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-400">
                Products
              </Link>
            </li>
          </ul>
        </div>

       
        <div className="flex items-center space-x-10 font-medium">
          <ul className='hidden md:flex space-x-6'>
            <button className='bg-orange-600 px-4 py-1 rounded hover:bg-orange-700'>
          <Link to="/login" className="hover:text-white">
            Log In
          </Link>
          </button>
          <Link to="/cart" className="relative hover:text-gray-400">
            <img src="/cart2.ico" alt="Cart" />
          </Link>
          </ul>
         

             {/* Mobile menu */}
      <button className='md:hidden text-2xl'
      onClick={()  => setIsOpen(!isOpen)}
      >☰
      </button>
    
        </div>
      
      
      </div>
        {isOpen && (
        <ul className="md:hidden bg-gray-800 shadow-md p-4 space-y-3">
          <li><Link to="/" className="block">Home</Link></li>
          <li><Link to="/products" className="block">Products</Link></li>
          <li><Link to="/login" className="block">Log In</Link></li>
          <li><Link to="/cart" className="block">Cart</Link></li>
          
        </ul>
      )}

     
    </nav>
  );
}

export default Navbar;
