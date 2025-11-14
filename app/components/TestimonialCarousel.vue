<template>
    <div class="relative w-full max-w-7xl mx-auto px-4 py-6 md:py-8">
        <!-- Carousel Container -->
        <div class="relative">
            <!-- Navigation Buttons - Desktop -->
            <button 
                @click="goToPreviousSlide"
                :disabled="currentIndex === 0"
                class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-10 h-10 lg:w-12 lg:h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Previous slide">
                <Icon name="mdi:chevron-left" class="text-2xl text-gray-700" />
            </button>
            
            <button 
                @click="goToNextSlide"
                :disabled="currentIndex >= defaultTestimonials.length - slidesPerView"
                class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-10 h-10 lg:w-12 lg:h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Next slide">
                <Icon name="mdi:chevron-right" class="text-2xl text-gray-700" />
            </button>

            <!-- Carousel Track -->
            <div
                ref="carouselContainer"
                class="overflow-hidden relative cursor-grab active:cursor-grabbing"
                @mousedown="handleMouseDown"
                @mousemove="handleMouseMove"
                @mouseup="handleMouseUp"
                @mouseleave="handleMouseUp"
                @touchstart="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd">
                <div
                    class="flex transition-transform duration-500 ease-in-out"
                    :class="{ 'transition-none': isDragging }"
                    :style="{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }">
                    <div v-for="(testimonial, index) in defaultTestimonials" :key="index" class="shrink-0 px-2 md:px-3"
                        :style="{ width: `${100 / slidesPerView}%` }">
                        <div class="bg-white rounded-xl border border-gray-200 gap-3 md:gap-4 p-4 md:p-6 lg:p-8 h-full flex flex-col select-none">
                            <!-- Testimonial Text with quotes -->
                            <p class="font-dm-sans text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed grow text-center">
                                " {{ testimonial.text }} "
                            </p>
                            
                            <!-- Star Rating -->
                            <div class="flex justify-center gap-0.5 md:gap-1 mb-2">
                                <Icon 
                                    v-for="star in 5" 
                                    :key="star" 
                                    name="mdi:star" 
                                    :class="star <= (testimonial.star || 5) ? 'text-yellow-400' : 'text-gray-300'"
                                    class="text-base md:text-lg lg:text-xl"
                                />
                            </div>

                            <!-- Author Info -->
                            <div class="flex flex-col items-center text-center">
                                <h4 class="font-eb-garamond font-bold text-gray-900 text-sm md:text-base lg:text-lg mb-0.5 md:mb-1">
                                    {{ testimonial.author }}
                                </h4>
                                <p class="font-dm-sans text-gray-600 text-xs md:text-sm">
                                    {{ testimonial.role }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Dots Indicator -->
        <div class="flex justify-center gap-2 mt-6 md:mt-8">
            <button 
                v-for="(_, index) in Math.ceil(defaultTestimonials.length - slidesPerView + 1)" 
                :key="index"
                @click="goToSlide(index)" 
                :class="[
                    'rounded-full transition-all',
                    currentIndex === index 
                        ? 'bg-gray-700 w-8 h-2' 
                        : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                ]" 
                :aria-label="`Go to slide ${index + 1}`">
            </button>
        </div>

        <!-- Navigation Buttons - Mobile (Below carousel) -->
        <div class="flex md:hidden justify-center gap-4 mt-6">
            <button 
                @click="goToPreviousSlide"
                :disabled="currentIndex === 0"
                class="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Previous slide">
                <Icon name="mdi:chevron-left" class="text-2xl text-gray-700" />
            </button>
            
            <button 
                @click="goToNextSlide"
                :disabled="currentIndex >= defaultTestimonials.length - slidesPerView"
                class="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Next slide">
                <Icon name="mdi:chevron-right" class="text-2xl text-gray-700" />
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    testimonials?: Testimonial[];
}>();

const defaultTestimonials = computed(() => props.testimonials || [
    {
        text: 'Website ini sangat membantu saya menemukan UMKM lokal di sekitar Banjarmasin. Informasinya lengkap dan mudah diakses!',
        author: 'Moh. Auffa',
        role: 'Banjarmasin, Kalimantan Selatan',
        star: 5
    },
    {
        text: 'Platform yang sangat informatif untuk mencari oleh-oleh khas daerah. Saya jadi tahu banyak UMKM baru yang menarik!',
        author: 'Maulana',
        role: 'Banjar, Kalimantan Selatan',
        star: 5
    },
    {
        text: 'Fitur pencarian dan filternya sangat membantu. Sekarang lebih mudah menemukan produk lokal berkualitas.',
        author: 'Ahmad',
        role: 'Martapura, Kalimantan Selatan',
        star: 5
    },
    {
        text: 'Senang ada platform yang mendukung digitalisasi UMKM lokal. Semoga semakin banyak UMKM yang terdaftar!',
        author: 'Siti Aminah',
        role: 'Banjarbaru, Kalimantan Selatan',
        star: 5
    },
]);

const currentIndex = ref(0);
const slidesPerView = ref(1);
const carouselContainer = ref<HTMLElement | null>(null);

const isDragging = ref(false);
const startX = ref(0);

const handleMouseDown = (e: MouseEvent) => {
    isDragging.value = true;
    startX.value = e.pageX;
};

const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.value || !carouselContainer.value) return;

    const currentX = e.pageX;
    const diff = startX.value - currentX;
    const containerWidth = carouselContainer.value.offsetWidth;
    const threshold = containerWidth * 0.15;

    if (Math.abs(diff) > threshold) {
        if (diff > 0 && currentIndex.value < defaultTestimonials.value.length - slidesPerView.value) {
            currentIndex.value++;
            isDragging.value = false;
        } else if (diff < 0 && currentIndex.value > 0) {
            currentIndex.value--;
            isDragging.value = false;
        }
    }
};

const handleMouseUp = () => {
    isDragging.value = false;
};

const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches?.[0];
    if (!touch) return;

    isDragging.value = true;
    startX.value = touch.clientX;
};

const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.value || !carouselContainer.value) return;

    const touch = e.touches?.[0];
    if (!touch) return;

    const currentX = touch.clientX;
    const diff = startX.value - currentX;
    const containerWidth = carouselContainer.value.offsetWidth;
    const threshold = containerWidth * 0.15;

    if (Math.abs(diff) > threshold) {
        if (diff > 0 && currentIndex.value < defaultTestimonials.value.length - slidesPerView.value) {
            currentIndex.value++;
            isDragging.value = false;
        } else if (diff < 0 && currentIndex.value > 0) {
            currentIndex.value--;
            isDragging.value = false;
        }
    }
};

const handleTouchEnd = () => {
    isDragging.value = false;
};

const goToPreviousSlide = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    }
};

const goToNextSlide = () => {
    if (currentIndex.value < defaultTestimonials.value.length - slidesPerView.value) {
        currentIndex.value++;
    }
};

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
    } else if (window.innerWidth < 1024) {
        slidesPerView.value = 2;
    } else {
        slidesPerView.value = 2;
    }
};

const goToSlide = (index: number) => {
    currentIndex.value = index;
};
</script>

<style scoped>
.cursor-grab:active {
    cursor: grabbing;
}
</style>