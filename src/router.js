import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const PageHome = () => import(/* webpack-chunk-name: "PageHome" */ './components/pages/PageHome.vue');

export default new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: PageHome,
    },
  ],
  mode: 'history',
});