import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";

// if you have use bootstrap vue
// import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
/////////////////

const app = createApp(App);
////////////////
// app.use(BootstrapVue);
// app.use(BootstrapVueIcons);
///////////////
app.use(router);
app.mount("#app");
