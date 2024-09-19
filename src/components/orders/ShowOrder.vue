<script setup>
import router from "../../routes/routes";
</script>

<template>
  <div
    class="d-flex mt-2 flex-column justify-content-center align-items-center"
  >
    <h1>Show Order and this Details</h1>
    <div class="container-fluid d-flex justify-content-end mt-3">
      <button class="btn btn-secondary" @click="router.push({ name: 'order' })">
        Return to Home
      </button>
    </div>
    <div class="container-fluid p-0 m-0 d-flex justify-content-between">
      <div class="p-0 m-0 container-fluid">
        <label for="#" class="mt-2 mb-1">Date</label>
        <input class="form-control p-2" type="date" />
        <label for="#" class="mt-2 mb-1">Customer Name</label>
        <input class="form-control p-2" type="text" />
      </div>

      <div class="container-right container-fluid">
        <label for="#" class="mt-2 mb-1">Delivery Address</label>
        <input class="form-control p-2" type="text" />
        <label for="#" class="mt-2 mb-1">Stock Track Number</label>
        <input class="form-control p-2" type="number" />
        <label for="#" class="mt-2 mb-1">Order Status</label>
        <select class="form-control p-2">
          <option value="Processing" selected>Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
    </div>

    <div class="order-details mt-4">
      <table class="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select disabled class="form-control">
                <option value="" selected>Select Product</option>
                <option value="Laptop">Laptop</option>
                <option value="Smartphone">Smartphone</option>
              </select>
            </td>
            <td>
              <input
                type="number"
                class="form-control"
                disabled
              />
            </td>
            <td>
              <input type="number" disabled class="form-control" />
            </td>
          </tr>
          <tr>
            <td>
              <select disabled class="form-control">
                <option value="" selected>Select Product</option>
                <option value="Laptop">Laptop</option>
                <option value="Smartphone">Smartphone</option>
              </select>
            </td>
            <td>
              <input
                type="number"
                class="form-control"
                disabled
              />
            </td>
            <td>
              <input type="number" disabled class="form-control" />
            </td>
          </tr>
          <tr>
            <td>
              <select disabled class="form-control">
                <option value="" selected>Select Product</option>
                <option value="Laptop">Laptop</option>
                <option value="Smartphone">Smartphone</option>
              </select>
            </td>
            <td>
              <input
                type="number"
                class="form-control"
                disabled
              />
            </td>
            <td>
              <input type="number" disabled class="form-control" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
</style>
