import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Router
import router from './router';
app.use(router);

// Mount app
app.mount('#app');
