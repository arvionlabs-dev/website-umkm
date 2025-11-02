<template>
  <div class="flex flex-col min-h-screen items-center pt-6 md:pt-8 justify-center">
    <div class="flex flex-col lg:flex-row gap-4 md:gap-8 pt-20 lg:pt-0 px-4 md:px-8 lg:px-16 w-full">
      <div class="flex-1 w-full order-2 lg:order-1">
        <nuxt-img class="rounded-lg md:rounded-2xl w-full h-auto" :src="currentUMKM.foto[0]"></nuxt-img>
      </div>
      <div class="flex-1 flex flex-col gap-4 md:gap-8 order-1 lg:order-2">
        <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold w-full md:w-max">
          {{ currentUMKM.nama }}
          <div class="mt-2 h-1 w-full bg-black"></div>
        </h1>
        <p class="text-base md:text-lg lg:text-xl leading-relaxed">
          {{ currentUMKM.deskripsi }}
        </p>
        <p class="text-base md:text-lg lg:text-xl flex gap-2 md:gap-4 items-start md:items-center">
          <span class="text-2xl md:text-3xl lg:text-4xl shrink-0">
            <Icon name="material-symbols:location-on-outline" style="color: black;" />
          </span>
          <span class="leading-relaxed">
            {{ currentUMKM.alamat }}
          </span>
        </p>
        <div class="w-full md:w-auto">
          <Button className="flex items-center justify-center md:justify-start gap-3 md:gap-4 rounded-lg bg-green-500 hover:bg-green-600 w-full md:w-auto px-4 md:px-6 py-2 md:py-3">
            <span class="text-xl md:text-2xl">
              <Icon name="mdi:chat-outline" style="color: whitesmoke;" />
            </span>
            <span class="font-semibold text-sm md:text-base" style="color: whitesmoke;">Hubungi via Whatsapp</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-6 md:gap-8 justify-start px-4 md:px-8 lg:px-16 w-full pb-12 md:pb-16 pt-12 lg:pt-0">
    <h1 class="text-2xl md:text-3xl lg:text-4xl text-start font-bold">Sasirangan Terpopuler dari Kami</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
      <product-card title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        image-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s"
        more-info-url="https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html" />
      <product-card title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        image-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s"
        more-info-url="https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html" />
      <product-card title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        image-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s"
        more-info-url="https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html" />
      <product-card title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        image-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s"
        more-info-url="https://umum.banjarmasinkota.go.id/2017/01/kain-sasirangan-banjarmasin.html" />
    </div>
    <div class="flex justify-center w-full">
      <Button className="flex items-center justify-center gap-3 md:gap-4 rounded-lg bg-green-500 hover:bg-green-600 px-6 md:px-8 py-2 md:py-3 w-full md:w-auto">
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
}

interface Umkm {
  nama: string;
  deskripsi: string;
  alamat: string;
  kontak: string;
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
  foto: [
    'https://www.kanalkalimantan.com/wp-content/uploads/2022/07/IMG-20220707-WA0002-1.jpg'
  ],
  produks: [
    {
      id: 1,
      nama: 'Title',
      deskripsi: 'Lorem ipsun',
      harga: 20000
    },
    {
      id: 2,
      nama: 'Title',
      deskripsi: 'Lorem ipsun',
      harga: 20000
    },
    {
      id: 3,
      nama: 'Title',
      deskripsi: 'Lorem ipsun',
      harga: 20000
    },
    {
      id: 4,
      nama: 'Title',
      deskripsi: 'Lorem ipsun',
      harga: 20000
    },
    {
      id: 5,
      nama: 'Title',
      deskripsi: 'Lorem ipsun',
      harga: 20000
    },
    {
      id: 6,
      nama: 'Title',
      deskripsi: 'Lorem ipsun',
      harga: 20000
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