import { createRouter, createWebHashHistory } from "vue-router";
import Customer from "../components/Customer.vue";
import Product from "../components/Product.vue";
import Order from "../components/Order.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "customer",
    component: Customer,
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
