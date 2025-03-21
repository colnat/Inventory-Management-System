<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"/>
  
    <div class="main">
      
  
      <form @submit.prevent="addItem">
        <div class="mb-3">
          <label class="form-label">Name:</label>
          <input 
            v-model="name"
            class="form-control"
            type="text"
            placeholder="Enter Name"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">SKU #:</label>
          <input 
            v-model="bar_code"
            class="form-control"
            type="text"
            placeholder="Enter SKU number"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Quantity:</label>
          <input 
            v-model="quantity"
            class="form-control"
            type="number"
            placeholder="Enter quantity"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Price:</label>
          <input
            v-model="price"
            class="form-control"
            type="number"
            placeholder="Enter Price"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Location in Store:</label>
          <input
            v-model="locationInStore"
            class="form-control"
            type="text"
            placeholder="Enter Location"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Dimensions:</label>
          <input
            v-model="dimensions"
            class="form-control"
            type="text"
            placeholder="Enter the Dimensions"
          />
        </div>
        <div class="mb-3 ">
          <label class="form-label">Desciption:</label>
          <input 
            v-model="description"
            class="form-control"
            type="text"
            placeholder="Enter a Desription"
          />
        </div>
  
        <button type="submit" class="btn btn-info">Submit</button>
      </form>
        <!-- <div class="inv">
            <h3 class="mt-4">Current Inventory:</h3>
            <ul class="list-group">
                <li v-for="(quantity, sku) in inventory" :key="sku" class="list-group-item">
          SKU #{{ sku }} - Quantity: {{ quantity }}
                </li>
            </ul>
        </div> -->
    </div>

  </template>
  
  <script>
     import axios from 'axios'
     export default {
      data(){
        return{
          name: "",
          bar_code: "",
          quantity: 0,
          price: 0,
          locationInStore: "",
          dimensions:"",
          description: "",
        };
      },
      methods: {
        async addItem() {
          let newItem = axios.post('http://localhost:3000/api/items/add-item',{
          name: this.name,
          bar_code: this.bar_code,
          quantity: this.quantity,
          price: this.price,
          locationInStore: this.locationInStore,
          dimensions: this.dimensions,
          description: this.description,
          });
        console.warn(newItem);
        },
      },
     };
  
  </script>
  
  <style scoped>
  .main {
    padding-left: 35px;
    padding-right: 35px;
  }
  </style>
  