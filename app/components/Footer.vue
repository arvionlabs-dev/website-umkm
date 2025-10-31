<template>
  <footer class="bg-green-900 text-slate-200">
    <div class="mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <!-- Brand / Intro -->
        <div>
          <NuxtLink to="/" class="flex items-center gap-3">
            <span class="sr-only">Company</span>

            <span class="text-lg font-semibold tracking-tight">SobatSasirangan</span>
          </NuxtLink>
        </div>

        <!-- Navigation groups -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-1">
          <div>
          </div>

          <div>
            <h4 class="mb-3 text-sm font-medium text-slate-100">Menu</h4>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>
                <NuxtLink to="/" class="transition hover:text-white">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" class="transition hover:text-white">UMKMs</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" class="transition hover:text-white">Products</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" class="transition hover:text-white">About</NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter / CTA -->
        <div>
          <h4 class="text-sm font-medium text-slate-100">Contact us</h4>
          <p class="mt-2 text-sm text-slate-400">Join our mailing list to receive product updates and strategic
            insights.</p>

          <form @submit.prevent="subscribe" class="mt-4 flex flex-col sm:flex-row gap-2">
            <label for="footer-email" class="sr-only">Email address</label>
            <input id="footer-email" v-model="email" type="email" required placeholder="you@company.com"
              class="flex-1 rounded-md border border-emerald-700 bg-green-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition" />

            <button type="submit"
              class="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 transition transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap">
              Subscribe
            </button>
          </form>

          <p v-if="subscribed" class="mt-3 text-sm text-emerald-300">Thanks — we've received your submission.</p>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="mt-8 border-t border-green-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p class="text-sm text-slate-500 order-3 md:order-1 w-full md:w-auto">© {{ year }} SobatSasirangan. All rights
          reserved.</p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 order-1 md:order-3 w-full md:w-auto">
          <div class="flex items-center gap-4">
            <NuxtLink to="/privacy" class="text-sm text-slate-400 hover:text-white">Privacy</NuxtLink>
            <NuxtLink to="/terms" class="text-sm text-slate-400 hover:text-white">Terms</NuxtLink>
          </div>

          <div class="flex items-center gap-3">
            <!-- Social icons (use real links) -->
            <a href="#" aria-label="Twitter" class="p-1 rounded-md hover:bg-green-900">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="none"
                aria-hidden="true">
                <path
                  d="M8 19c7 0 11-6 11-11v-.5A7.8 7.8 0 0 0 20 6.5a7.2 7.2 0 0 1-2 .6 3.6 3.6 0 0 0-6.2 3.3A10.3 10.3 0 0 1 5 5.7a3.6 3.6 0 0 0 1.1 4.8A3.4 3.4 0 0 1 4.8 10v.1a3.6 3.6 0 0 0 2.9 3.5 3.6 3.6 0 0 1-1 .1 3.4 3.4 0 0 1-.7-.1 3.6 3.6 0 0 0 3.4 2.5A7.3 7.3 0 0 1 4 16.4a10.3 10.3 0 0 0 5.6 1.6"
                  stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>

            <a href="#" aria-label="GitHub" class="p-1 rounded-md hover:bg-green-900">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="none"
                aria-hidden="true">
                <path
                  d="M12 2C7.6 2 4 5.6 4 10c0 3.6 2.3 6.6 5.5 7.6.4.1.5-.2.5-.4v-1.3c-2.2.5-2.6-1-2.6-1-.4-1.1-1-1.4-1-1.4-.8-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .8 1.4 2 1 2.5.8.1-.6.3-1 .6-1.2-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6 1-2.2-.1-.2-.4-1.1.1-2.2 0 0 .8-.2 2.5.9a8.4 8.4 0 0 1 4.6 0c1.7-1.1 2.5-.9 2.5-.9.5 1.1.2 2 .1 2.2.7.6 1 1.3 1 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.6v2.4c0 .2.1.5.6.4C17.7 16.6 20 13.6 20 10c0-4.4-3.6-8-8-8z"
                  stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const subscribed = ref(false)
const year = new Date().getFullYear()

const subscribe = async () => {
  // Forward-thinking placeholder: wire this to your API or marketing automation (SendGrid, Mailgun, etc.)
  // Example integration: useNuxtApp().$fetch('/api/newsletter', { method: 'POST', body: { email: email.value } })
  // For now we'll simulate success
  try {
    // simulate async op
    await new Promise((r) => setTimeout(r, 500))
    subscribed.value = true
    email.value = ''
  } catch (e) {
    // handle error (toast, telemetry, etc.)
    console.error(e)
  }
}
</script>

<!-- Tailwind utilities only; no component-scoped CSS required -->
