/**
 * TourMitra — mock data for development & UI prototyping.
 *
 * All content is fictional but realistic for an Indian outdoor-adventure
 * tourism platform. Prices (`pricePerDay`) are in INR and render correctly
 * with GuideCard's `toLocaleString('en-IN')` formatting.
 *
 * NOTE: `imagePlaceholder` values are stand-in images (placehold.co URLs)
 * intended to be replaced by real uploaded assets later. When passing a
 * guide to <GuideCard />, map it to the `image` prop:
 *   <GuideCard guide={{ ...g, image: g.imagePlaceholder }} />
 */

export const guides = [
  {
    id: 'g-01',
    name: 'Tsering Dolma',
    specialty: 'Leh–Ladakh motorbike expeditions & Nubra Valley camping',
    pricePerDay: 2800,
    rating: 4.9,
    languages: ['Ladakhi', 'Hindi', 'English'],
    imagePlaceholder: 'https://placehold.co/600x400/e7f4eb/14532d?text=TD',
  },
  {
    id: 'g-02',
    name: 'Arjun Mehta',
    specialty: 'White-water rafting instructor (Grade III–IV rapids) & riverside camping',
    pricePerDay: 1500,
    rating: 4.7,
    languages: ['Hindi', 'English', 'Punjabi'],
    imagePlaceholder: 'https://placehold.co/600x400/e7f4eb/14532d?text=AM',
  },
  {
    id: 'g-03',
    name: 'Meera Nair',
    specialty: 'Backwater kayaking, spice-estate walks & Western Ghats day treks',
    pricePerDay: 1800,
    rating: 4.8,
    languages: ['Malayalam', 'English', 'Tamil'],
    imagePlaceholder: 'https://placehold.co/600x400/e7f4eb/14532d?text=MN',
  },
  {
    id: 'g-04',
    name: 'Kavita Joshi',
    specialty: 'Garhwal Himalayan treks: Valley of Flowers, Kuari Pass & Roopkund',
    pricePerDay: 1900,
    rating: 4.6,
    languages: ['Hindi', 'English', 'Garhwali'],
    imagePlaceholder: 'https://placehold.co/600x400/e7f4eb/14532d?text=KJ',
  },
  {
    id: 'g-05',
    name: 'Sandeep Rathore',
    specialty: 'Thar Desert camel & dune-bash safaris with heritage fort walks',
    pricePerDay: 1600,
    rating: 4.5,
    languages: ['Hindi', 'Marwari', 'English'],
    imagePlaceholder: 'https://placehold.co/600x400/e7f4eb/14532d?text=SR',
  },
  {
    id: 'g-06',
    name: 'Pooja Shetty',
    specialty: 'Coffee-estate trails, waterfall hikes & Tadiandamol summit treks',
    pricePerDay: 1700,
    rating: 4.7,
    languages: ['Kannada', 'English', 'Hindi'],
    imagePlaceholder: 'https://placehold.co/600x400/e7f4eb/14532d?text=PS',
  },
  {
    id: 'g-07',
    name: 'Imran Bhat',
    specialty: 'Off-piste skiing & snowboard guiding on Gulmarg’s Apharwat Peak',
    pricePerDay: 2600,
    rating: 4.8,
    languages: ['Kashmiri', 'Urdu', 'Hindi', 'English'],
    imagePlaceholder: 'https://placehold.co/600x400/e7f4eb/14532d?text=IB',
  },
  {
    id: 'g-08',
    name: 'Deepika Borah',
    specialty: 'Caving at Mawsmai, living root bridge treks & Shillong food walks',
    pricePerDay: 2100,
    rating: 4.6,
    languages: ['Assamese', 'Khasi', 'English', 'Hindi'],
    imagePlaceholder: 'https://placehold.co/600x400/e7f4eb/14532d?text=DB',
  },
  {
    id: 'g-09',
    name: 'Vikram Thapa',
    specialty: 'Tandem paragliding pilot (Bir Billing) & Dhauladhar ridge treks',
    pricePerDay: 2200,
    rating: 4.8,
    languages: ['Nepali', 'Hindi', 'English'],
    imagePlaceholder: 'https://placehold.co/600x400/e7f4eb/14532d?text=VT',
  },
  {
    id: 'g-10',
    name: 'Ravi Choudhary',
    specialty: 'Wildlife naturalist for tiger safaris, birding & jungle walks',
    pricePerDay: 2400,
    rating: 4.9,
    languages: ['Hindi', 'English', 'Bengali'],
    imagePlaceholder: 'https://placehold.co/600x400/e7f4eb/14532d?text=RC',
  },
];

export const places = [
  {
    id: 'p-01',
    name: 'Rishikesh',
    location: 'Dehradun, Uttarakhand',
    rating: 4.7,
    tags: ['River Rafting', 'Bungee Jumping', 'Camping', 'Yoga'],
  },
  {
    id: 'p-02',
    name: 'Manali',
    location: 'Kullu, Himachal Pradesh',
    rating: 4.6,
    tags: ['Trekking', 'Paragliding', 'Snow Sports', 'Backpacking'],
  },
  {
    id: 'p-03',
    name: 'Leh–Ladakh',
    location: 'Ladakh (Union Territory)',
    rating: 4.9,
    tags: ['Motorbike Tours', 'High Altitude', 'Monasteries', 'Camping'],
  },
  {
    id: 'p-04',
    name: 'Coorg',
    location: 'Kodagu, Karnataka',
    rating: 4.5,
    tags: ['Coffee Trails', 'Trekking', 'Waterfalls'],
  },
  {
    id: 'p-05',
    name: 'Havelock Island',
    location: 'Andaman & Nicobar Islands',
    rating: 4.8,
    tags: ['Scuba Diving', 'Snorkeling', 'Beaches'],
  },
  {
    id: 'p-06',
    name: 'Spiti Valley',
    location: 'Himachal Pradesh',
    rating: 4.8,
    tags: ['Road Trips', 'Stargazing', 'Homestays', 'Monasteries'],
  },
  {
    id: 'p-07',
    name: 'Cherrapunji (Sohra)',
    location: 'Meghalaya',
    rating: 4.6,
    tags: ['Caving', 'Living Root Bridges', 'Waterfalls'],
  },
  {
    id: 'p-08',
    name: 'Jaipur',
    location: 'Rajasthan',
    rating: 4.5,
    tags: ['Heritage Walks', 'Hot Air Ballooning', 'Fort Tours'],
  },
  {
    id: 'p-09',
    name: 'Bir Billing',
    location: 'Kangra, Himachal Pradesh',
    rating: 4.7,
    tags: ['Paragliding', 'Camping', 'Tibetan Culture'],
  },
  {
    id: 'p-10',
    name: 'Munnar',
    location: 'Idukki, Kerala',
    rating: 4.4,
    tags: ['Tea Gardens', 'Hill Station', 'Trekking', 'Birdwatching'],
  },
];
