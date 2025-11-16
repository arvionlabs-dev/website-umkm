<template>
  <div class="flex flex-col min-h-screen items-center pt-4 md:pt-8 justify-center">
    <div
      class="flex flex-col lg:flex-row gap-4 md:mt-0 md:gap-8 pt-20 lg:pt-0 px-4 md:px-8 lg:px-16 w-full max-w-7xl mx-auto">
      <div class="flex-1 w-full relative order-2 lg:order-1 overflow-hidden rounded-lg md:rounded-2xl bg-gray-200"
        :style="{ backgroundImage: `url(${currentUMKM.foto?.[0]})`, backgroundPosition: 'center', backgroundSize: 'cover' }">
      </div>

      <div class="flex-1 flex flex-col gap-3 order-1 lg:order-2">
        <h1 class="text-3xl md:text-4xl font-bold w-full font-eb-garamond">
          {{ currentUMKM.nama }}
        </h1>

        <!-- Categories -->
        <div v-if="currentUMKM.kategori && currentUMKM.kategori.length > 0" class="flex flex-wrap gap-2">
          <span v-for="kategori in currentUMKM.kategori" :key="kategori"
            class="text-sm px-3 py-1 rounded-full font-medium" style="background-color: #DCCBA7; color: #373737;">
            {{ kategori }}
          </span>
        </div>

        <p class="text-base leading-relaxed text-gray-700">
          {{ currentUMKM.deskripsi }}
        </p>

        <section class="flex gap-1">
          <Icon name="mdi:star" class="text-yellow-400 text-base md:text-lg lg:text-xl" />
          <span>{{ starAvarege(currentUMKM.ulasan ?? []) }} ({{currentUMKM.ulasan?.length ?? 0}} ulasan)</span>
        </section>

        <!-- Contact Info -->
        <div v-if="kontakArray.length > 0" class="flex flex-col gap-2 mt-2">
          <h3 class="font-semibold text-gray-900">Kontak:</h3>
          <div class="flex flex-col gap-2">
            <a v-for="(contact, index) in kontakArray" :key="index" :href="getContactLink(contact)" target="_blank"
              class="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors">
              <ClientOnly>
                <Icon :name="getContactIcon(contact.type)" class="text-xl" />
              </ClientOnly>
              <span>{{ formatContactValue(contact) }}</span>
            </a>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 mt-4">
          <Button @click="contactWhatsApp"
            class="flex items-center justify-center gap-2 rounded-lg bg-green-500 hover:bg-green-600 px-4 md:px-6 py-2 md:py-3 cursor-pointer">
            <Icon name="mdi:whatsapp" class="text-white" size="24" />
            <span class="font-semibold text-sm md:text-base text-white">Hubungi via WhatsApp</span>
          </Button>

          <button @click="toggleFavorite" :class="[
            'flex items-center justify-center gap-2 rounded-lg px-4 md:px-6 py-2 md:py-3 cursor-pointer transition-colors',
            isFavorited ? 'bg-[#6F5937] hover:bg-[#645033] text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          ]">
            <Icon :name="isFavorited ? 'mdi:heart' : 'mdi:heart-outline'" size="24" />
            <span class="font-semibold text-sm md:text-base">
              {{ isFavorited ? 'Difavoritkan' : 'Tambah Favorit' }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <section class="p-4 md:p-8 lg:p-16 mt-16 md:mt-0 flex flex-col gap-4">
    <h2 class="font-eb-garamond text-center font-bold text-2xl md:text-3xl lg:text-4xl">Ulasan dari Pelanggan</h2>
    <TestimonialCarousel :testimonials="currentUMKM.ulasan" />
  </section>

  <!-- Location Section -->
  <div class="flex flex-col items-center justify-center w-full px-4 md:px-16 my-16 max-w-7xl mx-auto space-y-12">
    <h2 class="text-2xl md:text-4xl font-bold text-center font-eb-garamond" style="color: #373737;">Lokasi UMKM</h2>
    <p class="mb-4 text-base w-full md:text-lg lg:text-xl flex gap-2 items-start md:items-center">
      <span class="text-2xl shrink-0 items-center justify-center flex flex-col">
        <Icon name="material-symbols:location-on" class="text-[#6F5937]" />
      </span>
      <span class="text-base leading-relaxed">
        {{ currentUMKM.alamat }}
      </span>
    </p>
    <Map v-if="currentUMKM.gmapIframeSrc" :show-google-map-link="true"
      :gmap-src="currentUMKM.gmapSrc" :gmap-iframe-src="currentUMKM.gmapIframeSrc" />
    <div v-else class="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
      <p class="text-gray-500">Peta tidak tersedia</p>
    </div>
  </div>

  <!-- Photo Gallery Section -->
  <div v-if="currentUMKM.foto && currentUMKM.foto.length > 0"
    class="px-4 md:px-8 lg:px-16 w-full pb-12 md:pb-16 max-w-7xl mx-auto">
    <PhotoGallery :photos="currentUMKM.foto" />
  </div>

  <Footer />
</template>

<script lang="ts" setup>
import { realUMKM } from '~/composables/data';

const route = useRoute();
const { trackClick } = useRecommendations();
const { isFavorite, toggleFavorite: toggleFav } = useFavorites();

const heroImageError = ref(false);

const currentUMKM = computed((): Umkm => {
  const slug = route.params.slug as string | string[] | undefined;
  const slugStr = Array.isArray(slug) ? slug[0] : slug;

  if (!slugStr || !realUMKM[slugStr]) {
    return Object.values(realUMKM)[0] || {};
  }

  return realUMKM[slugStr];
});

// SEO Setup for UMKM Detail Page
watch(currentUMKM, (umkm) => {
  if (umkm && umkm.nama) {
    const whatsappPhone = umkm.kontak && typeof umkm.kontak !== 'string' 
      ? umkm.kontak.find(k => k.type === 'phone' || k.type === 'whatsapp')?.value 
      : umkm.kontak;

    useSeo({
      title: umkm.nama,
      description: umkm.deskripsi || `${umkm.nama} - UMKM lokal terpercaya di ${umkm.alamat}. Temukan produk berkualitas dan autentik.`,
      keywords: `${umkm.nama}, ${umkm.kategori?.join(', ')}, UMKM Banjarmasin, produk lokal Kalsel`,
      image: umkm.foto && umkm.foto.length > 0 ? umkm.foto[0] : undefined,
      type: 'article',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': umkm.nama,
        'description': umkm.deskripsi,
        'image': umkm.foto || [],
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': umkm.alamat,
          'addressLocality': 'Banjarmasin',
          'addressRegion': 'Kalimantan Selatan',
          'addressCountry': 'ID'
        },
        ...(whatsappPhone && {
          'telephone': whatsappPhone
        }),
        ...(umkm.gmapSrc && {
          'hasMap': umkm.gmapSrc
        }),
        'priceRange': '$$',
        'servesCuisine': umkm.kategori?.includes('Kuliner') ? 'Indonesian' : undefined,
        'areaServed': {
          '@type': 'City',
          'name': 'Banjarmasin'
        }
      }
    });
  }
}, { immediate: true });

