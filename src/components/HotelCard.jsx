import { BedDouble, BadgeCheck, IndianRupee, Image as ImageIcon, Wifi } from 'lucide-react';

export default function HotelCard({ stay }) {
  const {
    name,
    title,
    type,
    category,
    pricePerNight,
    price,
    verified,
    kycVerified,
    amenities = [],
    image,
  } = stay ?? {};

  const stayName = name ?? title ?? 'Unnamed stay';
  const stayType = type ?? category ?? 'Homestay';
  const stayPrice = pricePerNight ?? price ?? '₹0';
  const isVerified = verified ?? kycVerified ?? true;
  const amenityText = Array.isArray(amenities) && amenities.length > 0
    ? amenities.join(' • ')
    : 'Wi‑Fi • Meals';

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-green-100 via-emerald-50 to-green-200">
        {image ? (
          <img
            src={image}
            alt={stayName}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-green-800" aria-hidden="true">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 shadow-inner">
              <ImageIcon size={30} />
            </span>
            <span className="text-sm font-medium text-green-900/80">Image placeholder</span>
          </div>
        )}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{stayName}</h3>
            <p className="mt-1 flex items-center gap-2 text-sm text-gray-500">
              <BedDouble size={15} className="text-green-700" aria-hidden="true" />
              <span>{stayType}</span>
            </p>
          </div>

          {isVerified && (
            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
              <BadgeCheck size={14} aria-hidden="true" />
              Verified
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-base font-semibold text-green-800">
          <IndianRupee size={16} aria-hidden="true" />
          <span>{stayPrice}</span>
          <span className="text-sm font-normal text-gray-500">/ night</span>
        </div>

        <p className="flex items-center gap-2 text-sm text-gray-500">
          <Wifi size={15} className="text-gray-400" aria-hidden="true" />
          <span>{amenityText}</span>
        </p>

        <button
          type="button"
          className="w-full rounded-xl bg-green-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
        >
          Check Availability
        </button>
      </div>
    </article>
  );
}