import React from 'react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
          alt="Law office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 whitespace-pre-line">
            Committed to Justice,{'\n'}Dedicated to You
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            With over 25 years of combined experience, our team of expert attorneys is here to protect your rights and fight for your interests.
          </p>
          <button className="bg-indigo-700 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-800 transition duration-300">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}