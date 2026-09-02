import React, { useState } from 'react';
import { Calculator, DollarSign, Compass, Users, Calendar } from 'lucide-react';

const BudgetPlanner = () => {
  const [destination, setDestination] = useState('Goa');
  const [days, setDays] = useState(3);
  const [travelers, setTravelers] = useState(2);
  const [style, setStyle] = useState('Standard');
  const [calculation, setCalculation] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    
    // Multipliers based on style
    let dailyRatePerPerson = 2500; // Standard
    if (style === 'Budget') dailyRatePerPerson = 1200;
    if (style === 'Luxury') dailyRatePerPerson = 6500;

    const total = days * travelers * dailyRatePerPerson;
    
    // Breakdown estimations
    setCalculation({
      total: total,
      stay: Math.round(total * 0.45),
      food: Math.round(total * 0.30),
      transport: Math.round(total * 0.25),
    });
  };

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Calculator className="text-green-700" size={32} />
          Smart Trip Budget Analyzer
        </h1>
        <p className="text-gray-600 mt-1">Estimate and optimize your travel expenses instantly for your itinerary.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Trip Parameters</h2>
          
          <form onSubmit={handleCalculate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
              <div className="relative">
                <Compass className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none"
                  placeholder="e.g., Manali, Kerala"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration (Days)</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="number"
                    min="1"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="number"
                    min="1"
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Travel Style</label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none bg-white"
              >
                <option value="Budget">Backpacker / Budget</option>
                <option value="Standard">Standard / Homestay</option>
                <option value="Luxury">Luxury / Resort</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-green-800 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md mt-4"
            >
              Calculate Budget
            </button>
          </form>
        </div>

        {/* Results Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Estimated Expense Breakdown</h2>
            
            {calculation ? (
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-xl border border-green-200 text-center">
                  <p className="text-sm text-green-800 font-medium">Total Estimated Cost for {destination}</p>
                  <p className="text-3xl font-extrabold text-green-900 mt-1">₹ {calculation.total.toLocaleString()}</p>
                  <p className="text-xs text-green-700 mt-1">For {travelers} traveler(s) over {days} days ({style} style)</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 font-medium">Accommodation / Stay (45%)</span>
                      <span className="font-semibold text-gray-800">₹ {calculation.stay.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-600 h-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 font-medium">Food & Dining (30%)</span>
                      <span className="font-semibold text-gray-800">₹ {calculation.food.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-yellow-500 h-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 font-medium">Local Transport (25%)</span>
                      <span className="font-semibold text-gray-800">₹ {calculation.transport.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-center text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
                <DollarSign size={48} className="mb-2 stroke-1" />
                <p>Fill out the parameters on the left and click calculate to view your customized trip budget breakdown.</p>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500 text-center">
            TourMitra Intelligent Cost Estimation Engine • SIH Prototype
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetPlanner;