<template>
  <div id="buy-status">
    <div class="car">
      <slot name="car-img"></slot>
<!--      <img src="~assets/img/shopCar/icon_shop2.png" alt="">-->
      <slot name="car-text"></slot>
    </div>
    <div class="line"></div>
    <div class="order">
            <slot name="order-img"></slot>
<!--      <img src="~assets/img/shopCar/icon_order.png" alt="">-->
      <slot name="order-text"></slot>
    </div>
    <div class="line"></div>
    <div class="pay">
            <slot name="pay-img"></slot>
<!--      <img src="~assets/img/shopCar/icon_complete.png" alt="">-->
      <slot name="pay-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "buyStatus"
  }
</script>

<style scoped>
  #buy-status{
    display: flex;
    align-items: center;
  }

  #buy-status img{
    width: 46px;
    height: 46px;
    margin-bottom: 5px;
  }
  
  .car{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .order{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pay{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .line{
    width: 154px;
    height: 1px;
    background-color: #bfbfbf;
    border-radius: 1px;
    margin: 0px 20px 15px 20px;
  }
  
</style>