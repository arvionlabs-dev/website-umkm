<script setup lang="ts">
import Swal from 'sweetalert2'
import { ref, onMounted } from 'vue';

const locationLangtitudeAndLongtitude = ref<[number, number]>([0, 0])
let watchId: number | null = null;

const props = defineProps<{ heightInPx?: number; widthInPx?: number, showGoogleMapLink?: boolean }>();

onMounted(() => {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(
    (position) => {
      locationLangtitudeAndLongtitude.value = [position.coords.latitude, position.coords.longitude]
    },
    (err) => {
      Swal.fire({
        icon: 'warning',
        title: 'Can\'t access location',
      })
      console.warn('Geolocation error:', err.message)
    }
  )
  watchId = navigator.geolocation.watchPosition((position) => {
    locationLangtitudeAndLongtitude.value = [position.coords.latitude, position.coords.longitude];
  },
    (error) => {
      Swal.fire({
        icon: 'warning',
        title: 'Can\'t access location',
      })
      console.warn('Geolocation error:', error.message)
    })
})

onUnmounted(() => {
  if (watchId !== null) navigator.geolocation.clearWatch(watchId)
})
</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <LMap
      :style="{ height: (props.heightInPx ? props.heightInPx + 'px' : '100%'), width: (props.widthInPx ? props.widthInPx + 'px' : '100%'), borderRadius: '16px' }"
      :zoom="50" :center="locationLangtitudeAndLongtitude" :use-global-leaflet="false">
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base" name="OpenStreetMap" />
      <LMarker :lat-lng="locationLangtitudeAndLongtitude" />
    </LMap>
    <button v-if="showGoogleMapLink" type="button"
      class="gap-2 px-5 py-2.5 w-fit text-sm font-medium text-white inline-flex items-center bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:focus:ring-yellow-700">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
      <a :href="`https://www.google.com/maps/search/?api=1&query=${locationLangtitudeAndLongtitude[0]},${locationLangtitudeAndLongtitude[1]}`"
        target="_blank" rel="noopener noreferrer">Buka di Google Maps</a>
    </button>
  </div>
</template>