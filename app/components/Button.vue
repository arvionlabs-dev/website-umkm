<template>
  <button :class="twMerge('px-4 py-2 cursor-pointer bg-[#6F5937] hover:bg-[#645033] transition', props.class)">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { twMerge } from 'tailwind-merge';

const props = defineProps<{
  class?: string
}>();
</script>