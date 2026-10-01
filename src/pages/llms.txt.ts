import type { APIRoute } from "astro";
import { business, openingHours, formatRanges, pages } from "../data/business";

// Platte samenvatting voor taalmodellen (https://llmstxt.org),
// gegenereerd uit dezelfde gegevens als de site zodat ze niet uit de pas lopen.
export const GET: APIRoute = ({ site }) => {
  const a = business.address;
  const body = `# ${business.name}

> ${business.description}

## Gegevens

- Adres: ${a.street}, ${a.postalCode} ${a.locality} (België)
- Telefoon: ${business.phoneDisplay}
- E-mail: ${business.email}
- Opgericht: ${business.foundingDate}
- Ondernemingsnummer: ${business.vatId}

## Openingsuren

${openingHours.map((d) => `- ${d.day}: ${formatRanges(d.ranges)}`).join("\n")}

Feestdagen kunnen afwijken; bel om te bevestigen.

## Pagina's

${pages.map((p) => `- [${p.name}](${new URL(p.path, site).href})`).join("\n")}

## Sociale media

${business.sameAs.map((u) => `- ${u}`).join("\n")}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
