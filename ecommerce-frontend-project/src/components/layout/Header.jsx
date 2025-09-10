import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to={"/"} className="text-2xl font-bold text-gray-800 tracking-wider">
            Ecommerce
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out font-medium">
              {link.name}
            </a>
          ))}
        </nav>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to={"#"} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out">
            <User size={24} />
          </Link>
          <Link to={"#"} className="relative text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out">
            <ShoppingCart size={24} />
            <span className="absolute -top-1 -right-1.5 w-4 h-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
              3
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to={"#"} className="relative text-gray-600 hover:text-gray-900">
            <ShoppingCart size={24} />
            <span className="absolute -top-1 -right-1.5 w-4 h-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
              3
            </span>
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200 transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <Link
              to={"#"}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              <User size={20} className="mr-2" />
              Profile
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
