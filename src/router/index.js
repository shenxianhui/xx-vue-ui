import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    // 默认
    {
      path: '/',
      redirect: '/button'
    },
    {
      path: '/button',
      component: loadView('button/Button')
    }
  ]
});

function loadView(path) {
  return () => import(/* webpackChunkName: "view-[request]" */ `../../examples/${path || ''}`);
}
