<template>
  <nav class="flex w-full bg-green-900 text-white px-4 md:px-8 lg:px-16 py-4 justify-between fixed z-50 items-center"
    role="navigation" aria-label="Main navigation">
    <div class="flex items-center gap-4 md:gap-8">
      <h1 class="font-bold text-lg md:text-xl lg:text-2xl italic">SobatSasirangan</h1>

      <!-- Desktop menu -->
      <ul class="hidden md:flex gap-4 lg:gap-8 items-center text-sm lg:text-base">
        <li class="group inline-block">
          <NuxtLink to="/" class="inline-block relative">
            Home
          </NuxtLink>
          <div aria-hidden="true"
            class="w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
        </li>

        <li class="group inline-block">
          <NuxtLink to="/umkm">UMKMs</NuxtLink>
          <div aria-hidden="true"
            class="w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
        </li>

        <li class="group inline-block">
          <NuxtLink to="/sasirangan">Products</NuxtLink>
          <div aria-hidden="true"
            class="w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
        </li>

        <li class="group inline-block">
          <NuxtLink to="/about">About</NuxtLink>
          <div aria-hidden="true"
            class="w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
        </li>
      </ul>
    </div>

    <div class="flex items-center gap-3">
      <!-- Mobile hamburger -->
      <button ref="hamburgerBtn" @click="toggleMenu" :aria-expanded="isOpen.toString()" aria-controls="mobile-menu"
        aria-label="Toggle navigation"
        class="md:hidden p-2 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-emerald-300">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- CTA button (desktop visible) -->
      <Button class="hidden md:inline-block px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 text-xs md:text-sm lg:text-base">
        <span class="font-semibold">Trending Right NOW!</span>
      </Button>
    </div>

    <!-- Mobile menu (same links as desktop) -->
    <div id="mobile-menu" ref="mobileMenu"
      class="md:hidden absolute top-full left-0 w-full origin-top transform-gpu transition-all duration-200 ease-in-out"
      :class="isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'"
      style="transform-origin: top;">
      <div class="bg-green-900/95 backdrop-blur-sm border-t border-green-800 px-4 py-4">
        <ul class="flex flex-col gap-3 text-sm">
          <li>
            <NuxtLink @click="closeMenu" to="/" class="block py-2">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMenu" to="/umkm" class="block py-2">UMKMs</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMenu" to="/sasirangan" class="block py-2">Products</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMenu" to="/about" class="block py-2">About</NuxtLink>
          </li>
        </ul>

        <div class="mt-4">
          <!-- mobile CTA -->
          <Button class="w-full px-4 py-2 text-sm">
            <span class="font-semibold">Trending!</span>
          </Button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import Button from './Button.vue'

const isOpen = ref(false)
const mobileMenu = ref<HTMLElement | null>(null)
const hamburgerBtn = ref<HTMLElement | null>(null)
const route = useRoute()

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

/**
 * Click-outside and Escape handling to close the mobile menu.
 * Lightweight and deterministic: suitable for progressive enhancement.
 */
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

/* close menu on route change for deterministic UX */
watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)
</script>

<style scoped>
/* Minor transition tuning for the scale-y animation */
#mobile-menu.scale-y-0 {
  transform: scaleY(0);
}

#mobile-menu.scale-y-100 {
  transform: scaleY(1);
}

/* Ensure smooth opacity transition (Tailwind classes handle duration), keep CSS minimal */
</style>
