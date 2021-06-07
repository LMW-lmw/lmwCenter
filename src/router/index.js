import Vue from 'vue'
import VueRouter from 'vue-router'

const personCenter = () => import('../views/personCenter/PersonCenter')
const beginLesson = () => import('../views/myCourses/beginLesson/BeginLesson')
const courseCenter = () => import('../views/myCourses/courseCenter/CourseCenter')
const doExercise = () => import('../views/myQuestionBank/doExercise/DoExercise')
const accountSecurity = () => import('../views/personalManagement/accountSecurity/AccountSecurity')
const myMoney = () => import('../views/personalManagement/myMoney/MyMoney')
const myOrder = () => import('../views/personalManagement/myOrder/MyOrder')
const shopCar = () => import('../views/personalManagement/shopCar/ShopCar')
import login from "../views/login";
import Test from "../views/Test";
import RedPack from "../views/personalManagement/myMoney/RedPack";
import Coupon from "../views/personalManagement/myMoney/Coupon";
import CanNotUse from "../views/personalManagement/myMoney/CanNotUse";
import CanUse from "../views/personalManagement/myMoney/CanUse";
// import home from "../views/home";
// import personCenter from "../views/personCenter/PersonCenter";
// import beginLesson from "../views/myCourses/beginLesson/BeginLesson";
// import courseCenter from "../views/myCourses/courseCenter/CourseCenter";
// import doExercise from "../views/myQuestionBank/doExercise/DoExercise";
// import accountSecurity from "../views/personalManagement/accountSecurity/AccountSecurity";
// import myMoney from "../views/personalManagement/myMoney/MyMoney";
// import myOrder from "../views/personalManagement/myOrder/MyOrder";
// import shopCar from "../views/personalManagement/shopCar/ShopCar";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    redirect: '/login',
  },
  {
    path: '/personCenter',
    name: 'personCenter',
    component: personCenter,
    meta: { title: "", isLogin: true, keepAlive: true }   //显示
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: { title: "", isLogin: true, keepAlive: false }   //不显示
  },
  {
    path: '/beginLesson',
    name: 'beginLesson',
    component: beginLesson,
    meta: { title: "", isLogin: true, keepAlive: true }   //显示
  },
  {
    path: '/courseCenter',
    name: 'courseCenter',
    component: courseCenter,
    meta: { title: "", isLogin: true, keepAlive: true }   //显示
  },
  {
    path: '/doExercise',
    name: 'doExercise',
    component: doExercise,
    meta: { title: "", isLogin: true, keepAlive: true }   //显示
  },
  {
    path: '/shopCar',
    name: 'shopCar',
    component: shopCar,
    meta: { title: "", isLogin: true, keepAlive: true }   //显示
  },
  {
    path: '/myOrder',
    name: 'myOrder',
    component: myOrder,
    meta: { title: "", isLogin: true, keepAlive: true }   //显示
  },
  {
    path: '/myMoney',
    name: 'myMoney',
    component: myMoney,
    children:[
      {
        path: '/',
        component: RedPack,
        redirect: '/myMoney/redPack',
        meta: { title: "", isLogin: true, keepAlive: true }
      },
      {
        path: '/myMoney/redPack',
        component: RedPack,
        meta: { title: "", isLogin: true, keepAlive: true }
      },
      {
        path: '/myMoney/coupon',
        component: Coupon,
        meta: { title: "", isLogin: true, keepAlive: true },
        children: [
          {
            path: '/',
            redirect: '/myMoney/coupon/canUse',
            component: CanUse,
            meta: { title: "", isLogin: true, keepAlive: true }
          },
          {
            path: '/myMoney/coupon/canUse',
            component: CanUse,
            name: 'canUse',
            meta: { title: "", isLogin: true, keepAlive: true }
          },
          {
            path: '/myMoney/coupon/canNotUse',
            component: CanNotUse,
            name: 'canNotUse',
            meta: { title: "", isLogin: true, keepAlive: true }
          }
        ]
      }
    ],
    meta: { title: "", isLogin: true, keepAlive: true }   //显示
  },
  {
    path: '/accountSecurity',
    name: 'accountSecurity',
    component: accountSecurity,
    meta: { title: "", isLogin: true, keepAlive: true }   //显示
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test,
    meta: { title: "", isLogin: true, keepAlive: false }   //显示
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path === '/login') return next();
  // let info = this.$store.state.personInfo
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr){
    return next('/login')
  }else{
    next()
  }
})

export default router
