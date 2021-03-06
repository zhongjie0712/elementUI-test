import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "./assets/css/global.scss";
import "./assets/css/element ui.scss";
import "./assets/css/transition.scss";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

/* svg */
import "@/icons";
/* echarts  */
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.use(router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
