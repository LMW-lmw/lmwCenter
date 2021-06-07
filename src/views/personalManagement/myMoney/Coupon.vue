<template>
  <div id="coupon">
    <div class="top">
      <div @click="goTo('/myMoney/coupon/canUse')" :class="{active:isActive}" class="can-use">可用优惠券（{{can.length}}）</div>
      <div @click="goTo('/myMoney/coupon/canNotUse')" :class="{active:isActive2}" class="lost">失效优惠券（{{no.length}}）</div>
    </div>
    <div class="coupon-status">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import {getVail} from "../../../network/myMoney/myMoney";
  import {getLost} from "../../../network/myMoney/myMoney";

  export default {
    name: "Coupon",
    data() {
      return {
        can: [],
        no: [],
        path: '/myMoney/coupon/canUse',
        isActive: true,
        isActive2: false
      }
    },
    created() {
      this.getVail(2785)
      this.getLost(2785)
      this.goTo(this.path)
    },
    methods: {
      goTo(path){
        this.path = path
        if(path =='/myMoney/coupon/canUse'){
          this.isActive = true
          this.isActive2 = false
          this.$router.push({path:path,query:{info:this.can}}).catch(()=>{})
        }
        if(path =='/myMoney/coupon/canNotUse'){
          this.isActive = false
          this.isActive2 = true
          this.$router.push({path:path,query:{info:this.no}}).catch(()=>{})
        }
      },
      getVail(dlId){
        getVail(dlId).then(res=>{
          this.can = res.V

        })
      },
      getLost(dlId){
        getLost(dlId).then(res=>{
          this.no = res.V
        })
      }
    }
  }
</script>

<style scoped>
  .top{
    height: 50px;
    display: flex;
    background: #fff;
  }

  .top div{
    display: flex;
    line-height: 30px;
    margin: 0 30px;
    color: #666;
    cursor: pointer;
  }

  .active{
    color: #ff403a !important;
  }

  .coupon-status{
    margin-top: 10px;
    background: #fff;
    min-height: 493px;
    width: 100%;
    border-radius: 6px;
    position: relative;
  }
</style>