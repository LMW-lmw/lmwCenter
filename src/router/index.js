import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import('../views/home')
const personCenter = () => import('../views/personCenter/PersonCenter')
const beginLesson = () => import('../views/myCourses/beginLesson/BeginLesson')
const couresCenter = () => import('../views/myCourses/courseCenter/CourseCenter')
const doExercise = () => import('../views/myQuestionBank/doExercise/DoExercise')
const accountSecurity = () => import('../views/personalManagement/accountSecurity/AccountSecurity')
const myMoney = () => import('../views/personalManagement/myMoney/MyMoney')
const myOrder = () => import('../views/personalManagement/myOrder/MyOrder')
const shopCar = () => import('../views/personalManagement/shopCar/ShopCar')


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
    path: '/couresCenter',
    name: 'couresCenter',
    component: couresCenter
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
