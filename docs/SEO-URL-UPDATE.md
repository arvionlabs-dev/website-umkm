# Quick SEO URL Update Guide

Sebelum deployment ke production, update URL berikut:

## 1. nuxt.config.ts
```typescript
// Line ~35-40 (dalam app.head.meta)
{ property: 'og:url', content: 'https://YOUR-DOMAIN.com/' },

// Line ~60 (dalam app.head.link)
{ rel: 'canonical', href: 'https://YOUR-DOMAIN.com/' },

// Line ~70 (dalam script structured data)
'url': 'https://YOUR-DOMAIN.com',
'target': 'https://YOUR-DOMAIN.com/umkm?search={search_term_string}',

// Line ~90 (dalam Organization schema)
'url': 'https://YOUR-DOMAIN.com',
'logo': 'https://YOUR-DOMAIN.com/logo.png',
```

## 2. server/routes/sitemap.xml.ts
```typescript
// Line 4
const baseUrl = 'https://YOUR-DOMAIN.com';
```

## 3. app/composables/useSeo.ts
```typescript
// Line 12
const baseUrl = 'https://YOUR-DOMAIN.com';
```

## Search & Replace Command
Gunakan VS Code Find & Replace (Ctrl+Shift+H):
- Find: `https://tjendera.zkranovic.tech`
- Replace: `https://YOUR-DOMAIN.com`
- Files to include: `**/*.{ts,vue}`

## Verify After Update
1. Check `/sitemap.xml` - should show your domain
2. Check `/robots.txt` - should reference your sitemap URL
3. Check page source - Open Graph URLs should be correct
4. Test with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
