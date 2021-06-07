<template>
  <div id="can-use">
    <div v-if="this.canUse.length!=0">
      <div class="info">
        <div class="coupon" v-for="item in canUse">
          <div class="money">
            <div>
              <span>¥</span>
              <span class="num">{{item.usedAmount}}</span>
            </div>
            <div class="type" v-if="item.type==1">满减券</div>
            <div class="type" v-if="item.type==2">立减券</div>
            <div class="type" v-if="item.type==3">折扣券</div>
            <div class="type" v-if="item.type==''">全场通用</div>
          </div>
          <div class="coupon-info">
            <div class="money-off">
              <span>{{item.title}}</span>
              <span>（</span>
              <span>满{{item.withAmount}}减{{item.usedAmount}}</span>
              <span>）</span>
            </div>
            <div>
              <span>有效期至：{{cut(item.failureTime)}}</span>
            </div>
            <div class="line"></div>
            <div>
              <span>使用范围：</span>
              <span>{{item.withSn==null?'全场通用':'课程专用' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="empty" v-else>
      <div class="text">优惠券空空如也</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "canUse",
    data() {
      return {
        canUse: []
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData(){
        this.canUse = this.$route.query.info
        console.log(this.canUse);
      }
      // getVail(dlId){
      //   getVail(dlId).then(res=>{
      //     this.canUse = res.V
      //     console.log(this.canUse);
      //   })
      // }
    }
  }
</script>

<style scoped>
  #can-use{

  }

  .empty{

  }

  .text{
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 33;
    color: #969696;
    font-size: 20px;
    line-height: 100%;
    text-align: center;
  }
  .info{
    display: flex;
  }

  .coupon{
    display: flex;
    width: 350px;
    height: 96px;
    /*background-repeat:no-repeat;*/
    /*background-size: 85px 67px;*/
    /*background-position:100% 100%;*/
    margin: 20px 0px 0px 20px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
  }

  .money{
    width: 110px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url("../../../assets/img/backgroundImg/coupon.png") !important;
    background-repeat:no-repeat;
    font-size: 16px;
    background-size: 110px 100%;
    color: #fff;
  }

  .num{
    font-size: 35px;
  }

  .type{
    margin-top: 3px;
  }

  .coupon-info{
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    box-sizing: border-box;
    padding-left: 12px;
    font-size: 14px;
    color: #999;
  }

  .coupon-info div{
    margin-top: 9px;
  }

  .money-off{
    font-size: 16px;
    color: #333;
  }

  .line{
    width: 100%;
    height: 1PX;
    background: #e4e4e4;
  }
</style>