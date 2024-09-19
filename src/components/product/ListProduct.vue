<script setup>
import { ref } from "vue";
import router from "../../routes/routes";
const products = ref([
  {
    id: 1,
    name: "Laptop",
    description: "High performance",
    price: 1200.00,
    stock: 50,
    category: "Electronics",
    barcode: "LPT123456",
    status: "Available"
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest smartphone",
    price: 800.00,
    stock: 30,
    category: "Electronics",
    barcode: "SPH987654",
    status: "Available"
  }
]);


const destroy = (index) => {
  confirm(
    `Etes-vous sur de vouloir supprimer ${products.value[index].name}  ?`
  );
};
</script>

<template>
  <div class="container-fluid">
    <div class="container">
      <h1 class="mt-3 mb-2 text-center fw-bold">List of Products</h1>
      <div class="container-btn d-flex justify-content-end">
        <button
          class="btn btn-primary mb-3"
          @click="router.push({ name: 'add-product' })"
        >
          Add New Product
        </button>
      </div>
      <table class="table table-striped table-bordered m-auto">
        <thead>
          <tr>
            <th scope="col" class="text-center">Product Name</th>
            <th scope="col" class="text-center">Description</th>
            <th scope="col" class="text-center">Price</th>
            <th scope="col" class="text-center">Stock Quantity</th>
            <th scope="col" class="text-center">Category</th>
            <th scope="col" class="text-center">Barcode</th>
            <th scope="col" class="text-center">Status</th>
            <th scope="col" class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="products.length === 0">
            <td colspan="4" class="text-danger text-center fw-bold">
              No Client registered
            </td>
          </tr>
          <tr v-else v-for="(product, index) in products" :key="index">
            <td class="text-center">{{ product.name }}</td>
            <td class="text-center">{{ product.description }}</td>
            <td class="text-center">{{ product.price }}</td>
            <td class="text-center">{{ product.stock }}</td>
            <td class="text-center">{{ product.category }}</td>
            <td class="text-center">{{ product.barcode }}</td>
            <td class="text-center">{{ product.status }}</td>
            <td class="text-center">
              <button
                class="btn-sm btn btn-outline-primary ms-2"
                @click="
                  router.push({
                    name: 'show-product',
                    params: { id: product.id },
                  })
                "
              >
                <i class="fas fa-eye"></i>
              </button>
              <button
                class="btn-sm btn btn-outline-secondary ms-2"
                @click="
                  router.push({
                    name: 'edit-product',
                    params: { id: product.id },
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
