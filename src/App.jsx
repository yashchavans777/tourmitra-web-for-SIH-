import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

// Component Imports
import Navbar from './components/Navbar'
import AIChatbot from './components/AIChatbot';

// Page Imports
import Home from './pages/home/home.jsx'
import Guides from './pages/guides/guides.jsx'
import Safety from './pages/safety/safety.jsx'
import BudgetPlanner from './pages/budgetplanner/budgetplanner.jsx';
import OfflineGuide from './pages/offlineguide/offlineguide.jsx';
import RoutePlanner from './pages/routeplanner/routeplanner.jsx';
import Login from './pages/login/login.jsx'; // <- IMPORTED HERE

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

// THIS IS NEW: A layout component that holds your Sidebar and Chatbot
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="md:pl-64">
        {/* <Outlet /> is where all your inner pages (Home, Guides, etc.) will load */}
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
        {/* FULL SCREEN ROUTE: Login is outside the MainLayout, so no Sidebar! */}
        <Route path="/login" element={<Login />} />

        {/* SIDEBAR ROUTES: Everything inside here gets the Navbar and Chatbot */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/routes" element={<RoutePlanner />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/budget" element={<BudgetPlanner />} />
          <Route path="/offline-guide" element={<OfflineGuide />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="*" element={<PagePlaceholder title="Page not found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

