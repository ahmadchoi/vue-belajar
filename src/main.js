import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// import Home from '@/components/Home.vue';
// import Login from '@/components/Login.vue';
import Todo from '@/components/Todo.vue';
import Todocomplete from '@/components/Todocomplete.vue';
import Todoimportant from '@/components/Todoimportant.vue';
import Contohvuex from '@/components/Contohvuex.vue';


import VueTimeago from 'vue-timeago';


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuex)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'all', path: '/', component: Todo},
    { name: 'completed', path: '/completed', component: Todocomplete },
    { name: 'important', path: '/important', component: Todoimportant },
    { name: 'contohvuex', path: '/contohvuex', component: Contohvuex }
  ]
})

const store = new Vuex.Store({
  state: {
    fullname: '',
    counter: 0
  },
  mutations: {
    tambahCounter(state) {
      state.counter++;
      // state.fullname = 'mamad';
    }
  }
})


Vue.use(VueTimeago, {
  locale: 'en'
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


