import { createApp } from "vue";
import { createPinia } from "pinia";
import { BootstrapVue3 } from "bootstrap-vue-3";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";

import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "./assets/scss/reset.scss";
import "./assets/scss/common.scss";
import "./assets/scss/layout.scss";

import { worker } from "./mocks/worker";
if (process.env.NODE_ENV === "development") {
  worker.start({
    onUnhandledRequest: "bypass",
  });
}

const app = createApp(App);

app.use(createPinia());
app.use(BootstrapVue3);
app.use(BootstrapIcon);
app.use(router);

app.mount("#app");
