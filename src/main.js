import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//自定义插件
import toast from "components/common/toast";
//引入Element-ui
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
//引入 nutui
import { Stepper,Popup,SearchBar } from "@nutui/nutui";

// //安装NutUI
Stepper.install(Vue);
Popup.install(Vue);
SearchBar.install(Vue)

Vue.config.productionTip = false

//原型创建一个 vue实例 来存储 $bus
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
//安装Element-ui
Vue.use(ElementUi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



