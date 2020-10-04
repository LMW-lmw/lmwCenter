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
import home from "../views/home";
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
    name: 'personCenter',
    redirect: '/personCenter'
  },
  {
    path: '/personCenter',
    name: 'personCenter',
    component: personCenter
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/beginLesson',
    name: 'beginLesson',
    component: beginLesson
  },
  {
    path: '/courseCenter',
    name: 'courseCenter',
    component: courseCenter
  },
  {
    path: '/doExercise',
    name: 'doExercise',
    component: doExercise
  },
  {
    path: '/shopCar',
    name: 'shopCar',
    component: shopCar
  },
  {
    path: '/myOrder',
    name: 'myOrder',
    component: myOrder
  },
  {
    path: '/myMoney',
    name: 'myMoney',
    component: myMoney
  },
  {
    path: '/accountSecurity',
    name: 'accountSecurity',
    component: accountSecurity
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
