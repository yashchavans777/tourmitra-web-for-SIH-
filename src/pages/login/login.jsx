import React, { useState } from 'react';
import { Mail, Lock, User, Compass } from 'lucide-react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication for the hackathon prototype
    alert(`Simulating ${isLogin ? 'Login' : 'Registration'} for TourMitra...`);
  };

  return (
    <div className="flex h-screen w-full bg-white font-sans">
      
      {/* Left Side: Branding (Hidden on mobile, takes 50% width on desktop) */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-green-800 to-green-950 text-white flex-col justify-between p-12 relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-400 opacity-10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <Compass size={40} className="text-green-400" />
            <span className="text-3xl font-extrabold tracking-wide">TourMitra</span>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Your journey <br /> begins here.
          </h1>
          <p className="text-green-100 text-lg max-w-md leading-relaxed">
            Discover optimized routes, plan budgets smartly, and explore the world safely with your ultimate travel companion.
          </p>
        </div>

        {/* Abstract Illustration / Pattern Placeholder */}
        <div className="relative z-10 w-full max-w-sm mt-auto">
          <div className="w-full h-48 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm flex items-center justify-center">
             <span className="text-green-200/50 font-medium text-sm">Travel Illustration Placeholder</span>
          </div>
        </div>
      </div>

      {/* Right Side: Authentication Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 sm:p-12 relative">
        <div className="w-full max-w-md space-y-8">
          
          {/* Mobile Logo (Visible only on small screens) */}
          <div className="flex items-center gap-2 md:hidden mb-8 text-green-800">
            <Compass size={32} />
            <span className="text-2xl font-bold">TourMitra</span>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              {isLogin ? 'Welcome back' : 'Create Account'}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isLogin 
                ? 'Please enter your details to sign in.' 
                : 'Join TourMitra and start planning your next adventure.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            
            {/* Full Name Input - Only visible when creating an account */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    required
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-600 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-green-700 hover:text-green-600">Forgot password?</a>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition-colors mt-2"
            >
              {isLogin ? 'Continue' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="w-full flex justify-center items-center py-2.5 px-4 border-2 border-gray-200 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <img className="h-5 w-5 mr-2" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" />
                Google
              </button>
            </div>
          </div>

          {/* Toggle Button */}
          <div className="mt-8 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-bold text-green-700 hover:text-green-600 transition-colors"
            >
              {isLogin ? 'Create one now' : 'Sign in instead'}
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}