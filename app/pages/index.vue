<template>
  <section id="hero-section-bg" class="w-full h-[90dvh] md:h-[80dvh] flex justify-center items-center absolute z-[-1]">
  </section>
  <section id="hero-section-content"
    class="flex flex-col gap-6 md:gap-8 w-full h-screen md:justify-center md:items-center relative px-4 py-48 md:py-0  md:px-8">
    <div class="flex flex-col items-center">
      <h1 class="font-eb-garamond text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">Jelajah Indonesia
        Lewat Kuliner dan Kerajinannya</h1>
      <p class="mt-2 w-full text-white/90 text-base md:text-lg lg:text-xl md:w-3/4 text-center px-2 font-dm-sans">
        Direktori lengkap UMKM lokal, kuliner, kerajinan tangan, hingga fashion. Semua dalam satu tempat!
      </p>
    </div>
  </section>

  <UmkmLogoCarousel />

  <section class="flex flex-col md:mt-0 mt-16 gap-16">
    <section class="p-4 md:p-8 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
      <div class="w-full rounded-2xl overflow-hidden">
        <nuxt-img src="/bg/produk_1.png" width="600" class="hover:scale-105 transition w-full h-auto" />
      </div>
      <div class="flex flex-col gap-4 md:gap-6 justify-center">
        <h2 class="font-eb-garamond font-bold text-2xl md:text-3xl lg:text-4xl">Dipilih dengan Teliti, Dijamin
          Keasliannya</h2>
        <p class="font-dm-sans text-sm md:text-base leading-relaxed text-gray-700">
          Kami hanya menampilkan UMKM yang terpercaya dan menjual produk autentik. Setiap pengrajin dipilih berdasarkan
          keaslian produk, kualitas konsisten, dan komitmen melestarikan warisan budaya daerah. Jadi Anda bisa belanja
          dengan tenang dan mendukung yang tepat.
        </p>
      </div>
    </section>

    <section class="w-full text-white p-4 md:p-8 lg:p-16 flex flex-col gap-8 relative"
      style="background-color: #6F5937;">
      <div class="absolute top-0 bottom-0 right-0 left-0 pattern-gold opacity-10"></div>
      <h2 class="text-3xl font-bold font-eb-garamond text-white text-center">
        Fitur Platform Kami
      </h2>
      <section class="grid relative z-10 grid-cols-1 md:grid-cols-2 mx-auto max-w-4xl gap-y-10">
        <article class="flex gap-2">
          <div class="aspect-square flex items-center justify-center bg-white rounded-2xl w-12 h-12">
            <Icon name="mdi:magnify" class="text-[#6F5937] text-2xl" />
          </div>
          <div class="flex flex-col gap-0">
            <h3 class="font-eb-garamond font-bold text-xl">Pencarian & Filter Cerdas</h3>
            <p class="font-dm-sans text-sm md:text-base">
              Temukan UMKM berdasarkan kategori, lokasi, atau nama dengan mudah.
            </p>
          </div>
        </article>
        <article class="flex gap-2">
          <div class="aspect-square flex items-center justify-center bg-white rounded-2xl w-12 h-12">
            <Icon name="mdi:lightbulb-on-20" class="text-[#6F5937] text-2xl" />
          </div>
          <div class="flex flex-col gap-0">
            <h3 class="font-eb-garamond font-bold text-xl">Rekomendasi Personal</h3>
            <p class="font-dm-sans text-sm md:text-base">
              Dapatkan rekomendasi UMKM yang sesuai dengan minat Anda.
            </p>
          </div>
        </article>
        <article class="flex gap-2">
          <div class="aspect-square flex items-center justify-center bg-white rounded-2xl w-12 h-12">
            <Icon name="mdi:map-marker" class="text-[#6F5937] text-2xl" />
          </div>
          <div class="flex flex-col gap-0">
            <h3 class="font-eb-garamond font-bold text-xl">Informasi Lokasi Lengkap</h3>
            <p class="font-dm-sans text-sm md:text-base">
              Peta, alamat, dan kontak untuk memudahkan Anda berkunjung.
            </p>
          </div>
        </article>
        <article class="flex gap-2">
          <div class="aspect-square flex items-center justify-center bg-white rounded-2xl w-12 h-12">
            <Icon name="mdi:heart" class="text-[#6F5937] text-2xl" />
          </div>
          <div class="flex flex-col gap-0">
            <h3 class="font-eb-garamond font-bold text-xl">Fitur Tambah ke Favorit</h3>
            <p class="font-dm-sans text-sm md:text-base">
              Simpan UMKM favorit Anda untuk akses cepat.
            </p>
          </div>
        </article>
      </section>
    </section>

    <!-- Rekomendasi UMKM Section -->
    <section class="p-4 md:p-8 lg:p-16">
      <div class="flex items-center justify-between mb-6 md:mb-8">
        <div>
          <h2 class="font-eb-garamond font-bold text-2xl md:text-3xl lg:text-4xl">Gak perlu bingung nyari oleh-oleh atau
            suvenir!</h2>
        </div>
        <NuxtLink to="/umkm"
          class="hidden md:flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-dm-sans font-semibold transition-colors">
          Lihat Semua
          <Icon name="mdi:arrow-right" />
        </NuxtLink>
      </div>

      <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        <UmkmCard v-for="umkm in recommendedUmkm" :key="umkm.slug" :umkm="umkm" />
      </div>

      <NuxtLink to="/umkm"
        class="md:hidden mt-6 flex items-center justify-center gap-2 text-yellow-600 hover:text-yellow-700 font-dm-sans font-semibold transition-colors">
        Lihat Semua UMKM
        <Icon name="mdi:arrow-right" />
      </NuxtLink>
    </section>
  </section>

  <!-- Testimonial Section -->
  <section class="p-4 md:p-8 lg:p-16 mt-16 md:mt-0 flex flex-col gap-4">
    <h2 class="font-eb-garamond text-center font-bold text-2xl md:text-3xl lg:text-4xl">Testimoni Pengunjung Tjendera
    </h2>
    <TestimonialCarousel :testimonials="testimonials" />
  </section>

  <!-- Contact Section -->
  <section class="p-4 md:p-8 relative lg:p-16 text-white" style="background-color: #6F5937;">
    <div class="absolute top-0 bottom-0 right-0 left-0 pattern-gold opacity-10"></div>
    <div class="flex relative z-10 flex-col gap-4 md:gap-0 md:flex-row md:items-center w-full justify-between mx-0 text-center">
      <div class="text-left">
        <h2 class="md:mb-4 font-eb-garamond font-bold text-2xl md:text-3xl lg:text-4xl">Hubungi Kami</h2>
        <p class="font-dm-sans ">Jika ada yang ingin ditanyakan</p>
      </div>
      <Button @click="contactWhatsApp"
        class="bg-green-500 px-4 py-3 rounded-md hover:bg-green-600 inline-flex items-center gap-2 text-xl cursor-pointer">
        <Icon name="mdi:whatsapp" class="text-white" />
        <span class="font-dm-sans font-semibold text-base text-white">Hubungi via WhatsApp</span>
      </Button>
    </div>
  </section>

  <Footer />
