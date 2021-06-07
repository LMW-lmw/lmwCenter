<template>
  <div id="my-orders">
    <div class="top">
      <div class="active-class">全部</div>
    </div>
    <div class="orders">
      <ul class="order-top">
          <li class="all-indent">全部订单</li>
          <li class="particulars">订单详情</li>
          <li class="money">金额/元</li>
          <li class="status">订单状态</li>
          <li class="operate">操作</li>
        </ul>
      <div class="all-order">
        <div class="order-items" v-for="i in orders">
          <div class="item-top">
            <span class="time">{{cut(i.dTime)}}</span>
            <span class="order-id">订单编号：{{i.orderId}}</span>
            <a class="kf" href="#"><span><img src="~assets/img/myOrder/icon_consult.png" alt="">质询客服</span></a>
          </div>
          <div class="content">
            <ul class="content-border">
              <li class="course-img">
                <img :src="url+i.orderDetials[0].picUrl" alt="">
                <span>{{i.orderDetials[0].kcname}}</span>
              </li>
              <li class="pay-money">
                <span>¥{{i.orderDetials[0].price}}</span>
              </li>
              <li class="pay-status">
                <span v-if="i.orderDetials[0].pay_state===1">已支付</span>
                <span v-else>未支付</span>
              </li>
              <li class="operation">
                <div v-if="i.orderDetials[0].state===1">已付款</div>
                <div v-else>未支付</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getOrder} from "../../../network/myOrder/myOrder";

  export default {
    name: "MyOrder",
    data() {
      return {
        orders: [],
        url: "http://www.360xkw.com/",
      }
    },
    created() {
      this.getOrder(1)
    },
    methods: {
      getOrder(pageIndex) {
        getOrder(pageIndex).then(res=>{
          if(res.V != null){
            this.orders = res.V
          }
        })
      },
      cut(str){
        return str.split('.')[0]
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  #my-orders{
    font-size: 14px;
  }
  #my-orders .top{
    width: 100%;
    height: 60px;
    background: #fff;
    border-radius: 6px;
    display: flex;
    align-items: center;
  }
  .active-class{
    border-bottom: 3px solid #ff403a;
  }

  .top div{
    padding: 0px 5px 10px 5px;
    cursor: pointer;
    margin-left: 30px;
  }
  .orders{
    background: #fff;
    width: 100%;
    margin-top: 30px;
    padding: 20px 30px 0px 30px;
    border-radius: 6px;
    box-sizing: border-box;
  }
  .order-top{
    width: 100%;
    height: 50px;
    background: #f9f9f9;
    margin: 0px auto;
    display: flex;
    align-items: center;
    padding-left: 40px;
    box-sizing: border-box;
  }

  .all-order{
    margin-top:10px;
    padding-bottom: 1px;
    background: #fff;
  }
  
  .item-top{
    height: 46px;
    line-height: 46px;
    background-color: #f9f9f9;
    border: solid 1px #f5f5f5;
    border-bottom: none;
    padding: 0px 40px;
    font-size: 14px;
    display: flex;
  }

  .item-top img{
    width: 22px;
    height: 22px;
  }

  .all-indent{
    width: 70px;
  }

  .particulars{
    width: 390px;
    text-align: center;
  }

  .money{
    width: 156px;
    text-align: center;
  }

  .status{
    width: 200px;
    text-align: center;
  }

  .operate{
    flex-grow: 1;
    text-align: center;
  }

  .content{
    margin-bottom: 43px;
    width: 100%;
  }

  .content-border{
    height: 170px;
    border-left: solid 1px #f5f5f5;
    border-right: solid 1px #f5f5f5;
    border-bottom: solid 1px #f5f5f5;
    display: flex;
  }

  .course-img{
    height: 170px;
    width: 500px;
    box-sizing: border-box;
    padding-left: 40px;
    padding-top: 19px;
    padding-bottom: 20px;
    border-right: solid 1px #f5f5f5;
    display: flex;
    font-size: 16px;
  }

  .course-img span{
    margin-top: 8px;
  }

  .course-img img{
    width: 140px;
    height: 132px;
    margin-left: 15px;
    margin-right: 20px;
  }
  
  .pay-money{
    width: 156px;
    border-right: solid 1px #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pay-money span{
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #ff403a;
    font-weight: bolder;
  }

  .pay-status{
    width: 200px;
    height: 170px;
    border-right: solid 1px #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pay-status span{
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #ff403a;
  }

  .operation{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .operation div{
    border: none;
    outline: none;
    border-radius: 18px;
    width: 92px;
    height: 36px;
    cursor: pointer;
    text-align: center;
    line-height: 36px;
    background-image: linear-gradient(0deg, #ff403a 0%, #ff6949 100%) !important;
    color: white;
  }
  .time{
    margin-right: 20px;
  }

  .kf{
    margin-left: auto;
    margin-right: 22px;
  }

  .kf img{
    position: relative;
    bottom: 2px;
    right: 3px;
  }
</style>