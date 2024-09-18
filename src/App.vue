<script setup>
import router from "./routes/routes.js";
</script>

<template>
  
    <header class="container-fluid navbar-dark bg-dark">
      <nav class="navbar navbar-dark bg-dark container">
        <div>
          <button
            class="btn btn-outline-primary"
            @click="router.push({ name: 'customer' })"
          >
            Customer
          </button>
          <button
            class="btn btn-outline-secondary ms-2"
            @click="router.push({ name: 'product' })"
          >
            Products
          </button>
          <button
            class="btn btn-outline-secondary ms-2"
            @click="router.push({ name: 'order' })"
          >
            Order
          </button>
        </div>
      </nav>
    </header>
  
  <div class="container">
    <router-view />
  </div>
</template>

<style scoped>
</style>
