import Vue from 'vue'

export default {
  //state (Pega os estados do Vuex):
  state: {
    accountList: [],
    accountView: {}
  },

  //Mutations = Alterações no states:
  mutations: {
    updateAccountsList (state, data)  {
      state.accountList = data
    },

    updateAccountView (state, data)  {
      state.accountView = data
    },
  },

  actions: {
      // Consultas:
     getAccounts (context) {
         Vue.http.get('api/accounts').then(response => {
             context.commit('updateAccountsList', response.data)
         })
     },

      getAccount (context, id) {
          Vue.http.get('api/accounts/' + id).then(response => {
              context.commit('updateAccountView', response.data)
          })
      },

      // Criação
      newAccount (context, data) {
         Vue.http.post('api/accounts', data)
      },

      // Atualizações:
      updateAccount (context, params) {
          Vue.http.put('api/accounts/' + params.id, params)
      },

      // Exclusão
      removeAccount(context, id) {
          Vue.http.delete('api/accounts/' + id)
      }
  }
}
