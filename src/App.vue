<template>
  <div id="app">
    <top-bar></top-bar>
    <user-info></user-info>
    <div class="layer">
      <div>
        <main-side-bar></main-side-bar>
      </div>
      <div class="routerWidth">
        <router-view/>
      </div>
    </div>
  </div>
</template>


<script>
  import TopBar from "components/content/topbar/TopBar";
  import UserInfo from "./components/content/TopUserInfo/UserInfo";
  import MainSideBar from "./components/content/sidebar/MainSideBar";
  import {login} from "./network/login";

  export default {
    name: 'app',
    components:{
      TopBar,
      UserInfo,
      MainSideBar
    },
    created() {
      login('13177777917','123456')
    },
    methods: {
      // login(account,password){
      //   login(account,password).then(res => {
      //
      //   })
      // }
    }
  }
</script>
<style>
  @import "assets/css/base.css";
  .layer{
    width: 1400px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 50px;
  }
  .routerWidth{
    width: 1124px;
  }
</style>
