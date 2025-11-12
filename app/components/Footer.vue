<template>
  <footer class="bg-white text-slate-900 border-t border-slate-200">
    <div class="mx-auto md:block flex flex-col max-w-6xl px-2 py-8 md:py-12">
      <div class="flex md:flex-row flex-col gap-12 md:gap-0 md:p-0 px-4 justify-between">
        <!-- Brand / Intro -->
        <div>
          <NuxtLink to="/" class="flex items-center gap-3">
            <span class="sr-only">Company</span>

            <span class="text-lg font-semibold tracking-wider font-eb-garamond text-slate-900">Tjendera</span>
          </NuxtLink>
        </div>

        <!-- Navigation groups -->
        <div class="flex flex-row">
            <ul class="flex flex-col  md:flex-row gap-4 md:gap-12 md:items-center text-sm text-slate-600 font-dm-sans flex-wrap">
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
        
        <div class="flex flex-row gap-3">
          <!-- YouTube -->
          <a href="#" aria-label="YouTube" class="p-1 rounded-md hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          <!-- Twitter/X -->
          <a href="#" aria-label="Twitter" class="p-1 rounded-md hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          <!-- Facebook -->
          <a href="#" aria-label="Facebook" class="p-1 rounded-md hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          <!-- Instagram -->
          <a href="#" aria-label="Instagram" class="p-1 rounded-md hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
            </svg>
          </a>

          <!-- LinkedIn -->
          <a href="#" aria-label="LinkedIn" class="p-1 rounded-md hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        <!-- Newsletter / CTA -->
        <!-- <div>
          <h4 class="text-sm font-semibold font-dm-sans text-slate-900">Contact us</h4>
          <p class="mt-2 text-sm text-slate-600 font-dm-sans">Join our mailing list to receive product updates and strategic
            insights.</p>

          <form @submit.prevent="subscribe" class="mt-4 flex flex-col sm:flex-row gap-2">
            <label for="footer-email" class="sr-only">Email address</label>
            <input id="footer-email" v-model="email" type="email" required placeholder="you@company.com"
              class="flex-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition font-dm-sans" />

            <button type="submit"
              class="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold font-dm-sans text-white transition transform hover:bg-emerald-600 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap">
              Subscribe
            </button>
          </form>

          <p v-if="subscribed" class="mt-3 text-sm text-emerald-600 font-dm-sans">Thanks — we've received your submission.</p>
        </div> -->
      </div>

      <!-- Bottom bar -->
      <div
        class="mt-8 border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
        <p class="text-sm text-slate-600 font-dm-sans order-3 md:order-1 w-full md:w-auto">© {{ year }} Tjendera. All rights
          reserved.</p>

        <!-- <div
          class="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 order-1 md:order-3 w-full md:w-auto"> -->
          <!-- <div class="flex items-center gap-4">
            <NuxtLink to="/privacy" class="text-sm text-slate-600 hover:text-slate-900 font-dm-sans transition">Privacy</NuxtLink>
            <NuxtLink to="/terms" class="text-sm text-slate-600 hover:text-slate-900 font-dm-sans transition">Terms</NuxtLink>
          </div> -->

          <!-- <div class="flex items-center gap-3"> -->
            <!-- Social icons (use real links) -->
            <!-- <a href="#" aria-label="Twitter" class="p-1 rounded-md hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="none"
                aria-hidden="true">
                <path
                  d="M8 19c7 0 11-6 11-11v-.5A7.8 7.8 0 0 0 20 6.5a7.2 7.2 0 0 1-2 .6 3.6 3.6 0 0 0-6.2 3.3A10.3 10.3 0 0 1 5 5.7a3.6 3.6 0 0 0 1.1 4.8A3.4 3.4 0 0 1 4.8 10v.1a3.6 3.6 0 0 0 2.9 3.5 3.6 3.6 0 0 1-1 .1 3.4 3.4 0 0 1-.7-.1 3.6 3.6 0 0 0 3.4 2.5A7.3 7.3 0 0 1 4 16.4a10.3 10.3 0 0 0 5.6 1.6"
                  stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>

            <a href="#" aria-label="GitHub" class="p-1 rounded-md hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="none"
                aria-hidden="true">
                <path
                  d="M12 2C7.6 2 4 5.6 4 10c0 3.6 2.3 6.6 5.5 7.6.4.1.5-.2.5-.4v-1.3c-2.2.5-2.6-1-2.6-1-.4-1.1-1-1.4-1-1.4-.8-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .8 1.4 2 1 2.5.8.1-.6.3-1 .6-1.2-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6 1-2.2-.1-.2-.4-1.1.1-2.2 0 0 .8-.2 2.5.9a8.4 8.4 0 0 1 4.6 0c1.7-1.1 2.5-.9 2.5-.9.5 1.1.2 2 .1 2.2.7.6 1 1.3 1 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.6v2.4c0 .2.1.5.6.4C17.7 16.6 20 13.6 20 10c0-4.4-3.6-8-8-8z"
                  stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div> -->
        <!-- </div> -->
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