const kontakArray = computed(() => {
  if (!currentUMKM.value.kontak) return [];
  if (typeof currentUMKM.value.kontak === 'string') {
    return [{
      type: 'phone' as const,
      value: currentUMKM.value.kontak
    }];
  }
  return currentUMKM.value.kontak;
});

const isFavorited = computed(() => {
  return isFavorite(currentUMKM.value.slug || '');
});

const toggleFavorite = () => {
  if (currentUMKM.value.slug) {
    toggleFav(currentUMKM.value.slug);
  }
};

const contactWhatsApp = () => {
  const whatsappContact = kontakArray.value.find((c: Kontak) => c.type === 'phone' || c.type === 'whatsapp');
  if (whatsappContact) {
    const phoneNumber = whatsappContact.value.replace(/\D/g, ''); // Remove non-digits
    const message = encodeURIComponent(`Halo! Saya tertarik dengan ${currentUMKM.value.nama}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }
};

const getContactLink = (contact: Kontak) => {
  if (contact.type === 'phone' || contact.type === 'whatsapp') {
    const phoneNumber = contact.value.replace(/\D/g, '');
    return `https://wa.me/${phoneNumber}`;
  } else if (contact.type === 'instagram') {
    return contact.value;
  } else if (contact.type === 'facebook') {
    return contact.value;
  } else if (contact.type === 'twitter') {
    return contact.value;
  } else if (contact.type === 'website') {
    return contact.value;
  }
  return '#';
};

const getContactIcon = (type: string) => {
  switch (type) {
    case 'phone':
      return 'mdi:phone';
    case 'whatsapp':
      return 'mdi:whatsapp';
    case 'instagram':
      return 'mdi:instagram';
    case 'facebook':
      return 'mdi:facebook';
    case 'twitter':
      return 'mdi:twitter';
    case 'website':
      return 'mdi:web';
    default:
      return 'mdi:link';
  }
};

const formatContactValue = (contact: Kontak) => {
  if (contact.type === 'phone') {
    return contact.value;
  } else if (contact.type === 'instagram') {
    return '@' + contact.username;
  }
  return contact.value;
};

onMounted(() => {
  if (currentUMKM.value.slug) {
    trackClick(currentUMKM.value.slug);
  }
});
</script>

<style></style>