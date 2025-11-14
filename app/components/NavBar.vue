<template>
  <nav class="flex w-full bg-white text-zinc-900 px-4 md:px-8 lg:px-16 py-4 justify-between fixed z-40 items-center shadow"
    role="navigation" aria-label="Main navigation">
    <div class="flex items-center justify-between w-full gap-4 md:gap-8">
      <div class="">
        <h1 class="font-bold font-eb-garamond text-lg md:text-xl lg:text-2xl tracking-wide">Tjendera</h1>
      </div>

      <!-- Desktop menu -->
      <div class="fixed left-0 right-0">
        <ul class="hidden mx-auto w-[20%] md:max-w-sm md:flex gap-4 lg:gap-8 justify-evenly items-center text-sm lg:text-base font-dm-sans">
          <li class="group inline-block">
            <NuxtLink to="/" class="inline-block relative tracking-normal">
              Home
            </NuxtLink>
            <div aria-hidden="true"
              class="w-full h-0.5 bg-slate-800 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
          </li>

          <li class="group inline-block">
            <NuxtLink to="/umkm" class="tracking-normal">UMKM</NuxtLink>
            <div aria-hidden="true"
              class="w-full h-0.5 bg-slate-800 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
          </li>

          <li class="group inline-block">
            <NuxtLink to="/about" class="tracking-normal">About</NuxtLink>
            <div aria-hidden="true"
              class="w-full h-0.5 bg-slate-800 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
          </li>
        </ul>

      </div>
      <div class="flex relative z-10 items-center gap-3">
        <!-- Quick Search Button -->
        <button @click="openQuickSearch"
          class="hidden relative z-20 md:flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-600">
          <Icon name="mdi:magnify" class="text-lg" />
          <span>Cari...</span>
          <kbd
            class="hidden  xl:inline-block px-2 py-0.5 text-xs bg-gray-100 border border-gray-300 rounded">Ctrl+K</kbd>
        </button>

        <!-- Mobile search icon -->
        <button @click="openQuickSearch" class="md:hidden p-2 flex items-center rounded-md hover:bg-gray-100" aria-label="Search">
          <Icon name="mdi:magnify" class="text-xl" />
        </button>

        <!-- Mobile hamburger -->
        <button ref="hamburgerBtn" @click="toggleMenu" :aria-expanded="isOpen" aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          class="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-300">
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- CTA button (desktop visible) - COMMENTED OUT -->
        <nuxt-link to="/umkm">
          <Button
            class="hidden text-white rounded-lg md:inline-block px-3 py-2 md:px-4 md:py-2 lg:px-6 text-xs md:text-sm lg:text-base">
            <span class="font-dm-sans font-semibold tracking-normal">Cari UMKM di Kotamu</span>
          </Button>
        </nuxt-link>
      </div>
    </div>

    <!-- Mobile menu (same links as desktop) -->
    <div id="mobile-menu" ref="mobileMenu"
      class="md:hidden absolute top-full left-0 w-full origin-top transform-gpu transition-all duration-200 ease-in-out"
      :class="isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'"
      style="transform-origin: top;">
      <div class="bg-white border-t border-gray-200 px-4 py-4 shadow-lg">
        <ul class="flex flex-col gap-3 text-sm font-dm-sans">
          <li>
            <NuxtLink @click="closeMenu" to="/"
              class="block py-2 tracking-normal text-gray-900 hover:text-green-600 transition">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMenu" to="/umkm"
              class="block py-2 tracking-normal text-gray-900 hover:text-green-600 transition">UMKM</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMenu" to="/about"
              class="block py-2 tracking-normal text-gray-900 hover:text-green-600 transition">About</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const mobileMenu = ref<HTMLElement | null>(null)
const hamburgerBtn = ref<HTMLElement | null>(null)
const route = useRoute()

// QuickSearch component ref
const quickSearchRef = ref<{ open: () => void; close: () => void } | null>(null)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const openQuickSearch = () => {
  const event = new CustomEvent('open-quick-search')
  window.dispatchEvent(event)
}

const handleDocumentClick = (e: MouseEvent) => {
  if (!isOpen.value) return
  const target = e.target as Node
  if (
    mobileMenu.value &&
    hamburgerBtn.value &&
    !mobileMenu.value.contains(target) &&
    !hamburgerBtn.value.contains(target)
  ) {
    closeMenu()
  }
}

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) closeMenu()
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
  document.removeEventListener('keydown', handleEscape)
})

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)
</script>

<style scoped>
#mobile-menu.scale-y-0 {
  transform: scaleY(0);
}

#mobile-menu.scale-y-100 {
  transform: scaleY(1);
}
</style>
