<template>
  <section id="hero-section-bg" class="w-full h-[80dvh] flex justify-center items-center absolute z-[-1]">
  </section>
  <section id="hero-section-content" class="flex flex-col gap-8 w-full h-screen justify-center items-center relative">
    <h1 class="text-white text-6xl font-bold">Nyari Sasirangan Berkualitas?</h1>
    <p class="text-white/90 text-xl md:w-3/4 text-center">
      Temukan dan beli kain sasirangan terbaik langsung dari para pengrajin UMKM lokal. Setiap
      motif punya cerita, setiap jahitan hasil karya tangan terampil dari Banua.
    </p>
    <div class="absolute bottom-24">
      <search-by-location />
    </div>
  </section>
  <section class="p-16 grid grid-cols-2">
    <div class="w-max rounded-2xl overflow-hidden">
      <nuxt-img src="https://pranala.co/wp-content/uploads/2021/03/pengrajin-sasirangan-1.jpg" width="600" class="hover:scale-105 transition" />
    </div>
    <div class="flex flex-col gap-8 justify-center">
      <h1 class="font-bold text-3xl">Tentang Sasirangan & UMKM</h1>
      <p>Sasirangan adalah kain khas Kalimantan Selatan yang dibuat dengan teknik
        ikat celup tradisional. Setiap motif punya makna dari harapan, doa, hingga
        simbol keindahan alam Banua. Di balik setiap kainnya, ada UMKM pengrajin
        lokal yang menjaga tradisi sambil berinovasi agar sasirangan tetap
        digemari generasi muda. Dengan membeli langsung dari UMKM di sini,
        kamu bukan cuma dapat kain berkualitas, tapi juga ikut melestarikan
        budaya dan menguatkan ekonomi lokal.</p>
    </div>
  </section>
  <section class="p-16 flex flex-col gap-10">
    <h1 class="text-center font-bold text-4xl">Produk Terpopuler</h1>
    <div class="w-full grid grid-cols-4 gap-4">
      <product-card title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        image-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s" more-info-url="https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html" />
      <product-card title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        image-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s" more-info-url="https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html" />
      <product-card title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        image-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s" more-info-url="https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html" />
      <product-card title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        image-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s" more-info-url="https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html" />
    </div>
    <div class="w-full flex justify-center">
      <Button class-name="bg-green-500 px-8 py-4 rounded-2xl hover:bg-green-400">
        <span class="font-semibold text-white">Show More</span>
      </Button>
    </div>
  </section>
  <section class="p-16 flex flex-col gap-10">
    <h1 class="text-center font-bold text-4xl">Cerita Pengrajin / Testimoni</h1>
    <TestimonialCarousel></TestimonialCarousel>
  </section>
  <Footer />
</template>

<script lang="ts" setup>


</script>

<style lang="css" scoped>
#hero-section-bg {
  background-image: url('/bg-sasirangan.jpg');
  background-size: cover;
  filter: brightness(0.7);
}
</style>