import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/notes','/batch','/memories','/courses']
      },
    ],
    sitemap: 'https://igit-mca.web.app/sitemap.xml',
  }
}