<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-8 lg:px-16">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 font-dm-sans">
          Katalog UMKM Lokal
        </h1>
        <p class="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Jelajahi berbagai UMKM lokal pilihan yang menyediakan oleh-oleh khas Kalimantan Selatan. 
          Dari sasirangan, kuliner, hingga kerajinan tangan—semua ada di sini.
        </p>
      </div>
    </section>

    <!-- Search & Filter Section -->
    <section class="pb-6 md:pb-8 px-4 md:px-8 lg:px-16">
      <div class="max-w-7xl mx-auto">
        <!-- Search Bar -->
        <div class="mb-6">
          <div class="relative">
            <Icon name="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Cari UMKM, kategori, atau lokasi..."
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              @input="currentPage = 1"
            />
          </div>
        </div>

        <!-- Filter & Sort Options -->
        <div class="flex flex-col md:flex-row gap-4 mb-4">
          <!-- Category Filter -->
          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-700 mb-2">Filter Kategori</label>
            <select
              v-model="selectedCategory"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              @change="currentPage = 1"
            >
              <option value="">Semua Kategori</option>
              <option v-for="category in allCategories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>

          <!-- Favorites Filter -->
          <div class="flex items-end">
            <button
              @click="toggleShowOnlyFavorites"
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2',
                showOnlyFavorites 
                  ? 'bg-yellow-500 text-white hover:bg-yellow-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              <Icon :name="showOnlyFavorites ? 'mdi:heart' : 'mdi:heart-outline'" class="text-xl" />
              <span class="hidden sm:inline">{{ showOnlyFavorites ? 'Favorit' : 'Semua' }}</span>
            </button>
          </div>
        </div>

        <!-- Results Info -->
        <div class="flex items-center justify-between text-sm text-gray-600 mb-4">
          <p>
            Menampilkan {{ paginatedUmkm.length }} dari {{ filteredUmkm.length }} UMKM
          </p>
          <p v-if="searchQuery || selectedCategory || showOnlyFavorites" class="text-yellow-600 cursor-pointer hover:underline" @click="resetFilters">
            Reset Filter
          </p>
        </div>
      </div>
    </section>

    <!-- UMKM Grid -->
    <section class="pb-12 md:pb-16 px-4 md:px-8 lg:px-16">
      <div class="max-w-7xl mx-auto">
        <!-- No Results -->
        <div v-if="filteredUmkm.length === 0" class="text-center py-16">
          <Icon name="mdi:store-off" class="text-6xl text-gray-300 mb-4 mx-auto" />
          <h3 class="text-xl font-semibold text-gray-700 mb-2">Tidak ada UMKM ditemukan</h3>
          <p class="text-gray-500 mb-4">Coba ubah filter atau kata kunci pencarian Anda</p>
          <button
            @click="resetFilters"
            class="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Reset Filter
          </button>
        </div>

        <!-- UMKM Cards -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          <umkm-card 
            v-for="umkm in paginatedUmkm" 
            :key="umkm.slug"
            :umkm="umkm"
          />
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="mt-12 flex items-center justify-center gap-2">
          <!-- Previous Button -->
          <button
            @click="currentPage--"
            :disabled="currentPage === 1"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              currentPage === 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            ]"
          >
            <Icon name="mdi:chevron-left" class="text-xl" />
          </button>

          <!-- Page Numbers -->
          <button
            v-for="page in visiblePages"
            :key="page"
            @click="currentPage = page"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              currentPage === page 
                ? 'bg-yellow-500 text-white' 
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            ]"
          >
            {{ page }}
          </button>

          <!-- Next Button -->
          <button
            @click="currentPage++"
            :disabled="currentPage === totalPages"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              currentPage === totalPages 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            ]"
          >
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

const { favorites } = useFavorites();

// State
const searchQuery = ref('');
const selectedCategory = ref('');
const showOnlyFavorites = ref(false);
const currentPage = ref(1);
const itemsPerPage = 12;

// Get all UMKM
const allUmkm = computed(() => Object.values(realUMKM));

// Get all unique categories
const allCategories = computed(() => {
  const categories = new Set<string>();
  allUmkm.value.forEach(umkm => {
    if (umkm.kategori) {
      umkm.kategori.forEach(cat => categories.add(cat));
    }
  });
  return Array.from(categories).sort();
});

// Filter UMKM based on search, category, and favorites
const filteredUmkm = computed(() => {
  let result = allUmkm.value;

  // Filter by search query
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

  // Filter by category
  if (selectedCategory.value) {
    result = result.filter(umkm => 
      umkm.kategori?.includes(selectedCategory.value)
    );
  }

  // Filter by favorites
  if (showOnlyFavorites.value) {
    result = result.filter(umkm => 
      favorites.value.includes(umkm.slug || '')
    );
  }

  return result;
});

// Paginated UMKM
const paginatedUmkm = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredUmkm.value.slice(start, end);
});

// Total pages
const totalPages = computed(() => {
  return Math.ceil(filteredUmkm.value.length / itemsPerPage);
});

// Visible page numbers (max 7)
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
  
  return pages.filter(p => p !== -1); // Remove separators for now
});

// Toggle favorites filter
const toggleShowOnlyFavorites = () => {
  showOnlyFavorites.value = !showOnlyFavorites.value;
  currentPage.value = 1;
};

// Reset all filters
const resetFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = '';
  showOnlyFavorites.value = false;
  currentPage.value = 1;
};

// Watch for filter changes to reset page
watch([searchQuery, selectedCategory, showOnlyFavorites], () => {
  currentPage.value = 1;
});
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>