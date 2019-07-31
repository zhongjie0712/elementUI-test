import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    targetRoutes:[]
  },
  getters:{
    targetRoutes:state=>state.targetRoutes
  },
  mutations: {
    targetRoutes:(state,value)=>{state.targetRoutes=value}
  },
  actions: {

  }
})
