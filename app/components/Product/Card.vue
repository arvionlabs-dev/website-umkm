<template>
  <div class="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div v-if="props.imageUrl" class="overflow-hidden">
      <nuxt-img :src="props.imageUrl" class="w-full hover:scale-105 transition" />
    </div>
    <div class="p-4 flex flex-col gap-4">
      <h2 class="font-bold text-lg">{{ props.title }}</h2>
      <p class="">
        {{ props.description }}
      </p>
      <nuxt-link v-if="props.moreInfoUrl" :to="props.moreInfoUrl"
        class="group flex items-center gap-2 hover:underline hover:underline-offset-2">
        <span class="text-emerald-600 font-semibold">More Info</span>
        <Icon name="line-md:arrow-right"
          class="transform transition-transform duration-150 text-emerald-600 ease-out group-hover:translate-x-1" aria-hidden="true" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface ProductCartProps {
  imageUrl?: string;
  title: string;
  description?: string;
  moreInfoUrl?: string;
}

const props = defineProps<ProductCartProps>()

</script>

<style></style>