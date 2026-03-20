export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

// CDN URLs for images and logo
export const ASSETS = {
  logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663170581186/JoTr7LueowprhSXBFNrUTx/logo_transparent_ea43d223.png",
  images: {
    hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663170581186/JoTr7LueowprhSXBFNrUTx/image_7_d8d268d4.jpg",
    ceremony: "https://d2xsxph8kpxj0f.cloudfront.net/310519663170581186/JoTr7LueowprhSXBFNrUTx/image_1_b1a60dd9.jpg",
    reception: "https://d2xsxph8kpxj0f.cloudfront.net/310519663170581186/JoTr7LueowprhSXBFNrUTx/image_2_2efbd176.jpg",
    ballroom: "https://d2xsxph8kpxj0f.cloudfront.net/310519663170581186/JoTr7LueowprhSXBFNrUTx/image_3_83472df9.jpg",
    gallery: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663170581186/JoTr7LueowprhSXBFNrUTx/image_1_b1a60dd9.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663170581186/JoTr7LueowprhSXBFNrUTx/image_2_2efbd176.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663170581186/JoTr7LueowprhSXBFNrUTx/image_3_83472df9.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663170581186/JoTr7LueowprhSXBFNrUTx/image_4_7b91f8ff.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663170581186/JoTr7LueowprhSXBFNrUTx/image_5_c39cb147.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663170581186/JoTr7LueowprhSXBFNrUTx/image_6_03c6e9c3.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663170581186/JoTr7LueowprhSXBFNrUTx/image_7_d8d268d4.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663170581186/JoTr7LueowprhSXBFNrUTx/image_8_0fee846f.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663170581186/JoTr7LueowprhSXBFNrUTx/image_9_40c4904b.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663170581186/JoTr7LueowprhSXBFNrUTx/image_10_1f12826e.jpg",
    ]
  }
};

// Venue information
export const VENUE_INFO = {
  name: "Dalmore Fossil Creek",
  tagline: "Luxurious & Versatile Indoor/Outdoor Event Space",
  address: "4301 Fossil Creek Blvd, Fort Worth, TX 76137",
  phone: "(817) 807-1354",
  email: "info@dalmorefossilcreek.com",
  description: "Discover the perfect venue for your wedding, celebration, or corporate event. Dalmore Fossil Creek offers luxurious indoor and outdoor spaces with stunning views and complete amenities.",
};

// Navigation menu items
export const NAV_ITEMS = [
  { label: "About", href: "/" },
  { label: "Prices", href: "/prices" },
  { label: "Celebrations", href: "/celebrations" },
  { label: "Venue Amenities", href: "/amenities" },
  { label: "Corporate Events", href: "/corporate" },
  { label: "Schedule Tour", href: "/schedule-tour" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

// Social media links
export const SOCIAL_LINKS = [
  { platform: "Facebook", url: "https://facebook.com", icon: "facebook" },
  { platform: "Instagram", url: "https://instagram.com", icon: "instagram" },
];

// Services and pricing
export const SERVICES = [
  {
    title: "Celebrations",
    description: "Weddings, anniversaries, and special occasions",
    price: "Starting at $3,400",
    icon: "celebration"
  },
  {
    title: "Corporate Events",
    description: "Conferences, meetings, and team events",
    price: "Custom pricing",
    icon: "briefcase"
  },
  {
    title: "Receptions",
    description: "Elegant reception halls for up to 220 guests",
    price: "Contact for pricing",
    icon: "users"
  }
];

// Amenities
export const AMENITIES = [
  {
    title: "Indoor/Outdoor Ceremony",
    description: "Get married lakeside overlooking the golf course or under gorgeous wooden arches inside our chapel"
  },
  {
    title: "Grand Reception Hall",
    description: "Enjoy dinner and dancing in our large indoor reception hall. Seats up to 220 guests with tables and chairs included"
  },
  {
    title: "Ready Rooms",
    description: "Two ready rooms - one with luxurious interior and private bathroom, the other with pool table, shuffleboard and projector screen"
  },
  {
    title: "High-Tech Facilities",
    description: "Outfitted with everything your company needs for conferences and corporate events"
  },
  {
    title: "Flexible Layout",
    description: "Customizable spaces that can be configured for any type of event"
  },
  {
    title: "Professional Amenities",
    description: "Complete event setup with modern technology and catering options"
  }
];
