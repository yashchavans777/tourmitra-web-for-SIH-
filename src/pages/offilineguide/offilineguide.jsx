import { MapPin, Play, Pause, Volume2, Video } from 'lucide-react';
import { useState } from 'react';

export default function OfflineGuide() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 shadow-sm sm:px-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-xl bg-amber-100 p-2 text-amber-700">
              <MapPin size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
                Location Trigger Active
              </p>
              <h1 className="mt-1 text-lg font-bold text-gray-900 sm:text-xl">
                You are at Shaniwar Wada
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Your offline multimedia guide is ready even without a physical tour guide.
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">Visual Guide</h2>
              <p className="text-sm text-gray-500">Preview the destination story in offline mode.</p>
            </div>
            <div className="hidden rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 sm:block">
              Video Placeholder
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="relative flex h-72 items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 sm:h-96">
              <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
              <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                <button
                  type="button"
                  className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition hover:scale-105 hover:bg-white"
                  aria-label="Play destination video preview"
                >
                  <Play size={30} fill="currentColor" aria-hidden="true" />
                </button>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Offline destination video</p>
                  <p className="mt-1 text-sm text-gray-700">
                    A guided visual walkthrough will appear here.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm">
                  <Video size={14} aria-hidden="true" />
                  Saved for low-connectivity playback
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Audio Guide
              </p>
              <h2 className="mt-2 text-xl font-bold text-gray-900">Shaniwar Wada narration</h2>
              <p className="mt-1 text-sm text-gray-500">
                Listen to a quick summary of the site&apos;s history and key highlights.
              </p>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 sm:min-w-44">
              Language
              <select
                value={selectedLanguage}
                onChange={(event) => setSelectedLanguage(event.target.value)}
                className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-emerald-400 focus:bg-white"
              >
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
              </select>
            </label>
          </div>

          <div className="mt-6 rounded-3xl bg-gray-50 p-4 sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => setIsPlaying((previous) => !previous)}
                className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700"
                aria-label={isPlaying ? 'Pause audio guide' : 'Play audio guide'}
              >
                {isPlaying ? <Pause size={24} fill="currentColor" aria-hidden="true" /> : <Play size={24} fill="currentColor" aria-hidden="true" />}
              </button>

              <div className="flex-1">
                <div className="mb-2 flex items-center justify-between gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Volume2 size={16} aria-hidden="true" />
                    <span>{isPlaying ? 'Now playing' : 'Ready to play'}</span>
                  </div>
                  <span>01:24 / 03:45</span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-1/3 rounded-full bg-emerald-500" />
                </div>

                <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                  <span>Intro</span>
                  <span>Courtyard</span>
                  <span>History</span>
                  <span>Exit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
