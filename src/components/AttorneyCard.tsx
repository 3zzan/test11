import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

interface AttorneyProps {
  name: string;
  role: string;
  image: string;
  specialties: string[];
  email: string;
  phone: string;
  linkedin: string;
}

export default function AttorneyCard({ name, role, image, specialties, email, phone, linkedin }: AttorneyProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img src={image} alt={name} className="w-full h-80 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-indigo-700 font-semibold mb-4">{role}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <a href={`mailto:${email}`} className="flex items-center space-x-2 text-gray-600 hover:text-indigo-700">
            <Mail className="h-4 w-4" />
            <span>{email}</span>
          </a>
          <a href={`tel:${phone}`} className="flex items-center space-x-2 text-gray-600 hover:text-indigo-700">
            <Phone className="h-4 w-4" />
            <span>{phone}</span>
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-700">
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}