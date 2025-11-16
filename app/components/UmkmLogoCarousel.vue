<template>
  <section class="px-4 md:px-8 max-w-4xl mx-auto lg:px-16 py-8 flex flex-col gap-4 items-center overflow-hidden">
    <h2 class="text-2xl font-eb-garamond font-bold text-[#373737] text-center">UMKM mitra dan pengguna layanan</h2>

    <!-- Infinite Scrolling Container -->
    <div class="w-full inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)]">
      <!-- Gradient Overlays -->
      <div class="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent z-10"></div>
      <div class="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent z-10"></div>

      <!-- Scrolling Content -->
      <div class="w-full inline-flex flex-nowrap">
        <ul
          class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li v-for="(value, index) in logos" :key="index">
            <NuxtImg :src="value.src" :alt="value.alt" width="60" height="60" class="object-contain rounded-2xl grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          </li>
        </ul>
        <ul
          class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true">
          <li v-for="(value, index) in logos" :key="index">
            <NuxtImg :src="value.src" :alt="value.alt" width="60" height="60" class="object-contain rounded-2xl grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logos = [
  { src: '/umkm-logo/sentra-matahari.png', alt: 'Sentra Matahari' },
  { src: '/umkm-logo/raya-banjar.png', alt: 'Raya Banjar' },
  { src: '/umkm-logo/oleh-oleh-andalas.png', alt: 'Oleh-Oleh Andalas' },
  { src: '/umkm-logo/bingka-borneo.png', alt: 'Bingka Borneo' },
  { src: '/umkm-logo/amplang-rena.png', alt: 'Amplang Rena' },
];
</script>

<style scoped>
@keyframes infinite-scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

.animate-infinite-scroll {
  animation: infinite-scroll 20s linear infinite;
}
</style>