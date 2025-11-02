<template>
  <nuxt-link 
    :to="`/umkm/${slug}`"
    class="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <!-- Image Container -->
    <div class="relative overflow-hidden aspect-4/3">
      <nuxt-img 
        :src="imageUrl" 
        :alt="nama"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    
    <!-- Content -->
    <div class="p-4 md:p-6">
      <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 line-clamp-1 group-hover:text-green-600 transition-colors">
        {{ nama }}
      </h3>
      <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2">
        {{ deskripsi }}
      </p>
      
      <!-- More Info Link -->
      <div class="flex items-center gap-2 text-yellow-600 group-hover:text-yellow-700 font-medium text-sm md:text-base">
        <span>More Info</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-4 w-4 md:h-5 md:w-5 transform group-hover:translate-x-1 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
defineProps<{
  nama: string;
  deskripsi: string;
  imageUrl: string;
  slug: string;
}>();
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
