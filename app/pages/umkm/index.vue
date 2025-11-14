<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-8 lg:px-16">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold font-eb-garamond text-gray-900 mb-4 md:mb-6">
          Katalog UMKM
        </h1>
        <p class="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
          Jelajahi berbagai UMKM lokal pilihan yang menyediakan oleh-oleh khas Kalimantan Selatan. Dari sasirangan,
          kuliner, hingga kerajinan tangan—semua ada di sini.
        </p>
      </div>
    </section>

    <!-- Search & Filter Section -->
    <section class="pb-6 md:pb-8 px-4 md:px-8 lg:px-16">
      <div class="max-w-7xl mx-auto">
        <!-- Search Bar -->
        <div class="mb-4">
          <div class="relative flex items-center gap-2">
            <div class="relative flex-1">
              <Icon name="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input 
                v-model="searchQuery" 
                type="text" 
                placeholder="Masukkan nama UMKM, kategori, atau alamat"
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                @keyup.enter="applySearch" />
            </div>
            <Button 
              @click="clearSearch"
              class="px-4 py-3 hover:bg-gray-100 bg-white border border-gray-200 text-black rounded-lg whitespace-nowrap">
              <span class="hidden md:block">
                Hapus pencarian
              </span>
              <span class="flex items-center h-full md:hidden">
                <Icon name="mdi:close" class="text-xl" />
              </span>
            </Button>
            <Button 
              @click="applySearch"
              class="px-6 py-3 text-white rounded-lg whitespace-nowrap">
              Cari
            </Button>
          </div>
        </div>

        <!-- Active Filters & Action Buttons -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <!-- Active Category Filters -->
          <div class="flex gap-2 flex-wrap">
            <button
              v-for="category in selectedCategories"
              :key="category"
              @click="removeCategory(category)"
              class="px-4 py-2 hover:bg-green-400 bg-green-300 border text-black rounded-md flex items-center gap-2 transition-colors">
              <span>{{ category }}</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 3.5L3.5 10.5" stroke="#373737" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M3.5 3.5L10.5 10.5" stroke="#373737" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
            <span v-if="selectedCategories.length === 0" class="text-gray-500 py-2 text-sm">
              Tidak ada filter kategori aktif
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-2 flex-wrap">
            <!-- Category Dropdown -->
            <VueSelect 
              v-model="categoryInput" 
              :options="availableCategories" 
              placeholder="+ Tambah Kategori" 
              class="w-40 md:min-w-48"
              @update:modelValue="addCategory">
            </VueSelect>

            <!-- Location Filter -->
            <button 
              @click="toggleLocationFilter"
              :class="[
                'px-4 py-2 border rounded-lg flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer',
                isLocationFilterActive 
                  ? 'bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600' 
                  : 'bg-green-700 text-white border-green-700 hover:bg-green-800'
              ]">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.0007 20.1666C16.0633 20.1666 20.1673 16.0625 20.1673 10.9999C20.1673 5.93731 16.0633 1.83325 11.0007 1.83325C5.93804 1.83325 1.83398 5.93731 1.83398 10.9999C1.83398 16.0625 5.93804 20.1666 11.0007 20.1666Z"
                  :stroke="isLocationFilterActive ? 'white' : 'currentColor'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.8866 7.11328L12.9433 12.9433L7.11328 14.8866L9.05661 9.05661L14.8866 7.11328Z"
                  :stroke="isLocationFilterActive ? 'white' : 'currentColor'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>{{ isLocationFilterActive ? 'Filter Lokasi Aktif' : 'Cari di sekitar saya' }}</span>
            </button>

            <!-- Favorites Filter -->
            <button
              @click="toggleShowOnlyFavorites"
              :class="[
                'px-4 py-2 border rounded-lg flex items-center gap-2 transition-colors whitespace-nowrap',
                showOnlyFavorites 
                  ? 'bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              ]">
              <Icon :name="showOnlyFavorites ? 'mdi:heart' : 'mdi:heart-outline'" class="text-xl" />
              <span>{{ showOnlyFavorites ? 'Hanya Favorit' : 'Tampilkan Favorit' }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- UMKM Grid -->
    <section class="pb-12 md:pb-16 px-4 md:px-8 lg:px-16">
      <div class="max-w-7xl mx-auto mb-4">
        <h1 class="font-eb-garamond text-3xl md:text-4xl font-bold">Hasil Pencarian</h1>
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-2">
          <p class="text-gray-600">
            Menampilkan {{ paginatedUmkm.length }} dari {{ filteredUmkm.length }} UMKM
          </p>
          
          <!-- Active Filters Summary -->
          <div v-if="searchQuery || selectedCategories.length > 0 || showOnlyFavorites || isLocationFilterActive" 
               class="flex items-center gap-2">
            <button 
              @click="resetFilters"
              class="text-sm text-yellow-600 hover:text-yellow-700 font-medium underline">
              Reset Semua Filter
            </button>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto">
        <!-- No Results -->
        <div v-if="filteredUmkm.length === 0" class="text-center py-16">
          <Icon name="mdi:store-off" class="text-6xl text-gray-300 mb-4 mx-auto" />
          <h3 class="text-xl font-semibold text-gray-700 mb-2">Tidak ada UMKM ditemukan</h3>
          <p class="text-gray-500 mb-4">Coba ubah filter atau kata kunci pencarian Anda</p>
          <button @click="resetFilters"
            class="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
            Reset Filter
          </button>
        </div>

        <!-- UMKM Cards -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          <umkm-card v-for="umkm in paginatedUmkm" :key="umkm.slug" :umkm="umkm" />
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="mt-12 flex items-center justify-center gap-2">
          <!-- Previous Button -->
          <button @click="currentPage--" :disabled="currentPage === 1" :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors flex items-center',
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer'
          ]">
            <Icon name="mdi:chevron-left" class="text-xl" />
            <span>Previous</span>
          </button>

          <!-- Page Numbers -->
          <button v-for="page in visiblePages" :key="page" @click="currentPage = page" :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors',
            currentPage === page
              ? 'bg-green-700 text-white'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer'
          ]">
            {{ page }}
          </button>

          <!-- Next Button -->
          <button @click="currentPage++" :disabled="currentPage === totalPages" :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors flex items-center',
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer'
          ]">
            <span>Next</span>
            <Icon name="mdi:chevron-right" class="text-xl" />
          </button>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import { realUMKM } from '~/composables/data';
