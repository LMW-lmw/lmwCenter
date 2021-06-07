<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <top-bar></top-bar>
      <user-info></user-info>
      <div class="layer">
        <div>
          <main-side-bar></main-side-bar>
        </div>
        <div class="routerWidth">
          <router-view />
        </div>
      </div>
    </div>
    <div v-if="!$route.meta.keepAlive">
      <router-view></router-view>
    </div>
    <!-- <router-link target="_blank"
                 :to="'http://www.ahjszgw.com/ahstzl/'">新页面打开home页</router-link> -->
  </div>
</template>


<script>
import TopBar from "components/content/topbar/TopBar";
import UserInfo from "./components/content/TopUserInfo/UserInfo.vue";
import MainSideBar from "./components/content/sidebar/MainSideBar";
import { login } from "./network/login";

export default {
  name: 'app',
  data () {
    return {
      personInfo: {},
    }
  },
  components: {
    TopBar,
    UserInfo,
    MainSideBar
  },
  created () {
    this.login('13177777917', '123456')
  },
  methods: {
    login (account, password) {
      login(account, password).then(res => {
        //this.personInfo = res.V
        //console.log(res);
        window.sessionStorage.setItem('token', res.V.openId)
        window.sessionStorage.setItem('nickname', res.V.nickName)
        window.sessionStorage.setItem('account', res.V.account)
        window.sessionStorage.setItem('email', res.V.email)
        window.sessionStorage.setItem('gender', res.V.gender)
        window.sessionStorage.setItem('phone', res.V.phone)
        window.sessionStorage.setItem('fullname', res.V.fullName)
        window.sessionStorage.setItem('qq', res.V.qq)
        //console.log(this.personInfo);
        // this.$store.commit("setPrint", {  //print 表示vuex的文件名
        //   info: this.personInfo,
        // });
      })
    }
  }
}
</script>
<style>
@import "assets/css/base.css";
.layer {
  width: 1400px;
  display: flex;
  justify-content: space-between;
  margin: 50px auto 0px auto;
}
.routerWidth {
  width: 1124px;
}
</style>
