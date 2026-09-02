import React from 'react';
import HotelCard from '../../components/HotelCard';
import { mockStays } from '../../utils/mockData';

const Hotels = () => {
  return (
    <div className="w-full px-4 py-6 md:px-6">
      <div className="mb-8 rounded-2xl bg-gray-50 p-4 shadow-sm md:p-5">
        <h1 className="mb-4 text-3xl font-bold text-green-900">Find Your Stay</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="check-in" className="text-sm font-medium text-gray-700">
              Check-in
            </label>
            <input
              id="check-in"
              type="date"
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="check-out" className="text-sm font-medium text-gray-700">
              Check-out
            </label>
            <input
              id="check-out"
              type="date"
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div className="flex items-end">
            <button
              type="button"
              className="w-full rounded-xl bg-green-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
            >
              Search Stays
            </button>
          </div>
        </div>
      </div>

      {mockStays?.length ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mockStays.map((stay, index) => (
            <HotelCard key={stay.id ?? stay.name ?? index} stay={stay} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-sm text-gray-500 shadow-sm">
          No stays available right now. Add entries to <code className="rounded bg-gray-100 px-1 py-0.5">mockStays</code> to see hotel cards here.
        </div>
      )}
    </div>
  );
};

export default Hotels;