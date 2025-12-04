export default function sitemap() {
  const base = "https://www.istratmc.com"
  const lastModified = new Date().toISOString()
  return [
    { url: `${base}/`, lastModified, priority: 1.0 },
    { url: `${base}/about-us`, lastModified, priority: 0.8 },
    { url: `${base}/our-works`, lastModified, priority: 0.8 },
    { url: `${base}/products-and-services`, lastModified, priority: 0.7 },
    { url: `${base}/connect-with-us`, lastModified, priority: 0.7 },
    { url: `${base}/case-study/maersk`, lastModified, priority: 0.9 },
    { url: `${base}/case-study/banaue`, lastModified, priority: 0.9 },
    { url: `${base}/case-study/sgv`, lastModified, priority: 0.9 },
  ]
}
