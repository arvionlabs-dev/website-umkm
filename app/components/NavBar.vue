<template>
  <nav class="flex w-full bg-green-900 text-white px-16 py-4 justify-between fixed z-50">
    <div class="flex items-center gap-8">
      <h1 class="font-bold text-2xl italic">SobatSasirangan</h1>
      <ul class="flex gap-8 items-center">
        <li class="group inline-block">
          <nuxt-link to="/" class="inline-block relative">
            Home
          </nuxt-link>
          <div aria-hidden="true"
            class="w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100">
          </div>
        </li>
        <li class="group inline-block">
          <nuxt-link to="/">UMKMs</nuxt-link>
          <div aria-hidden="true"
            class="w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100">
          </div>
        </li>
        <li class="group inline-block">
          <nuxt-link to="/">Products</nuxt-link>
          <div aria-hidden="true"
            class="w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100">
          </div>
        </li>
        <li class="group inline-block">
          <nuxt-link to="/">About</nuxt-link>
          <div aria-hidden="true"
            class="w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100">
          </div>
        </li>
      </ul>
    </div>
    <div class="">
      <Button>
        <span class="font-semibold">Trending Right NOW!</span>
      </Button>
    </div>
  </nav>
</template>

<script lang="ts" setup>

</script>

<style></style>