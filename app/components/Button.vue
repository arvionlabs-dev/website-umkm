<template>
  <button :class="twMerge('bg-green-600 px-4 py-2 cursor-pointer hover:bg-green-500 transition', props.className)">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { twMerge } from 'tailwind-merge';

const props = defineProps<{
  className?: string
}>();



</script>

<style></style>