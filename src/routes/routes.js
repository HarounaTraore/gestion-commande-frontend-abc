import { createRouter, createWebHashHistory } from "vue-router";
import Customer from "../components/customers/ListCustomer.vue";
import Product from "../components/product/ListProduct.vue";
import Order from "../components/orders/ListOrder.vue";
import NotFound from "../components/NotFound.vue";
import AddCustomer from "../components/customers/AddCustomer.vue";
import ShowCustomer from "../components/customers/ShowCustomer.vue";
import EditCustomer from "../components/customers/EditCustomer.vue";
import AddOrder from "../components/orders/AddOrder.vue";
import ShowOrder from "../components/orders/ShowOrder.vue";
import EditOrder from "../components/orders/EditOrder.vue";
import EditProduct from "../components/product/EditProduct.vue";
import ShowProduct from "../components/product/ShowProduct.vue";
import AddProdact from "../components/product/AddProdact.vue";

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
    path: "/add-order",
    name: "add-order",
    component: AddOrder,
  },
  {
    path: "/show-order/:id",
    name: "show-order",
    component: ShowOrder,
  },
  {
    path: "/edit-order/:id",
    name: "edit-order",
    component: EditOrder,
  },

  {
    path: "/product",
    name: "product",
    component: Product,
  },
  {
    path: "/add-product",
    name: "add-product",
    component: AddProdact,
  },
  {
    path: "/show-product/:id",
    name: "show-product",
    component: ShowProduct,
  },
  {
    path: "/edit-product/:id",
    name: "edit-product",
    component: EditProduct,
  },

  { path: "/:pathMatch(.*)*", component: NotFound },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
