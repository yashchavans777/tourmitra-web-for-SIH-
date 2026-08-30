import { useState } from 'react';
import {
  Compass,
  Map,
  Users,
  Calculator,
  Hotel,
  BookOpen,
  AlertTriangle,
  HelpCircle,
  Headphones,
  LogOut,
  Settings,
  Bell,
  User,
  LogIn,
  Menu,
  X,
} from 'lucide-react';
import './Navbar.css';

/* ─────────────────────────────────────────────────────────
   Sidebar navigation items
───────────────────────────────────────────────────────── */
const navItems = [
  { id: 'explore', label: 'Explore',          icon: Compass    },
  { id: 'map',     label: 'Map & Routes',     icon: Map        },
  { id: 'guides',  label: 'Guide Directory',  icon: Users      },
  { id: 'budget',  label: 'Budget Analyzer',  icon: Calculator },
  { id: 'hotels',  label: 'Hotels & Stays',   icon: Hotel      },
  { id: 'offline', label: 'Offline Guide',    icon: BookOpen   },
];

/* Bottom utility links */
const bottomLinks = [
  { id: 'help',    label: 'Help',    icon: HelpCircle },
  { id: 'support', label: 'Support', icon: Headphones },
  { id: 'logout',  label: 'Logout',  icon: LogOut     },
];

/**
 * Navbar — renders the fixed left sidebar + fixed top header.
 * Props:
 *   activePage    {string}   currently selected nav item id
 *   setActivePage {function} setter to change the active page
 */
export default function Navbar({ activePage, setActivePage }) {
  // Controls mobile sidebar open/close state
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeSidebar = () => setMobileOpen(false);

  return (
    <>
      {/* ── Mobile hamburger toggle ── */}
      <button
        className="hamburger-btn"
        onClick={() => setMobileOpen(prev => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* ── Semi-transparent backdrop (mobile only) ── */}
      {mobileOpen && (
        <div
          className="sidebar-backdrop"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* ════════════════════════════════════════
          LEFT SIDEBAR
      ════════════════════════════════════════ */}
      <aside
        className={['sidebar', mobileOpen ? 'sidebar--open' : ''].filter(Boolean).join(' ')}
        aria-label="Main sidebar"
      >
        {/* Brand / Logo */}
        <div className="sidebar-brand">
          <div className="brand-logo-wrap">
            <Compass size={26} className="brand-icon" aria-hidden="true" />
          </div>
          <div className="brand-text">
            <span className="brand-name">TourMitra</span>
            <span className="brand-tagline">Explore India Safely</span>
          </div>
        </div>

        <div className="sidebar-divider" role="separator" />

        {/* Primary navigation */}
        <nav className="sidebar-nav" aria-label="Primary navigation">
          <ul className="nav-list" role="list">
            {navItems.map(({ id, label, icon: Icon }) => (
              <li key={id} role="listitem">
                <button
                  className={[
                    'nav-item',
                    activePage === id ? 'nav-item--active' : '',
                  ].filter(Boolean).join(' ')}
                  onClick={() => { setActivePage(id); closeSidebar(); }}
                  aria-current={activePage === id ? 'page' : undefined}
                >
                  {/* Colored indicator stripe on the left edge */}
                  <span className="nav-indicator" aria-hidden="true" />
                  <Icon size={18} className="nav-icon" aria-hidden="true" />
                  <span className="nav-label">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Emergency / Safety Hub — prominent red CTA */}
        <div className="sidebar-emergency">
          <button className="emergency-btn" type="button">
            <AlertTriangle size={17} aria-hidden="true" />
            <span>Emergency / Safety Hub</span>
          </button>
        </div>

        <div className="sidebar-divider" role="separator" />

        {/* Bottom utility links */}
        <nav className="sidebar-bottom" aria-label="Utility navigation">
          <ul className="nav-list" role="list">
            {bottomLinks.map(({ id, label, icon: Icon }) => (
              <li key={id} role="listitem">
                <button
                  className="nav-item nav-item--muted"
                  onClick={closeSidebar}
                  type="button"
                >
                  <Icon size={16} className="nav-icon" aria-hidden="true" />
                  <span className="nav-label">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* ════════════════════════════════════════
          TOP HEADER BAR
      ════════════════════════════════════════ */}
      <header className="top-header" role="banner">
        <div className="top-header__left">
          <h2 className="top-header__title">
            {navItems.find(n => n.id === activePage)?.label ?? 'Home'}
          </h2>
        </div>

        <div className="top-header__right">
          {/* Settings icon */}
          <button className="header-icon-btn" aria-label="Settings" type="button">
            <Settings size={20} aria-hidden="true" />
          </button>

          {/* Notification bell with indicator dot */}
          <button
            className="header-icon-btn"
            aria-label="Notifications"
            type="button"
          >
            <Bell size={20} aria-hidden="true" />
            <span className="notif-dot" aria-label="New notifications" />
          </button>

          {/* Login button */}
          <button className="header-login-btn" type="button">
            <LogIn size={16} aria-hidden="true" />
            <span>Login</span>
          </button>

          {/* Circular profile avatar */}
          <button
            className="header-avatar"
            aria-label="User profile"
            type="button"
          >
            <User size={18} aria-hidden="true" />
          </button>
        </div>
      </header>
    </>
  );
}