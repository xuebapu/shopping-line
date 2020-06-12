import router from "./router";

router.beforeEach((to,from,next) => {
  if(to.matched.some( m => m.meta.auth)){
// 对路由进行验证
//     console.log(window.sessionStorage.getItem("token"));
    if(window.sessionStorage.getItem("token") !=null) { // 已经登陆
      next() // 正常跳转到你设置好的页面
    }else{
// 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      next({path: '/login'});
    }
  }else{
    next()
  }
})
