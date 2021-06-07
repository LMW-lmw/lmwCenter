import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: '弧弧',
    account: '13177777917',
    personInfo: [],
  },
  getters: {},
  actions: {},
  mutations: {
    setPrint(state, params) {
      //设置参数
      state.personInfo = params
      state.username = params.info.nickName
      console.log(state.personInfo)
    },
  },
})

export default store
