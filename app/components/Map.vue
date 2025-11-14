<script setup lang="ts">

const locationLangtitudeAndLongtitude = ref<[number, number] | null>(null);
let watchId: number | null = null;

const props = defineProps<{
  heightInPx?: number;
  widthInPx?: number;
  showGoogleMapLink?: boolean;
  coordinates?: [number, number];
  gmapIframeSrc?: string;
  gmapSrc?: string;
}>();

onMounted(() => {
  if (!navigator.geolocation) return;
  if (props.coordinates) {
    locationLangtitudeAndLongtitude.value = props.coordinates;
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      locationLangtitudeAndLongtitude.value = [position.coords.latitude, position.coords.longitude]
    },
    (err) => {
      console.warn('Geolocation error:', err.message)
    }
  )
  watchId = navigator.geolocation.watchPosition((position) => {
    locationLangtitudeAndLongtitude.value = [position.coords.latitude, position.coords.longitude];
  },
    (error) => {
      console.warn('Geolocation error:', error.message)
    })
})

onUnmounted(() => {
  if (watchId !== null) navigator.geolocation.clearWatch(watchId)
})
</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <ClientOnly>
      <iframe v-if="props.gmapIframeSrc" :src="props.gmapIframeSrc" class="w-full h-[300px] md:h-[450px] rounded-lg"
        style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </ClientOnly>
    <button v-if="showGoogleMapLink" :disabled="locationLangtitudeAndLongtitude == null" type="button"
      class="gap-2 px-5 py-2.5 mx-auto md:w-1/3 flex justify-center text-sm font-medium text-white items-center bg-green-700 hover:bg-green-800 rounded-lg text-center disabled:opacity-50 disabled:cursor-not-allowed">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
      <NuxtLink v-if="props.gmapSrc" :to="props.gmapSrc" target="_blank">
        Buka di Google Maps
      </NuxtLink>
    </button>
  </div>
</template>