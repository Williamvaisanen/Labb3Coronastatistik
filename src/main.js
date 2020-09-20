import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Countries from "@/components/Countries.vue";
import home from "@/components/home.vue";



Vue.use(Vuex)

Vue.use(VueRouter)

Vue.config.productionTip = false


const store = new Vuex.Store({
  state: {
    titel: 'Labb 3 Corona Statistik'
  }
})




const router = new VueRouter({
  routes: [{
    component: home,
    path: '/home'
  }, {
    component: Countries,
    path: '/Countries'
  }]
})


new Vue({
  render: h => h(app),
  router,
  store
}).$mount('#app')
