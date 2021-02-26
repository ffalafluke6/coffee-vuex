import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product1: {
      name: "SENSEO COFFEE",
      price: 1325,
      amount: 0,
    },
    product2: {
      name: "STARBUCKS COFFEE",
      price: 2479,
      amount: 0,
    },
    product3: {
      name: "YUBAN COFFEE",
      price: 1067,
      amount: 0,
    },
    product4: {
      name: "MAXWELL COFFEE",
      price: 1359,
      amount: 0,
    },
    product5: {
      name: "STARBUCKS PODS",
      price: 950,
      amount: 0,
    },
    product6: {
      name: "SENSEO COFFEE",
      price: 1699,
      amount: 0,
    },
    sum: 0,
    say: function (message) {
      alert(message)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})