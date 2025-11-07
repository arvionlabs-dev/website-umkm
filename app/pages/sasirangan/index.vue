<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-8 lg:px-16">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          Daftar Sasirangan
        </h1>
        <p class="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Temukan koleksi kain sasirangan autentik, hasil karya UMKM lokal dengan
          motif khas dan kualitas terbaik dari pengrajin di sekitar Anda.
        </p>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="pb-16 md:pb-24 px-4 md:px-8 lg:px-16">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <product-card 
            v-for="product in productList" 
            :key="product.id"
            :title="product.nama"
            :price="product.harga"
            :seller="product.umkm"
            :description="product.deskripsi"
            :image-url="product.imageUrl"
            :more-info-url="product.moreInfoUrl"
          />
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
interface Product {
  id: number;
  nama: string;
  deskripsi: string;
  imageUrl: string;
  moreInfoUrl: string;
  harga?: number;
  umkm?: string;
}

// Dummy data - nanti bisa diganti dengan data dari API
const productList: Product[] = [
  {
    id: 1,
    nama: 'Sasirangan Motif Kulat Kurikit',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
    moreInfoUrl: 'https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html',
    harga: 150000,
    umkm: 'Haidar Sasirangan'
  },
  {
    id: 2,
    nama: 'Sasirangan Motif Gagatas',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
    moreInfoUrl: 'https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html',
    harga: 175000,
    umkm: 'Sasirangan Banua'
  },
  {
    id: 3,
    nama: 'Sasirangan Motif Iris Pudak',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
    moreInfoUrl: 'https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html',
    harga: 200000,
    umkm: 'Karya Sasirangan'
  },
  {
    id: 4,
    nama: 'Sasirangan Motif Kembang Kacang',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
    moreInfoUrl: 'https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html',
    harga: 180000,
    umkm: 'Tenun Tradisional'
  },
  {
    id: 5,
    nama: 'Sasirangan Motif Tampuk Manggis',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
    moreInfoUrl: 'https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html',
    harga: 165000,
    umkm: 'Sasirangan Heritage'
  },
  {
    id: 6,
    nama: 'Sasirangan Motif Hiris Gagatas',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
    moreInfoUrl: 'https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html',
    harga: 190000,
    umkm: 'Kain Nusantara'
  },
  {
    id: 7,
    nama: 'Sasirangan Motif Bintang Bahambur',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
    moreInfoUrl: 'https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html',
    harga: 210000,
    umkm: 'Batik Sasirangan'
  },
  {
    id: 8,
    nama: 'Sasirangan Motif Kulat Kurikit Begandir',
    deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
    moreInfoUrl: 'https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html',
    harga: 195000,
    umkm: 'Motif Kalimantan'
  }
];
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>