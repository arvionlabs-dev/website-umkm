<template>
  <nuxt-link :to="`/umkm/${umkm.slug}`"
    class="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col">
    <!-- UMKM Image -->
    <div class="overflow-hidden aspect-4/3 bg-gray-100 shrink-0 relative">
      <ClientOnly v-if="!imageError && thumbnailImage">
        <nuxt-img :src="thumbnailImage" :alt="umkm.nama"
          class="w-full h-full object-cover group-hover:scale-105 transition duration-300" @error="handleImageError"
          loading="lazy" />
      </ClientOnly>
      <div v-else class="w-full h-full flex flex-col items-center justify-center bg-gray-200">
        <Icon name="mdi:store" class="text-4xl text-gray-400 mb-2" />
        <p class="text-xs text-gray-500 text-center px-2">{{ umkm.nama }}</p>
      </div>
    </div>

    <!-- UMKM Info -->
    <div class="p-4 flex flex-col grow">
      <h3 class="font-dm-sans font-bold text-base text-gray-900 truncate" :title="umkm.nama">
        {{ umkm.nama }}
      </h3>

      <!-- Categories -->
      <div v-if="umkm.kategori && umkm.kategori.length > 0" class="flex flex-wrap gap-1 mt-2">
        <span v-for="kategori in umkm.kategori.slice(0, 2)" :key="kategori"
          class="text-xs px-2 py-0.5 bg-[#DCCBA7] text-[#373737] rounded-full font-dm-sans" style="color: #373737;">
          {{ kategori }}
        </span>
        <span v-if="umkm.kategori.length > 2"
          class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full font-dm-sans">
          +{{ umkm.kategori.length - 2 }}
        </span>
      </div>

      <!-- Bottom Content - Description and Link -->
      <div class="flex flex-col gap-1.5 mt-auto pt-3">
        <!-- Description -->
        <p class="font-dm-sans text-sm text-gray-600 line-clamp-2">
          {{ umkm.deskripsi }}
        </p>

        <span class="flex gap-1 items-center">
          <Icon name="mdi:star" class="-mt-1 text-yellow-400 text-base" />
          <span class="text-sm text-gray-600">{{starAvarege(props.umkm.ulasan ?? [])}} ({{props.umkm.ulasan?.length ?? 0}} Ulasan)</span>
        </span>

        <!-- More Info Link -->
        <div class="flex items-center gap-1 text-yellow-600 group-hover:text-yellow-700 transition-colors mt-0.5">
          <span class="font-dm-sans text-sm font-medium">Lebih lanjut</span>
          <Icon name="heroicons:arrow-right-20-solid" class="text-sm" />
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
interface Props {
  umkm: Umkm;
}

const props = defineProps<Props>();

const thumbnailImage = computed(() => {
  return props.umkm.foto && props.umkm.foto.length > 0 ? props.umkm.foto[0] : null;
});

const imageError = ref(false);

const handleImageError = () => {
  imageError.value = true;
};
</script>