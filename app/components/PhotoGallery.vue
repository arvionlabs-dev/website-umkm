<template>
  <div class="space-y-8">
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-center font-eb-garamond" style="color: #373737;">Galeri Foto</h2>
    
    <div v-if="photos.length === 0" class="text-center py-12 bg-gray-50 rounded-lg">
      <Icon name="mdi:image-off" class="text-4xl text-gray-400 mb-2 mx-auto" />
      <p class="text-gray-500">Belum ada foto</p>
    </div>

    <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      <!-- First Image - Spans 2 columns -->
      <div
        v-if="photos.length > 0"
        class="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100 aspect-4/3"
        @click="!imageErrors[0] && openLightbox(0)"
      >
        <img
          v-if="!imageErrors[0]"
          :src="photos[0]"
          alt="Foto 1"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="eager"
          @error="handleImageError(0)"
        />
        <div v-else class="w-full h-full flex items-center justify-center bg-gray-200">
          <Icon name="mdi:image-off" class="text-4xl text-gray-400" />
        </div>
        <div v-if="!imageErrors[0]" class="absolute inset-0 bg-black/10 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <Icon name="mdi:magnify-plus" class="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      <!-- Remaining Images - Regular size -->
      <div
        v-for="(photo, index) in photos.slice(1)"
        :key="index + 1"
        class="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100 aspect-square"
        @click="!imageErrors[index + 1] && openLightbox(index + 1)"
      >
        <img
          v-if="!imageErrors[index + 1]"
          :src="photo"
          :alt="`Foto ${index + 2}`"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          @error="handleImageError(index + 1)"
        />
        <div v-else class="w-full h-full flex items-center justify-center bg-gray-200">
          <Icon name="mdi:image-off" class="text-4xl text-gray-400" />
        </div>
        <div v-if="!imageErrors[index + 1]" class="absolute inset-0 bg-black/10 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <Icon name="mdi:magnify-plus" class="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isLightboxOpen"
          class="fixed inset-0 bg-black/50 backdrop-blur-md bg-opacity-90 z-50 flex items-center justify-center p-4"
          @click="closeLightbox"
        >
          <button
            class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            @click="closeLightbox"
          >
            <Icon name="mdi:close" class="text-3xl" />
          </button>

          <button
            v-if="currentPhotoIndex > 0"
            class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2 md:p-3"
            @click.stop="previousPhoto"
          >
            <Icon name="mdi:chevron-left" class="text-4xl md:text-5xl" />
          </button>

          <button
            v-if="currentPhotoIndex < photos.length - 1"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2 md:p-3"
            @click.stop="nextPhoto"
          >
            <Icon name="mdi:chevron-right" class="text-4xl md:text-5xl" />
          </button>

          <div class="max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center bg-transparent" @click.stop>
            <img
              v-if="!imageErrors[currentPhotoIndex]"
              :src="photos[currentPhotoIndex]"
              :alt="`Foto ${currentPhotoIndex + 1}`"
              class="max-w-full max-h-full object-contain"
              @error="handleImageError(currentPhotoIndex)"
            />
            <div v-else class="flex items-center justify-center">
              <Icon name="mdi:image-off" class="text-6xl text-gray-400" />
            </div>
          </div>

          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {{ currentPhotoIndex + 1 }} / {{ photos.length }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
interface Props {
  photos: string[];
}

const props = defineProps<Props>();

const isLightboxOpen = ref(false);
const currentPhotoIndex = ref(0);

const imageErrors = ref<Record<number, boolean>>({});

const handleImageError = (index: number) => {
  imageErrors.value[index] = true;
};

const openLightbox = (index: number) => {
  currentPhotoIndex.value = index;
  isLightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
  document.body.style.overflow = '';
};

const nextPhoto = () => {
  if (currentPhotoIndex.value < props.photos.length - 1) {
    currentPhotoIndex.value++;
  }
};

const previousPhoto = () => {
  if (currentPhotoIndex.value > 0) {
    currentPhotoIndex.value--;
  }
};

const handleKeydown = (e: KeyboardEvent) => {
  if (!isLightboxOpen.value) return;
  
  switch (e.key) {
    case 'Escape':
      closeLightbox();
      break;
    case 'ArrowRight':
      nextPhoto();
      break;
    case 'ArrowLeft':
      previousPhoto();
      break;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
