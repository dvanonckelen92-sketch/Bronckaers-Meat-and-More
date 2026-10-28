// Eén bron voor de bedrijfsgegevens: openingsuren, schema.org, llms.txt.
// Pas hier aan, dan volgt de rest van de site vanzelf.

export const business = {
  name: "Bronckaers Meat and More",
  description:
    "Ambachtelijke slagerij, bakkerij en traiteur in Gingelom, sinds 1942. Drie generaties vakmanschap: vers vlees, vers brood, huisbereide traiteurgerechten en catering op maat.",
  foundingDate: "1942",
  phone: "+3211881185",
  phoneDisplay: "011 88 11 85",
  email: "slagerij@frankbronckaers.net",
  vatId: "BE0791.521.681",
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
  // Toog en voorgevel in 16x9, 4x3 en 1x1; de eerste dient ook als og:image
  images: [
    "/images/winkel-toog-16x9.webp",
    "/images/winkel-toog-4x3.webp",
    "/images/winkel-toog-1x1.webp",
    "/images/voorgevel-16x9.webp",
    "/images/voorgevel-4x3.webp",
    "/images/voorgevel-1x1.webp",
  ],
};

type Range = [open: string, close: string];

// Maandag = 0 ... Zondag = 6
export const openingHours: { day: string; schemaDay: string; ranges: Range[] }[] = [
  { day: "Maandag", schemaDay: "Monday", ranges: [] },
  { day: "Dinsdag", schemaDay: "Tuesday", ranges: [["08:00", "12:30"], ["13:30", "18:00"]] },
  { day: "Woensdag", schemaDay: "Wednesday", ranges: [["08:00", "12:30"], ["13:30", "18:00"]] },
  { day: "Donderdag", schemaDay: "Thursday", ranges: [["08:00", "12:30"], ["13:30", "18:00"]] },
  { day: "Vrijdag", schemaDay: "Friday", ranges: [["08:00", "12:30"], ["13:30", "18:00"]] },
  { day: "Zaterdag", schemaDay: "Saturday", ranges: [["08:00", "17:30"]] },
  { day: "Zondag", schemaDay: "Sunday", ranges: [["08:00", "12:00"]] },
];

// Verlof en andere sluitingen. `from` en `until` zijn exacte tijdstippen;
// `schema` geeft de afwijkende uren per datum voor de structured data
// (opens/closes "00:00" = de hele dag gesloten). Na `until` verdwijnt
// alles vanzelf van de site.
export const closures = [
  {
    from: "2026-10-31T14:30:00+01:00",
    until: "2026-11-11T23:59:59+01:00",
    title: "Wij zijn met verlof",
    text: "Van zaterdag 31 oktober vanaf 14u30 tot en met woensdag 11 november is de winkel gesloten. Vanaf donderdag 12 november staan we weer voor u klaar.",
    schema: [
      { validFrom: "2026-10-31", validThrough: "2026-10-31", opens: "08:00", closes: "14:30" },
      { validFrom: "2026-11-01", validThrough: "2026-11-11", opens: "00:00", closes: "00:00" },
    ],
  },
];

export const activeClosures = (now = Date.now()) =>
  closures.filter((c) => now <= Date.parse(c.until));

export const formatRanges =(ranges: Range[]) =>
  ranges.length ? ranges.map(([o, c]) => `${o}-${c}`).join(" & ") : "Gesloten";

export const pages = [
  { path: "/", name: "Home" },
  { path: "/assortiment/", name: "Assortiment" },
  { path: "/traiteur/", name: "Traiteur & Catering" },
  { path: "/over-ons/", name: "Over ons" },
  { path: "/contact/", name: "Contact" },
  { path: "/privacy/", name: "Privacyverklaring" },
];
