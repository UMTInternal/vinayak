// All business content lives here, so text can be edited without touching components.

export const img = (name) => `${import.meta.env.BASE_URL}img/${name}`;

export const company = {
  name: 'Vinayak Relocation',
  legalName: 'Vinayak Relocation Packers and Movers',
  group: 'VRPM Group',
  tagline: 'Your trusted partner for stress-free relocation in Indore and across India.',
  phones: [
    { label: '+91 96690 05525', href: 'tel:+919669005525' },
    { label: '+91 95223 28559', href: 'tel:+919522328559' },
  ],
  whatsapp: '919669005525',
  email: 'vinayakrelocation85@gmail.com',
  address: '25, Block-C, Brij Vihar, Rau, Indore, Madhya Pradesh 453331',
  shortAddress: 'Rau, Indore, MP 453331',
  hours: 'Mon to Sun, 9:00 AM to 9:00 PM',
  years: '12+',
  mapEmbed: 'https://www.google.com/maps?q=Brij+Vihar,+Rau,+Indore,+Madhya+Pradesh+453331&output=embed',
  googleReviews: 'https://www.google.com/maps/search/?api=1&query=Vinayak+Relocation+Packers+and+Movers+Indore',
};

export const services = [
  {
    slug: 'household-shifting',
    title: 'Household Shifting',
    nav: 'Household shifting',
    icon: 'home',
    image: 'office.jpg',
    short:
      'Furniture, kitchenware, appliances and personal items, packed room by room. Glassware, crockery and electronics get specialised wrapping.',
    intro:
      'Moving home is personal. Our trained crew packs every room with care, protects fragile and valuable items with specialised wrapping, and reassembles your furniture at the new place so you can settle in fast.',
    features: [
      'Room-by-room packing of furniture, kitchenware, appliances and personal items',
      'Specialised wrapping for glassware, crockery and electronics',
      'Dismantling and reassembly of beds, wardrobes and modular kitchens',
      'Labelled cartons for quick, organised unpacking',
      'Local shifting within Indore and interstate moves across India',
    ],
    ideal: ['1 RK to 4 BHK homes', 'Independent houses and villas', 'Rented flats and PG moves'],
  },
  {
    slug: 'office-relocation',
    title: 'Office Relocation',
    nav: 'Office relocation',
    icon: 'office',
    image: 'office-cabin.png',
    short:
      'IT equipment, server rooms, workstations and confidential files. Cables and peripherals are tagged, and we move after hours or on weekends.',
    intro:
      'Every hour of downtime costs your business. We plan your office move around your schedule, often after hours or over a weekend, so your team is back at work on Monday morning.',
    features: [
      'Safe handling of IT equipment, servers and workstations',
      'Cable management and peripheral tagging for fast setup',
      'Secure, data-safe handling of confidential files',
      'After-hours and weekend moves to avoid disruption',
      'A dedicated relationship manager coordinating every step',
    ],
    ideal: ['Corporate offices', 'Shops and showrooms', 'Clinics, banks and institutions'],
  },
  {
    slug: 'vehicle-transport',
    title: 'Car & Bike Transport',
    nav: 'Car & bike transport',
    icon: 'car',
    image: 'vehicle.jpg',
    short:
      'Enclosed carriers, a pre-inspection report of scratches and mileage, full insurance and real-time tracking to major cities.',
    intro:
      'Your vehicle travels in an enclosed carrier, fully insured and tracked in real time. A pre-inspection report records its condition before pickup, so delivery is transparent.',
    features: [
      'Car and bike transport in enclosed carriers',
      'Pre-inspection report documenting scratches and mileage',
      'Full insurance coverage during transit',
      'Real-time GPS tracking',
      'Door-to-door service to major Indian cities',
    ],
    ideal: ['Cars, SUVs and luxury vehicles', 'Bikes and scooters', 'Transfers and relocations'],
  },
  {
    slug: 'warehousing-storage',
    title: 'Warehousing & Storage',
    nav: 'Warehousing & storage',
    icon: 'box',
    image: 'warehouse.jpg',
    short:
      'Short or long-term storage in Rau. Pest-free, weatherproof, with 24/7 CCTV, fire suppression and moisture control.',
    intro:
      'Need time between homes, or space for commercial stock? Our secure storage facility in Rau, Indore keeps your goods safe for days, weeks or months.',
    features: [
      'Short-term and long-term storage options',
      'Pest-free, weatherproof facility',
      '24/7 security surveillance',
      'Fire suppression and moisture control',
      'Organised racking for easy retrieval',
    ],
    ideal: ['Home renovations', 'Delayed possession', 'Commercial stock and inventory'],
  },
  {
    slug: 'logistics-cargo',
    title: 'Logistics & Cargo',
    nav: 'Logistics & cargo',
    icon: 'truck',
    image: 'cargo.jpg',
    short: 'Pan-India part-load and full-load consignments, with proof of delivery and regular status updates.',
    intro:
      'Dependable movement of commercial goods and bulk consignments across India, with part-load and full-load options to suit your volume and budget.',
    features: [
      'Pan-India commercial goods transport',
      'Part-load (PTL) and full-load (FTL) options',
      'Bulk consignment handling',
      'Proof of delivery on every shipment',
      'Regular status updates until delivery',
    ],
    ideal: ['Manufacturers and traders', 'E-commerce sellers', 'Distributors'],
  },
  {
    slug: 'industrial-shifting',
    title: 'Industrial Machinery',
    nav: 'Industrial machinery',
    icon: 'factory',
    image: 'industrial.jpg',
    short: 'Heavy machinery and full plant relocation, using cranes, hydraulic jacks, custom crates and trained technical staff.',
    intro:
      'Heavy equipment needs the right tools and people who know how to use them. We plan and run machinery and plant moves for the industrial belt around Indore and Pithampur.',
    features: [
      'Heavy machinery and factory equipment shifting',
      'Complete plant relocation',
      'Cranes and hydraulic jacks for lifting',
      'Custom crates and pallets',
      'Trained technical staff on every job',
    ],
    ideal: ['Factories and plants', 'Pithampur industrial area', 'Workshops and warehouses'],
  },
];

