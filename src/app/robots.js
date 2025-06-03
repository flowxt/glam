export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/"],
      },
    ],
    sitemap: "https://www.beautyglam-pro.fr/sitemap.xml",
    host: "https://www.beautyglam-pro.fr",
  };
}
