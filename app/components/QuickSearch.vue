<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-md bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4"
        @click="close"
      >
        <div
          class="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[70vh] flex flex-col"
          @click.stop
        >
          <!-- Search Input -->
          <div class="p-4 border-b border-gray-200">
            <div class="relative">
              <Icon name="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                ref="searchInput"
                v-model="searchQuery"
                type="text"
                placeholder="Cari UMKM, kategori, lokasi..."
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                @keydown.esc="close"
                @keydown.down.prevent="navigateDown"
                @keydown.up.prevent="navigateUp"
                @keydown.enter.prevent="selectResult"
              />
            </div>
          </div>

          <!-- Search Results -->
          <div class="flex-1 overflow-y-auto p-4">
            <div v-if="searchQuery.length === 0" class="text-center text-gray-500 py-8">
              <Icon name="mdi:magnify" class="text-4xl mb-2 mx-auto" />
              <p>Ketik untuk mencari UMKM...</p>
            </div>

            <div v-else-if="filteredResults.length === 0" class="text-center text-gray-500 py-8">
              <Icon name="mdi:file-search-outline" class="text-4xl mb-2 mx-auto" />
              <p>Tidak ada hasil untuk "{{ searchQuery }}"</p>
            </div>

            <div v-else class="space-y-2">
              <div
                v-for="(result, index) in filteredResults"
                :key="result.slug"
                :class="[
                  'p-3 rounded-lg cursor-pointer transition-colors flex items-start gap-3',
                  selectedIndex === index ? 'bg-yellow-50 border border-yellow-500' : 'hover:bg-gray-50 border border-transparent'
                ]"
                @click="goToUmkm(result.slug)"
                @mouseenter="selectedIndex = index"
              >
                <div class="w-12 h-12 rounded-lg bg-gray-200 shrink-0 overflow-hidden">
                  <nuxt-img
                    v-if="result.foto && result.foto[0]"
                    :src="result.foto[0]"
                    :alt="result.nama"
                    class="w-full h-full object-cover"
                  />
                  <Icon v-else name="mdi:store" class="w-full h-full text-gray-400 p-2" />
                </div>
                
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-gray-900 truncate">{{ result.nama }}</h3>
                  <p class="text-sm text-gray-600 truncate">{{ result.alamat }}</p>
                  <div v-if="result.kategori && result.kategori.length > 0" class="flex flex-wrap gap-1 mt-1">
                    <span
                      v-for="cat in result.kategori.slice(0, 2)"
                      :key="cat"
                      class="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full"
                    >
                      {{ cat }}
                    </span>
                    <span
                      v-if="result.kategori.length > 2"
                      class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                    >
                      +{{ result.kategori.length - 2 }}
                    </span>
                  </div>
                </div>

                <Icon name="mdi:arrow-right" class="text-gray-400 mt-1 shrink-0" />
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="p-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
            <div class="flex items-center justify-between text-xs text-gray-500">
              <div class="flex items-center gap-4">
                <span class="flex items-center gap-1">
                  <kbd class="px-2 py-1 bg-white border border-gray-300 rounded">↑</kbd>
                  <kbd class="px-2 py-1 bg-white border border-gray-300 rounded">↓</kbd>
                  navigasi
                </span>
                <span class="flex items-center gap-1">
                  <kbd class="px-2 py-1 bg-white border border-gray-300 rounded">Enter</kbd>
                  pilih
                </span>
                <span class="flex items-center gap-1">
                  <kbd class="px-2 py-1 bg-white border border-gray-300 rounded">Esc</kbd>
                  tutup
                </span>
              </div>
              <span>{{ filteredResults.length }} hasil</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const searchQuery = ref('');
const searchInput = ref<HTMLInputElement | null>(null);
const selectedIndex = ref(0);

// Get all UMKM data
const { realUMKM } = await import('~/composables/data');
const allUmkm = computed(() => Object.values(realUMKM));

// Filter results based on search query
const filteredResults = computed(() => {
  if (!searchQuery.value) return [];
  
  const query = searchQuery.value.toLowerCase();
  
  return allUmkm.value.filter(umkm => {
    // Search by name
    if (umkm.nama?.toLowerCase().includes(query)) return true;
    
    // Search by description
    if (umkm.deskripsi?.toLowerCase().includes(query)) return true;
    
    // Search by address
    if (umkm.alamat?.toLowerCase().includes(query)) return true;
    
    // Search by categories
    if (umkm.kategori?.some(cat => cat.toLowerCase().includes(query))) return true;
    
    return false;
  }).slice(0, 10); // Limit to 10 results
});

// Watch search query to reset selected index
watch(searchQuery, () => {
  selectedIndex.value = 0;
});

// Watch filtered results to adjust selected index
watch(filteredResults, (newResults) => {
  if (selectedIndex.value >= newResults.length) {
    selectedIndex.value = Math.max(0, newResults.length - 1);
  }
});

// Navigate down in results
const navigateDown = () => {
  if (selectedIndex.value < filteredResults.value.length - 1) {
    selectedIndex.value++;
  }
};

// Navigate up in results
const navigateUp = () => {
  if (selectedIndex.value > 0) {
    selectedIndex.value--;
  }
};

// Select current result
const selectResult = () => {
  const result = filteredResults.value[selectedIndex.value];
  if (result && result.slug) {
    goToUmkm(result.slug);
  }
};

// Navigate to UMKM page
const goToUmkm = (slug?: string) => {
  if (slug) {
    navigateTo(`/umkm/${slug}`);
    close();
  }
};

// Open search modal
const open = () => {
  isOpen.value = true;
  searchQuery.value = '';
  selectedIndex.value = 0;
  
  nextTick(() => {
    searchInput.value?.focus();
  });
};

// Close search modal
const close = () => {
  isOpen.value = false;
  searchQuery.value = '';
  selectedIndex.value = 0;
};

// Keyboard shortcut (Ctrl+K or Cmd+K)
const handleKeydown = (e: KeyboardEvent) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    if (isOpen.value) {
      close();
    } else {
      open();
    }
  }
};

// Register keyboard shortcut
onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

// Expose methods for parent components
defineExpose({
  open,
  close
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

kbd {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.75rem;
}
</style>
