<template>
  <!-- Hero Section -->
  <section class="pt-32 pb-16 md:pb-20 px-4 md:px-8 lg:px-16 md:h-[70dvh] flex items-center relative">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="font-eb-garamond font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
        Tentang Tjendera
      </h1>
      <p class="font-dm-sans text-lg md:text-xl text-gray-700 leading-relaxed">
        Platform digital yang menghubungkan Anda dengan UMKM lokal Kalimantan Selatan. Kami berkomitmen
        mendukung digitalisasi UMKM untuk meningkatkan visibilitas dan penjualan produk oleh-oleh khas daerah.
      </p>
    </div>
  </section>

  <!-- What We Do -->
  <section class="py-16 md:py-20 px-4 md:px-8 lg:px-16 ">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div class="order-2 md:order-1">
          <h2 class="font-eb-garamond font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            Apa yang Kami Lakukan?
          </h2>
          <div class="space-y-4 font-dm-sans text-base text-gray-700 leading-relaxed">
            <p>
              Kami menyediakan platform digital yang memudahkan Anda menemukan berbagai UMKM lokal yang menawarkan
              oleh-oleh daerahnya masing-masing, kuliner tradisional, hingga kerajinan tangan.
            </p>
            <p>
              Melalui fitur pencarian, filtering, dan rekomendasi personal, Anda dapat dengan mudah menjelajahi
              produk-produk berkualitas dari UMKM lokal. Setiap UMKM dilengkapi dengan informasi lengkap termasuk
              lokasi, kontak, dan galeri foto.
            </p>
            <p>
              Kami berkomitmen mendukung digitalisasi UMKM dengan memberikan mereka platform untuk meningkatkan
              visibilitas, menjangkau pelanggan lebih luas, dan pada akhirnya meningkatkan penjualan serta kesejahteraan
              mereka.
            </p>
          </div>
        </div>
        <div
          class="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg bg-gray-200 aspect-video flex items-center justify-center">
          <NuxtImg src="/bg/about-us-what-we-do.png" width="600" class="hover:scale-105 transition w-full h-auto" />
        </div>
      </div>
    </div>
  </section>

  <!-- Why Digitalization -->
  <section class="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="font-eb-garamond font-bold text-3xl md:text-4xl text-center text-gray-900 mb-12">
        Mengapa Digitalisasi UMKM Penting?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <!-- Point 1 -->
        <div class="border-gray-200 border rounded-2xl p-6 md:p-8">
          <Icon name="mdi:eye" class="text-green-700 text-6xl" />
          <h3 class="font-dm-sans font-bold text-xl text-gray-900 mb-3">
            Meningkatkan Visibilitas
          </h3>
          <p class="font-dm-sans text-base text-gray-700 leading-relaxed">
            UMKM dapat ditemukan lebih mudah oleh calon pelanggan dari berbagai daerah, tidak hanya terbatas pada area
            lokal.
          </p>
        </div>
        <div class="border-gray-200 border rounded-2xl p-6 md:p-8">
          <Icon name="mdi:chart-line" class="text-green-700 text-6xl" />
          <h3 class="font-dm-sans font-bold text-xl text-gray-900 mb-3">
            Meningkatkan Penjualan
          </h3>
          <p class="font-dm-sans text-base text-gray-700 leading-relaxed">
            Dengan akses online, UMKM dapat menjangkau lebih banyak pembeli, yang berdampak langsung pada peningkatan
            rate penjualan.
          </p>
        </div>
        <div class="border-gray-200 border rounded-2xl p-6 md:p-8">
          <Icon name="mdi:currency-usd" class="text-green-700 text-6xl" />
          <h3 class="font-dm-sans font-bold text-xl text-gray-900 mb-3">
            Memperkuat Ekonomi Lokal
          </h3>
          <p class="font-dm-sans text-base text-gray-700 leading-relaxed">
            Setiap pembelian dari UMKM lokal membantu menggerakkan ekonomi daerah dan menciptakan lapangan kerja.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 md:py-20 px-4 md:px-8 lg:px-16 relative" style="background-color: #6F5937;">
    <div class="absolute top-0 bottom-0 right-0 left-0 pattern-gold opacity-10"></div>
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="font-eb-garamond font-bold text-3xl md:text-4xl text-white mb-6">
        Mari Dukung UMKM Lokal Bersama Kami!
      </h2>
      <p class="font-dm-sans text-lg text-white mb-8 leading-relaxed">
        Setiap kunjungan Anda adalah kontribusi nyata untuk pertumbuhan ekonomi lokal dan pelestarian produk-produk khas
        dari berbagai daerah di Indonesia.
      </p>
      <div class="flex flex-col relative z-10 sm:flex-row gap-4 justify-center">
        <NuxtLink to="/umkm"
          class="flex items-center gap-2 bg-white text-yellow-600 px-8 py-4 rounded-lg font-dm-sans font-semibold hover:bg-gray-100 transition">
          <Icon name="mdi:compass-outline" class="text-green-700 text-2xl" />
          <span style="color: #373737;">Jelajahi UMKM</span>
        </NuxtLink>
        <a href="https://wa.me/089692822165" target="_blank"
          class="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-dm-sans font-semibold hover:bg-green-600 transition">
          <Icon name="mdi:whatsapp" class="text-white text-2xl" />
          Hubungi Kami
        </a>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script lang="ts" setup>
// SEO Setup
useSeo({
  title: 'Tentang Kami',
  description: 'Platform digital yang mendukung digitalisasi UMKM lokal Kalimantan Selatan untuk meningkatkan visibilitas dan penjualan produk oleh-oleh khas daerah.',
  keywords: 'tentang Tjendera, digitalisasi UMKM, platform UMKM Kalsel, mendukung UMKM lokal',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'Tentang Tjendera',
    'description': 'Platform digital yang mendukung digitalisasi UMKM lokal Kalimantan Selatan',
    'url': 'https://tjendera.zkranovic.tech/about',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Tjendera',
      'description': 'Platform direktori UMKM lokal Kalimantan Selatan',
      'url': 'https://tjendera.zkranovic.tech',
      'foundingLocation': {
        '@type': 'Place',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Banjarmasin',
          'addressRegion': 'Kalimantan Selatan',
          'addressCountry': 'ID'
        }
      }
    }
  }
});
</script>
