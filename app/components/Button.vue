<template>
  <button :class="twMerge('px-4 py-2 cursor-pointer', props.className)">
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