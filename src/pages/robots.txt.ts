import type { APIRoute } from "astro";

// Zoekmachines én AI-assistenten mogen alles lezen, zodat de zaak
// ook in antwoorden van ChatGPT, Claude, Perplexity enz. kan opduiken.
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", site).href}
# llms.txt: ${new URL("/llms.txt", site).href}
`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
