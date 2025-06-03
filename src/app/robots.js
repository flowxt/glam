export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/"],
      },
    ],
    sitemap: "https://www.glambeauty-pro.fr/sitemap.xml",
    host: "https://www.glambeauty-pro.fr",
  };
}
