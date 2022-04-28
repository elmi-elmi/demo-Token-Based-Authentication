import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './veux/store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    console.log('------------')
    const userstring = localStorage.getItem('user')
    if (userstring) {
      this.$store.commit('SET_USER_DATA', JSON.parse(userstring))
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        console.log('**')
        if (error.response.status === 401) {
          console.log('---', error.response)
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  },
  render: h => h(App)
}).$mount('#app')
