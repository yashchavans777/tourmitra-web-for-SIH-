<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AIChatbot from './components/AIChatbot'
=======
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

// Component Imports
>>>>>>> ec4f0d2b1d489fc8e08dc4e89602e15b1c693b71
import Navbar from './components/Navbar'
import AIChatbot from './components/AIChatbot';

// Page Imports
import Home from './pages/home/home.jsx'
import Guides from './pages/guides/guides.jsx'
import Safety from './pages/safety/safety.jsx'
import BudgetPlanner from './pages/budgetplanner/budgetplanner.jsx';
import OfflineGuide from './pages/offilineguide/offilineguide.jsx';
import RoutePlanner from './pages/routeplanner/routeplanner.jsx';
import Login from './pages/login/login.jsx';
import Profile from './pages/profile/profile.jsx'; // <- IMPORTED HERE
import TouristPlace from './pages/touristplace/touristplace.jsx';
import Explore from './pages/explore/explore.jsx';
import GuideProfile from './pages/guideprofile/guideprofile.jsx';
import GuideBooking from './pages/guidebooking/guidebooking.jsx';

function PagePlaceholder({ title }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center p-8">
      <div className="max-w-md rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="mt-2 text-sm text-gray-500">
          This section is under construction — coming soon.
        </p>
      </div>
    </div>
  )
}

// Layout wrapper for pages that need the Sidebar and Chatbot
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="md:pl-64">
        <Outlet /> 
        <AIChatbot />
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Full-Screen Routes (No Sidebar) */}
        <Route path="/login" element={<Login />} />

<<<<<<< HEAD
        {/* Content area — offset by the fixed sidebar width on ≥ md screens */}
        <main className="md:pl-64">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/routes" element={<PagePlaceholder title="Map & Routes" />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/budget" element={<PagePlaceholder title="Budget Analyzer" />} />
            <Route path="/offline-guide" element={<PagePlaceholder title="Offline Guide" />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="*" element={<PagePlaceholder title="Page not found" />} />
          </Routes>
        </main>

        <AIChatbot />
      </div>
=======
        {/* Dashboard Routes (With Sidebar & Chatbot) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/routes" element={<RoutePlanner />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/budget" element={<BudgetPlanner />} />
          <Route path="/offline-guide" element={<OfflineGuide />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/profile" element={<Profile />} /> {/* <- ADDED HERE */}
          <Route path="*" element={<PagePlaceholder title="Page not found" />} />
          <Route path="/place/:id" element={<TouristPlace />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/guide/:id" element={<GuideProfile />} />
          <Route path="/guidebooking" element={<GuideBooking />} />
        </Route>
      </Routes>
>>>>>>> ec4f0d2b1d489fc8e08dc4e89602e15b1c693b71
    </BrowserRouter>
  )
}

export default App