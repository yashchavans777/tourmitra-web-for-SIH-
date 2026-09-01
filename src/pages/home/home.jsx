import { useMemo, useState } from 'react';
import { CloudSun, MapPin, Search, Star } from 'lucide-react';
import { mockPlaces } from '../../utils/mockData';

const fallbackPlaces = [
  {
    id: 'fallback-1',
    name: 'Sinhagad Fort',
    location: 'Pune, Maharashtra',
    distance: '12 km away',
    rating: 4.8,
  },
  {
    id: 'fallback-2',
    name: 'Lonavala',
    location: 'Maharashtra',
    distance: '48 km away',
    rating: 4.7,
  },
  {
    id: 'fallback-3',
    name: 'Mahabaleshwar',
    location: 'Satara, Maharashtra',
    distance: '97 km away',
    rating: 4.9,
  },
];

export default function Home() {
  const [offlineMode, setOfflineMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const placesToRender = useMemo(() => {
    const source = Array.isArray(mockPlaces) && mockPlaces.length > 0 ? mockPlaces : fallbackPlaces;

    return source.map((place, index) => ({
      id: place.id ?? `place-${index}`,
      name: place.name ?? place.title ?? 'Untitled Destination',
      location: place.location ?? place.city ?? 'Nearby destination',
      distance: place.distance ?? `${(index + 1) * 5} km away`,
      rating: place.rating ?? 4.5,
      image: place.image ?? null,
    }));
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500 p-8 text-white shadow-xl sm:p-10">
            <div className="max-w-2xl space-y-6">
              <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium tracking-wide text-white/90 ring-1 ring-white/20">
                Welcome back, explorer
              </span>

              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Where to next?
                </h1>
                <p className="max-w-xl text-sm text-emerald-50 sm:text-base">
                  Discover top-rated places around you, plan smarter journeys, and keep your essentials ready for every adventure.
                </p>
              </div>

              <form
                className="flex flex-col gap-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur sm:flex-row sm:items-center"
                onSubmit={(event) => event.preventDefault()}
                role="search"
              >
                <label className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-600 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-200">
                  <Search className="h-5 w-5" aria-hidden="true" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search destinations, landmarks, or cities"
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    aria-label="Search destinations"
                  />
                </label>

                <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-900/5 px-4 py-3 sm:min-w-[200px]">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Offline Mode</p>
                    <p className="text-xs text-slate-500">Save essentials for low-network travel</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOfflineMode((previous) => !previous)}
                    className={`relative inline-flex h-7 w-14 items-center rounded-full transition ${
                      offlineMode ? 'bg-emerald-500' : 'bg-slate-300'
                    }`}
                    aria-pressed={offlineMode}
                    aria-label="Toggle Offline Mode"
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${
                        offlineMode ? 'translate-x-8' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <aside className="flex h-full flex-col justify-between rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">Weather Widget</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">Current Conditions</h2>
              </div>
              <div className="rounded-2xl bg-amber-100 p-3 text-amber-500">
                <CloudSun className="h-7 w-7" aria-hidden="true" />
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 p-5">
              <p className="text-3xl font-bold text-slate-900">22°C</p>
              <p className="mt-1 text-base font-medium text-slate-700">Sunny</p>
              <p className="mt-3 text-sm text-slate-500">Perfect weather for a short walking tour or an evening viewpoint stop.</p>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              <span>Status</span>
              <span className="font-semibold">{offlineMode ? 'Offline mode enabled' : 'Online sync active'}</span>
            </div>
          </aside>
        </section>

        <section className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
                Best-Rated Nearby
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Places travellers love around you
              </h2>
            </div>
            <p className="text-sm text-slate-500">
              Browse curated spots with strong ratings and quick distance insights.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {placesToRender.map((place) => (
              <article
                key={place.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 text-center text-sm font-medium text-slate-500">
                  {place.image ? (
                    <img
                      src={place.image}
                      alt={place.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span>Image Placeholder</span>
                  )}
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{place.name}</h3>
                      <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                        <MapPin className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                        {place.location}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                      <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                      {place.rating}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span className="font-medium">Distance</span>
                    <span>{place.distance}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}