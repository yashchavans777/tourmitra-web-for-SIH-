import React from 'react';
import { 
  MapPin, Star, Clock, Ticket, Calendar, 
  Camera, Info, Map, DownloadCloud, ChevronLeft, ShieldCheck 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TouristPlace() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gray-50 pb-12">
      
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Shaniwar Wada" 
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-10 flex items-center justify-center rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition hover:bg-white/30"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-emerald-300 mb-2">
              <span className="flex items-center gap-1 bg-gray-900/60 px-3 py-1 rounded-full backdrop-blur-sm border border-gray-700">
                <MapPin size={14} /> Pune, Maharashtra
              </span>
              <span className="flex items-center gap-1 bg-amber-500/90 text-white px-3 py-1 rounded-full backdrop-blur-sm border border-amber-400">
                <Star size={14} className="fill-white" /> 4.8 (2.4k Reviews)
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Shaniwar Wada</h1>
            <p className="text-gray-300 mt-2 text-lg max-w-2xl line-clamp-2">
              The historical fortification and great seat of the Peshwas of the Maratha Empire.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About Section */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this place</h2>
              <p className="text-gray-600 leading-relaxed">
                Built in 1732, Shaniwar Wada was the magnificent seven-storied capital building of the Maratha Empire. Although mostly destroyed by a fire in 1828, the surviving structures, including the massive Dilli Darwaza (Delhi Gate), lotus-shaped fountain, and robust boundary walls, offer a mesmerizing glimpse into India's rich history.
              </p>
            </div>

            {/* Highlights Grid */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl flex flex-col items-center text-center gap-2">
                  <ShieldCheck size={28} className="text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-900">Historical Fort</span>
                </div>
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex flex-col items-center text-center gap-2">
                  <Camera size={28} className="text-blue-600" />
                  <span className="text-sm font-semibold text-blue-900">Photography</span>
                </div>
                <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex flex-col items-center text-center gap-2">
                  <Info size={28} className="text-amber-600" />
                  <span className="text-sm font-semibold text-amber-900">Guided Tours</span>
                </div>
              </div>
            </div>

            {/* Practical Info */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Practical Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl text-gray-500">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Opening Hours</h4>
                    <p className="text-sm text-gray-600 mt-1">Everyday: 8:00 AM - 6:30 PM</p>
                    <p className="text-xs text-amber-600 font-medium mt-0.5">Light & Sound Show starts at 7:15 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl text-gray-500">
                    <Ticket size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Entry Fees</h4>
                    <p className="text-sm text-gray-600 mt-1">Indians: ₹25 | Foreigners: ₹300</p>
                    <p className="text-xs text-gray-500 mt-0.5">Light & Sound Show: Additional ₹25</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl text-gray-500">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Best Time to Visit</h4>
                    <p className="text-sm text-gray-600 mt-1">October to March (Winter months)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Actions Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Primary Action Card */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 sticky top-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Plan Your Visit</h3>
              
              <button 
                onClick={() => navigate('/routes')}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3.5 rounded-xl hover:bg-emerald-700 transition-colors shadow-md mb-3"
              >
                <Map size={20} />
                Get Directions
              </button>

              <button 
                onClick={() => navigate('/offline-guide')}
                className="w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 font-bold py-3.5 rounded-xl hover:bg-blue-100 transition-colors mb-6"
              >
                <DownloadCloud size={20} />
                Offline Audio Guide
              </button>

              <hr className="border-gray-100 mb-6" />

              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Available Local Guides</h4>
                <div className="space-y-3">
                  {/* Mock Guide 1 */}
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">R</div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Ramesh K.</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1"><Star size={10} className="fill-amber-500 text-amber-500"/> 4.9</p>
                      </div>
                    </div>
                    <button onClick={() => navigate('/guides')} className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg">Hire</button>
                  </div>
                  {/* Mock Guide 2 */}
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold">P</div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Priya M.</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1"><Star size={10} className="fill-amber-500 text-amber-500"/> 4.7</p>
                      </div>
                    </div>
                    <button onClick={() => navigate('/guides')} className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg">Hire</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}