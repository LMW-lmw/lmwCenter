<template>
  <side-bar>
    <all-side-bars path="/personCenter">
      <img src="~assets/img/sidebar/icon_home.png" slot="item-img">
      <img src="~assets/img/sidebar/icon_home1.png" slot="item-img-active">
      <div slot="item-text">个人中心</div>
    </all-side-bars>
    <div class="line"></div>
    <side-bar-item>
      <div slot="title">我的课程</div>

      <div slot="all-side-bars">

        <all-side-bars path="/beginLesson">
          <img src="~assets/img/sidebar/icon_class.png" slot="item-img">
          <img src="~assets/img/sidebar/icon_class1.png" slot="item-img-active">
          <div slot="item-text">开始听课</div>
        </all-side-bars>

        <all-side-bars path="/courseCenter">
          <img src="~assets/img/sidebar/icon_center.png" slot="item-img">
          <img src="~assets/img/sidebar/icon_center1.png" slot="item-img-active">
          <div slot="item-text">课程中心</div>
        </all-side-bars>

      </div>

    </side-bar-item>

    <div class="line"></div>

    <side-bar-item>
      <div slot="title">我的题库</div>

      <div slot="all-side-bars">

        <all-side-bars path="/doExercise">
          <img src="~assets/img/sidebar/icon_write.png" slot="item-img">
          <img src="~assets/img/sidebar/icon_write1.png" slot="item-img-active">
          <div slot="item-text">开始做题</div>
        </all-side-bars>

        <all-side-bars>
          <img src="~assets/img/sidebar/icon_history.png" slot="item-img">
          <img src="~assets/img/sidebar/icon_history1.png" slot="item-img-active">
          <div slot="item-text">历年题库</div>
        </all-side-bars>

      </div>
    </side-bar-item>

    <div class="line"></div>

    <side-bar-item>
      <div slot="title">个人管理</div>

      <div slot="all-side-bars">

        <all-side-bars path="/shopCar">
          <img src="~assets/img/sidebar/shopcar.png" slot="item-img">
          <img src="~assets/img/sidebar/shopcar1.png" slot="item-img-active">
          <div slot="item-text">购物车</div>
        </all-side-bars>

        <all-side-bars path="/myOrder">
          <img src="~assets/img/sidebar/icon_order.png" slot="item-img">
          <img src="~assets/img/sidebar/icon_order1.png" slot="item-img-active">
          <div slot="item-text">我的订单</div>
        </all-side-bars>

        <all-side-bars path="/myMoney">
          <img src="~assets/img/sidebar/icon_wallet.png" slot="item-img">
          <img src="~assets/img/sidebar/icon_wallet1.png" slot="item-img-active">
          <div slot="item-text">我的钱包</div>
        </all-side-bars>

        <all-side-bars path="/accountSecurity">
          <img src="~assets/img/sidebar/icon_security.png" slot="item-img">
          <img src="~assets/img/sidebar/icon_security1.png" slot="item-img-active">
          <div slot="item-text">账户安全</div>
        </all-side-bars>

      </div>
    </side-bar-item>

    <div class="line"></div>

  </side-bar>
</template>

<script>
  import SideBar from "../../common/sidebar/SideBar";
  import SideBarItem from "../../common/sidebar/SideBarItem";
  import AllSideBars from "../../common/sidebar/AllSideBars";
  export default {
    name: "MainSideBar",
    components: {
      SideBarItem,
      SideBar,
      AllSideBars
    }
  }
</script>

<style scoped>
  .line{
    margin: 6px auto 0 auto;
    width: 220px;
    height: 1px;
    background-color: #e6e6e6;
  }
</style>