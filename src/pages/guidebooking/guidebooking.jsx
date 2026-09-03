import { useState } from 'react';
import {
  ChevronLeft,
  ShieldCheck,
  Star,
  MapPin,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Smartphone,
  CreditCard,
  Banknote,
  QrCode,
  Lock,
  Check,
  CheckCircle,
  Info,
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

/* ─────────────────────────────────────────────────────────
   GuideBooking — Final checkout step for booking a guide.

   Layout:
   • Left column  → "Traveler Details" form + "Payment Method".
   • Right column → Sticky "Order Summary" with the price
                    breakdown and the Confirm Booking button.

   Receives { date, hours } from the Guide Profile page via
   router state and falls back to sane defaults otherwise.
────────────────────────────────────────────────────────── */

// Rates & packages (kept in sync with the Guide Profile page)
const PACKAGE_PRICES = { 2: 1000, 4: 2000, 8: 3500 }; // ₹ per package
const PACKAGE_LABELS = { 2: '2 Hours', 4: '4 Hours · Half Day', 8: '8 Hours · Full Day' };
const TAX_RATE = 0.18; // 18% GST

const PAYMENT_OPTIONS = [
  { id: 'upi', label: 'UPI', description: 'GPay, PhonePe, Paytm & more', icon: Smartphone },
  { id: 'card', label: 'Credit / Debit Card', description: 'Visa, Mastercard, RuPay', icon: CreditCard },
  { id: 'arrival', label: 'Pay on Arrival', description: 'Cash or card when you meet the guide', icon: Banknote },
];

const formatINR = (amount) => `₹${amount.toLocaleString('en-IN')}`;

const getTodayISO = () => {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
};

export default function GuideBooking() {
  const navigate = useNavigate();
  const location = useLocation();

  /* ── Booking context (passed from the Guide Profile page) ── */
  const state = location.state || {};
  const hours = PACKAGE_PRICES[state.hours] ? state.hours : 4;
  const dateISO = state.date || getTodayISO();
  const formattedDate = new Date(`${dateISO}T00:00:00`).toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  /* ── Price breakdown ── */
  const basePrice = PACKAGE_PRICES[hours];
  const taxes = Math.round(basePrice * TAX_RATE);
  const total = basePrice + taxes;

  /* ── Form state ── */
  const [traveler, setTraveler] = useState({ name: '', email: '', phone: '' });
  const [payment, setPayment] = useState('upi');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef] = useState(
    () => `TM-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
  );

  const handleTravelerChange = (e) => {
    const { name, value } = e.target;
    setTraveler((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate booking confirmation for the hackathon prototype
    setIsConfirmed(true);
    window.scrollTo({ top: 0 });
  };

  /* ════════════════ Success Screen ════════════════ */
  if (isConfirmed) {
    const paymentLabel = PAYMENT_OPTIONS.find((o) => o.id === payment)?.label;
    return (
      <section className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle size={36} className="text-green-700" />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900">Booking Confirmed!</h1>
          <p className="mt-2 text-sm text-gray-500">
            Your guide is booked. A confirmation has been sent to{' '}
            <span className="font-medium text-gray-700">{traveler.email}</span>.
          </p>

          <div className="mt-6 space-y-3 rounded-2xl border border-gray-100 bg-gray-50 p-5 text-left text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Booking ID</span>
              <span className="font-bold text-gray-900">{bookingRef}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Guide</span>
              <span className="font-semibold text-gray-900">Ramesh K.</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Date</span>
              <span className="font-semibold text-gray-900">{formattedDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Duration</span>
              <span className="font-semibold text-gray-900">{PACKAGE_LABELS[hours]}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Payment</span>
              <span className="font-semibold text-gray-900">{paymentLabel}</span>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-3">
              <span className="font-medium text-gray-500">Total</span>
              <span className="font-extrabold text-green-800">{formatINR(total)}</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-800 py-3.5 font-bold text-white shadow-md transition-colors hover:bg-green-700"
          >
            Back to Home
          </button>
        </div>
      </section>
    );
  }

  /* ════════════════ Checkout Screen ════════════════ */
  return (
    <section className="min-h-screen bg-gray-50 pb-16">

      {/* Compact Header Banner */}
      <div className="relative h-28 w-full bg-gradient-to-r from-green-800 to-green-950">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto flex h-full max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="flex items-center gap-1.5 rounded-full bg-white/20 p-2 pr-4 text-white backdrop-blur-md transition hover:bg-white/30"
          >
            <ChevronLeft size={20} />
            <span className="text-sm font-semibold">Back</span>
          </button>
          <h1 className="text-lg font-bold text-white sm:text-xl">Booking Checkout</h1>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* ══════════════ Left Column: User Inputs ══════════════ */}
          <div className="space-y-8 lg:col-span-2">

            {/* ── Traveler Details ── */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <User size={20} className="text-green-800" />
                <h2 className="text-xl font-bold text-gray-900">Traveler Details</h2>
              </div>

              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={traveler.name}
                      onChange={handleTravelerChange}
                      placeholder="e.g. Priya Sharma"
                      className="block w-full rounded-xl border border-gray-300 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-600 sm:text-sm"
                    />
                  </div>
                </div>

                {/* Email + Phone side by side on larger screens */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={traveler.email}
                        onChange={handleTravelerChange}
                        placeholder="you@example.com"
                        className="block w-full rounded-xl border border-gray-300 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Phone size={18} className="text-gray-400" />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={traveler.phone}
                        onChange={handleTravelerChange}
                        placeholder="+91 98765 43210"
                        className="block w-full rounded-xl border border-gray-300 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-600 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-400">
                Your details are shared only with the guide for this booking.
              </p>
            </div>

            {/* ── Payment Method ── */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard size={20} className="text-green-800" />
                  <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                  <ShieldCheck size={14} />
                  Secure
                </span>
              </div>

              <div className="space-y-3" role="radiogroup" aria-label="Payment method">
                {PAYMENT_OPTIONS.map(({ id, label, description, icon: Icon }) => {
                  const selected = payment === id;
                  return (
                    <label
                      key={id}
                      className={`flex cursor-pointer items-center gap-4 rounded-2xl border-2 p-4 transition-all ${
                        selected
                          ? 'border-green-700 bg-green-50'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={id}
                        checked={selected}
                        onChange={() => setPayment(id)}
                        className="sr-only"
                      />
                      <span
                        className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
                          selected ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        <Icon size={20} />
                      </span>
                      <span className="flex-1">
                        <span className={`block text-sm font-bold ${selected ? 'text-green-900' : 'text-gray-900'}`}>
                          {label}
                        </span>
                        <span className="block text-xs text-gray-500">{description}</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                          selected ? 'border-green-700 bg-green-700' : 'border-gray-300 bg-white'
                        }`}
                      >
                        {selected && <Check size={12} strokeWidth={3} className="text-white" />}
                      </span>
                    </label>
                  );
                })}
              </div>

              {/* Conditional fields for the chosen method */}
              <div className="mt-5">
                {payment === 'upi' && (
                  <div>
                    <label htmlFor="upi-id" className="mb-1 block text-sm font-medium text-gray-700">
                      UPI ID
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <QrCode size={18} className="text-gray-400" />
                      </div>
                      <input
                        id="upi-id"
                        type="text"
                        placeholder="yourname@upi"
                        className="block w-full rounded-xl border border-gray-300 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-600 sm:text-sm"
                      />
                    </div>
                  </div>
                )}

                {payment === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="card-number" className="mb-1 block text-sm font-medium text-gray-700">
                        Card Number
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <Lock size={18} className="text-gray-400" />
                        </div>
                        <input
                          id="card-number"
                          type="text"
                          inputMode="numeric"
                          placeholder="1234 5678 9012 3456"
                          className="block w-full rounded-xl border border-gray-300 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-600 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="card-expiry" className="mb-1 block text-sm font-medium text-gray-700">
                          Expiry
                        </label>
                        <input
                          id="card-expiry"
                          type="text"
                          placeholder="MM / YY"
                          className="block w-full rounded-xl border border-gray-300 px-3 py-2.5 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-600 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="card-cvc" className="mb-1 block text-sm font-medium text-gray-700">
                          CVC
                        </label>
                        <input
                          id="card-cvc"
                          type="password"
                          inputMode="numeric"
                          placeholder="•••"
                          className="block w-full rounded-xl border border-gray-300 px-3 py-2.5 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-600 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {payment === 'arrival' && (
                  <div className="flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-4">
                    <Info size={18} className="mt-0.5 flex-shrink-0 text-amber-600" />
                    <p className="text-xs leading-relaxed text-amber-800">
                      Pay <span className="font-bold">{formatINR(total)}</span> in cash or by card when
                      you meet Ramesh at the meeting point. No advance payment is required — your slot
                      is reserved instantly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ══════════════ Right Column: Order Summary ══════════════ */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">

              <h2 className="mb-5 text-xl font-bold text-gray-900">Order Summary</h2>

              {/* Guide Identity */}
              <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
                <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-2 border-green-100 bg-gray-200">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ramesh&backgroundColor=b6e3f4"
                    alt="Guide Avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="truncate font-bold text-gray-900">Ramesh K.</p>
                    <ShieldCheck size={16} className="flex-shrink-0 text-blue-500" title="Verified TourMitra Guide" />
                  </div>
                  <p className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin size={12} /> Pune, India
                  </p>
                  <p className="flex items-center gap-1 text-xs font-medium text-amber-600">
                    <Star size={12} className="fill-amber-500" /> 4.9 (128 Reviews)
                  </p>
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-3 border-b border-gray-100 py-5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-gray-500">
                    <Calendar size={16} className="text-gray-400" /> Date
                  </span>
                  <span className="font-semibold text-gray-900">{formattedDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-gray-500">
                    <Clock size={16} className="text-gray-400" /> Duration
                  </span>
                  <span className="font-semibold text-gray-900">{PACKAGE_LABELS[hours]}</span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 border-b border-gray-100 py-5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">
                    Base Rate
                    <span className="block text-xs text-gray-400">₹500 × {hours} hours</span>
                  </span>
                  <span className="font-semibold text-gray-900">{formatINR(basePrice)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">
                    Taxes &amp; Fees
                    <span className="block text-xs text-gray-400">GST 18%</span>
                  </span>
                  <span className="font-semibold text-gray-900">{formatINR(taxes)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-end justify-between py-5">
                <span className="font-bold text-gray-900">Total</span>
                <span className="text-3xl font-extrabold text-green-800">{formatINR(total)}</span>
              </div>

              {/* Confirm Booking */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-800 py-3.5 font-bold text-white shadow-md transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
              >
                <Lock size={18} />
                Confirm Booking
              </button>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-gray-400">
                <ShieldCheck size={14} className="flex-shrink-0 text-green-600" />
                Free cancellation up to 24 hours before the tour
              </div>
              <p className="mt-1 text-center text-xs text-gray-400">You won't be charged yet.</p>

            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
