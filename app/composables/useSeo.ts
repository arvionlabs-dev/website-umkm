export const useSeo = (options: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
  structuredData?: any;
}) => {
  const config = useRuntimeConfig();
  const route = useRoute();

  const baseUrl = 'https://tjendera.zkranovic.tech';
  const defaultImage = `${baseUrl}/og-image.jpg`;

  const seoTitle = options.title 
    ? `${options.title} | Tjendera` 
    : 'Tjendera - Direktori UMKM Lokal Kalimantan Selatan';
  
  const seoDescription = options.description || 
    'Platform direktori lengkap UMKM lokal Kalimantan Selatan. Temukan produk oleh-oleh khas, kuliner tradisional, kerajinan tangan, dan fashion lokal terpercaya.';
  
  const seoImage = options.image || defaultImage;
  const seoUrl = options.url || `${baseUrl}${route.path}`;
  const seoType = options.type || 'website';
  const seoKeywords = options.keywords || 'UMKM Banjarmasin, oleh-oleh Kalimantan Selatan, sasirangan, kuliner Banjar, kerajinan lokal';

  useHead({
    title: seoTitle,
    meta: [
      { name: 'description', content: seoDescription },
      { name: 'keywords', content: seoKeywords },
      
      // Open Graph
      { property: 'og:title', content: seoTitle },
      { property: 'og:description', content: seoDescription },
      { property: 'og:image', content: seoImage },
      { property: 'og:url', content: seoUrl },
      { property: 'og:type', content: seoType },
      
      // Twitter
      { name: 'twitter:title', content: seoTitle },
      { name: 'twitter:description', content: seoDescription },
      { name: 'twitter:image', content: seoImage },
      { name: 'twitter:url', content: seoUrl },
    ],
    link: [
      { rel: 'canonical', href: seoUrl }
    ]
  });

  // Add structured data if provided
  if (options.structuredData) {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(options.structuredData)
        }
      ]
    });
  }

  return {
    title: seoTitle,
    description: seoDescription,
    image: seoImage,
    url: seoUrl
  };
};
