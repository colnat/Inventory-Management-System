<script setup>
import Dashboard from './components/Dashboard.vue'
import Browser from './components/Browser.vue'

</script>

<template>
  <div>
    <header>
      <h1>Inventory Home</h1>
      
    </header>

    <main>
      <Dashboard />
      <Browser />
    </main>
  </div>
</template>

<style scoped>
  h1{
    padding: 25px;
  }
</style>
