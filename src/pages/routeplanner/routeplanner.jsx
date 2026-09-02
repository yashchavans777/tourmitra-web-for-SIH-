import React, { useState } from 'react';
import { 
  Map, 
  MapPin, 
  Navigation, 
  Car, 
  TrainFront, 
  Footprints, 
  Leaf, 
  Clock, 
  Activity 
} from 'lucide-react';

export default function RoutePlanner() {
  const [startPoint, setStartPoint] = useState('Pimpri, Pune');
  const [destination, setDestination] = useState('Lonavala, Maharashtra');
  const [travelMode, setTravelMode] = useState('car');
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault();
    setIsCalculated(true);
  };

  return (
    <section className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Navigation className="text-emerald-600" size={32} />
            Smart Route Planner
          </h1>
          <p className="text-gray-500 mt-1">Optimize your travel for time, budget, and carbon footprint.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Inputs & Results */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Input Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <form onSubmit={handleCalculate} className="space-y-5">
                
                {/* Locations */}
                <div className="space-y-4 relative">
                  {/* Decorative line connecting the inputs */}
                  <div className="absolute left-[23px] top-[30px] bottom-[30px] w-0.5 bg-gray-200 z-0"></div>
                  
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Starting Point</label>
                    <div className="relative z-10">
                      <div className="absolute left-3 top-3 bg-white">
                        <MapPin size={18} className="text-emerald-600" />
                      </div>
                      <input 
                        type="text" 
                        value={startPoint}
                        onChange={(e) => setStartPoint(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Destination</label>
                    <div className="relative z-10">
                      <div className="absolute left-3 top-3 bg-white">
                        <MapPin size={18} className="text-red-500" />
                      </div>
                      <input 
                        type="text" 
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Travel Mode Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Travel Mode</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setTravelMode('car')}
                      className={`flex flex-col items-center gap-1 p-3 rounded-xl border transition-all ${travelMode === 'car' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                    >
                      <Car size={20} />
                      <span className="text-xs font-medium">Car</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTravelMode('transit')}
                      className={`flex flex-col items-center gap-1 p-3 rounded-xl border transition-all ${travelMode === 'transit' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                    >
                      <TrainFront size={20} />
                      <span className="text-xs font-medium">Transit</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTravelMode('walking')}
                      className={`flex flex-col items-center gap-1 p-3 rounded-xl border transition-all ${travelMode === 'walking' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                    >
                      <Footprints size={20} />
                      <span className="text-xs font-medium">Walk</span>
                    </button>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-xl hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Find Best Route
                </button>
              </form>
            </div>

            {/* Results Card (Appears after clicking calculate) */}
            {isCalculated && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Suggested Route</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                        <Activity size={20} />
                      </div>
                      <span className="font-medium">Distance</span>
                    </div>
                    <span className="font-bold text-gray-900">45.2 km</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="bg-amber-50 p-2 rounded-lg text-amber-600">
                        <Clock size={20} />
                      </div>
                      <span className="font-medium">Estimated Time</span>
                    </div>
                    <span className="font-bold text-gray-900">1h 15m</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-emerald-700">
                      <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
                        <Leaf size={20} />
                      </div>
                      <span className="font-semibold text-sm">Carbon Footprint Saved</span>
                    </div>
                    <span className="font-extrabold text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-sm">
                      {travelMode === 'car' ? '0 kg' : '2.8 kg CO₂'}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Map Placeholder */}
          <div className="lg:col-span-2 h-[500px] lg:h-auto min-h-[500px]">
            <div className="h-full w-full bg-gray-200 rounded-3xl border-4 border-white shadow-inner flex flex-col items-center justify-center relative overflow-hidden group">
              {/* Fake Map Grid Pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              <div className="relative z-10 flex flex-col items-center text-gray-500 bg-white/80 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
                <Map size={64} className="mb-4 text-emerald-600 opacity-80" />
                <h2 className="text-2xl font-bold text-gray-800">Live Routing Engine</h2>
                <p className="mt-2 text-sm font-medium text-center max-w-xs">
                  Interactive map will be rendered here.
                  <br />
                  (Ready for Leaflet.js or Google Maps integration)
                </p>
              </div>

              {/* Decorative Map Pins */}
              <MapPin size={32} className="absolute top-1/4 left-1/4 text-emerald-600 drop-shadow-md" />
              <MapPin size={32} className="absolute bottom-1/3 right-1/3 text-red-500 drop-shadow-md" />
              {/* Fake route line */}
              <svg className="absolute top-1/4 left-1/4 w-1/2 h-1/2 overflow-visible stroke-emerald-600 stroke-dashed" style={{ strokeDasharray: '8 8', strokeWidth: '4', fill: 'none', strokeLinecap: 'round' }}>
                <path d="M 16 16 Q 100 150 250 150 T 400 300" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}