export const process = [
  { icon: 'clipboard', title: 'Free survey', text: 'We visit or video-call to assess your goods and access.' },
  { icon: 'file', title: 'Written quote', text: 'A clear, itemised quotation with no hidden charges.' },
  { icon: 'box', title: 'Expert packing', text: 'Multi-layer packing with bubble wrap, foam and cartons.' },
  { icon: 'gps', title: 'Tracked transit', text: 'Insured and GPS-tracked all the way to your door.' },
  { icon: 'key', title: 'Unpack & handover', text: 'Reassembly, placement, and a checklist you sign off.' },
];

export const whyUs = [
  { icon: 'shield', title: '100% safe & secure', text: 'Premium multi-layer packing and insured transit on every move.' },
  { icon: 'gps', title: 'On-time delivery', text: 'Committed pickup and delivery dates, backed by GPS tracking.' },
  { icon: 'rupee', title: 'Transparent pricing', text: 'Written quotes before the move. No last-minute surprises.' },
  { icon: 'headset', title: 'Dedicated support', text: 'A relationship manager for every move, available round the clock.' },
];

export const promises = [
  'Verified, background-checked staff',
  'Premium multi-layer packing materials',
  'Real-time GPS shipment tracking',
  'Comprehensive transit insurance',
  'Dedicated relationship manager',
];

export const areas = [
  'Vijay Nagar', 'Palasia', 'Saket Nagar', 'Bhawarkua', 'Anoop Nagar', 'Mahalaxmi Nagar', 'Banganga',
  'Chandan Nagar', 'Tejaji Nagar', 'Nipania', 'Super Corridor', 'Sudama Nagar', 'AB Road', 'Bypass Road',
  'Dewas Road', 'Ujjain Road', 'Khandwa Road', 'Pithampur', 'Mhow',
];

export const recognition = [
  { src: 'awards.jpg', caption: 'Our award shelf, including the Times Group Best Service Award', label: 'Awards & trophies' },
  { src: 'cert-aipmf.jpg', caption: 'Associate Member, All India Packers & Movers Federation (2026)', label: 'AIPMF member 2026' },
  { src: 'cert-logisticmart.jpg', caption: 'Certificate of Appreciation from LogisticMart (2025)', label: 'LogisticMart 2025', portrait: true },
  { src: 'brand-banner.jpg', caption: 'Vinayak Relocation Packers & Movers', label: 'Our brand' },
];

export const projectPhotos = [
  { src: 'household.jpg', caption: 'Final handover checklist with a family after a home move', label: 'Home handover' },
  { src: 'office.jpg', caption: 'Our crew packing appliances and electronics', label: 'Packing day' },
  { src: 'warehouse.jpg', caption: 'Loading labelled cartons for a household shift', label: 'Loading' },
  { src: 'industrial.jpg', caption: 'Vinayak Relocation branded truck', label: 'Our fleet' },
  { src: 'cargo.jpg', caption: 'Logistics and cargo movement', label: 'Cargo' },
  { src: 'vehicle.jpg', caption: 'Bikes wrapped and ready for transport', label: 'Bike transport' },
];

export const reviews = [
  {
    name: 'Rajesh Sharma',
    meta: 'Household shifting · Rau',
    text: 'They packed our entire 3BHK in Rau. Not a single scratch on my expensive wooden furniture. The team was polite, punctual and extremely careful.',
  },
  {
    name: 'Priya Patel',
    meta: 'Corporate relocation · Vijay Nagar',
    text: 'Our Vijay Nagar office moved over a weekend without disrupting our Monday business operations. Professional from start to finish.',
  },
  {
    name: 'Amit Verma',
    meta: 'Vehicle transport · Indore → Bangalore',
    text: 'Moved my SUV from Indore to Bangalore. It arrived safely and exactly on the promised date. Great tracking and transparent pricing.',
  },
];

export const faqs = [
  {
    q: 'How much do packers and movers charge in Indore?',
    a: 'Local shifting within Indore typically starts from ₹3,000, depending on the volume of goods, distance and floor access. Interstate pricing depends on the destination. Request a free survey for an exact written quote.',
  },
  {
    q: 'Do you provide packing materials?',
    a: 'Yes. We use bubble wrap, corrugated sheets, stretch film, foam padding and strong cartons, all included in our standard packages.',
  },
  {
    q: 'Are my goods insured during the move?',
    a: 'Yes. We provide comprehensive transit insurance, and you receive the documentation before the move begins.',
  },
  {
    q: 'How early should I book?',
    a: 'Book 3 to 5 days ahead for local moves and 7 to 10 days ahead for interstate moves. Book earlier around month-ends and festive seasons.',
  },
  {
    q: 'Do you serve areas outside Rau, Indore?',
    a: 'Yes. We cover every locality in Indore, nearby towns like Pithampur, Mhow and Dewas, and moves to all major cities across India.',
  },
];

export const ticker = [
  'AIPMF Associate Member 2026',
  'Times Group Best Service Award',
  'LogisticMart Appreciation 2025',
  'Verified & background-checked staff',
  'Comprehensive transit insurance',
  'Pan-India network',
];

export const serviceOptions = [...services.map((s) => s.title), 'Other'];
