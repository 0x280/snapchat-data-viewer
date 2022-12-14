import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Vuetify
import vuetify from "./plugins/vuetify";

createApp(App).use(store).use(router).use(vuetify).mount("#app");
