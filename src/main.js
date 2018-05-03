// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
// routes = Referência dentro de VueRouter() e módulo exportado de src/router/index.js
import routes from './router'
import VuexStore from './vuex/store'
import LoginInterceptors from './components/Login/interceptors'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options.root = process.env.SERVER

Vue.config.productionTip = false

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
  //  Referência ao routes do import
  routes
})

LoginInterceptors.check_empty_token(router)
LoginInterceptors.check_auth(router)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,

  // Criando um watch para limpar o vuex sempre que navegar (Mudar de telas):
  watch: {
    '$route' (to, from) {
      this.$store.dispatch('clearRegistries')
    }
  },
  components: { App },
  template: '<App/>'
})
