import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import { routes } from './routes';
import ToggleButton from 'vue-js-toggle-button'

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(ToggleButton);

const store = new Vuex.Store({
  state: {
    mainColor: '#19b5fe',
    subColor: '#3bb4c1',
    border: '#e7e7e7',
    black: '#2e313',
    lightMode: {
      backGround: '#fff',
      text: '#333',
      footertext: '#ececec',
      paperBackGround: '#fbfbfb'
    },
    darkMode: {
      backGround: '#353535',
      text: '#ececec',
      footertext: '#353535',
      paperBackGround: '#404040',
    }
  },
  // mutaionsのみがsteteの更新を行うことができる
  mutations: {},
  actions: {}
});

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
       return { x:0, y:0};
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
