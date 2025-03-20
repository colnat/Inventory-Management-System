<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"/>
  
    <div class="main">
      
  
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label class="form-label">Enter SKU #:</label>
          <input 
            v-model="skuNumber"
            class="form-control"
            type="text"
            placeholder="Enter SKU number"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Enter Quantity:</label>
          <input 
            v-model="quantity"
            class="form-control"
            type="number"
            placeholder="Enter quantity"
          />
        </div>

        <div class="mb-3">
          <input v-model="action" type="radio" id="addQuantity" value="add" class="form-check-input"/>
          <label class="form-check-label" for="addQuantity">Add Quantity</label>
        </div>

        <div class="mb-3">
          <input v-model="action" type="radio" id="removeQuantity" value="remove" class="form-check-input"/>
          <label class="form-check-label" for="removeQuantity">Remove Quantity</label>
        </div>
  
        <button type="submit" class="btn btn-info">Submit</button>
      </form>
        <div class="inv">
            <h3 class="mt-4">Current Inventory:</h3>
            <ul class="list-group">
                <li v-for="(quantity, sku) in inventory" :key="sku" class="list-group-item">
          SKU #{{ sku }} - Quantity: {{ quantity }}
                </li>
            </ul>
        </div>
    </div>

  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const skuNumber = ref('');
  const quantity = ref(0);
  const action = ref('add');
  const inventory = ref({});
  const submitForm = () => {
    if (skuNumber.value && quantity.value > 0) {
      if (action.value === 'add') {
        if (inventory.value[skuNumber.value]) {
          inventory.value[skuNumber.value] += parseInt(quantity.value);
        } else {
          inventory.value[skuNumber.value] = parseInt(quantity.value);
        }
      } else if (action.value === 'remove') {
        if (inventory.value[skuNumber.value]) {
          inventory.value[skuNumber.value] -= parseInt(quantity.value);
          if (inventory.value[skuNumber.value] < 0) {
            inventory.value[skuNumber.value] = 0;
          }
        }
      }
    }
  
    skuNumber.value = '';
    quantity.value = 0;
    action.value = 'add';
  };
  </script>
  
  <style scoped>
  .main {
    padding-left: 35px;
    padding-right: 35px;
  }
  </style>
  