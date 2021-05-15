import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

// Bootstrap
// import { BootstrapVue } from 'bootstrap-vue'
// app.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Router
import router from './router';
app.use(router);

// Mount app
app.mount('#app');
