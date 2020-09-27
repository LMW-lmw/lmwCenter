<template>
  <div id="userinfo">
    <div class="username">
      <div>{{$store.state.username}}&nbsp;,&nbsp;欢迎您～</div>
    </div>
    <div class="userimg">
      <img src="~assets/img/publicImg/man.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfo"
  }
</script>

<style scoped>
  #userinfo{
    height: 156px;
    background: url(../../../assets/img/backgroundImg/bg1.png);
    width: 100%;
  }
  .username{
    font-size: 16px;
    color: white;
    height: 17px;
    padding-top: 26px;
    line-height: 17px;
    margin: 0 auto;
    display: flex;
  }
  .username div{
    margin: 0 auto;
  }
  .userimg{
    display: flex;
  }
  .userimg img{
    width: 100px;
    height: 100px;
    margin: 0 auto;
    position: relative;
    top: 60px;
  }
</style>