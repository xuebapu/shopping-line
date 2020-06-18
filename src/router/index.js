import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import("views/home/Home");
const Category = ()=>import("views/category/Category");
const Cart = ()=>import("views/cart/Cart");
const Profile = ()=>import("views/profile/Profile");
const Detail = ()=>import("views/detail/Detail");
const CustomerService = ()=>import("views/customerService/CustomerService");
const Setting = () => import("views/setProfile/SetProfile")

const Login = ()=>import("views/registerLogin/Login")
const Register = ()=>import("views/registerLogin/Register")
Vue.use(VueRouter)
  const routes = [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      component:Home,
    },
    {
      path: '/category',
      component:Category,
    },
    {
      path: '/cart',
      component:Cart,
    },
    {
      path: '/profile',
      component:Profile,
    },
    //动态路由
    {
      path: '/detail/:id',
      component:Detail,
    },
    //动态路由
    {
      path: '/login',
      component:Login,
    },
    {
      path: '/register',
      component:Register,
    },
    //客服
    {
      path: '/service',
      component:CustomerService,
      meta:{auth:true}
    },
    //设置个人信息
    {
      path: '/setting',
      component:Setting,
      meta:{auth:true}
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
export default router
