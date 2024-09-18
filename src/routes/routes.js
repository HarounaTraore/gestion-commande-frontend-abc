import { createRouter, createWebHashHistory } from "vue-router";
import Customer from "../components/customers/ListCustomer.vue";
import Product from "../components/product/ListProduct.vue";
import Order from "../components/orders/ListOrder.vue";
import NotFound from "../components/NotFound.vue";
import AddCustomer from "../components/customers/AddCustomer.vue";
import ShowCustomer from "../components/customers/ShowCustomer.vue";
import EditCustomer from "../components/customers/EditCustomer.vue";

const routes = [
  {
    path: "/",
    name: "customer",
    component: Customer,
  },
  {
    path: "/add-customer",
    name: "add-customer",
    component: AddCustomer,
  },
  {
    path: "/show-customer/:id",
    name: "show-customer",
    component: ShowCustomer,
  },
  {
    path: "/edit-customer/:id",
    name: "edit-customer",
    component: EditCustomer,
  },

  {
    path: "/order",
    name: "order",
    component: Order,
  },
  {
    path: "/product",
    name: "product",
    component: Product,
  },

  { path: "/:pathMatch(.*)*", component: NotFound },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
