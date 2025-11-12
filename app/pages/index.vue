<template>
  <section id="hero-section-bg" class="w-full h-[90dvh] md:h-[80dvh] flex justify-center items-center absolute z-[-1]">
  </section>
  <section id="hero-section-content"
    class="flex flex-col gap-6 md:gap-8 w-full h-screen md:justify-center md:items-center relative px-4 py-48 md:py-0  md:px-8">
    <div class="flex flex-col items-center">
      <h1 class="font-eb-garamond text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">Temukan Oleh-Oleh Khas di Sekitarmu</h1>
      <p class="mt-6 w-full text-white/90 text-base md:text-lg lg:text-xl md:w-3/4 text-center px-2 font-dm-sans">
        Jelajahi berbagai oleh-oleh khas Kalimantan Selatan dari UMKM lokal terpercaya. Dari sasirangan, makanan tradisional, hingga kerajinan unik—semua ada di sini!
      </p>
    </div>
    <div class="md:absolute md:bottom-24 px-4 w-full md:w-auto">
      <search-by-location />
    </div>
  </section>

  <section class="p-4 md:p-8 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
    <div class="w-full rounded-2xl overflow-hidden">
      <nuxt-img src="https://placehold.co/600x400/e0e0e0/666?text=UMKM+Lokal" width="600"
        class="hover:scale-105 transition w-full h-auto" />
    </div>
    <div class="flex flex-col gap-4 md:gap-6 justify-center">
      <h2 class="font-eb-garamond font-bold text-2xl md:text-3xl lg:text-4xl">Mendukung Digitalisasi UMKM Lokal</h2>
      <p class="font-dm-sans text-sm md:text-base leading-relaxed text-gray-700">
        Kami hadir untuk membantu UMKM lokal Kalimantan Selatan meningkatkan visibilitas mereka di era digital. 
        Melalui platform ini, pelaku UMKM dapat menjangkau lebih banyak pelanggan, meningkatkan penjualan, dan 
        mengembangkan usaha mereka. Setiap klik dan pembelian Anda adalah dukungan nyata untuk ekonomi lokal 
        dan pelestarian produk-produk khas daerah yang penuh makna dan kualitas.
      </p>
    </div>
  </section>

  <!-- Rekomendasi UMKM Section -->
  <section class="p-4 md:p-8 lg:p-16 bg-gray-50">
    <div class="flex items-center justify-between mb-6 md:mb-8">
      <div>
        <h2 class="font-eb-garamond font-bold text-2xl md:text-3xl lg:text-4xl">Rekomendasi UMKM untuk Anda</h2>
        <p class="font-dm-sans text-sm md:text-base text-gray-600 mt-2 flex items-center gap-2">
          <Icon name="mdi:map-marker" class="text-yellow-600" />
          {{ userLocation }}
        </p>
      </div>
      <NuxtLink 
        to="/umkm" 
        class="hidden md:flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-dm-sans font-semibold transition-colors"
      >
        Lihat Semua
        <Icon name="mdi:arrow-right" />
      </NuxtLink>
    </div>
    
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      <UmkmCard 
        v-for="umkm in recommendedUmkm" 
        :key="umkm.slug"
        :umkm="umkm"
      />
    </div>

    <NuxtLink 
      to="/umkm" 
      class="md:hidden mt-6 flex items-center justify-center gap-2 text-yellow-600 hover:text-yellow-700 font-dm-sans font-semibold transition-colors"
    >
      Lihat Semua UMKM
      <Icon name="mdi:arrow-right" />
    </NuxtLink>
  </section>

  <!-- Testimonial Section -->
  <section class="bg-white p-4 md:p-8 lg:p-16 flex flex-col gap-6 md:gap-10">
    <h2 class="font-eb-garamond text-center font-bold text-2xl md:text-3xl lg:text-4xl">Testimoni Pengunjung</h2>
    <TestimonialCarousel :testimonials="testimonials" />
  </section>

  <!-- Contact Section -->
  <section class="p-4 md:p-8 lg:p-16 bg-gray-50">
    <div class="flex flex-col gap-4 md:gap-0 md:flex-row md:items-center w-full justify-between mx-0 text-center">
      <div class="text-left">
        <h2 class="md:mb-4 font-eb-garamond font-bold text-2xl md:text-3xl lg:text-4xl">Hubungi Kami</h2>
        <p class="font-dm-sans text-gray-700">Jika ada yang ingin ditanyakan</p>
      </div>
      <Button 
        @click="contactWhatsApp"
        class="bg-green-500 px-4 py-3 rounded-md hover:bg-green-600 inline-flex items-center gap-2 text-xl cursor-pointer"
      >
        <Icon name="mdi:whatsapp" class="text-white" />
        <span class="font-dm-sans font-semibold text-base text-white">Hubungi via WhatsApp</span>
      </Button>
    </div>
  </section>

  <Footer />
</template>

<script lang="ts" setup>
import { realUMKM, testimonials } from '~/composables/data';

const { getRecommendations } = useRecommendations();

// Get recommended UMKM (8 random or based on click history)
const recommendedUmkm = computed(() => {
  return getRecommendations(realUMKM, undefined, 8);
});

// User location (default or can be from geolocation)
const userLocation = ref('Banjarmasin, Kalimantan Selatan');

// WhatsApp contact
const contactWhatsApp = () => {
  const phoneNumber = '089692822165';
  const message = encodeURIComponent('Halo! Saya ingin bertanya tentang UMKM di Tjendera.');
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};
</script>

<style lang="css" scoped>
#hero-section-bg {
  background-image: url('/bg-hero-section.png');
  background-size: cover;
  filter: brightness(0.7);
}
</style>
