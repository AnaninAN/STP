import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';
import App from './components/App.vue';
import router from './router';
import 'bootstrap';

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');