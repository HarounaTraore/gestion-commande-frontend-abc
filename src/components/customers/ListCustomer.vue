<script setup>
import { ref } from "vue";
import router from "../../routes/routes";
const customers = ref([
  {
    id: 1,
    name: "John Doe",
    address: "New York",
    email: "john.doe@example.com",
    phone: "1234567890",
  },
  {
    id: 2,
    name: "Jane Smith",
    address: "Los Angeles",
    email: "jane.smith@example.com",
    phone: "0987654321",
  },
]);

const destroy = (index) => {
  confirm(
    `Etes-vous sur de vouloir supprimer ${customers.value[index].name}  ?`
  );
};
</script>

<template>
  <div class="container-fluid">
    <div class="container">
      <h1 class="mt-3 mb-2 text-center fw-bold">List of Customers</h1>
      <div class="container-btn d-flex justify-content-end">
        <button
          class="btn btn-primary mb-3"
          @click="router.push({ name: 'add-customer' })"
        >
          Add New Customer
        </button>
      </div>
      <table class="table table-striped table-bordered m-auto">
        <thead>
          <tr>
            <th scope="col" class="text-center">Name</th>
            <th scope="col" class="text-center">Address</th>
            <th scope="col" class="text-center">Email</th>
            <th scope="col" class="text-center">Phone</th>
            <th scope="col" class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="customers.length === 0">
            <td colspan="4" class="text-danger text-center fw-bold">
              No Client registered
            </td>
          </tr>
          <tr v-else v-for="(customer, index) in customers" :key="index">
            <td class="text-center">{{ customer.name }}</td>
            <td class="text-center">{{ customer.address }}</td>
            <td class="text-center">{{ customer.email }}</td>
            <td class="text-center">{{ customer.phone }}</td>
            <td class="text-center">
              <button
                class="btn-sm btn btn-outline-primary ms-2"
                @click="
                  router.push({
                    name: 'show-customer',
                    params: { id: customer.id },
                  })
                "
              >
                <i class="fas fa-eye"></i>
              </button>
              <button
                class="btn-sm btn btn-outline-secondary ms-2"
                @click="
                  router.push({
                    name: 'edit-customer',
                    params: { id: customer.id },
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
