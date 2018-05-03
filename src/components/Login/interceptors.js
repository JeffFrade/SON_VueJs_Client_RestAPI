import Vue from 'vue'
import { CONFIG } from './../../config'

let getToken = function () {
  let token = localStorage['token']
  if (!token) {
    token = '{}'
  }

  return JSON.parse(token)
}

let token = getToken()

let login = (router) => {
  router.push('./login')
}

let refershToken = function (request, token, router) {
  let data = {
    grant_type: 'refresh_token',
    client_id: CONFIG.client_id,
    client_secret: CONFIG.client_secret,
    refresh_token: token.refresh_token,
    scope: ''
  }

  Vue.http.post('oauth/token', data).then(res => {
    // Refresh no token:
    localStorage['token'] = JSON.stringify(res.body)
    request.headers.set('Authorization', 'Bearer ' + token.access_token)
  }).catch(err => {
    if (err.status === 400) {
      login(router)
    }
  })
}

export default {
  check_empty_token: function (router) {
    token = getToken()
    if (!token.access_token) {
      login(router)
    }
  },

  check_auth: function (router) {
    // Configurando o token:
    Vue.http.interceptors.push((request, next) => {
      token = getToken()
      request.headers.set('Authorization', 'Bearer ' + token.access_token)
      next(res => {
        if (res.status === 0 || res.status === 401) {
          refershToken(request, token, router)
        }
      })
    })
  }
}
