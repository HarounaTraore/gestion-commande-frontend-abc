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
        class="modal-dialog modal-dialog-scrollable modal-dialog-centered"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header bg-primary bg-opacity-75 text-bg-secondary">
            <h5 class="text-center fw-bold w-100" id="modalTitleId">
             Create New Customer
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="router.push({ name: 'customer' })"
            ></button>
          </div>
          <div class="modal-body">
            <label for="#" class="mt-2">Customer Name</label>
            <input class="form-control p-2" type="text" />
            <label for="#" class="mt-2">Address</label>
            <textarea class="form-control p-2" type="text" readonly></textarea>
            <label for="#" class="mt-2">Email</label>
            <input class="form-control p-2" type="text" readonly />
            <label for="#" class="mt-2">Phone</label>
            <input class="form-control p-2" type="text" readonly />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary bg-secondary bg-opacity-75 border-0"
              data-bs-dismiss="modal"
              @click="router.push({ name: 'customer' })"
            >
              Cancel</button
            ><button
              type="button"
              class="btn btn-secondary bg-primary bg-opacity-75 border-0"
              data-bs-dismiss="modal"
              @click="router.push({ name: 'customer' })"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
