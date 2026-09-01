// kdfjhbiguaysrh
import React from 'react';
import { Star } from 'lucide-react';

const GuideCard = ({ guide }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 flex flex-col">
      {/* Top Image Placeholder */}
      <div className="h-48 bg-gray-200 relative">
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-sm font-bold flex items-center gap-1 shadow">
          <Star size={16} className="text-yellow-500 fill-yellow-500" />
          {guide?.rating || "New"}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900">{guide?.name || "Unknown Guide"}</h3>
        <p className="text-green-800 font-medium text-sm mb-2">{guide?.specialty || "General Tour"}</p>
        <p className="text-gray-700 font-semibold mb-4">{guide?.pricePerDay || "Contact for price"} / day</p>

        {/* Languages Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {guide?.languages?.map((lang, index) => (
            <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
              {lang}
            </span>
          ))}
        </div>

        {/* Book Button */}
        <button className="mt-auto w-full bg-green-800 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default GuideCard;