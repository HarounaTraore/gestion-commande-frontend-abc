<script setup>
import router from "./routes/routes.js";
</script>

<template>
  <header class="container-fluid navbar-dark bg-dark">
    <nav class="navbar navbar-dark bg-dark container">
      <div>
        <button
          class="btn btn-outline-light"
          autofocus
          @click="router.push({ name: 'customer' })"
        >
          <i class="fas fa-users"></i> Customers
        </button>
        <button
          class="btn btn-outline-light ms-2"
          @click="router.push({ name: 'product' })"
        >
          <i class="fa-solid fa-box-open"></i>
          Products
        </button>
        <button
          class="btn btn-outline-light ms-2"
          @click="router.push({ name: 'order' })"
        >
          <i class="fa-solid fa-cart-shopping"></i>
          Orders
        </button>
      </div>
    </nav>
  </header>

  <div class="container">
    <router-view />
  </div>
</template>

<style scoped>
.btn:focus {
  outline: none;
  box-shadow: 0 0 5px #007bff;
  border-color: #007bff;
  color: #007bff;
}
</style>
