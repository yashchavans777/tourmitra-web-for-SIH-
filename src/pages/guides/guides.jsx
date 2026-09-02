import React, { useState } from 'react';
// Make sure this path matches where your GuideCard and mockData actually are!
import GuideCard from '../../components/GuideCard';
import { mockGuides } from '../../utils/mockData';

const Guides = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Any Language');
  const [selectedPrice, setSelectedPrice] = useState('Any Price');

  const filteredGuides = (mockGuides ?? []).filter((guide) => {
    const matchesLanguage =
      selectedLanguage === 'Any Language' || guide?.languages?.includes(selectedLanguage);

    const numericPrice = Number(String(guide?.pricePerDay ?? '').replace(/[^\d.]/g, ''));

    const matchesPrice =
      selectedPrice === 'Any Price' ||
      (selectedPrice === 'Under ₹1,200' && numericPrice < 1200) ||
      (selectedPrice === '₹1,200 - ₹1,500' && numericPrice >= 1200 && numericPrice <= 1500) ||
      (selectedPrice === 'Above ₹1,500' && numericPrice > 1500);

    return matchesLanguage && matchesPrice;
  });

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold text-green-900 mb-6">Find a Verified Guide</h1>
      
      {/* Filter Bar */}
      <div className="flex gap-4 mb-8 bg-gray-50 p-4 rounded-lg shadow-sm">
        <select
          value={selectedPrice}
          onChange={(event) => setSelectedPrice(event.target.value)}
          className="border p-2 rounded"
        >
          <option>Any Price</option>
          <option>Under ₹1,200</option>
          <option>₹1,200 - ₹1,500</option>
          <option>Above ₹1,500</option>
        </select>
        <select
          value={selectedLanguage}
          onChange={(event) => setSelectedLanguage(event.target.value)}
          className="border p-2 rounded"
        >
          <option>Any Language</option>
          <option>Hindi</option>
          <option>English</option>
          <option>Marathi</option>
        </select>
        <button className="bg-green-800 text-white px-4 py-2 rounded font-medium hover:bg-green-700">
          Apply Filters
        </button>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
  );
};

export default Guides;