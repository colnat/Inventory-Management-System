<template>
  <div>
    <ul class="list-group">
      <li v-for="(quantity, sku) in store.inventory" :key="sku" class="list-group-item">
        SKU #{{ sku }} - Quantity: {{ quantity }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { store } from '../store';
</script>

<style scoped>

</style>
