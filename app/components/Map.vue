<script setup lang="ts">
import Swal from 'sweetalert2'
import { ref, onMounted } from 'vue';

const locationLangtitudeAndLongtitude = ref<[number, number] | null>(null);
const banjarmasinLocation = ref<[number, number]>([-3.3104508, 114.5835066]);
let watchId: number | null = null;

const props = defineProps<{
  heightInPx?: number;
  widthInPx?: number;
  showGoogleMapLink?: boolean;
  coordinates?: [number, number];
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
      // Mending tampilkan perlu akses lokasi user di komponen. Jadi ada layer diatas map yang kasih tau user buat ngidupin lokasi
      // Swal.fire({
      //   icon: 'warning',
      //   title: 'Can\'t access location',
      // })
      console.warn('Geolocation error:', err.message)
    }
  )
  watchId = navigator.geolocation.watchPosition((position) => {
    locationLangtitudeAndLongtitude.value = [position.coords.latitude, position.coords.longitude];
  },
    (error) => {
      // Swal.fire({
      //   icon: 'warning',
      //   title: 'Can\'t access location',
      // })
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
      <LMap
        :style="{ height: (props.heightInPx ? props.heightInPx + 'px' : '100%'), width: (props.widthInPx ? props.widthInPx + 'px' : '100%'), borderRadius: '16px' }"
        :zoom="50" :center="locationLangtitudeAndLongtitude ?? banjarmasinLocation" :use-global-leaflet="false">
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base" name="OpenStreetMap" />
        <LMarker v-if="locationLangtitudeAndLongtitude != null" :lat-lng="locationLangtitudeAndLongtitude" />
      </LMap>
    </ClientOnly>
    <button v-if="showGoogleMapLink" :disabled="locationLangtitudeAndLongtitude == null" type="button"
      class="gap-2 px-5 py-2.5 w-fit text-sm font-medium text-white inline-flex items-center bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:focus:ring-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
      <NuxtLink
        :to="locationLangtitudeAndLongtitude != null ? `https://www.google.com/maps/search/?api=1&query=${locationLangtitudeAndLongtitude?.[0]},${locationLangtitudeAndLongtitude?.[1]}` : undefined"
        target="_blank">
        Buka di Google Maps
      </NuxtLink>
    </button>
  </div>
</template>