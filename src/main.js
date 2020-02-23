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
    color: {
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
    isDark: false
  },
  // mutaionsのみがsteteの更新を行うことができる.
  mutations: {
    LightToDark (state) {
      return !state.isDark ? true : false;
    }
  },
  getters: {
    rtnIsDark: function(state) {
      return state.isDark;
    }
  },
  // 非同期処理はactionsで行う.
  actions: {},
});

// history mode
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    if (savedPosition) {
      return savedPosition;
    } else {
       return { x:0, y:0};
    }
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

export default store;
