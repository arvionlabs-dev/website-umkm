<template>
  <div class="mx-auto font-dm-sans">
    <nav-bar />
    <slot />
    <QuickSearch ref="quickSearchRef" />
  </div>
</template>

<script lang="ts" setup>
const quickSearchRef = ref<{ open: () => void; close: () => void } | null>(null);

const handleOpenQuickSearch = () => {
  console.log('Opening Quick Search from layout', quickSearchRef.value);
  quickSearchRef.value?.open();
};

onMounted(() => {
  window.addEventListener('open-quick-search', handleOpenQuickSearch);
});

onUnmounted(() => {
  window.removeEventListener('open-quick-search', handleOpenQuickSearch);
});
</script>

<style>
body {
  background-color: #ffffff;
  font-family: "DM Sans", sans-serif;
}

.pattern {
  background-image: url('/bg/pattern.png');
  background-repeat: repeat;
}

.pattern-gold {
  background-image: url('/bg/pattern-gold.jpg');
  background-repeat: repeat;
  background-size: 75%;
}

.vs__dropdown-toggle {
  height: 100%;
}
</style>