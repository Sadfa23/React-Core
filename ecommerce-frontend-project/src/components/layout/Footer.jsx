import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 font-inter py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Company Info */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Ecommerce</h3>
            <p className="text-sm leading-relaxed">
              We offer the best quality products for all your needs.
              From fashion to gadgets, we've got you covered with
              style and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors duration-200">Shop All</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors duration-200">FAQs</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
          © 2025 Ecommerce. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;