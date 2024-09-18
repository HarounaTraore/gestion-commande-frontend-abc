<script setup>
import { ref, onMounted } from "vue";
import { Modal } from "bootstrap";
import router from "../../routes/routes.js";

const recettetModal = ref(null);

onMounted(() => {
  const modalElement = recettetModal.value;
  const bootstrapModal = new Modal(modalElement);
  bootstrapModal.show();
});
</script>

<template>
  <div class="container-fluid">
    <div
      class="modal fade"
      id="modalId"
      ref="recettetModal"
      tabindex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      role="dialog"
      aria-labelledby="modalTitleId"
      aria-hidden="false"
    >
      <div
        class="modal-dialog modal-dialog-scrollable custom-modal-size modal-dialog-centered"
        role="document"
      >
        <div class="modal-content modal-xl">
          <div class="modal-header bg-primary bg-opacity-75 text-bg-secondary">
            <h5 class="text-center fw-bold w-100" id="modalTitleId">
             Edit Product
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="router.push({ name: 'product' })"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid p-0 m-0 d-flex justify-content-between">
              <div class="p-0 m-0 container-fluid">
                <label for="#" class="mt-2 mb-1">Product Name</label>
                <input class="form-control p-2" type="text" /><label
                  for="#"
                  class="mt-2 mb-1"
                  >Price</label
                >
                <input class="form-control p-2" type="number" /><label
                  for="#"
                  class="mt-2 mb-1"
                  >Barcode</label
                >
                <input class="form-control p-2" type="text" />
              </div>
              <div class="container-right container-fluid">
                <label for="#" class="mt-2 mb-1">Category</label>
                <input class="form-control p-2" type="text" /><label
                  for="#"
                  class="mt-2 mb-1"
                  >STock Quantity</label
                >
                <input class="form-control p-2" type="number" /><label
                  for="#"
                  class="mt-2 mb-1"
                  >Status</label
                >
                <select name="status" class="form-control p-2" id="status">
                  <option value="Active" selected>Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
               
              </div>
            </div>

            <label for="#" class="mt-2">Description</label>
            <textarea class="form-control p-2" type="text" readonly></textarea>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary bg-secondary bg-opacity-75 border-0"
              data-bs-dismiss="modal"
              @click="router.push({ name: 'product' })"
            >
              Cancel</button
            ><button
              type="button"
              class="btn btn-secondary bg-primary bg-opacity-75 border-0"
              data-bs-dismiss="modal"
              @click="router.push({ name: 'product' })"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.custom-modal-size {
  max-width: 60%;
  width: 60%;
}
</style>