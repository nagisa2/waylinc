import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import { init } from "@emailjs/browser";
const app = createApp(App);
app.use(router);
app.mount("#app");
