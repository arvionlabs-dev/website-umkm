<template>
  <div class="flex flex-col min-h-screen items-center pt-4 md:pt-8 justify-center">
    <div class="flex flex-col lg:flex-row gap-4 md:mt-0 md:gap-8 pt-20 lg:pt-0 px-4 md:px-8 lg:px-16 w-full">
      <div class="flex-1 w-full order-2 lg:order-1">
        <nuxt-img class="rounded-lg md:rounded-2xl w-full h-auto" :src="currentUMKM.foto[0]"></nuxt-img>
      </div>
      <div class="flex-1 flex flex-col gap-3 order-1 lg:order-2">
        <h1 class="text-4xl font-bold w-full md:w-max">
          {{ currentUMKM.nama }}
        </h1>
        <p class="text-base leading-relaxed">
          {{ currentUMKM.deskripsi }}
        </p>
        <div class="w-full md:w-auto">
          <Button
            class="mt-6 flex items-center justify-center md:justify-start gap-2 rounded-lg bg-green-500 hover:bg-green-600 w-full md:w-auto px-4 md:px-6 py-2 md:py-3">
            <Icon name="mdi:whatsapp" class="text-white" size="24" />
            <span class="font-semibold text-sm md:text-base" style="color: whitesmoke;">Hubungi via Whatsapp</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center w-full px-4 md:px-16 my-16 max-w-7xl">
    <p class="mb-2 text-base w-full md:text-lg lg:text-xl flex gap-2 items-start md:items-center">
      <span class="text-2xl shrink-0 items-center justify-center flex flex-col">
        <Icon name="material-symbols:location-on-outline" style="color: black;" />
      </span>
      <span class="text-base leading-relaxed">
        {{ currentUMKM.alamat }}
      </span>
    </p>
    <Map :height-in-px="300" :show-google-map-link="true" :coordinates="currentUMKM.coordinates" />
  </div>
  <div class="mt-16 flex flex-col gap-12 justify-start px-4 md:px-8 lg:px-16 w-full pb-12 md:pb-16 pt-12 lg:pt-0">
    <h1 class="text-2xl text-center font-bold">Sasirangan Terpopuler dari Kami</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
      <product-card v-for="product in currentUMKM.produks" :key="product.id" :title="product.nama"
        :price="product.harga" :description="product.deskripsi" :image-url="product.imageUrl" :showUMKMIcon="false" />
    </div>
    <div class="flex justify-center w-full">
      <Button
        class="flex items-center justify-center gap-3 md:gap-4 rounded-lg bg-yellow-500 px-6 md:px-8 py-2 md:py-3 w-full md:w-auto">
        <span class="font-semibold text-sm md:text-base" style="color: whitesmoke;">Tampilkan lebih banyak</span>
      </Button>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts" setup>

interface Produk {
  id: number;
  nama: string;
  deskripsi: string;
  harga: number;
  imageUrl: string
}

interface Umkm {
  nama: string;
  deskripsi: string;
  alamat: string;
  kontak: string;
  coordinates?: [number, number];
  id: number;
  slug: string;
  foto: string[];
  produks: Produk[];
}

const route = useRoute();

const defaultUMKM: Umkm = {
  nama: 'Haidar Sasirangan',
  deskripsi: 'Dari Tanah Laut, Kalimantan Selatan, Haidar Sasirangan hadir untuk menjaga warisan Banua tetap hidup di setiap helai kain. Sejak berdiri pada 2017, kami berfokus membuat kain sasirangan tradisional dengan warna alami dan sentuhan desain modern agar tetap digemari generasi kini. Setiap motif dibuat dengan tangan oleh pengrajin lokal berpengalaman — dari proses ikat, pewarnaan, hingga penjemuran di bawah hangatnya matahari Kalimantan.',
  alamat: 'Komplek Dahlina Permai, Jl. Dahlina Raya No.12, Sungai Besar, Kec. Banjarbaru Selatan, Kota Banjarbaru, Kalimantan Selatan 70714',
  kontak: '085828332081',
  id: 1,
  slug: 'haidar-sasirangan',
  coordinates: [-3.9066045,115.0839123],
  foto: [
    'https://www.kanalkalimantan.com/wp-content/uploads/2022/07/IMG-20220707-WA0002-1.jpg'
  ],
  produks: [
    {
      id: 1,
      nama: 'Sasirangan Motif Kulat Kurikit',
      deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
      harga: 150000,
    },
    {
      id: 2,
      nama: 'Sasirangan Motif Gagatas',
      deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
      harga: 175000,
    },
    {
      id: 3,
      nama: 'Sasirangan Motif Iris Pudak',
      deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
      harga: 200000,
    },
    {
      id: 4,
      nama: 'Sasirangan Motif Iris Pudak',
      deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
      harga: 200000,
    },
  ]
};

const dummyUMKMs: Record<string, Umkm> = {
  'haidar-sasirangan': defaultUMKM
};

const currentUMKM = computed((): Umkm => {
  const slug = route.params.slug as string | string[] | undefined;
  const slugStr = Array.isArray(slug) ? slug[0] : slug;
  return dummyUMKMs[slugStr || 'haidar-sasirangan'] ?? defaultUMKM;
});

</script>

<style></style>