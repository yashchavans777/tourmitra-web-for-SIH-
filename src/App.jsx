import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home/home'
import Guides from './pages/Guides/Guides'
import Safety from './pages/Safety/Safety'

/**
 * Lightweight stand-in view for routes whose pages haven't been
 * implemented yet (the files in src/pages/* are currently empty).
 */
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
            <Route path="/routes" element={<PagePlaceholder title="Map & Routes" />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/budget" element={<PagePlaceholder title="Budget Analyzer" />} />
            <Route path="/offline-guide" element={<PagePlaceholder title="Offline Guide" />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="*" element={<PagePlaceholder title="Page not found" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

