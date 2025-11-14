<template>
  <footer class="bg-white text-slate-900 border-t border-slate-200">
    <div class="mx-auto md:block flex flex-col max-w-6xl px-2 py-8 md:py-12">
      <div class="flex md:flex-row flex-col gap-12 md:gap-0 px-4 md:px-8 lg:px-16 justify-between relative">
        <!-- Brand / Intro -->
        <div>
          <NuxtLink to="/" class="">
            <span class="sr-only">Company</span>

            <span class="text-lg font-semibold tracking-wider font-eb-garamond text-slate-900">Tjendera</span>
          </NuxtLink>
        </div>

        <!-- Navigation groups -->
        <div class="flex flex-row static md:absolute left-0 top-1 right-0  md:justify-center ">
          <ul
            class="flex flex-col md:flex-row gap-4 md:gap-12 md:items-center text-sm text-slate-600 font-dm-sans flex-wrap">
            <li class="">
              <NuxtLink to="/" class="transition text-slate-900">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/umkm" class="transition text-slate-900">UMKM</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="transition text-slate-900">About</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="mt-8 border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
        <p class="text-sm text-slate-600 font-dm-sans order-3 md:order-1 w-full md:w-auto">© {{ year }} Tjendera. All
          rights
          reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
