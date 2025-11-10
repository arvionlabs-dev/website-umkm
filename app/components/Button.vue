<template>
  <button :class="twMerge('px-4 py-2 cursor-pointer', props.class)">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { twMerge } from 'tailwind-merge';

const props = defineProps<{
  class?: string
}>();
</script>