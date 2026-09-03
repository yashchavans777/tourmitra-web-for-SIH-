import React, { useState } from 'react';
import { Search, MapPin, Star, Navigation, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Historical', 'Nature', 'Food & Culture', 'Adventure', 'Spiritual'];

  const mockPlaces = [
    {
      id: 'shaniwar-wada',
      title: 'Shaniwar Wada',
      category: 'Historical',
      location: 'Pune Central',
      distance: '2.5 km away',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'aga-khan-palace',
      title: 'Aga Khan Palace',
      category: 'Historical',
      location: 'Kalyani Nagar',
      distance: '6.8 km away',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1621361257121-f5139a06700c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'sinhagad-fort',
      title: 'Sinhagad Fort',
      category: 'Adventure',
      location: 'Thoptewadi',
      distance: '30.0 km away',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1592349787114-1184a4ec0e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'osho-ashram',
      title: 'Osho Ashram',
      category: 'Spiritual',
      location: 'Koregaon Park',
      distance: '5.2 km away',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1519836371562-52ce65672dbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'pashan-lake',
      title: 'Pashan Lake',
      category: 'Nature',
      location: 'Pashan',
      distance: '12.4 km away',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1629158376997-6a9c13b185ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'camp-burger',
      title: 'Camp Burger',
      category: 'Food & Culture',
      location: 'Camp',
      distance: '4.1 km away',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredPlaces = activeCategory === 'All' 
    ? mockPlaces 
    : mockPlaces.filter(place => place.category === activeCategory);

  return (
    <section className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        
        {/* Header & Search */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Local Wonders</h1>
              <p className="text-gray-500">Discover hidden gems and popular attractions around you.</p>
            </div>
            <button className="flex items-center gap-2 bg-green-50 text-green-700 font-semibold px-4 py-2.5 rounded-xl border border-green-200 hover:bg-green-100 transition-colors w-max">
              <MapPin size={18} />
              Current Location
            </button>
          </div>

          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search for destinations, food, activities..." 
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-700 outline-none transition-all text-sm md:text-base"
              />
            </div>
            <button className="bg-gray-900 text-white p-3 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center sm:px-6">
              <Filter size={20} className="sm:hidden" />
              <span className="hidden sm:block font-semibold text-sm">Filter</span>
            </button>
          </div>
        </div>

        {/* Categories (Horizontal Scroll) */}
        <div className="flex overflow-x-auto pb-2 scrollbar-hide gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === category 
                  ? 'bg-green-800 text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => (
            <div 
              key={place.id}
              onClick={() => navigate(`/place/${place.id}`)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:border-green-300 transition-all cursor-pointer group flex flex-col"
            >
              {/* Card Image */}
              <div className="h-48 w-full relative overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-sm">
                  <Star size={14} className="text-amber-500 fill-amber-500" />
                  <span className="text-sm font-bold text-gray-900">{place.rating}</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 line-clamp-1 mb-1">{place.title}</h3>
                
                <div className="flex items-center gap-1.5 text-gray-500 mb-4">
                  <MapPin size={14} className="text-gray-400" />
                  <span className="text-sm font-medium">{place.location}</span>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-2.5 py-1 rounded-md">
                    {place.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 bg-gray-50 px-2.5 py-1 rounded-md">
                    <Navigation size={14} className="text-blue-500" />
                    {place.distance}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Fallback (If a category has no results) */}
        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No places found in this category.</p>
            <button 
              onClick={() => setActiveCategory('All')} 
              className="mt-4 text-green-700 font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}