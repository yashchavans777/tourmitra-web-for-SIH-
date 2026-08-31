import { useState } from 'react';
import {
  Check,
  Clock,
  Download,
  Footprints,
  Map,
  Mountain,
  Route,
  TrendingUp,
} from 'lucide-react';

/* Mock elevation samples (% of chart height) simulating an alpine height
   profile: steady climb, twin peaks near the middle, long final descent.
   Deterministic (no randomness) so renders stay stable. */
const ELEVATION_SAMPLES = [
  6, 9, 12, 16, 21, 27, 34, 42, 51, 60, 68, 74, 79, 84, 88, 91, 94, 96, 98,
  100, 97, 92, 88, 85, 81, 78, 76, 74, 73, 74, 76, 79, 83, 88, 93, 97, 99,
  96, 90, 83, 74, 64, 53, 42, 32, 23, 16, 11, 8, 6,
];

const ROUTE_STATS = [
  { label: 'Distance', value: '14.2 mi', hint: '', icon: Route },
  { label: 'Estimated Time', value: '6h 30m', hint: '', icon: Clock },
  { label: 'Elevation', value: '10,250 ft', hint: '+3,850 ft gain', icon: Mountain },
];

/**
 * OfflineMap — route detail page for the offline experience.
 *
 * Two-column layout:
 *   • Left  — Route Info: title, distance, estimated time, elevation stats
 *             and an "Available Offline" toggle switch
 *   • Right — Map Area: gray interactive-map placeholder and a mock
 *             elevation (height) profile graph built from plain HTML/CSS
 */
export default function OfflineMap() {
  const [availableOffline, setAvailableOffline] = useState(false);

  const peakIndex = ELEVATION_SAMPLES.indexOf(Math.max(...ELEVATION_SAMPLES));
  const sampleCount = ELEVATION_SAMPLES.length;

  return (
    <div className="flex flex-col gap-5 p-4 md:p-6 xl:flex-row">
      {/* ══ LEFT COLUMN — Route Info ════════════════════════════ */}
      <aside className="flex w-full shrink-0 flex-col gap-5 xl:w-80">
        {/* Route header + stats */}
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
            <Footprints size={13} aria-hidden="true" />
            Day Hike · Advanced
          </span>

          <h1 className="mt-3 text-2xl font-bold tracking-tight text-gray-900">
            Alpine Ridge Trail
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Wanderlust National Park · Loop trail
          </p>

          <dl className="mt-5 flex flex-col gap-3">
            {ROUTE_STATS.map(({ label, value, hint, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
                  <Icon size={17} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                    {label}
                  </dt>
                  <dd className="text-sm font-bold text-gray-900">
                    {value}
                    {hint && (
                      <span className="ml-2 text-xs font-medium text-green-700">{hint}</span>
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

        {/* Available Offline toggle */}
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-bold text-gray-900">Available Offline</p>
              <p className="mt-0.5 text-xs text-gray-500">
                Save map tiles & route data for trailhead use
              </p>
            </div>

            {/* Accessible toggle switch */}
            <button
              type="button"
              role="switch"
              aria-checked={availableOffline}
              aria-label="Available offline"
              onClick={() => setAvailableOffline((v) => !v)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 ${
                availableOffline ? 'bg-green-700' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
                  availableOffline ? 'translate-x-[22px]' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          {/* Download status hint */}
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-3 text-xs">
            {availableOffline ? (
              <>
                <Check size={15} className="shrink-0 text-green-700" aria-hidden="true" />
                <span className="text-gray-600">
                  Saved for offline use · <span className="font-semibold text-gray-900">38 MB</span> on device
                </span>
              </>
            ) : (
              <>
                <Download size={15} className="shrink-0 text-gray-400" aria-hidden="true" />
                <span className="text-gray-500">
                  Toggle on to download map tiles & elevation data
                </span>
              </>
            )}
          </div>
        </section>
      </aside>

      {/* ══ RIGHT COLUMN — Map Area ═════════════════════════════ */}
      <section className="flex min-w-0 flex-1 flex-col gap-5">
        {/* Interactive map placeholder */}
        <div className="relative flex h-[380px] min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 md:h-[440px]">
          {/* Grid backdrop to suggest map tiles */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.55) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Centered label */}
          <div className="relative z-10 flex flex-col items-center gap-3 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-gray-500 shadow-sm">
              <Map size={26} aria-hidden="true" />
            </span>
            <p className="text-sm font-semibold text-gray-600">
              Interactive Map Rendered Here
            </p>
            <p className="text-xs text-gray-400">
              Offline tile cache · zoom, pan & route overlay
            </p>
          </div>

          {/* Mock zoom controls */}
          <div className="absolute right-3 top-3 z-10 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
            <button
              type="button"
              aria-label="Zoom in"
              className="px-2.5 py-1 text-base font-bold leading-none text-gray-600 hover:bg-gray-100"
            >
              +
            </button>
            <span aria-hidden="true" className="h-px bg-gray-200" />
            <button
              type="button"
              aria-label="Zoom out"
              className="px-2.5 py-1 text-base font-bold leading-none text-gray-600 hover:bg-gray-100"
            >
              -
            </button>
          </div>
        </div>

        {/* Mock elevation graph */}
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <header className="flex items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-sm font-bold text-gray-900">
              <TrendingUp size={16} className="text-green-700" aria-hidden="true" />
              Elevation Profile
            </h2>
            <span className="text-xs text-gray-400">Mock height profile</span>
          </header>

          {/* Trail height profile built from plain HTML/CSS shapes */}
          <div className="relative mt-4 h-40">
            <div
              className="flex h-full items-end gap-[3px]"
              role="img"
              aria-label="Elevation graph rising to a 10,250 ft peak near the middle of the trail, then descending"
            >
              {ELEVATION_SAMPLES.map((height, index) => (
                <div
                  key={index}
                  style={{ height: `${height}%` }}
                  className={`flex-1 rounded-t-[3px] transition-all duration-300 hover:opacity-80 ${
                    index === peakIndex
                      ? 'bg-green-700'
                      : 'bg-gradient-to-t from-green-500/70 to-emerald-400/80'
                  }`}
                />
              ))}
            </div>

            {/* Peak marker */}
            <span
              className="absolute -top-2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full bg-green-700 px-2 py-0.5 text-[10px] font-bold text-white shadow"
              style={{ left: `${((peakIndex + 0.5) / sampleCount) * 100}%` }}
            >
              <Mountain size={11} aria-hidden="true" />
              10,250 ft
            </span>
          </div>

          {/* Distance / elevation axis labels */}
          <div className="mt-2 flex justify-between text-[11px] font-medium text-gray-400">
            <span>Trailhead · 6,400 ft</span>
            <span>Mile 7.1</span>
            <span>End · 14.2 mi · 7,100 ft</span>
          </div>
        </section>
      </section>
    </div>
  );
}
