// Eén bron voor de bedrijfsgegevens: openingsuren, schema.org, llms.txt.
// Pas hier aan, dan volgt de rest van de site vanzelf.

export const business = {
  name: "Bronckaers Meat and More",
  description:
    "Ambachtelijke slagerij, bakkerij en traiteur in Gingelom, sinds 1962. Drie generaties vakmanschap: vers vlees, vers brood, huisbereide traiteurgerechten en catering op maat.",
  foundingDate: "1962",
  phone: "+3211881185",
  phoneDisplay: "011 88 11 85",
  email: "info@bronckaersmeatandmore.be",
  address: {
    street: "Steenweg 147",
    postalCode: "3890",
    locality: "Gingelom",
    region: "Limburg",
    country: "BE",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=100039448939399",
    "https://www.instagram.com/bronckaersmeatandmore/",
  ],
  logo: "/images/logo.png",
  image: "/images/banner.jpg",
};

type Range = [open: string, close: string];

// Maandag = 0 ... Zondag = 6
export const openingHours: { day: string; schemaDay: string; ranges: Range[] }[] = [
  { day: "Maandag", schemaDay: "Monday", ranges: [] },
  { day: "Dinsdag", schemaDay: "Tuesday", ranges: [["08:00", "12:30"], ["13:30", "18:30"]] },
  { day: "Woensdag", schemaDay: "Wednesday", ranges: [["08:00", "12:30"], ["13:30", "18:30"]] },
  { day: "Donderdag", schemaDay: "Thursday", ranges: [["08:00", "12:30"], ["13:30", "18:30"]] },
  { day: "Vrijdag", schemaDay: "Friday", ranges: [["08:00", "12:30"], ["13:30", "18:30"]] },
  { day: "Zaterdag", schemaDay: "Saturday", ranges: [["08:00", "18:00"]] },
  { day: "Zondag", schemaDay: "Sunday", ranges: [["08:00", "12:30"]] },
];

export const formatRanges = (ranges: Range[]) =>
  ranges.length ? ranges.map(([o, c]) => `${o}-${c}`).join(" & ") : "Gesloten";

export const pages = [
  { path: "/", name: "Home" },
  { path: "/assortiment/", name: "Assortiment" },
  { path: "/traiteur/", name: "Traiteur & Catering" },
  { path: "/over-ons/", name: "Over ons" },
  { path: "/contact/", name: "Contact" },
];
