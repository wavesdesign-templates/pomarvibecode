// Pomar — site content. Centralised so copy and imagery stay easy to tune.

export const brand = {
  name: "Pomar",
  tagline: "Do pomar à mesa",
  taglineEn: "From the orchard to the table",
  location: "Aljezur, Algarve",
  founded: "2021",
};

export const nav = [
  { label: "História", href: "#story" },
  { label: "Growers", href: "#growers" },
  { label: "Harvest Box", href: "#harvest-box" },
  { label: "Menu", href: "#menu" },
  { label: "Visit", href: "#visit" },
];

export const offerings = [
  {
    no: "01",
    title: "Market & Kitchen",
    body: "A flagship shop and café in Aljezur — fresh produce, pantry staples, bread and pastries, and a daily-changing menu cooked from whatever came in that morning.",
    image: "/images/counter-payment.png",
  },
  {
    no: "02",
    title: "The Harvest Box",
    body: "A weekly subscription of just-picked produce and a few prepared things, sized by household. Pause anytime, skip anytime — the season decides the rest.",
    image: "/images/beets-apron.png",
  },
  {
    no: "03",
    title: "Grower Stories",
    body: "Ongoing editorial profiling the farmers and the seasons. Suppliers are partners, and they're named — on shelves, on the box, on the site. The land is the brand.",
    image: "/images/rosemary.png",
  },
];

export const principles = [
  {
    no: "I",
    title: "Season dictates",
    body: "No out-of-season produce, ever. The menu and the box change with the harvest, not with demand.",
    image: "/images/turnips.png",
  },
  {
    no: "II",
    title: "The grower gets named",
    body: "Suppliers are partners and they're credited — on shelves, on the box, on the site. We don't hide the hands.",
    image: "/images/peppers-crate.png",
  },
  {
    no: "III",
    title: "Premium, not precious",
    body: "High quality and genuine care, but warm, unfussy, and for everyone — not a luxury performance.",
    image: "/images/ricotta-toast.png",
  },
];

export const growers = [
  {
    name: "Joaquim Brito",
    crop: "Figs & stone fruit",
    place: "Aljezur",
    note: "Forty summers among the fig trees behind the dunes. His Pingo de Mel are gone by mid-morning.",
    image: "/images/figs-golden-hour.png",
  },
  {
    name: "Pomar Camacho",
    crop: "Apricots",
    place: "Silves",
    note: "The apricot orchard near Silves that has fed three generations — and the one that gave us our name.",
    image: "/images/apricots.png",
  },
  {
    name: "Helena Pereira",
    crop: "Peppers & greens",
    place: "Carrapateira",
    note: "Greenhouse rows a few kilometres from the sea, picked the same morning they reach the counter.",
    image: "/images/peppers-crate.png",
  },
  {
    name: "Serra foragers",
    crop: "Wild mushrooms & herbs",
    place: "Monchique",
    note: "A small crew who read the hills after the first autumn rains and bring down what the season offers.",
    image: "/images/mushrooms.png",
  },
  {
    name: "Sagres co-op",
    crop: "Day-boat fish",
    place: "Sagres",
    note: "A handful of small boats off the cape. What they land at dawn is on the menu by lunch.",
    image: "/images/elderly-grower.png",
  },
  {
    name: "Vale da Telha",
    crop: "Herbs & roots",
    place: "Aljezur",
    note: "Rosemary, coriander, carrots and turnips grown slow on the plateau above the surf beaches.",
    image: "/images/carrots.png",
  },
];

export const harvestBox = [
  {
    name: "Solo",
    forWho: "For one",
    price: "18",
    cadence: "/ week",
    blurb: "A small weekly armful — enough for someone cooking for themselves.",
    features: [
      "5–7 seasonal varieties",
      "Picked within 24 hours",
      "Grower card every week",
      "Pause or skip anytime",
    ],
    featured: false,
  },
  {
    name: "Casa",
    forWho: "For a household",
    price: "32",
    cadence: "/ week",
    blurb: "Our most-loved box — a proper week of produce for two to four.",
    features: [
      "9–12 seasonal varieties",
      "Picked within 24 hours",
      "A prepared item or pantry staple",
      "Grower stories & a recipe",
      "Pause or skip anytime",
    ],
    featured: true,
  },
  {
    name: "Mesa Cheia",
    forWho: "Full table",
    price: "54",
    cadence: "/ week",
    blurb: "The full table — for big households, long lunches, and feeding people well.",
    features: [
      "14–18 seasonal varieties",
      "Picked within 24 hours",
      "Two prepared / pantry items",
      "Bread from the café",
      "Priority delivery slot",
    ],
    featured: false,
  },
];

export const menu = [
  {
    course: "Morning",
    items: [
      { name: "Ricotta toast, roasted cherry tomatoes & basil", price: "6.5" },
      { name: "Pastéis & coffee from the counter", price: "3.0" },
      { name: "Fig & almond bread, cultured butter", price: "5.0" },
    ],
  },
  {
    course: "From the kitchen",
    items: [
      { name: "Day-boat fish, charred peppers, new potatoes", price: "16.0" },
      { name: "Chargrilled greens, chickpeas, preserved lemon", price: "12.0" },
      { name: "Mushrooms on toast, soft egg, herbs", price: "11.0" },
    ],
  },
];

export const team = [
  {
    name: "Inês Tavares",
    role: "Founder & Head of Kitchen",
    note: "A decade cooking in Lisbon and San Sebastián before coming home. The palate and the face of the brand.",
    image: "/images/team/pro-1.png",
  },
  {
    name: "Rui Camacho",
    role: "Co-founder & Head of Sourcing",
    note: "Manages the grower relationships. Grew up on the apricot orchard near Silves that gave the brand its name.",
    image: "/images/team/pro-2.png",
  },
  {
    name: "Mariana Sousa",
    role: "Operations & The Harvest Box",
    note: "Runs logistics and the subscription side — the reason your box arrives picked, packed and on time.",
    image: "/images/team/pro-0.png",
  },
  {
    name: "Tomás Rocha",
    role: "Shop & Café Lead",
    note: "Mornings, bread, coffee, the counter. The first warm face you meet when the doors open.",
    image: "/images/team/pro-3.png",
  },
];

export const testimonials = [
  {
    quote:
      "I taste the difference and I know whose hands grew it. Pomar gave us back the few kilometres food used to travel.",
    name: "Beatriz Lopes",
    place: "Casa box, Lagos",
    image: "/images/team/elegant.png",
  },
  {
    quote:
      "The menu changes every week with whatever came in that morning. You eat the season, exactly as it is.",
    name: "André Martins",
    place: "Regular, Aljezur",
    image: "/images/team/pro-3.png",
  },
];

export const contact = {
  email: "olá@pomar.pt",
  orders: "pedidos@pomar.pt",
  press: "imprensa@pomar.pt",
  phone: "+351 282 000 142",
  address: "Rua da Igreja 14, 8670-088 Aljezur, Algarve, Portugal",
  hours: [
    { day: "Tue – Sat", time: "08:30 – 17:00" },
    { day: "Sun", time: "09:00 – 14:00" },
    { day: "Mon", time: "Closed" },
  ],
  delivery: "Aljezur · Carrapateira · Sagres · Vila do Bispo · Lagos",
  instagram: "@pomar.pt",
  tiktok: "@pomar",
};
