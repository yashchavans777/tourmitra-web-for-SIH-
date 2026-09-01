import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

const GuideCard = ({ guide }) => {
  // Fallback check just in case the guide prop is missing
  if (!guide) return null;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      
      {/* Top Image Placeholder */}
      <div className="h-48 bg-gray-300 relative w-full flex items-center justify-center text-gray-500">
        <span>Image Placeholder</span>
        
        {/* Rating Badge (Top Right) */}
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
          <Star size={14} className="text-yellow-500 fill-current" />
          <span className="text-sm font-bold text-gray-800">{guide.rating}</span>
        </div>
      </div>
      
      {/* Card Body */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            {guide.name}
            {/* KYC Verified Icon */}
            {guide.kycVerified && (
              <ShieldCheck size={16} className="text-blue-500" title="KYC Verified" />
            )}
          </h3>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">{guide.specialty}</p>
        
        <p className="text-lg font-bold text-green-800 mb-4">
          {guide.pricePerDay} <span className="text-xs text-gray-500 font-normal">/ day</span>
        </p>
        
        {/* Language Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {guide.languages?.map((lang, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium border border-gray-200"
            >
              {lang}
            </span>
          ))}
        </div>
        
        {/* Book Button */}
        <button className="w-full bg-green-800 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default GuideCard;