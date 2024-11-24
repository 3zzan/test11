import React from 'react';
import { Scale, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-indigo-700" />
            <span className="text-2xl font-semibold text-gray-900">Justice & Associates</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-700 transition-colors">
              Home
            </a>
            <a href="#attorneys" className="text-gray-700 hover:text-indigo-700 transition-colors">
              Our Team
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-700 transition-colors">
              Contact
            </a>
            <div className="flex items-center space-x-2 text-indigo-700">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">1-800-JUSTICE</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}