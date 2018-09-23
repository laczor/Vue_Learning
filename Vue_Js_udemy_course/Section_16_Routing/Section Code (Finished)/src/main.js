import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // If there is a saved position, it will return that
    if (savedPosition) {
      return savedPosition;
    }
    //If there is a hash placed in the html it willl jump there
    if (to.hash) {
      return { selector: to.hash };
    }
    //otherwise always jump to the top
    return {x: 0, y: 0};
  }
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();        //--> will move on
  // next(false);  --> will abort the route
  // next('/');    --> will redirect
  // next({name:'home'}); -->will redirect
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
