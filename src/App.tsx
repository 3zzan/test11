import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AttorneyCard from './components/AttorneyCard';
import Contact from './components/Contact';

const attorneys = [
  {
    name: "Sarah J. Mitchell",
    role: "Managing Partner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    specialties: ["Corporate Law", "Mergers & Acquisitions", "International Business"],
    email: "sarah.mitchell@justice-associates.com",
    phone: "(555) 123-4567",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Michael R. Thompson",
    role: "Senior Partner",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80",
    specialties: ["Criminal Defense", "Civil Litigation", "Constitutional Law"],
    email: "michael.thompson@justice-associates.com",
    phone: "(555) 123-4568",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Elena Rodriguez",
    role: "Partner",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    specialties: ["Immigration Law", "Family Law", "Human Rights"],
    email: "elena.rodriguez@justice-associates.com",
    phone: "(555) 123-4569",
    linkedin: "https://linkedin.com"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <section id="attorneys" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Our Legal Team
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Meet our experienced attorneys who are dedicated to providing exceptional legal services and protecting your interests.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attorneys.map((attorney, index) => (
              <AttorneyCard key={index} {...attorney} />
            ))}
          </div>
        </div>
      </section>

      <Contact />
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2">© 2024 Justice & Associates. All rights reserved.</p>
            <p className="text-gray-400">Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;