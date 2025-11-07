<template>
  <!-- Hero Section -->
  <section class="from-yellow-50 to-white pt-32 pb-20 px-4 md:px-8 lg:px-16 relative">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="font-eb-garamond font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
        Tentang Sobat Sasirangan
      </h1>
      <p class="font-dm-sans text-lg md:text-xl text-gray-700 leading-relaxed">
        Platform yang menghubungkan UMKM pengrajin sasirangan lokal dengan Anda. Kami berkomitmen untuk melestarikan budaya Kalimantan Selatan sambil memberdayakan ekonomi lokal.
      </p>
    </div>
  </section>

  <!-- Mission & Vision -->
  <section class="py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <!-- Mission -->
        <div class="bg-yellow-50 rounded-2xl p-8 md:p-10">
          <div class="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-6">
            <Icon name="heroicons:flag-20-solid" class="text-white text-3xl" />
          </div>
          <h2 class="font-eb-garamond font-bold text-2xl md:text-3xl text-gray-900 mb-4">
            Misi Kami
          </h2>
          <p class="font-dm-sans text-base text-gray-700 leading-relaxed">
            Menjadi jembatan antara pengrajin sasirangan lokal dengan konsumen, memudahkan akses ke produk berkualitas sambil meningkatkan kesejahteraan UMKM di Kalimantan Selatan.
          </p>
        </div>

        <!-- Vision -->
        <div class="bg-blue-50 rounded-2xl p-8 md:p-10">
          <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
            <Icon name="heroicons:eye-20-solid" class="text-white text-3xl" />
          </div>
          <h2 class="font-eb-garamond font-bold text-2xl md:text-3xl text-gray-900 mb-4">
            Visi Kami
          </h2>
          <p class="font-dm-sans text-base text-gray-700 leading-relaxed">
            Menjadikan sasirangan sebagai warisan budaya yang hidup dan berkelanjutan, dikenal luas baik lokal maupun nasional, dengan memberdayakan UMKM pengrajin lokal.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- About Sasirangan -->
  <section class="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div class="order-2 md:order-1">
          <h2 class="font-eb-garamond font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            Apa itu Sasirangan?
          </h2>
          <div class="space-y-4 font-dm-sans text-base text-gray-700 leading-relaxed">
            <p>
              Sasirangan adalah kain khas Kalimantan Selatan yang dibuat dengan teknik ikat celup tradisional. Nama "sasirangan" berasal dari kata "sirang" yang berarti dijahit secara jelujur.
            </p>
            <p>
              Setiap motif sasirangan memiliki makna filosofis yang mendalam, mulai dari harapan, doa, hingga simbol keindahan alam Banua. Proses pembuatannya yang rumit dan memakan waktu membuat setiap kain sasirangan menjadi karya seni yang bernilai tinggi.
            </p>
            <p>
              Di balik setiap kain sasirangan, ada tangan-tangan terampil pengrajin UMKM lokal yang menjaga tradisi sambil berinovasi agar sasirangan tetap relevan dan digemari oleh generasi muda.
            </p>
          </div>
        </div>
        <div class="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg">
          <nuxt-img
            src="https://placehold.co/600x400/e0e0e0/666?text=Kain+Sasirangan"
            class="w-full h-auto"
            alt="Kain Sasirangan"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Our Values -->
  <section class="py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div class="max-w-7xl mx-auto">
      <h2 class="font-eb-garamond font-bold text-3xl md:text-4xl text-center text-gray-900 mb-16">
        Nilai-Nilai Kami
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        <!-- Value 1 -->
        <div class="text-center">
          <div class="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="heroicons:heart-20-solid" class="text-yellow-600 text-4xl" />
          </div>
          <h3 class="font-dm-sans font-bold text-xl text-gray-900 mb-3">
            Keaslian
          </h3>
          <p class="font-dm-sans text-base text-gray-600 leading-relaxed">
            Kami hanya bekerja sama dengan pengrajin asli yang menjaga kualitas dan keaslian sasirangan tradisional.
          </p>
        </div>

        <!-- Value 2 -->
        <div class="text-center">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="heroicons:users-20-solid" class="text-green-600 text-4xl" />
          </div>
          <h3 class="font-dm-sans font-bold text-xl text-gray-900 mb-3">
            Pemberdayaan
          </h3>
          <p class="font-dm-sans text-base text-gray-600 leading-relaxed">
            Kami percaya pada pemberdayaan UMKM lokal untuk meningkatkan ekonomi dan kesejahteraan pengrajin.
          </p>
        </div>

        <!-- Value 3 -->
        <div class="text-center">
          <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="heroicons:sparkles-20-solid" class="text-blue-600 text-4xl" />
          </div>
          <h3 class="font-dm-sans font-bold text-xl text-gray-900 mb-3">
            Pelestarian Budaya
          </h3>
          <p class="font-dm-sans text-base text-gray-600 leading-relaxed">
            Kami berkomitmen untuk melestarikan warisan budaya sasirangan agar tetap hidup di generasi mendatang.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 px-4 md:px-8 lg:px-16 bg-yellow-600">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="font-eb-garamond font-bold text-3xl md:text-4xl text-white mb-6">
        Mari Dukung UMKM Lokal Bersama
      </h2>
      <p class="font-dm-sans text-lg text-white/90 mb-8 leading-relaxed">
        Setiap pembelian Anda adalah dukungan langsung untuk pengrajin sasirangan lokal dan pelestarian budaya Kalimantan Selatan.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/sasirangan"
          class="inline-block bg-white text-yellow-600 px-8 py-4 rounded-full font-dm-sans font-semibold hover:bg-gray-100 transition"
        >
          Jelajahi Produk
        </NuxtLink>
        <NuxtLink
          to="/umkm"
          class="inline-block bg-yellow-700 text-white px-8 py-4 rounded-full font-dm-sans font-semibold hover:bg-yellow-800 transition"
        >
          Lihat UMKM Mitra
        </NuxtLink>
      </div>
    </div>
  </section>

  <Footer/>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Tentang Kami - Sobat Sasirangan',
  description: 'Pelajari lebih lanjut tentang Sobat Sasirangan, platform yang menghubungkan UMKM pengrajin sasirangan lokal dengan Anda.',
})
</script>

<style>
</style>
