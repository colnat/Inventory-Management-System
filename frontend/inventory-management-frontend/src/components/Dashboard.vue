<template>

  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <div class="bg-black text-white min-vh-100 p-4">
    <div class="container">
      
      <div class="bg-info text-black p-4 rounded shadow mb-5" style="max-width: 700px; margin: auto">
        <h1 class="text-center text-white mb-4">Inventory Home</h1>

        <form @submit.prevent="updating ? updateItem() : addItem()">
          <div class="mb-3">
            <label class="form-label">Name:</label>
            <input v-model="name" class="form-control" type="text" placeholder="Enter Name" />
          </div>

          <div class="mb-3">
            <label class="form-label">SKU #:</label>
            <input v-model="bar_code" class="form-control" type="text" placeholder="Enter SKU number" />
          </div>

          <div class="mb-3">
            <label class="form-label">Quantity:</label>
            <input v-model="quantity" class="form-control" type="number" placeholder="Enter quantity" />
          </div>

          <div class="mb-3">
            <label class="form-label">Price:</label>
            <input v-model="price" class="form-control" type="number" step=".01" min="0" placeholder="Enter Price" />
          </div>

          <div class="mb-3">
            <label class="form-label">Location in Store:</label>
            <input v-model="locationInStore" class="form-control" type="text" placeholder="Enter Location" />
          </div>

          <div class="mb-3">
            <label class="form-label">Dimensions:</label>
            <input v-model="dimensions" class="form-control" type="text" placeholder="Enter the Dimensions" />
          </div>

          <div class="mb-3">
            <label class="form-label">Description:</label>
            <input v-model="description" class="form-control" type="text" placeholder="Enter a Description" />
          </div>

          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-dark">Submit</button>
            <button v-if="updating" type="button" class="btn btn-secondary" @click="emptyForm()">
              Cancel
            </button>
          </div>
        </form>
      </div>

      
      <div class="container mt-5">
        <h2 class="text-white text-center mb-4">Current Items</h2>
        <div class="row g-4">
          <input type="text" placeholder="Search..." v-model="search" />
          <div v-for="item in filteredItems()" :key="item._id" class="col-12 col-md-6 col-lg-4">
            <div class="card bg-light text-dark shadow-sm h-100">
              <div class="card-body">
                <h5 class="card-title fw-bold">{{ item.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  SKU: {{ item.bar_code }}
                </h6>
                <p class="card-text">
                  <strong>Quantity:</strong> {{ item.quantity }}<br />
                  <strong>Price:</strong> ${{ item.price }}<br />
                  <strong>Location:</strong> {{ item.locationInStore }}<br />
                  <strong>Dimensions:</strong> {{ item.dimensions }}<br />
                  <strong>Description:</strong> {{ item.description }}
                </p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <button class="btn btn-sm btn-danger" @click="deleteItem(item._id)">
                  Delete
                </button>
                <button class="btn btn-sm btn-primary" @click="itemToUpdate(item)">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
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
      itemId: "",
      updating: false,
      items: [],
      search: "",
    };
  },

  mounted() {
    this.getItems();
  },

  methods: {
    async addItem() {
      try {
       await axios.post(
          "http://localhost:3000/api/items/add-item",
          {
            name: this.name,
            bar_code: this.bar_code,
            quantity: this.quantity,
            price: this.price,
            locationInStore: this.locationInStore,
            dimensions: this.dimensions,
            description: this.description,
          }
        );
        this.getItems();
        this.emptyForm();
      } catch (error) {
        console.log("Error adding item,", error);
      }
    },

    async getItems() {
      try {
        let fetchItems = await axios.get(
          "http://localhost:3000/api/items/get-all-items"
        );
        this.items = fetchItems.data;
      } catch (error) {
        console.log("Error fetching items", error);
      }
    },

    async deleteItem(id) {
      try {
        await axios.delete(`http://localhost:3000/api/items/delete-item/${id}`);
        this.getItems();
      } catch (error) {
        console.log("Error deleting item", error);
      }
    },

    async updateItem() {
      try {
        await axios.patch(
          `http://localhost:3000/api/items/update-item/${this.itemId}`,
          {
            name: this.name,
            bar_code: this.bar_code,
            quantity: this.quantity,
            price: this.price,
            locationInStore: this.locationInStore,
            dimensions: this.dimensions,
            description: this.description,
          }
        );
        this.getItems();
        this.emptyForm();
      } catch (error) {
        console.log("Error updating item", error);
      }
    },

    filteredItems() {
      return this.items.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },

    itemToUpdate(item) {
      this.name = item.name;
      this.bar_code = item.bar_code;
      this.quantity = item.quantity;
      this.price = item.price;
      this.locationInStore = item.locationInStore;
      this.dimensions = item.dimensions;
      this.description = item.description;
      this.itemId = item._id;
      this.updating = true;
    },

    emptyForm() {
      this.name = "";
      this.bar_code = "";
      this.quantity = 0;
      this.price = 0;
      this.locationInStore = "";
      this.dimensions = "";
      this.description = "";
      this.itemId = null;
      this.updating = false;
    },
  },
};
</script>
