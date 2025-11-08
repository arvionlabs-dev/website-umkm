<template>
  <section id="hero-section-bg" class="w-full h-[90dvh] md:h-[80dvh] flex justify-center items-center absolute z-[-1]">
  </section>
  <section id="hero-section-content"
    class="flex flex-col gap-6 md:gap-8 w-full h-screen md:justify-center md:items-center relative px-4 py-48 md:py-0  md:px-8">
    <div class="flex flex-col items-center">
      <h1 class="font-eb-garamond text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">Nyari Sasirangan
        Berkualitas di Sekitarmu?</h1>
      <p class="mt-6 w-full text-white/90 text-base md:text-lg lg:text-xl md:w-3/4 text-center px-2 font-dm-sans">
        Temukan dan beli kain sasirangan terbaik langsung dari para pengrajin UMKM lokal. Setiap motif punya cerita,
        setiap jahitan hasil karya tangan terampil dari Banua.
      </p>
    </div>
    <div class="md:absolute md:bottom-24 px-4 w-full md:w-auto">
      <search-by-location />
    </div>
  </section>

  <section class="p-4 md:p-8 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
    <div class="w-full rounded-2xl overflow-hidden">
      <nuxt-img src="https://placehold.co/600x400/e0e0e0/666?text=Pengrajin+Sasirangan" width="600"
        class="hover:scale-105 transition w-full h-auto" />
    </div>
    <div class="flex flex-col gap-4 md:gap-6 justify-center">
      <h2 class="font-eb-garamond font-bold text-2xl md:text-3xl lg:text-4xl">Tentang Sasirangan & UMKM</h2>
      <p class="font-dm-sans text-sm md:text-base leading-relaxed text-gray-700">
        Sasirangan adalah kain khas Kalimantan Selatan yang dibuat dengan teknik ikat celup tradisional. Setiap motif
        punya makna dari harapan, doa, hingga simbol keindahan alam Banua. Di balik setiap kainnya, ada UMKM pengrajin
        lokal yang menjaga tradisi sambil berinovasi agar sasirangan tetap digemari generasi muda. Dengan membeli
        langsung dari UMKM di sini, kamu bukan cuma dapat kain berkualitas, tapi juga ikut melestarikan budaya dan
        menguatkan ekonomi lokal.
      </p>
    </div>
  </section>

  <section class="p-4 md:p-8 lg:p-16 bg-gray-50">
    <h2 class="font-eb-garamond text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12">Testimoni
      Pengunjung Sobat Sasirangan</h2>
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
      <product-card title="Sasirangan Iris Pudak" :price="70000" :rating="5.0" seller="Haidar Sasirangan"
        image-url="https://placehold.co/400x400/8B5CF6/fff?text=Iris+Pudak" :show-umkm-icon="true" />
      <product-card title="Sasirangan Sari Gading" :price="75000" :rating="5.0" seller="Rantau Sasirangan"
        image-url="https://placehold.co/400x400/3B82F6/fff?text=Sari+Gading" :show-umkm-icon="true" />
      <product-card title="Sasirangan Kembang Kacang" :price="80000" :rating="5.0" seller="Martapura Boutique"
        image-url="https://placehold.co/400x400/1E40AF/fff?text=Kembang+Kacang" :show-umkm-icon="true" />
      <product-card title="Sasirangan Gigi Harun" :price="85000" :rating="5.0" seller="Mantap Sasirangan"
        image-url="https://placehold.co/400x400/14B8A6/fff?text=Gigi+Harun" :show-umkm-icon="true" />
    </div>
  </section>

  <section class="bg-white p-4 md:p-8 lg:p-16 flex flex-col gap-6 md:gap-10">
    <h2 class="font-eb-garamond text-center font-bold text-2xl md:text-3xl lg:text-4xl">Testimoni Pengunjung Sobat
      Sasirangan</h2>
    <TestimonialCarousel></TestimonialCarousel>
  </section>

  <section class="p-4 md:p-8 lg:p-16 bg-gray-50">
    <div class="flex flex-row items-center w-full justify-between mx-0 text-center">
      <div class="text-left">
        <h2 class="mb-4 font-eb-garamond font-bold text-2xl md:text-3xl lg:text-4xl">Hubungi Kami</h2>
        <p class="font-dm-sans text-gray-700">Jika ada yang ingin ditanyakan</p>
      </div>
      <Button className="bg-green-500 px-4 py-3 rounded-md hover:bg-green-600 inline-flex items-center gap-2 text-xl">
        <Icon name="mdi:whatsapp" class="text-white" />
        <span class="font-dm-sans font-semibold text-base text-white">Hubungi via WhatsApp</span>
      </Button>
    </div>
  </section>

  <Footer />
</template>

<script lang="ts" setup>


</script>

<style lang="css" scoped>
#hero-section-bg {
  background-image: url('/bg-hero-section.png');
  background-size: cover;
  filter: brightness(0.7);
}
</style>
