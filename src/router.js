import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const PageHome = () => import(/* webpack-chunk-name: "PageHome" */ './components/pages/PageHome.vue'),
  PageMyRoutes = () => import(/* webpack-chunk-name: "PageMyRoutes" */ './components/pages/PageMyRoutes.vue'),
  PageLogin = () => import(/* webpack-chunk-name: "PageLogin" */ './components/pages/PageLogin.vue'),
  PageRouteSingle = () => import(/* webpack-chunk-name: "PageRouteSingle" */ './components/pages/PageRouteSingle.vue');

export default new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: PageHome,
    },
    {
      name: 'my-routes',
      path: '/myroutes',
      component: PageMyRoutes,
    },
    {
      name: 'login',
      path: '/login',
      component: PageLogin,
    },
    {
      name: 'route-single',
      path: '/routes/:id',
      component: PageRouteSingle,
      props: true,
    }
  ],
  mode: 'history',
});