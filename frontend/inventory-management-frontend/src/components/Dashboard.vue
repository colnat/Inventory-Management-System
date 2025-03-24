<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />

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
      <div class="mb-3">
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
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      bar_code: "",
      quantity: 0,
      price: 0,
      locationInStore: "",
      dimensions: "",
      description: "",
    };
  },
  methods: {
    async addItem() {
      let newItem = axios.post("http://localhost:3000/api/items/add-item", {
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
body {
  background-color: black;
  margin: 0;
  padding: 0;
}
.main {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: #0dcaf0;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

h1 {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label,
input.form-control,
button {
  color: black;
}

input.form-control {
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #ccc;
  transition: 0.3s ease-in-out;
}

input.form-control:focus {
  border-color: #0dcaf0;
  box-shadow: none;
}

button.btn-info {
  width: 100%;
  padding: 12px;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 10px;
  background-color: black;
  color: white;
  border: none;
  transition: 0.3s;
}
button.btn-info:hover {
  background-color: white;
  color: black;
}
</style>
