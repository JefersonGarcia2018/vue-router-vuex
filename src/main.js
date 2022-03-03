import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

// Importando o arquivo [ bundle.min.js ] do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App).use(store).use(router).mount('#app');

store.dispatch('getMe');
store.dispatch('getProdutos');
