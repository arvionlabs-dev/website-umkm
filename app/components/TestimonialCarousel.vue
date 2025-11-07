<template>
    <div class="relative w-full max-w-7xl mx-auto px-4 py-6 md:py-8">
        <!-- Carousel Container -->
        <div
            ref="carouselContainer"
            class="overflow-hidden cursor-grab active:cursor-grabbing"
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
                <div v-for="(testimonial, index) in testimonials" :key="index" class="shrink-0 px-3"
                    :style="{ width: `${100 / slidesPerView}%` }">
                    <div class="bg-white rounded-xl border border-gray-200 p-6 md:p-8 h-full flex flex-col select-none">
                        <!-- Testimonial Text with quotes -->
                        <p class="font-dm-sans text-sm md:text-base text-gray-700 leading-relaxed mb-8 grow text-center">
                            " {{ testimonial.text }} "
                        </p>

                        <!-- Author Info -->
                        <div class="flex flex-col items-center text-center">
                            <h4 class="font-eb-garamond font-bold text-gray-900 text-base md:text-lg mb-1">{{ testimonial.author }}</h4>
                            <p class="font-dm-sans text-gray-600 text-xs md:text-sm">{{ testimonial.role }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Dots Indicator -->
        <div class="flex justify-center gap-2 mt-8">
            <button v-for="(_, index) in Math.ceil(testimonials.length - slidesPerView + 1)" :key="index"
                @click="goToSlide(index)" :class="[
                    'rounded-full transition-all w-2 h-2',
                    currentIndex === index ? 'bg-gray-400' : 'bg-gray-300'
                ]" :aria-label="`Go to slide ${index + 1}`"></button>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Testimonial {
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
        text: 'Belanja di Sobat Sasirangan sangat nyaman. Disamping banyak koleksinya, harganya juga bersahabat. Sambil menunggu rekan yang masih sibuk memilih koleksi yang diinginkan, kita bisa duduk-duduk santai sambil menikmati secangkir kopi atau teh hangat plus kue khas banjarmasin yang bisa kita peroleh secara gratis',
        author: 'Moh. Auffa',
        role: 'Banjarmasin, Kalimantan Selatan'
    },
    {
        text: 'Belanja di Sobat Sasirangan sangat nyaman. Disamping banyak koleksinya, harganya juga bersahabat. Sambil menunggu rekan yang masih sibuk memilih koleksi yang diinginkan, kita bisa duduk-duduk santai sambil menikmati secangkir kopi atau teh hangat plus kue khas banjarmasin yang bisa kita peroleh secara gratis',
        author: 'Maulana',
        role: 'Bandar, Kalimantan Selatan'
    },
    {
        text: 'Belanja di Sobat Sasirangan sangat nyaman. Disamping banyak koleksinya, harganya juga bersahabat. Sambil menunggu rekan yang masih sibuk memilih koleksi yang diinginkan, kita bisa duduk-duduk santai sambil menikmati secangkir kopi atau teh hangat plus kue khas banjarmasin yang bisa kita peroleh secara gratis',
        author: 'Ahmad',
        role: 'Martapura, Kalimantan Selatan'
    },
    {
        text: 'Belanja di Sobat Sasirangan sangat nyaman. Disamping banyak koleksinya, harganya juga bersahabat. Sambil menunggu rekan yang masih sibuk memilih koleksi yang diinginkan, kita bisa duduk-duduk santai sambil menikmati secangkir kopi atau teh hangat plus kue khas banjarmasin yang bisa kita peroleh secara gratis',
        author: 'Ahmad',
        role: 'Martapura, Kalimantan Selatan'
    },
]);

const currentIndex = ref(0);
const slidesPerView = ref(2);
const carouselContainer = ref<HTMLElement | null>(null);

// Drag/Swipe functionality
const isDragging = ref(false);
const startX = ref(0);

// Mouse events
const handleMouseDown = (e: MouseEvent) => {
    isDragging.value = true;
    startX.value = e.pageX;
};

const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.value || !carouselContainer.value) return;

    const currentX = e.pageX;
    const diff = startX.value - currentX;
    const containerWidth = carouselContainer.value.offsetWidth;
    const threshold = containerWidth * 0.2; // 20% of container width

    if (Math.abs(diff) > threshold) {
        if (diff > 0 && currentIndex.value < testimonials.value.length - slidesPerView.value) {
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

// Touch events
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
    const threshold = containerWidth * 0.2; // 20% of container width

    if (Math.abs(diff) > threshold) {
        if (diff > 0 && currentIndex.value < testimonials.value.length - slidesPerView.value) {
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

const goToSlide = (index: number) => {
    currentIndex.value = index;
};
</script>

<style scoped>
/* Optional: Add smooth scrolling for better UX */
</style>
