<template>
  <div class="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col">
    <!-- Product Image -->
    <div v-if="props.imageUrl" class="overflow-hidden aspect-square bg-gray-100 shrink-0">
      <nuxt-img :src="props.imageUrl" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
    </div>

    <!-- Product Info -->
    <div class="p-4 flex flex-col grow">
      <div class="flex flex-col gap-1.5">
        <!-- Product Title -->
        <h3 class="font-dm-sans font-semibold text-base text-gray-900 line-clamp-2">{{ props.title }}</h3>

        <!-- Price -->
        <p class="font-dm-sans text-base text-gray-900">
          Rp. {{ props.price?.toLocaleString('id-ID') }}
        </p>

        <!-- Rating -->
        <div class="flex items-center gap-1 mt-auto">
          <Icon name="material-symbols:star" class="text-yellow-400 text-base" />
          <span class="text-base font-dm-sans text-gray-700">{{ props.rating || '5.0' }}</span>
        </div>
      </div>

      <!-- Seller - Push to bottom -->
      <div class="flex items-center gap-1.5 mt-auto pt-1.5">
        <Icon name="mdi:store-outline" class="text-slate-800 text-2xl" />
        <span class="font-dm-sans text-[14px] text-slate-800">{{ props.seller || '-'}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface ProductCartProps {
  imageUrl?: string;
  title: string;
  price?: number;
  rating?: number;
  seller?: string;
}

const props = defineProps<ProductCartProps>()

</script>

<style></style>