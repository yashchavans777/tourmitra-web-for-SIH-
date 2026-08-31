@echo off
setlocal enabledelayedexpansion
set "file=c:\Users\prash\tourmitra-web-for-SIH-\src\pages\Guides\Guides.jsx"
(
echo import { useState } from 'react';
echo import { Search, MapPin, Star, Phone, Languages, UserCheck, Filter, ChevronDown, IndianRupee, BadgeCheck, MessageCircle } from 'lucide-react';
echo.
echo export default function Guides() {
echo   const [searchQuery, setSearchQuery] = useState('');
echo   const [selectedLanguage, setSelectedLanguage] = useState('');
echo   const [selectedGender, setSelectedGender] = useState('');
echo   const [priceRange, setPriceRange] = useState('');
echo   const [showFilters, setShowFilters] = useState(false);
echo.
echo   const guides = [
echo     { id: 1, name: 'Rajesh Kumar', location: 'Jaipur, Rajasthan', rating: 4.9, reviews: 127, languages: ['Hindi', 'English', 'Rajasthani'], gender: 'Male', pricePerDay: 1200, specialty: 'Heritage ^& Forts', verified: true, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150^&q=80', available: true },
echo     { id: 2, name: 'Priya Sharma', location: 'Udaipur, Rajasthan', rating: 4.8, reviews: 89, languages: ['Hindi', 'English', 'Marathi'], gender: 'Female', pricePerDay: 1000, specialty: 'Cultural Tours', verified: true, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150^&q=80', available: true },
echo     { id: 3, name: 'Amit Patel', location: 'Mumbai, Maharashtra', rating: 4.7, reviews: 156, languages: ['Hindi', 'English', 'Gujarati'], gender: 'Male', pricePerDay: 1500, specialty: 'City Tours', verified: true, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150^&q=80', available: false },
echo     { id: 4, name: 'Sneha Reddy', location: 'Hyderabad, Telangana', rating: 4.9, reviews: 203, languages: ['Hindi', 'English', 'Telugu', 'Tamil'], gender: 'Female', pricePerDay: 1300, specialty: 'Historical Sites', verified: true, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150^&q=80', available: true },
echo     { id: 5, name: 'Vikram Singh', location: 'Jodhpur, Rajasthan', rating: 4.6, reviews: 74, languages: ['Hindi', 'English'], gender: 'Male', pricePerDay: 900, specialty: 'Adventure Tours', verified: true, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150^&q=80', available: true },
echo     { id: 6, name: 'Anita Desai', location: 'Goa', rating: 4.8, reviews: 112, languages: ['Hindi', 'English', 'Konkani', 'Portuguese'], gender: 'Female', pricePerDay: 1400, specialty: 'Beach ^& Nature', verified: true, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150^&q=80', available: true },
echo   ];
echo.
echo   const filteredGuides = guides.filter((guide) => {
echo     const matchesSearch = guide.name.toLowerCase().includes(searchQuery.toLowerCase()) || guide.location.toLowerCase().includes(searchQuery.toLowerCase()) || guide.specialty.toLowerCase().includes(searchQuery.toLowerCase());
echo     const matchesLanguage = !selectedLanguage || guide.languages.includes(selectedLanguage);
echo     const matchesGender = !selectedGender || guide.gender.toLowerCase() === selectedGender.toLowerCase();
echo     const matchesPrice = !priceRange || (() => { const p = guide.pricePerDay; return priceRange === 'low' ? p ^< 1000 : priceRange === 'mid' ? p ^>= 1000 ^&^& p ^<= 1500 : priceRange === 'high' ? p ^> 1500 : true; })();
echo     return matchesSearch ^&^& matchesLanguage ^&^& matchesGender ^&^& matchesPrice;
echo   });
) > "%file%"
echo First part written