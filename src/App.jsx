import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home/home.jsx'
import Guides from './pages/guides/guides.jsx'
import Safety from './pages/safety/safety.jsx'
import AIChatbot from './components/AIChatbot';
import BudgetPlanner from './pages/budgetplanner/budgetplanner.jsx';
import OfflineGuide from './pages/offlineguide/offlineguide.jsx';
import RoutePlanner from './pages/routeplanner/routeplanner.jsx';

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

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {/* Content area — offset by the fixed sidebar width on ≥ md screens */}
        <main className="md:pl-64">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* THIS LINE CHANGED: Replaced the placeholder with your new RoutePlanner */}
            <Route path="/routes" element={<RoutePlanner />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/budget" element={<BudgetPlanner />} />
            <Route path="/offline-guide" element={<OfflineGuide />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="*" element={<PagePlaceholder title="Page not found" />} />
          </Routes>
          <AIChatbot/>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

