import React from 'react';
import { Mail, Phone, MapPin, Edit3, Compass, DownloadCloud, CalendarDays, Award } from 'lucide-react';

export default function Profile() {
  return (
    <section className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        
        {/* Top Section: Cover & Avatar */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200">
          
          {/* Scenic Cover Image Placeholder */}
          <div className="h-48 w-full bg-gradient-to-r from-emerald-600 to-emerald-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
            <div className="absolute bottom-4 right-6 text-emerald-100/50 text-sm font-medium tracking-wider">
              Cover Photo Area
            </div>
          </div>
          
          {/* Profile Info & Avatar */}
          <div className="px-6 sm:px-10 pb-8 relative">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-16 sm:-mt-20 mb-4">
              
              <div className="flex flex-col items-start gap-3 z-10">
                {/* Circular Avatar */}
                <div className="h-32 w-32 rounded-full border-4 border-white bg-gray-200 shadow-md overflow-hidden relative">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=c0aede" 
                    alt="Profile Avatar" 
                    className="h-full w-full object-cover bg-emerald-50"
                  />
                </div>
                
                {/* Name & Badge */}
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Aarav Sharma</h1>
                  <div className="flex items-center gap-1.5 mt-1.5 text-emerald-700 font-medium bg-emerald-50 w-max px-3 py-1 rounded-full text-sm border border-emerald-200 shadow-sm">
                    <Award size={16} />
                    <span>Pro Traveler</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Section: 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Personal Details */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-gray-900">Personal Details</h2>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-50 rounded-lg text-gray-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">Email</p>
                    <p className="text-sm font-medium text-gray-900 mt-0.5">aarav.sharma@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-50 rounded-lg text-gray-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">Phone</p>
                    <p className="text-sm font-medium text-gray-900 mt-0.5">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-50 rounded-lg text-gray-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">Home City</p>
                    <p className="text-sm font-medium text-gray-900 mt-0.5">Pune, Maharashtra</p>
                  </div>
                </div>
              </div>

              {/* Edit Profile Outline Button */}
              <button className="w-full flex items-center justify-center gap-2 bg-white border-2 border-emerald-600 text-emerald-700 font-semibold py-2.5 px-5 rounded-xl hover:bg-emerald-50 transition-colors">
                <Edit3 size={18} />
                Edit Profile
              </button>
            </div>
          </div>

          {/* Right Column: Travel Hub */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 h-full">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Compass className="text-emerald-600" size={24} />
                  My Travel Hub
                </h2>
                <p className="text-sm text-gray-500 mt-1">Manage your upcoming journeys and saved content.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Upcoming Trips Card */}
                <div className="border border-gray-100 bg-gray-50 p-5 rounded-2xl hover:border-emerald-300 transition-colors cursor-pointer group shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-emerald-100 p-2.5 rounded-xl text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <CalendarDays size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">Upcoming Trip</p>
                      <h3 className="font-bold text-gray-900 text-lg">Goa Retreat</h3>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-gray-100">
                    <p className="text-sm font-medium text-gray-800 flex justify-between items-center">
                      <span>Oct 12 - Oct 16</span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">4 Days</span>
                    </p>
                  </div>
                </div>

                {/* Saved Offline Guides Card */}
                <div className="border border-gray-100 bg-gray-50 p-5 rounded-2xl hover:border-blue-300 transition-colors cursor-pointer group shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-2.5 rounded-xl text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <DownloadCloud size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Saved Guide</p>
                      <h3 className="font-bold text-gray-900 text-lg">Shaniwar Wada</h3>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-gray-100">
                    <p className="text-sm font-medium text-gray-600">
                      Audio & Visual pack downloaded (145 MB). Ready for offline use.
                    </p>
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