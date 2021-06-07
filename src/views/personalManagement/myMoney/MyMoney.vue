<template>
  <div id="my-money">
    <div>
      <div class="top">
        <div class="red-pack"><router-link to="/myMoney/redPack" active-class="active">红包</router-link></div>
        <div><router-link to="/myMoney/coupon" active-class="active">优惠券</router-link></div>
      </div>
      <div class="show">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyMoney",
    data() {
      return {
        active: true
      }
    },
    created() {

    },
    methods: {

    },
  }
</script>

<style scoped>
  #my-money {
    font-size: 16px;
    border-radius: 6px;
    /*background: #fff;*/
  }

  .top{
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    padding-bottom: 20px;
  }

  .red-pack{
    margin: 0 30px 0px 20px;
    /*height: 40px;*/
    /*line-height: 40px;*/
    /*box-sizing: border-box;*/
  }

  .active{
    color: #ff403a !important;
    font-weight: 600;
    border-bottom: 3px solid #ff403a;
  }

  .top div a{
    box-sizing: border-box;
    padding: 10px 0px;
  }
</style>