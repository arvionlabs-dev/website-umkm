# SEO Setup - Tjendera

## ✅ Implementasi SEO yang Sudah Dilakukan

### 1. **Global SEO Configuration** (nuxt.config.ts)
- Meta tags dasar (title, description, keywords)
- Open Graph tags untuk social media sharing
- Twitter Card metadata
- Structured Data (WebSite & Organization schema)
- Language attribute (id - Indonesian)
- Theme color dan mobile app config
- Canonical URL setup

### 2. **Dynamic SEO per Halaman**
Setiap halaman memiliki SEO yang spesifik menggunakan composable `useSeo()`:

#### **Homepage** (/)
- Title: "Beranda | Tjendera"
- Description: Fokus pada direktori UMKM lokal
- Structured Data: WebPage dengan ItemList untuk featured UMKM

#### **Katalog UMKM** (/umkm)
- Title: "Katalog UMKM | Tjendera"
- Description: Informasi tentang filtering dan pencarian
- Structured Data: CollectionPage dengan jumlah total UMKM

#### **Detail UMKM** (/umkm/[slug])
- Title: Nama UMKM
- Description: Deskripsi UMKM
- Image: Foto pertama UMKM
- Structured Data: LocalBusiness dengan informasi lengkap (alamat, telepon, kategori)

#### **About** (/about)
- Title: "Tentang Kami | Tjendera"
- Description: Informasi platform
- Structured Data: AboutPage dengan Organization details

### 3. **Technical SEO**

#### **Robots.txt** ✅
- Allow all crawlers
- Crawl-delay: 1 second
- Sitemap reference
Location: `/public/robots.txt`

#### **Sitemap.xml** ✅
- Dynamic sitemap generation
- Includes all static pages (/, /umkm, /about)
- Includes all dynamic UMKM pages (/umkm/[slug])
- Priority dan changefreq configuration
- Auto-updates with current date
Location: `/server/routes/sitemap.xml.ts`

#### **Canonical URLs** ✅
- Setiap halaman memiliki canonical URL
- Mencegah duplicate content issues

### 4. **Structured Data (Schema.org)**

#### **WebSite Schema** (Global)
```json
{
  "@type": "WebSite",
  "name": "Tjendera",
  "url": "https://tjendera.com",
  "potentialAction": {
    "@type": "SearchAction"
  }
}
```

#### **Organization Schema** (Global)
```json
{
  "@type": "Organization",
  "name": "Tjendera",
  "logo": "https://tjendera.com/logo.png",
  "address": { ... },
  "contactPoint": { ... }
}
```

#### **LocalBusiness Schema** (UMKM Pages)
```json
{
  "@type": "LocalBusiness",
  "name": "Nama UMKM",
  "description": "...",
  "image": [...],
  "address": { ... },
  "telephone": "..."
}
```

### 5. **Social Media Optimization**

#### **Open Graph Tags**
- og:title
- og:description
- og:image
- og:url
- og:type
- og:locale (id_ID)
- og:site_name

#### **Twitter Cards**
- twitter:card (summary_large_image)
- twitter:title
- twitter:description
- twitter:image
- twitter:url

### 6. **Performance & UX**
- Lazy loading images
- Alt text untuk semua gambar
- Semantic HTML structure
- Mobile-responsive design
- Fast page load times

## 📋 Checklist Deployment

### Sebelum Go Live:
- [ ] Update base URL di `nuxt.config.ts` dan `sitemap.xml.ts` dari `https://tjendera.com` ke domain production
- [ ] Buat file `/public/og-image.jpg` (1200x630px) untuk social sharing
- [ ] Buat file `/public/logo.png` untuk Organization schema
- [ ] Buat file `/public/favicon.ico` dan `/public/apple-touch-icon.png`
- [ ] Verify structured data di [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test sitemap di [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [ ] Submit sitemap ke Google Search Console
- [ ] Submit sitemap ke Bing Webmaster Tools

### Setelah Deployment:
- [ ] Verify robots.txt: `https://yourdomain.com/robots.txt`
- [ ] Verify sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Test Open Graph: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter Cards: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Register di Google Search Console
- [ ] Register di Bing Webmaster Tools
- [ ] Setup Google Analytics / Plausible
- [ ] Monitor crawl errors dan index status

## 🔧 Maintenance

### Regular Tasks:
1. **Monthly**: Check Google Search Console untuk errors
2. **Monthly**: Update sitemap jika ada perubahan struktur
3. **Quarterly**: Review dan update meta descriptions
4. **Quarterly**: Check broken links
5. **Annually**: Review dan update keywords strategy

## 📊 Monitoring Tools

### Recommended:
- Google Search Console (required)
- Google Analytics 4
- Bing Webmaster Tools
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/) (untuk audit)
- [Schema Markup Validator](https://validator.schema.org/)

## 🚀 Advanced SEO (Future Enhancements)

### Consider Adding:
1. **Blog/Articles** untuk content marketing
2. **FAQ Schema** pada halaman about
3. **Review/Rating Schema** untuk UMKM (jika ada sistem review)
4. **Breadcrumb Schema** untuk navigasi
5. **Video Schema** jika menambahkan video content
6. **Event Schema** jika ada event/pameran UMKM
7. **AMP pages** untuk mobile performance
8. **PWA** untuk offline access
9. **Hreflang tags** jika menambahkan multi-language support
10. **RSS Feed** untuk content syndication

## 📝 Content Guidelines

### SEO-Friendly Content:
- **Title Length**: 50-60 characters
- **Description Length**: 150-160 characters
- **H1**: Satu per halaman, descriptive
- **H2-H6**: Hierarchical structure
- **Image Alt Text**: Descriptive, include keywords naturally
- **Internal Linking**: Link ke related UMKM/pages
- **URL Structure**: Clean, readable, keyword-rich

### Keyword Strategy:
**Primary Keywords:**
- UMKM Kalimantan Selatan
- Oleh-oleh Banjarmasin
- Direktori UMKM Kalsel

**Secondary Keywords:**
- Kuliner tradisional Banjar
- Kerajinan lokal Kalimantan
- Sasirangan Banjarmasin
- Produk lokal Kalsel

**Long-tail Keywords:**
- "cari UMKM terdekat Banjarmasin"
- "oleh-oleh khas Kalimantan Selatan"
- "direktori produk lokal Banjarmasin"

## 🎯 Target Audience

### Primary:
- Wisatawan yang mencari oleh-oleh
- Penduduk lokal yang mendukung produk lokal
- Reseller/distributor produk lokal

### Secondary:
- Pemilik UMKM yang ingin listing
- Komunitas pendukung UMKM
- Media/blogger yang review produk lokal

---

**Last Updated:** November 2025
**Maintained by:** Tjendera Team
