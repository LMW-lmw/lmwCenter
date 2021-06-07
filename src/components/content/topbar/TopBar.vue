<template>
  <div id="top-bar">
    <all-top-bar>
      <div slot="top-bar-left"
           class="top-bar-left">
        <top-bar-item>
          <a href="#"
             slot="text">首页</a>
        </top-bar-item>
        <top-bar-item>
          <a href="#"
             slot="text">课程</a>
        </top-bar-item>
        <top-bar-item>
          <a href="#"
             slot="text">题库</a>
        </top-bar-item>
        <top-bar-item>
          <a href="#"
             slot="text">书店</a>
        </top-bar-item>
        <top-bar-item>
          <a href="#"
             slot="text">直播</a>
        </top-bar-item>
        <top-bar-item>
          <img src="~assets/img/publicImg/icon_phone.png"
               slot="image"
               class="phone">
          <a href="#"
             slot="text"> App下载</a>
        </top-bar-item>
      </div>
      <div slot="top-bar-right"
           class="top-bar-right">
        <top-bar-item>
          <img src="~assets/img/publicImg/man.png"
               slot="image"
               class="userimg">
          <a href="#"
             slot="text">{{username}}</a>
        </top-bar-item>
        <top-bar-item>
          <img src="~assets/img/publicImg/shopcar.png"
               slot="image"
               class="shopcar">
          <a href="#"
             slot="text">购课程</a>
        </top-bar-item>
        <top-bar-item>
          <a href="#"
             slot="text">在线咨询</a>
        </top-bar-item>
        <top-bar-item>
          <div class="loginout"
               slot="text">退出登陆</div>
        </top-bar-item>
      </div>
    </all-top-bar>
  </div>
</template>

<script>
import AllTopBar from "../../common/topbar/AllTopBar";
import TopBarItem from "../../common/topbar/TopBarItem";

export default {
  name: "TopBar",
  components: {
    AllTopBar,
    TopBarItem
  },
  data () {
    return {
      username: sessionStorage.getItem("nickname")
    }
  }
}
</script>

<style scoped>
#top-bar {
  background-color: white;
}

.phone {
  width: 12px;
  height: 18px;
  margin-right: 10px;
}

.userimg {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.shopcar {
  height: 30px;
  width: 30px;
}

.loginout {
  cursor: pointer;
  margin-left: 20px;
  border-radius: 10px;
  background-color: rgb(255, 102, 102);
  color: white;
  width: 100px;
  text-align: center;
  line-height: 30px;
  margin-top: 10px;
}

.top-bar-left {
  display: flex;
}

.top-bar-right {
  display: flex;
}
</style>