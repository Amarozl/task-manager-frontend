import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// ADICIONE ESTA LINHA
import "./assets/main.css";

createApp(App).use(router).mount("#app");