import "vue-select/dist/vue-select.css";
import VueSelect from "vue-select";

// SEO Setup
useSeo({
  title: 'Katalog UMKM',
  description: 'Jelajahi katalog lengkap UMKM lokal Kalimantan Selatan. Filter berdasarkan kategori, lokasi, atau cari UMKM favorit Anda. Semua produk lokal dalam satu platform.',
  keywords: 'katalog UMKM, daftar UMKM Kalsel, direktori produk lokal, UMKM Banjarmasin, cari UMKM terdekat',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Katalog UMKM Kalimantan Selatan',
    'description': 'Direktori lengkap UMKM lokal Kalimantan Selatan',
    'url': 'https://tjendera.zkranovic.tech/umkm',
    'numberOfItems': Object.keys(realUMKM).length
  }
});

const { favorites } = useFavorites();

const searchQuery = ref('');
const selectedCategories = ref<string[]>([]);
const categoryInput = ref<string | null>(null);
const showOnlyFavorites = ref(false);
const isLocationFilterActive = ref(false);
const userLocation = ref<{ lat: number; lng: number } | null>(null);
const currentPage = ref(1);
const itemsPerPage = 12;

const allUmkm = computed(() => Object.values(realUMKM));

const allCategories = computed(() => {
  const categories = new Set<string>();
  allUmkm.value.forEach(umkm => {
    if (umkm.kategori) {
      umkm.kategori.forEach(cat => categories.add(cat));
    }
  });
  return Array.from(categories).sort();
});

const availableCategories = computed(() => {
  return allCategories.value.filter(cat => !selectedCategories.value.includes(cat));
});

const applySearch = () => {
  currentPage.value = 1;
};

const clearSearch = () => {
  searchQuery.value = '';
  currentPage.value = 1;
};

const addCategory = (category: string | null) => {
  if (category && !selectedCategories.value.includes(category)) {
    selectedCategories.value.push(category);
    currentPage.value = 1;
  }
  categoryInput.value = null;
};

const removeCategory = (category: string) => {
  selectedCategories.value = selectedCategories.value.filter(cat => cat !== category);
  currentPage.value = 1;
};

const toggleLocationFilter = async () => {
  if (!isLocationFilterActive.value) {
    if (navigator.geolocation) {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        userLocation.value = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        isLocationFilterActive.value = true;
        currentPage.value = 1;
      } catch (error) {
        console.error('Error getting location:', error);
        alert('Tidak dapat mengakses lokasi Anda. Pastikan izin lokasi diaktifkan.');
      }
    } else {
      alert('Browser Anda tidak mendukung geolocation.');
    }
  } else {
    isLocationFilterActive.value = false;
    userLocation.value = null;
    currentPage.value = 1;
  }
};

const filteredUmkm = computed(() => {
  let result = allUmkm.value;

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(umkm => {
      return (
        umkm.nama?.toLowerCase().includes(query) ||
        umkm.deskripsi?.toLowerCase().includes(query) ||
        umkm.alamat?.toLowerCase().includes(query) ||
        umkm.kategori?.some(cat => cat.toLowerCase().includes(query))
      );
    });
  }

  if (selectedCategories.value.length > 0) {
    result = result.filter(umkm =>
      umkm.kategori?.some(cat => selectedCategories.value.includes(cat))
    );
  }

  if (showOnlyFavorites.value) {
    result = result.filter(umkm =>
      favorites.value.includes(umkm.slug || '')
    );
  }

  if (isLocationFilterActive.value && userLocation.value) {
    result = result.filter(umkm => umkm.gmapSrc && umkm.gmapSrc.trim() !== '');
  }

  return result;
});

const paginatedUmkm = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredUmkm.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredUmkm.value.length / itemsPerPage);
});

const visiblePages = computed(() => {
  const pages: number[] = [];
  const total = totalPages.value;
  const current = currentPage.value;

  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push(-1); // Separator
      pages.push(total);
    } else if (current >= total - 3) {
      pages.push(1);
      pages.push(-1); // Separator
      for (let i = total - 4; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push(-1); // Separator
      for (let i = current - 1; i <= current + 1; i++) pages.push(i);
      pages.push(-1); // Separator
      pages.push(total);
    }
  }

  return pages.filter(p => p !== -1);
});

const toggleShowOnlyFavorites = () => {
  showOnlyFavorites.value = !showOnlyFavorites.value;
  currentPage.value = 1;
};

const resetFilters = () => {
  searchQuery.value = '';
  selectedCategories.value = [];
  showOnlyFavorites.value = false;
  isLocationFilterActive.value = false;
  userLocation.value = null;
  currentPage.value = 1;
};

watch([searchQuery, selectedCategories, showOnlyFavorites, isLocationFilterActive], () => {
  currentPage.value = 1;
});
</script>