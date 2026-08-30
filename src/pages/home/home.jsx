import { useState } from 'react';
import {
  Search,
  MapPin,
  Star,
  Heart,
  WifiOff,
  Wifi,
  Calendar,
  Users,
  IndianRupee,
  UserCheck,
  Languages,
  UserCircle2,
  Banknote,
  Phone,
  Siren,
  Share2,
  ShieldAlert,
  Stethoscope,
  ChevronRight,
} from 'lucide-react';
import './Home.css';

/* ─────────────────────────────────────────────────────────────────────────────
   DATA – Nearby destination cards
   Replace image URLs with your own assets later. These use picsum.photos
   as placeholder images themed around India's tourism.
───────────────────────────────────────────────────────────────────────────── */
// this data must be edit
const nearbyPlaces = [
  {
    id: 1,
    name: 'Sinhagad Fort',
    location: 'Pune, Maharashtra',
    rating: 4.8,
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1532083765555-9afcadfe2d8b?w=400&q=80',
  },
  {
    id: 2,
    name: 'Lonavala',
    location: 'Maharashtra',
    rating: 4.7,
    category: 'Hill Station',
    image: 'https://images.unsplash.com/photo-1591017403286-fd8493524e1e?w=400&q=80',
  },
  {
    id: 3,
    name: 'Mahabaleshwar',
    location: 'Maharashtra',
    rating: 4.9,
    category: 'Hill Station',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
  },
];
// this data must be edit
/* Safety quick actions */
const safetyActions = [
  { id: 'sos',      label: 'SOS',               icon: Siren,       emergency: true  },
  { id: 'location', label: 'Share Location',     icon: Share2,      emergency: false },
  { id: 'police',   label: 'Police',             icon: ShieldAlert, emergency: true  },
  { id: 'medical',  label: 'Medical Help',       icon: Stethoscope, emergency: true  },
];

/**
 * Home page component
 * Renders: Hero → Nearby Cards → Quick Booking → Guide Access → Safety
 */
