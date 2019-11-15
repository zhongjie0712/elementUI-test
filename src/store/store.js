import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    targetRoutes: [],
    isCollapse: false, //侧边导航栏动态宽度
    nameData: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    seriesData: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  },
  getters: {
    targetRoutes: state => state.targetRoutes,
    nameData: state => state.nameData,
    seriesData: state => state.seriesData,
    isCollapse: state => state.isCollapse
  },
  mutations: {
    targetRoutes: (state, value) => {
      state.targetRoutes = value;
    },
    isCollapse: (state, value) => {
      state.isCollapse = !state.isCollapse;
    }
  },
  actions: {
  }
});