</template>

<script lang="ts" setup>
import { realUMKM, testimonials } from '~/composables/data';

// SEO Setup
useSeo({
  title: 'Beranda',
  description: 'Jelajahi direktori lengkap UMKM lokal Kalimantan Selatan. Temukan oleh-oleh khas, kuliner tradisional, kerajinan tangan, dan fashion lokal dari Banjarmasin dan sekitarnya.',
  keywords: 'UMKM Kalimantan Selatan, oleh-oleh Banjarmasin, direktori UMKM Kalsel, produk lokal, kerajinan Banjar, kuliner tradisional',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Tjendera - Direktori UMKM Lokal Kalimantan Selatan',
    'description': 'Platform direktori lengkap UMKM lokal Kalimantan Selatan',
    'url': 'https://tjendera.zkranovic.tech/',
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': Object.values(realUMKM).slice(0, 8).map((umkm, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'LocalBusiness',
          'name': umkm.nama,
          'description': umkm.deskripsi,
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': umkm.alamat,
            'addressLocality': 'Banjarmasin',
            'addressRegion': 'Kalimantan Selatan',
            'addressCountry': 'ID'
          }
        }
      }))
    }
  }
});

const { getRecommendations } = useRecommendations();

const recommendedUmkm = computed(() => {
  return getRecommendations(realUMKM, undefined, 4);
});

const contactWhatsApp = () => {
  const phoneNumber = '089692822165';
  const message = encodeURIComponent('Halo! Saya ingin bertanya tentang UMKM di Tjendera.');
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};
</script>

<style lang="css">
#hero-section-bg {
  background-image: url('/bg/hero.png');
  background-size: cover;
  filter: brightness(0.5);
}
</style>
