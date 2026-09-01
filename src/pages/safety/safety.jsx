import React, { useState } from 'react';
import { Siren, MapPin, Phone, ShieldAlert, Stethoscope } from 'lucide-react';

const Safety = () => {
  const [isBroadcasting, setIsBroadcasting] = useState(false);

  // Hardcoded contacts since mockEmergency was empty in your mockData file
  const emergencyContacts = [
    { id: 1, name: 'Police', number: '100', icon: ShieldAlert, color: 'text-blue-600', bg: 'bg-blue-100' },
    { id: 2, name: 'Ambulance', number: '108', icon: Stethoscope, color: 'text-red-600', bg: 'bg-red-100' },
    { id: 3, name: 'Tourist Helpline', number: '1363', icon: Phone, color: 'text-green-600', bg: 'bg-green-100' },
  ];

  return (
    <div className="p-6 w-full max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Emergency & Safety Hub</h1>

      {/* Top Section: SOS and Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        
        {/* 1-Tap SOS Button */}
        <div className="bg-red-50 rounded-2xl p-8 flex flex-col items-center justify-center border border-red-100 shadow-sm">
          <button className="w-40 h-40 bg-red-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-200 active:scale-95 animate-pulse">
            <Siren size={48} className="mb-2" />
            <span className="text-2xl font-bold">SOS</span>
          </button>
          <p className="mt-6 text-red-800 font-medium text-center">Press and hold to activate</p>
          <p className="text-sm text-red-600 text-center mt-1">Alerts local authorities instantly</p>
        </div>

        {/* Live Location Broadcast */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col justify-center">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-full ${isBroadcasting ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Live Location</h3>
                <p className="text-gray-500 text-sm">Broadcast GPS to trusted contacts</p>
              </div>
            </div>
            {/* Toggle Switch */}
            <button
              onClick={() => setIsBroadcasting(!isBroadcasting)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none ${isBroadcasting ? 'bg-green-500' : 'bg-gray-300'}`}
            >
              <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition duration-300 ${isBroadcasting ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
          </div>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Status:</span> {isBroadcasting ? <span className="text-green-600 font-bold">Broadcasting Active</span> : <span className="text-gray-500">Inactive</span>}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Last updated: {isBroadcasting ? 'Just now' : 'N/A'}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Critical Contacts */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Critical Local Contacts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {emergencyContacts.map((contact) => (
          <div key={contact.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4 hover:border-gray-300 transition-colors cursor-pointer">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${contact.bg} ${contact.color}`}>
              <contact.icon size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{contact.name}</h3>
              <p className="text-xl font-black text-gray-900">{contact.number}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Safety;