export default function Home() {
  // Offline mode toggle state (UI only)
  const [offlineMode, setOfflineMode] = useState(false);
  // Favourites state per card id
  
  const [favourites, setFavourites] = useState({}); //review
  // Search input state
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle favourite for a place card
  const toggleFavourite = (id) =>
    setFavourites(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <main className="home-page" aria-label="Home page">
      {" "}
      //check
      {/* ════════════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════════════ */}
      <section className="hero-section" aria-label="Search destinations">
        {/* Background overlay */}
        <div className="hero-overlay" aria-hidden="true" />

        <div className="hero-content">
          <span className="hero-badge">🇮🇳 Discover Incredible India</span>{" "}
          //change it
          <h1 className="hero-heading">Where do you want to explore?</h1>
          <p className="hero-subheading">
            Plan smarter trips with verified guides, safe routes & budget tools
          </p>
          {/* Search bar */}
          <form
            className="hero-search"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="search-input-wrap">
              <Search size={20} className="search-icon" aria-hidden="true" />
              <input
                type="search"
                className="search-input"
                placeholder="Search destinations, guides, hotels or routes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search destinations"
              />
            </div>
            <button type="submit" className="search-btn" aria-label="Search">
              <Search size={16} aria-hidden="true" />
              Explore
            </button>
          </form>
          {/* Offline mode toggle */}
          <div className="offline-toggle-row">
            <div
              className={[
                "offline-toggle",
                offlineMode ? "offline-toggle--active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setOfflineMode((prev) => !prev)}
              role="switch"
              aria-checked={offlineMode}
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === " " && setOfflineMode((prev) => !prev)
              }
              aria-label="Toggle offline mode"
            >
              <span className="offline-toggle__knob" />
            </div>
            <span className="offline-label">
              {offlineMode ? (
                <WifiOff size={14} aria-hidden="true" />
              ) : (
                <Wifi size={14} aria-hidden="true" />
              )}
              {offlineMode ? "Offline Mode — ON" : "Offline Mode"}
            </span>
            {offlineMode && (
              <span className="offline-badge">Maps & guides cached</span>
            )}
          </div>
        </div>
      </section>
      {/* ════════════════════════════════════════════════════════════
          MAIN CONTENT GRID (cards + right panel)
      ════════════════════════════════════════════════════════════ */}
      <div className="content-grid">
        {/* ── LEFT / CENTER COLUMN ── */}
        <div className="content-main">
          {/* ── Best-Rated Nearby ── */}
          <section className="section" aria-labelledby="nearby-heading">
            <div className="section-header">
              <h2 className="section-title" id="nearby-heading">
                Best-Rated Nearby
              </h2>
              <button className="view-all-btn" type="button">
                View All
                <ChevronRight size={15} aria-hidden="true" />
              </button>
            </div>

            {/* Destination cards */}
            <div className="cards-grid" role="list">
              {nearbyPlaces.map((place) => (
                <article
                  key={place.id}
                  className="place-card"
                  role="listitem"
                  aria-label={place.name}
                >
                  {/* Card image */}
                  <div className="place-card__img-wrap">
                    <img
                      src={place.image}
                      alt={`View of ${place.name}`}
                      className="place-card__img"
                      loading="lazy"
                    />
                    {/* Category badge */}
                    <span className="place-card__category">
                      {place.category}
                    </span>
                    {/* Favourite button */}
                    <button
                      className={[
                        "place-card__fav",
                        favourites[place.id] ? "place-card__fav--active" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => toggleFavourite(place.id)}
                      aria-label={
                        favourites[place.id]
                          ? `Remove ${place.name} from favourites`
                          : `Add ${place.name} to favourites`
                      }
                      aria-pressed={!!favourites[place.id]}
                      type="button"
                    >
                      <Heart
                        size={16}
                        fill={favourites[place.id] ? "#d32f2f" : "none"}
                        color={favourites[place.id] ? "#d32f2f" : "#fff"}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {/* Card body */}
                  <div className="place-card__body">
                    <h3 className="place-card__name">{place.name}</h3>
                    <p className="place-card__location">
                      <MapPin size={13} aria-hidden="true" />
                      {place.location}
                    </p>
                    {/* Rating badge */}
                    <div className="place-card__rating">
                      <Star
                        size={13}
                        fill="#f57c00"
                        color="#f57c00"
                        aria-hidden="true"
                      />
                      <span>{place.rating}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── Tourist Safety ── */}
          <section
            className="section safety-section"
            aria-labelledby="safety-heading"
          >
            <div className="section-header">
              <h2 className="section-title" id="safety-heading">
                Tourist Safety
              </h2>
            </div>
            <div className="safety-grid">
              {safetyActions.map(({ id, label, icon: Icon, emergency }) => (
                <button
                  key={id}
                  type="button"
                  className={[
                    "safety-btn",
                    emergency
                      ? "safety-btn--emergency"
                      : "safety-btn--secondary",
                  ].join(" ")}
                  aria-label={label}
                >
                  <Icon size={22} aria-hidden="true" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* ── RIGHT PANEL ── */}
        <aside
          className="content-sidebar"
          aria-label="Quick booking and guide access"
        >
          {/* Quick Booking Card */}
          // check it
          <section className="booking-card" aria-labelledby="booking-heading">
            <h2 className="booking-card__heading" id="booking-heading">
              Quick Booking
            </h2>

            {/* Hotels & Stays dark green card */}
            <div className="hotel-card">
              <div className="hotel-card__header">
                <h3 className="hotel-card__title">Hotels &amp; Stays</h3>
                <span className="hotel-card__icon" aria-hidden="true">
                  🏨
                </span>
              </div>
              <p className="hotel-card__desc">
                Find verified hotels, PGs, homestays and affordable stays near
                your destination.
              </p>

              {/* Booking form fields (UI only) */}
              <div className="hotel-card__fields">
                <div className="field-row">
                  <Calendar size={15} aria-hidden="true" />
                  <span>
                    Check-in: <strong>Select Date</strong>
                  </span>
                </div>
                <div className="field-row">
                  <Users size={15} aria-hidden="true" />
                  <span>
                    Guests: <strong>2 Adults</strong>
                  </span>
                </div>
                <div className="field-row">
                  <IndianRupee size={15} aria-hidden="true" />
                  <span>
                    Budget: <strong>₹2,000 – ₹5,000</strong>
                  </span>
                </div>
              </div>

              <button className="hotel-card__btn" type="button">
                Find Stay
              </button>
            </div>
          </section>
          {/* Guide Quick Access Card */}
          <section className="guide-card" aria-labelledby="guide-heading">
            <div className="guide-card__header">
              <UserCheck
                size={22}
                className="guide-card__icon"
                aria-hidden="true"
              />
              <h2 className="guide-card__title" id="guide-heading">
                Find a Verified Guide
              </h2>
            </div>
            <p className="guide-card__desc">
              Connect with certified local guides — rated, verified &amp;
              available in your language.
            </p>

            {/* Filter options (UI only) */}
            <div className="guide-card__filters">
              <div className="guide-filter-row">
                <Languages size={14} aria-hidden="true" />
                <span className="filter-label">Language:</span>
                <select className="filter-select" aria-label="Select language">
                  <option value="">Any Language</option>
                  <option value="hindi">Hindi</option>
                  <option value="english">English</option>
                  <option value="marathi">Marathi</option>
                </select>
              </div>
              <div className="guide-filter-row">
                <UserCircle2 size={14} aria-hidden="true" />
                <span className="filter-label">Gender:</span>
                <select
                  className="filter-select"
                  aria-label="Select guide gender"
                >
                  <option value="">Any</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="guide-filter-row">
                <Banknote size={14} aria-hidden="true" />
                <span className="filter-label">Fee:</span>
                <select className="filter-select" aria-label="Select fee range">
                  <option value="">Any Range</option>
                  <option value="low">Under ₹500/day</option>
                  <option value="mid">₹500 – ₹1500/day</option>
                  <option value="high">Above ₹1500/day</option>
                </select>
              </div>
            </div>

            <button className="guide-card__btn" type="button">
              <Phone size={15} aria-hidden="true" />
              Find Guide
            </button>

            {/* Verified badge */}
            <div className="guide-verified-note">
              <span className="verified-dot" aria-hidden="true" />
              All guides are government-verified
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}