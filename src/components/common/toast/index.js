import Toast from "./Toast";
const  obj = {}
obj.install = function (Vue) {
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast);

  //2.new的方式，更具组件构造器，可以创建出一个组件对象
  const toast = new toastContrustor()

  //3.将组件对象，手动挂载到某一元素上
  toast.$mount(document.createElement('div'))

  //4.toast.$el对应的就是一个div
  document.body.appendChild(toast.$el)
  //可全局引用，挂载到Vue.prototype方便使用
  Vue.prototype.$toast = toast;
}
export default obj
