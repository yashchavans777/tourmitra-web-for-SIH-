//file is Editable
import { useNavigate } from 'react-router-dom';
import {
  CalendarCheck,
  IndianRupee,
  Languages,
  Star,
  User,
} from 'lucide-react';

/**
 * GuideCard — a guide profile card for the Guide Directory.
 *
 * Expected `guide` prop shape:
 * {
 *   id:          string   — unique guide id (used for the default Book Now route)
 *   name:        string   — guide's full name
 *   specialty:   string   — e.g. "Himalayan treks & heritage walks"
 *   pricePerDay: number   — daily rate in INR
 *   rating:      number   — 0–5 average rating (badge hidden when absent)
 *   reviews:     number   — optional review count (shown as the badge tooltip)
 *   languages:   string[] — spoken languages, rendered as pill badges
 *   image:       string   — optional photo URL; a placeholder is shown when absent
 * }
 *
 * Props:
 *   guide  {object}   — guide data (see shape above)
 *   onBook {function} — optional click handler receiving the guide object;
 *                       when omitted, Book Now navigates to /guides/:id
 */
export default function GuideCard({ guide, onBook }) {
  const navigate = useNavigate();
  const {
    id,
    name,
    specialty,
    pricePerDay,
    rating,
    reviews,
    languages = [],
    image,
  } = guide ?? {};

  const hasRating = rating !== undefined && rating !== null && rating !== '';
  const price = Number(pricePerDay || 0).toLocaleString('en-IN');

  const handleBook = () => {
    if (onBook) onBook(guide);
    else navigate(`/guides/${id ?? ''}`);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      {/* ── Image / placeholder ──────────────────────────────── */}
      <div className="relative h-44 w-full shrink-0 overflow-hidden bg-gradient-to-br from-green-100 via-emerald-50 to-green-200">
        {image ? (
          <img
            src={image}
            alt={name ?? 'Guide'}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/70 text-green-700 shadow-inner">
              <User size={32} />
            </span>
          </div>
        )}

        {/* Rating badge — overlapping the image's top-right corner */}
        {hasRating && (
          <span
            title={reviews !== undefined && reviews !== null ? `${reviews} reviews` : undefined}
            className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-gray-900 shadow-md ring-1 ring-black/5"
          >
            <Star size={13} className="fill-amber-400 text-amber-400" aria-hidden="true" />
            {Number(rating).toFixed(1)}
          </span>
        )}
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="truncate text-base font-bold text-gray-900">
          {name ?? 'Unnamed guide'}
        </h3>

        <p className="line-clamp-2 text-sm text-gray-500">
          {specialty ?? 'Local guide'}
        </p>

        <p className="flex items-center gap-1 text-sm font-semibold text-green-700">
          <IndianRupee size={15} aria-hidden="true" />
          {price}
          <span className="font-normal text-gray-400">/ day</span>
        </p>

        {/* Spoken languages — small pill badges */}
        {languages.length > 0 && (
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            <Languages size={13} className="shrink-0 text-gray-400" aria-hidden="true" />
            {languages.map((lang) => (
              <span
                key={lang}
                className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-600"
              >
                {lang}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ── Book Now — dark green CTA pinned to the bottom ───── */}
      <div className="border-t border-gray-100 p-3">
        <button
          type="button"
          onClick={handleBook}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 active:scale-[0.98]"
        >
          <CalendarCheck size={16} aria-hidden="true" />
          <span>Book Now</span>
        </button>
      </div>
    </article>
  );
}

