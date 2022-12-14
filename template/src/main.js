import Vue from "vue";
import App from "./App.vue";

<%_ if (options.eui) { _%>
import ElementUI from 'element-ui';
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css';
<%_ } _%>

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
