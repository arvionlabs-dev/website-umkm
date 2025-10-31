<template>
    <div class="relative w-screen md:max-w-7xl mx-auto md:px-4 py-6 md:py-8">
        <!-- Navigation Buttons -->
        <button @click="previousSlide"
            class="absolute cursor-pointer hidden md:block -left-3 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-50 transition"
            aria-label="Previous slide">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 md:h-6 w-4 md:w-6 text-gray-600" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>

        <!-- Carousel Container -->
        <div class="overflow-hidden mx-6 md:mx-12">
            <div class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }">
                <div v-for="(testimonial, index) in testimonials" :key="index" class="shrink-0 px-2 md:px-3"
                    :style="{ width: `${100 / slidesPerView}%` }">
                    <div class="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8 h-full flex flex-col">
                        <!-- Logo -->
                        <div class="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <div
                                class="w-8 md:w-10 h-8 md:h-10 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 md:h-6 w-4 md:w-6 text-gray-600"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 class="text-base md:text-xl font-bold text-gray-800 line-clamp-1">{{ testimonial.company
                            }}</h3>
                        </div>

                        <!-- Testimonial Text -->
                        <p
                            class="text-xs md:text-sm text-gray-600 leading-relaxed mb-4 md:mb-8 grow line-clamp-3 md:line-clamp-4">
                            {{ testimonial.text }}
                        </p>

                        <!-- Author Info -->
                        <div class="flex flex-col items-center text-center pt-4 md:pt-6 border-t border-gray-100">
                            <div
                                class="w-12 md:w-16 h-12 md:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2 md:mb-3 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 md:h-8 w-6 md:w-8 text-gray-400"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h4 class="font-bold text-gray-900 text-sm md:text-lg line-clamp-1">{{ testimonial.author }}
                            </h4>
                            <p class="text-gray-500 text-xs md:text-sm line-clamp-1">{{ testimonial.role }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button @click="nextSlide"
            class="absolute cursor-pointer hidden md:block -right-3 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-50 transition"
            aria-label="Next slide">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 md:h-6 w-4 md:w-6 text-gray-600" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>

        <!-- Dots Indicator (Optional) -->
        <div class="flex justify-center gap-1 md:gap-2 mt-6 md:mt-8">
            <button v-for="(_, index) in Math.ceil(testimonials.length - slidesPerView + 1)" :key="index"
                @click="goToSlide(index)" :class="[
                    'rounded-full transition-all',
                    currentIndex === index ? 'bg-gray-800 w-6 md:w-8 h-2 md:h-2' : 'bg-gray-300 w-2 h-2'
                ]" :aria-label="`Go to slide ${index + 1}`"></button>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Testimonial {
    company: string;
    text: string;
    author: string;
    role: string;
}

const props = defineProps<{
    testimonials?: Testimonial[];
}>();

// Default testimonials data
const testimonials = computed(() => props.testimonials || [
    {
        company: 'Zoomerr',
        text: 'Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.',
        author: 'Author Name',
        role: 'Role'
    },
    {
        company: 'ArtVenue',
        text: 'Nisl vitae viverra dignissim nibh. Nibh imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque.',
        author: 'Author Name',
        role: 'Role'
    },
    {
        company: 'Zoomerr',
        text: 'Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.',
        author: 'Author Name',
        role: 'Role'
    },
    {
        company: 'ArtVenue',
        text: 'Nisl vitae viverra dignissim nibh. Nibh imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque.',
        author: 'Author Name',
        role: 'Role'
    }
]);

const currentIndex = ref(0);
const slidesPerView = ref(2);

// Responsive slides per view
onMounted(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateSlidesPerView);
});

const updateSlidesPerView = () => {
    if (window.innerWidth < 768) {
        slidesPerView.value = 1;
    } else {
        slidesPerView.value = 2;
    }
};

const nextSlide = () => {
    if (currentIndex.value < testimonials.value.length - slidesPerView.value) {
        currentIndex.value++;
    } else {
        currentIndex.value = 0;
    }
};

const previousSlide = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    } else {
        currentIndex.value = testimonials.value.length - slidesPerView.value;
    }
};

const goToSlide = (index: number) => {
    currentIndex.value = index;
};

// Auto-play (optional)
let autoPlayInterval: ReturnType<typeof setInterval> | null = null;

const startAutoPlay = () => {
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 5000);
};

const stopAutoPlay = () => {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
};

// Uncomment to enable auto-play
// onMounted(() => {
//   startAutoPlay();
// });

// onUnmounted(() => {
//   stopAutoPlay();
// });
</script>

<style scoped>
/* Optional: Add smooth scrolling for better UX */
</style>
