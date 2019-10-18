import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./routes"

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);

// history mode
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    console.log(to);
    console.log(from);
    console.log(savedPosition);

    if (savedPosition) {
      return savedPosition;
    } else {
       return {
         x:0,
         y:0,
       }
    }
  }
});

router.beforeEach((to,from,next) => {
  console.log('global router link');
  next();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
