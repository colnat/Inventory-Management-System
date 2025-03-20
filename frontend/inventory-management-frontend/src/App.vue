<script setup>
import Dashboard from './components/Dashboard.vue'
import Browser from './components/Browser.vue'

</script>

<template>
  <div>
    <header>
      <h1>Inventory Home</h1>
      <div>
        <ul class="nav">
          <li class="nav-item">
            <button @click="goToDashboard" class="nav-link btn btn-light">
              Add/Remove from Database
            </button>
          </li>
          <li class="nav-item">
            <button @click="toggleInventory" class="nav-link btn btn-light" id="inv">
              View All Inventory
            </button>
          </li>
        </ul>
      </div>
      
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
