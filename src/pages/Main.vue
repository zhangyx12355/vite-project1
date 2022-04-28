<template>
  <div style="display: flex">
    <div style="width: 100%;height: 100%;">
      <BaseHeader></BaseHeader>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue';
</script>

<style scoped>

</style>