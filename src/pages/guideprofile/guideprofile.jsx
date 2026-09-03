import { useState } from 'react';
import { 
  Star, MapPin, ShieldCheck, Languages, 
  CheckCircle, Clock, Calendar, MessageCircle, ChevronLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function GuideProfile() {
  const navigate = useNavigate();
  // Booking selections carried over to the /guidebooking checkout page
  const [bookingDate, setBookingDate] = useState('');
  const [duration, setDuration] = useState('4');

  const handleBookNow = () => {
    navigate('/guidebooking', {
      state: { date: bookingDate, hours: Number(duration) },
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 pb-12">
      
      {/* Top Background Banner */}
      <div className="h-48 w-full bg-gradient-to-r from-green-800 to-green-950 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-10 flex items-center justify-center rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition hover:bg-white/30"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        
        {/* Profile Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-8">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
            
            {/* Avatar */}
            <div className="h-32 w-32 rounded-full border-4 border-white bg-gray-200 shadow-md overflow-hidden flex-shrink-0">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ramesh&backgroundColor=b6e3f4" 
                alt="Guide Avatar" 
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Info */}
            <div className="flex-1 w-full mt-2 sm:mt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <h1 className="text-3xl font-bold text-gray-900">Ramesh K.</h1>
                    <ShieldCheck size={24} className="text-blue-500" title="Verified TourMitra Guide" />
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-3 text-sm font-medium text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} className="text-gray-400" /> Pune, India
                    </span>
                    <span className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">
                      <Star size={14} className="fill-amber-500" /> 4.9 (128 Reviews)
                    </span>
                  </div>
                </div>
                
                {/* Quick Action */}
                <button className="flex items-center justify-center gap-2 bg-green-50 text-green-700 border border-green-200 font-semibold py-2 px-5 rounded-xl hover:bg-green-100 transition-colors w-full sm:w-auto">
                  <MessageCircle size={18} />
                  Message
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About Me</h2>
              <p className="text-gray-600 leading-relaxed">
                Namaste! I am Ramesh, a passionate local historian and certified guide in Pune for over 8 years. I specialize in Maratha history, particularly the Peshwa era. My goal is to make history come alive for you through engaging stories, hidden architectural details, and authentic local experiences. Whether you are a solo traveler or a family, I will ensure your trip is unforgettable!
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex items-start gap-3">
                <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600">
                  <Languages size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Languages</h3>
                  <p className="text-sm text-gray-500 mt-1">English, Hindi, Marathi</p>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex items-start gap-3">
                <div className="bg-purple-50 p-2.5 rounded-xl text-purple-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Experience</h3>
                  <p className="text-sm text-gray-500 mt-1">8+ Years as Guide</p>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Specialties</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="font-medium">Historical Forts & Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="font-medium">Local Street Food Tours</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="font-medium">Photography Walks</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Booking Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 sticky top-6">
              
              <div className="flex items-end gap-1 mb-6 border-b border-gray-100 pb-4">
                <span className="text-3xl font-extrabold text-gray-900">₹500</span>
                <span className="text-sm font-medium text-gray-500 mb-1">/ hour</span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Select Date</label>
                  <div className="relative">
                    <Calendar size={18} className="absolute left-3 top-3 text-gray-400" />
                    <input 
                      type="date" 
                      value={bookingDate}
                      min={new Date().toISOString().slice(0, 10)}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 outline-none text-sm text-gray-700 bg-gray-50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Duration</label>
                  <select 
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 outline-none text-sm text-gray-700 bg-gray-50"
                  >
                    <option value="2">2 Hours (₹1000)</option>
                    <option value="4">4 Hours - Half Day (₹2000)</option>
                    <option value="8">8 Hours - Full Day (₹3500)</option>
                  </select>
                </div>
              </div>

              {/* Navigates to the final checkout step (guidebooking) with the selected date & duration */}
              <button 
                onClick={handleBookNow}
                className="w-full flex items-center justify-center gap-2 bg-green-800 text-white font-bold py-3.5 rounded-xl hover:bg-green-700 transition-colors shadow-md"
              >
                Book This Guide
              </button>
              
              <p className="text-xs text-center text-gray-400 mt-4">You won't be charged yet.</p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}