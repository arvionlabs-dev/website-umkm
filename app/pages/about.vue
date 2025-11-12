<template>
  <!-- Hero Section -->
  <section class="pt-32 pb-16 md:pb-20 px-4 md:px-8 lg:px-16 bg-yellow-50 relative">
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

  <!-- Why Digitalization -->
  <section class="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="font-eb-garamond font-bold text-3xl md:text-4xl text-center text-gray-900 mb-12">
        Mengapa Digitalisasi UMKM Penting?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <!-- Point 1 -->
        <div class="bg-yellow-50 rounded-2xl p-6 md:p-8">
          <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
            <Icon name="mdi:eye" class="text-white text-3xl" />
          </div>
          <h3 class="font-dm-sans font-bold text-xl text-gray-900 mb-3">
            Meningkatkan Visibilitas
          </h3>
          <p class="font-dm-sans text-base text-gray-700 leading-relaxed">
            UMKM dapat ditemukan lebih mudah oleh calon pelanggan dari berbagai daerah, tidak hanya terbatas pada area lokal.
          </p>
        </div>

        <!-- Point 2 -->
        <div class="bg-green-50 rounded-2xl p-6 md:p-8">
          <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
            <Icon name="mdi:chart-line" class="text-white text-3xl" />
          </div>
          <h3 class="font-dm-sans font-bold text-xl text-gray-900 mb-3">
            Meningkatkan Penjualan
          </h3>
          <p class="font-dm-sans text-base text-gray-700 leading-relaxed">
            Dengan akses online, UMKM dapat menjangkau lebih banyak pembeli, yang berdampak langsung pada peningkatan rate penjualan.
          </p>
        </div>

        <!-- Point 3 -->
        <div class="bg-blue-50 rounded-2xl p-6 md:p-8">
          <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <Icon name="mdi:handshake" class="text-white text-3xl" />
          </div>
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

  <!-- What We Do -->
  <section class="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div class="order-2 md:order-1">
          <h2 class="font-eb-garamond font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            Apa yang Kami Lakukan?
          </h2>
          <div class="space-y-4 font-dm-sans text-base text-gray-700 leading-relaxed">
            <p>
              Kami menyediakan platform digital yang memudahkan Anda menemukan berbagai UMKM lokal yang menawarkan 
              oleh-oleh khas Kalimantan Selatan—mulai dari sasirangan, kuliner tradisional, hingga kerajinan tangan.
            </p>
            <p>
              Melalui fitur pencarian, filtering, dan rekomendasi personal, Anda dapat dengan mudah menjelajahi produk-produk 
              berkualitas dari UMKM lokal. Setiap UMKM dilengkapi dengan informasi lengkap termasuk lokasi, kontak, dan galeri foto.
            </p>
            <p>
              Kami berkomitmen mendukung digitalisasi UMKM dengan memberikan mereka platform untuk meningkatkan visibilitas, 
              menjangkau pelanggan lebih luas, dan pada akhirnya meningkatkan penjualan serta kesejahteraan mereka.
            </p>
          </div>
        </div>
        <div class="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg bg-gray-200 aspect-video flex items-center justify-center">
          <Icon name="mdi:store" class="text-8xl text-gray-400" />
        </div>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="font-eb-garamond font-bold text-3xl md:text-4xl text-center text-gray-900 mb-12">
        Fitur Platform Kami
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div class="flex gap-4">
          <div class="shrink-0">
            <div class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Icon name="mdi:magnify" class="text-white text-xl" />
            </div>
          </div>
          <div>
            <h3 class="font-dm-sans font-bold text-lg text-gray-900 mb-2">
              Pencarian & Filter Cerdas
            </h3>
            <p class="font-dm-sans text-base text-gray-600 leading-relaxed">
              Temukan UMKM berdasarkan kategori, lokasi, atau nama dengan mudah.
            </p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="shrink-0">
            <div class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Icon name="mdi:heart" class="text-white text-xl" />
            </div>
          </div>
          <div>
            <h3 class="font-dm-sans font-bold text-lg text-gray-900 mb-2">
              Fitur Favorit
            </h3>
            <p class="font-dm-sans text-base text-gray-600 leading-relaxed">
              Simpan UMKM favorit Anda untuk akses cepat.
            </p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="shrink-0">
            <div class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Icon name="mdi:lightbulb" class="text-white text-xl" />
            </div>
          </div>
          <div>
            <h3 class="font-dm-sans font-bold text-lg text-gray-900 mb-2">
              Rekomendasi Personal
            </h3>
            <p class="font-dm-sans text-base text-gray-600 leading-relaxed">
              Dapatkan rekomendasi UMKM yang sesuai dengan minat Anda.
            </p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="shrink-0">
            <div class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Icon name="mdi:map-marker" class="text-white text-xl" />
            </div>
          </div>
          <div>
            <h3 class="font-dm-sans font-bold text-lg text-gray-900 mb-2">
              Informasi Lokasi Lengkap
            </h3>
            <p class="font-dm-sans text-base text-gray-600 leading-relaxed">
              Peta, alamat, dan kontak untuk memudahkan Anda berkunjung.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-yellow-500">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="font-eb-garamond font-bold text-3xl md:text-4xl text-white mb-6">
        Mari Dukung UMKM Lokal Bersama!
      </h2>
      <p class="font-dm-sans text-lg text-white mb-8 leading-relaxed">
        Setiap kunjungan dan pembelian Anda adalah kontribusi nyata untuk pertumbuhan ekonomi lokal 
        dan pelestarian produk-produk khas Kalimantan Selatan.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/umkm"
          class="inline-block bg-white text-yellow-600 px-8 py-4 rounded-lg font-dm-sans font-semibold hover:bg-gray-100 transition"
        >
          Jelajahi UMKM
        </NuxtLink>
        <a
          href="https://wa.me/089692822165"
          target="_blank"
          class="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-dm-sans font-semibold hover:bg-green-600 transition"
        >
          <Icon name="mdi:whatsapp" />
          Hubungi Kami
        </a>
      </div>
    </div>
  </section>

  <Footer/>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Tentang Kami - Tjendera',
  description: 'Platform digital yang mendukung digitalisasi UMKM lokal Kalimantan Selatan untuk meningkatkan visibilitas dan penjualan produk oleh-oleh khas daerah.',
})
</script>

<style>
</style>
