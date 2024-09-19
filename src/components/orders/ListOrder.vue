<script setup>
import { ref } from "vue";
import router from "../../routes/routes";
const orders = [
  {
    id: 1,
    date: "2024-09-15",
    delivery_address: "123 Maple Street",
    customer: "John Doe",
    track_number: "TRK123456789",
    status: "Shipped"
  },
  {
    id: 2,
    date: "2024-09-16",
    delivery_address: "456 Oak Avenue",
    customer: "Jane Smith",
    track_number: "TRK987654321",
    status: "Processing"
  }
];


const destroy = (index) => {
  confirm(
    `Etes-vous sur de vouloir supprimer ${orders[index].name}  ?`
  );
};
</script>

<template>
  <div class="container-fluid">
    <div class="container">
      <h1 class="mt-3 mb-2 text-center fw-bold">List of Orders</h1>
      <div class="container-btn d-flex justify-content-end">
        <button
          class="btn btn-primary mb-3"
          @click="router.push({ name: 'add-order' })"
        >
          Add New Order
        </button>
      </div>
      <table class="table table-striped table-bordered m-auto">
        <thead>
          <tr>
            <th scope="col" class="text-center">Date</th>
            <th scope="col" class="text-center">Customer</th>
            <th scope="col" class="text-center">Delivery Address</th>
            <th scope="col" class="text-center">Track Number</th>
            <th scope="col" class="text-center">Status</th>
            <th scope="col" class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="orders.length === 0">
            <td colspan="4" class="text-danger text-center fw-bold">
              No Client registered
            </td>
          </tr>
          <tr v-else v-for="(order, index) in orders" :key="index">
            <td class="text-center">{{ order.date }}</td>
            <td class="text-center">{{ order.customer }}</td>
            <td class="text-center">{{ order.delivery_address }}</td>
            <td class="text-center">{{ order.track_number }}</td>
            <td class="text-center">{{ order.status }}</td>
            <td class="text-center">
              <button
                class="btn-sm btn btn-outline-primary ms-2"
                @click="
                  router.push({
                    name: 'show-order',
                    params: { id: order.id },
                  })
                "
              >
                <i class="fas fa-eye"></i>
              </button>
              <button
                class="btn-sm btn btn-outline-secondary ms-2"
                @click="
                  router.push({
                    name: 'edit-order',
                    params: { id: order.id },
                  })
                "
              >
                <i class="fas fa-edit"></i>
              </button>
              <button
                class="btn-sm btn btn-outline-danger ms-2"
                @click="destroy(index)"
              >
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
</style>
