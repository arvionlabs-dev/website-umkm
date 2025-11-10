<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-8 lg:px-16">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          Daftar UMKM
        </h1>
        <p class="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Temukan koleksi kain sasirangan autentik, hasil karya UMKM lokal dengan
          motif khas dan kualitas terbaik dari pengrajin di sekitar Anda.
        </p>
      </div>
    </section>

    <!-- UMKM Grid -->
    <section class="pb-16 md:pb-24 px-4 md:px-8 lg:px-16">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <umkm-card 
            v-for="umkm in umkmList" 
            :key="umkm.id"
            :nama="umkm.nama || '-'"
            :deskripsi="umkm.deskripsi || '-'"
            :image-url="umkm.foto?.[0] || ''"
            :slug="umkm.slug || '-'"
          />
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
const umkmList: Umkm[] = [
  {
    id: 1,
    nama: 'Haidar Sasirangan',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    alamat: 'Komplek Dahlina Permai, Jl. Dahlina Raya No.12, Sungai Besar, Kec. Banjarbaru Selatan, Kota Banjarbaru, Kalimantan Selatan 70714',
    kontak: '085828332081',
    slug: 'haidar-sasirangan',
    foto: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s'
    ],
    produks: []
  },
  {
    id: 2,
    nama: 'Sasirangan Banua',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    alamat: 'Banjarmasin, Kalimantan Selatan',
    kontak: '081234567890',
    slug: 'sasirangan-banua',
    foto: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s'
    ],
    produks: []
  },
  {
    id: 3,
    nama: 'Karya Sasirangan',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    alamat: 'Martapura, Kalimantan Selatan',
    kontak: '082345678901',
    slug: 'karya-sasirangan',
    foto: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s'
    ],
    produks: []
  },
  {
    id: 4,
    nama: 'Tenun Tradisional',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    alamat: 'Banjarbaru, Kalimantan Selatan',
    kontak: '083456789012',
    slug: 'tenun-tradisional',
    foto: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s'
    ],
    produks: []
  },
  {
    id: 5,
    nama: 'Sasirangan Heritage',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    alamat: 'Banjarmasin, Kalimantan Selatan',
    kontak: '084567890123',
    slug: 'sasirangan-heritage',
    foto: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s'
    ],
    produks: []
  },
  {
    id: 6,
    nama: 'Kain Nusantara',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    alamat: 'Kandangan, Kalimantan Selatan',
    kontak: '085678901234',
    slug: 'kain-nusantara',
    foto: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s'
    ],
    produks: []
  },
  {
    id: 7,
    nama: 'Batik Sasirangan',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    alamat: 'Barabai, Kalimantan Selatan',
    kontak: '086789012345',
    slug: 'batik-sasirangan',
    foto: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s'
    ],
    produks: []
  },
  {
    id: 8,
    nama: 'Motif Kalimantan',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    alamat: 'Rantau, Kalimantan Selatan',
    kontak: '087890123456',
    slug: 'motif-kalimantan',
    foto: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s'
    ],
    produks: []
  }
];
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>