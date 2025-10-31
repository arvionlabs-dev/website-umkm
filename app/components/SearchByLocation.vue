<template>
  <div class="bg-emerald-50 rounded-2xl p-6 shadow-2xl shadow-blue-50/50">
    <div class="mb-4">
      <span class="font-semibold text-gray-700 text-sm">Your location</span>
    </div>
    <div class="flex gap-3 items-center">
      <div class="relative flex-1">
        <div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <input 
          v-model="location"
          type="text" 
          placeholder="Enter your location"
          class="w-full pl-12 pr-10 py-3 border border-gray-200 rounded-full text-gray-600 focus:outline-none focus:border-gray-300"
        />
        <div class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full font-medium">
        <span>Explore</span>
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from './Button.vue';

const location = ref('');
</script>

<style>

</style>