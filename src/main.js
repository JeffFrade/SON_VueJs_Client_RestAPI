// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

import App from './App'
// routes = Referência dentro de VueRouter() e módulo exportado de src/router/index.js
import routes from './router'
import VuexStore from './vuex/store'

Vue.http.options.root = process.env.SERVER

// Configurando o token:
Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI1OTI2MDAyNmEzNjFkYmQ0NzljMTgxNDhmYjcwZjU0Y2YyODY2OTFjZDRkOTMyZjNmN2ZhYzJiZDE2OGQ4NjA2MWEzOGExYjA1YTY5ZTk5In0.eyJhdWQiOiIyIiwianRpIjoiYjU5MjYwMDI2YTM2MWRiZDQ3OWMxODE0OGZiNzBmNTRjZjI4NjY5MWNkNGQ5MzJmM2Y3ZmFjMmJkMTY4ZDg2MDYxYTM4YTFiMDVhNjllOTkiLCJpYXQiOjE1MjQ5MzUzMjAsIm5iZiI6MTUyNDkzNTMyMCwiZXhwIjoxNTU2NDcxMzIwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.AfNcruZy_bkqGcH2SJV0bHgiIdUuaPddpQt_HgGETmkZL7bfrqxG8Y9LLeDj3Zp6s8NKyirBtPwuB6UpPeWH2t2ZA9eaDKiNeKxsITjXbGTfqHeoGFZJ0Ew0TNsyKtnXVH8BxfHVAzfj3uaYWzfXhuSIq1xRTQYiwSyehzUKhiJRf0UWIGqTi4hkhS2quEcJPSvfhMDezx667Rx5i37Tga1nIdldlITjQNhTZzxk1S7zsuA5ongG6a4SkAlCzmDCC-1GFLZCVGWT8OQgeIoJg5CxGf3GHrKxNKIIhQlpTfEdkh_x0xkS2-fCP3uhBBhRlffzgBabI57__lg4koKz3MKzPtYr32njZ4voh3kGLHM6_Y9Sed4X4xISdCnnJpNVy8BxlXb0KLBroIv-fuxKgYaStTlNtG3hCi7zOLJtnE5U7gH1gLx2dYOnbOJCtul6WzIFtKWn03WwNY3DLDpdTpsFGA33ort3Saekan8yCMDi9HNpzPqy2_-QUnBMgSKNet4mHMHeB-R5URF1Sl-zxTX4lFoMKmBonXTvHynwF7FrWngH0WPYn9wcLoUZ7pwHjHZIl6BewRec5JZZs7b9WwjU7lFs-NFLRVhMMbvzvusvmmWE4L-JKYQDiBlP5YwTj7RmQ3Pn72zVTV_5sV86pMAZVA0h2xSmKJ9ul1I3RZw')
  next()
})

Vue.config.productionTip = false

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
  //  Referência ao routes do import
  routes
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
