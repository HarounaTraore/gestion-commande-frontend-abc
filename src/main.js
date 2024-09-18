import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import router from "./routes/routes";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";

const app = createApp(App);
app.use(router);
app.mount("#app");
