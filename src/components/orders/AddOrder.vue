<script setup>
import { ref } from "vue";
import router from "../../routes/routes";

const details = ref([{}]);
const detail = ref({
  product: "",
  price: null,
  quantity: null,
});

function addDetail() {
  details.value.push({ ...detail.value });
  resetDetail();
}

function SubmitOrder() {
  if (details.value.length < 1) {
    alert("At least one item must be present.");
  } else router.push({ name: "order" });
}

function resetDetail() {
  detail.value = {
    product: "",
    price: null,
    quantity: null,
  };
}

function deleteDetailsEntred(index) {
  if (details.value.length == 1) {
    alert("At least one item must be present.");
  } else {
    details.value.splice(index, 1);
  }
}
</script>

<template>
  <div
    class="d-flex mt-2 flex-column justify-content-center align-items-center"
  >
    <h1>Create New Order and this Details</h1>
    <div class="container-fluid d-flex justify-content-end mt-3">
      <button class="btn btn-secondary" @click="router.push({ name: 'order' })">
        Return to Home
      </button>
      <button class="btn btn-primary ms-3" @click="SubmitOrder">Submit</button>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in details" :key="index">
            <td>
              <select v-model="item.product" class="form-control">
                <option value="" selected>Select Product</option>
                <option value="Laptop">Laptop</option>
                <option value="Smartphone">Smartphone</option>
              </select>
            </td>
            <td>
              <input
                type="number"
                v-model="item.quantity"
                class="form-control"
              />
            </td>
            <td>
              <input type="number" v-model="item.price" class="form-control" />
            </td>
            <td>
              <button
                class="btn btn-danger"
                @click="deleteDetailsEntred(index)"
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-success mt-3" @click="addDetail">
        Add New Detail
      </button>
    </div>
  </div>
</template>

<style>
</style>
