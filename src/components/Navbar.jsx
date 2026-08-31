import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AlertTriangle,
  BookOpen,
  Calculator,
  Compass,
  Map,
  Menu,
  Users,
  X,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   Sidebar navigation items
──────────────────────────────────────────────────────── */
const navItems = [
  
  { to: '/',              label: 'Explore',         icon: Compass,    end: true },
  { to: '/routes',        label: 'Map & Routes',    icon: Map        },
  { to: '/guides',        label: 'Guide Directory', icon: Users      },
  { to: '/budget',        label: 'Budget Analyzer', icon: Calculator },
  { to: '/offline-guide', label: 'Offline Guide',   icon: BookOpen   },
];

/* Shared class fragments for the navigation links */
const linkBase =
  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ' +
  'transition-colors duration-150 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700';
const linkActive = 'bg-green-100 text-green-800'; /* subtle green background for the active link */
const linkInactive = 'text-gray-600 hover:bg-gray-100 hover:text-green-700';

/**
 * Navbar — fixed left-side navigation bar for TourMitra.
 *
 * Layout:
 *   • Logo / brand area at the top
 *   • Primary navigation links (react-router-dom <NavLink>) with a subtle
 *     green background marking the active route
 *   • Prominent red "Emergency / Safety Hub" CTA pinned at the very bottom
 *
 * Responsive: on screens < md the sidebar becomes a slide-in drawer,
 * toggled by a floating hamburger button with a backdrop.
 */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* ── Mobile hamburger toggle (hidden ≥ md, hidden while drawer is open) ── */}
      {!mobileOpen && (
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="fixed left-4 top-4 z-40 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm md:hidden"
          aria-label="Open navigation"
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      )}

      {/* ── Semi-transparent backdrop (mobile only) ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* ════════════════════════════════════════
          FIXED LEFT SIDEBAR
      ════════════════════════════════════════ */}
      <aside
        aria-label="Main sidebar"
        className={[
          'fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white',
          'transition-transform duration-200 ease-out md:translate-x-0',
          mobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full',
        ].join(' ')}
      >
        {/* Brand / Logo */}
        <div className="flex items-center justify-between gap-2.5 px-4 pb-4 pt-5">
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-700 text-white shadow-md shadow-green-900/30">
              <Compass size={24} aria-hidden="true" />
            </div>
            <div className="min-w-0 leading-tight">
              <span className="block truncate text-base font-bold tracking-wide text-green-800">
                TourMitra
              </span>
              <span className="block truncate text-[0.68rem] text-gray-400">
                Explore India Safely
              </span>
            </div>
          </div>

          {/* Close button — mobile only */}
          {mobileOpen && (
            <button
              type="button"
              onClick={closeMobile}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 md:hidden"
              aria-label="Close navigation"
            >
              <X size={20} aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="mx-4 h-px shrink-0 bg-gray-200" role="separator" />

        {/* Primary navigation */}
        <nav
          className="flex-1 overflow-y-auto px-3 py-4"
          aria-label="Primary navigation"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map(({ to, label, icon: Icon, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    [linkBase, isActive ? linkActive : linkInactive].join(' ')
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={18}
                        aria-hidden="true"
                        className={[
                          'shrink-0 transition-opacity',
                          isActive ? 'opacity-100' : 'opacity-70',
                        ].join(' ')}
                      />
                      <span className="truncate">{label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Emergency / Safety Hub — prominent red CTA pinned to the bottom */}
        <div className="shrink-0 border-t border-gray-200 p-3">
          <NavLink
            to="/safety"
            onClick={closeMobile}
            aria-label="Emergency / Safety Hub"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-red-600/25 transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
          >
            <AlertTriangle size={18} aria-hidden="true" />
            <span>Emergency / Safety Hub</span>
          </NavLink>
        </div>
      </aside>
    </>
  );
}