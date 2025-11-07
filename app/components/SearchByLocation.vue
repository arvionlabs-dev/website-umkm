<template>
  <div class="bg-white rounded-2xl p-6 shadow-2xl shadow-blue-50/50">
    <div class="mb-4">
      <span class="font-dm-sans font-semibold text-gray-700 text-sm">Your location</span>
    </div>
    <div class="flex gap-3 items-center">
      <div class="relative flex-1">
        <div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-600 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <input
          v-model="location"
          @focus="showDropdown = true"
          @blur="handleBlur"
          @input="filterLocations"
          type="text"
          placeholder="Enter your location"
          class="w-full pl-12 pr-10 py-3 border border-gray-200 rounded-full text-gray-600 font-dm-sans focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition"
        />
        <button
          @click="toggleDropdown"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition z-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-200"
            :class="{ 'rotate-180': showDropdown }"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Dropdown -->
        <div
          v-if="showDropdown && filteredLocations.length > 0"
          class="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-2xl shadow-xl max-h-60 overflow-y-auto z-20">
          <ul class="py-2">
            <li
              v-for="(loc, index) in filteredLocations"
              :key="index"
              @mousedown="selectLocation(loc)"
              class="px-4 py-3 hover:bg-yellow-50 cursor-pointer transition font-dm-sans text-gray-700 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>{{ loc }}</span>
            </li>
          </ul>
        </div>
      </div>
      <Button
        @click="handleExplore"
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full font-medium font-dm-sans">
        <span>Explore</span>
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from './Button.vue';

const location = ref('');
const showDropdown = ref(false);

// Dummy data lokasi di Kalimantan Selatan
const locations = [
  'Banjarmasin, Kalimantan Selatan',
  'Banjarbaru, Kalimantan Selatan',
  'Martapura, Kalimantan Selatan',
  'Pelaihari, Kalimantan Selatan',
  'Rantau, Kalimantan Selatan',
  'Kandangan, Kalimantan Selatan',
  'Amuntai, Kalimantan Selatan',
  'Marabahan, Kalimantan Selatan',
  'Tanjung, Kalimantan Selatan',
  'Barabai, Kalimantan Selatan',
];

const filteredLocations = ref([...locations]);

const filterLocations = () => {
  if (location.value.trim() === '') {
    filteredLocations.value = [...locations];
  } else {
    filteredLocations.value = locations.filter(loc =>
      loc.toLowerCase().includes(location.value.toLowerCase())
    );
  }
  showDropdown.value = true;
};

const selectLocation = (loc: string) => {
  location.value = loc;
  showDropdown.value = false;
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
  if (showDropdown.value) {
    filteredLocations.value = [...locations];
  }
};

const handleBlur = () => {
  // Delay to allow click on dropdown item
  setTimeout(() => {
    showDropdown.value = false;
  }, 200);
};

const handleExplore = () => {
  if (location.value) {
    console.log('Exploring:', location.value);
    // Add your explore logic here
  }
};
</script>

<style>

</style>