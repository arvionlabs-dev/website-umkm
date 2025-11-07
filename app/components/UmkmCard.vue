<template>
  <nuxt-link
    :to="`/umkm/${slug}`"
    class="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col"
  >
    <!-- UMKM Image -->
    <div v-if="imageUrl" class="overflow-hidden aspect-square bg-gray-100 shrink-0">
      <nuxt-img
        :src="imageUrl"
        :alt="nama"
        class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
      />
    </div>

    <!-- UMKM Info -->
    <div class="p-4 flex flex-col grow">
      <!-- UMKM Name -->
      <h3 class="font-dm-sans font-bold text-base text-gray-900 line-clamp-1">{{ nama }}</h3>

      <!-- Bottom Content - Description and Link -->
      <div class="flex flex-col gap-1.5 mt-auto pt-1.5">
        <!-- Description -->
        <p class="font-dm-sans text-base text-gray-600 line-clamp-2">
          {{ deskripsi }}
        </p>

        <!-- More Info Link -->
        <div class="flex items-center gap-1 text-yellow-600 group-hover:text-yellow-700 transition-colors mt-0.5">
          <span class="font-dm-sans text-base font-medium">Lebih lanjut</span>
          <Icon name="heroicons:arrow-right-20-solid" class="text-base" />
        </div>
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

<style></style>
