<template>
  <div class="mx-auto font-dm-sans">
    <nav-bar />
    <slot />
    <QuickSearch ref="quickSearchRef" />
  </div>
</template>

<script lang="ts" setup>
const quickSearchRef = ref<{ open: () => void; close: () => void } | null>(null);

// Listen for open-quick-search event from NavBar
const handleOpenQuickSearch = () => {
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
</style>