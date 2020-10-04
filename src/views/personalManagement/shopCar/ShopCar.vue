<template>
  <div id="shop-car">
    <div class="top">
      <div class="img-div">
        <buy-status>
          <img src="~assets/img/shopCar/icon_shop2.png" slot="car-img">
          <div style="color: #ff403a;" slot="car-text">购物车</div>
          <img src="~assets/img/shopCar/icon_order.png" slot="order-img">
          <div style="color: #666;" slot="order-text">确认订单</div>
          <img src="~assets/img/shopCar/icon_complete.png" slot="pay-img">
          <div style="color: #666;" slot="pay-text">支付完成</div>
        </buy-status>
      </div>
    </div>
    <el-table border id="car" @select-all="selectAll" @select="selectCall" ref="multipleTable" :data="tableData"
              tooltip-effect="dark" style="width: 95%"
              @selection-change="handleSelectionChange">
      <el-table-column align="center" type="selection" width="55"></el-table-column>
      <el-table-column align="center" label="序号" width="70">
        <template slot-scope="scope">{{ scope.$index+1 }}</template>
      </el-table-column>
      <el-table-column align="center" prop="" label="商品详情" width="400">
        <template slot-scope="scope">
          <div class="shop-infos">
            <div>
              <img :src="url+scope.row.item.bigPicUrl">
              <span>{{scope.row.item.kcname}}</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="金额/元" width="120">
        <template slot-scope="scope">
          <div class="money">¥&nbsp;{{scope.row.item.disPrice}}</div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" show-overflow-tooltip>
        <template slot-scope="scope">
          <div class="operation" @click="del(scope.row.id)">删除</div>
        </template>
      </el-table-column>
    </el-table>
    <div class="go-pay">
      <div>
        <el-button @click="toggleSelection()">全选</el-button>
        <el-button type="danger" @click="toggleSelection()">删除</el-button>
      </div>
      <div class="use-packet" @click="useRedPack()">
        <el-button type="primary" class="btn">使用优惠券/红包</el-button>
      </div>
      <div class="choose-num">
        <span>已选课程</span>
        <span style="color: #ff403a; font-size: 18px; margin: 0px 3px 1px 3px">{{check.length}}</span>
        <span>件</span>
      </div>
      <div class="total-price">
        总计：
        <span style="color: #ff403a; font-size: 16px; margin-bottom: 2px">¥&nbsp;<span
          style="font-size: 18px">{{price}}</span></span>
      </div>
      <div class="to-pay">
        去结算
      </div>
    </div>
    <div class="white"></div>
    <transition name="el-zoom-in-center">
      <div class="location" v-show="show">
        <div style="position: absolute;top: 0px;left: 0px" id="pop-up">
          <div class="title-close">
            <div class="close" @click="close()"><i class="el-icon-close"></i></div>
          </div>
          <div class="use-pack">
            <div class="red-pack">红包余额 <span>{{redPack}}</span> 元</div>
            <div class="use-click">
              <el-switch :width="30" @change='change($event)' v-model="value" active-text="使用红包">
              </el-switch>
            </div>
          </div>
          <div class="pack-line"></div>
          <ul class="coupon">
            <li v-for="(item,index) in coupon" @click="useCoupon($event,index)" class="coupon-info" :key="item.id">
              <div class="coupon-left">
                <div class="coupon-money">
                  <span>¥</span>
                  <span class="used-amount">{{item.usedAmount}}</span>
                </div>
                <div class="coupon-type">
                  <div v-if="item.type==1">新人券</div>
                  <div v-if="item.type==2">立减券</div>
                  <div v-if="item.type==3">折扣券</div>
                  <div v-if="item.type==''">全场通用</div>
                </div>
              </div>
              <div class="coupon-right">
                <div class="coupon-title"><span>{{item.title}}</span> (满<span>{{item.withAmount}}</span>减<span>{{item.usedAmount}}</span>)
                </div>
                <div class="coupon-time">
                  <span>有效期至: </span>
                  <span>{{item.endTime}}</span>
                </div>
                <div class="coupon-line"></div>
                <div class="coupon-scope">
                  <span>使用范围：</span>
                  <span>全场通用</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <div id="bg-box" v-show="hint">
      <transition name="el-zoom-in-top">
        <div id="hint" v-show="hint">
          <div class="hint-top">
            <span>提示</span>
            <i @click="hintClose" class="el-icon-close close"></i>
          </div>
          <div class="please">请选择课程</div>
          <div @click="hintClose" class="que-ren">
            确认
          </div>
        </div>
      </transition>
    </div>
<!--    <transition name="el-zoom-in-center">-->
<!--    <template>-->
<!--      <el-button class="affirm" type="text" @click="open">111</el-button>-->
<!--    </template>-->
<!--    </transition>-->
  </div>
</template>

<script>
  import {getShopCars, getRedPacket, getDiscount} from "../../../network/shopCar/shopCar";
  import buyStatus from "../../../components/content/buyStatus/buyStatus";

  export default {
    data() {
      return {
        tableData: [],
        multipleSelection: [],
        url: 'http://360xkw.com/',
        check: [],
        price: 0,
        price2: 0,
        show: false,
        redPack: 0,
        value: false,
        usePack: false,
        flag: false,
        hint: false,
        coupon: [],
        employCoupon: false,
        couponNum: 0
      }
    },
    computed: {},
    components: {
      buyStatus
    },
    created() {
      this.getShopCars("abc")
      this.getRedPacket('abc')
      this.getDiscount(2785)
    },
    mounted() {
      let moveDemo = document.getElementById('pop-up')
      this.move(moveDemo, 300)
    },
    methods: {
      //请求接口
      getRedPacket(abc) {
        getRedPacket(abc).then(res => {
          if (res.V != null) {
            this.redPack = res.V
          }
        })
      },
      getShopCars(abd) {
        getShopCars(abd).then(res => {
          this.tableData = res.V
        })
      },
      getDiscount(dlId) {
        getDiscount(dlId).then(res => {
          this.coupon = res.V
          console.log(this.coupon)
        })
      },
      //其他
      selectCall(row) {
        this.check = row
        this.price = 0
        this.price2 = 0
        if (row.length != 0) {
          for (let i = 0; i < row.length; i++) {
            this.price += row[i].item.disPrice
            this.price2 += row[i].item.disPrice
          }
          this.flag = true
          this.price = this.totalPrice(this.couponNum)
          document.getElementsByClassName('to-pay')[0].classList.add('color2')
        } else {
          this.price = 0
          this.price2 = 0
          this.couponNum = 0
          this.flag = false
          this.value = false
          this.show = false
          this.usePack = false
          document.getElementsByClassName('to-pay')[0].classList.remove('color2')

          for (let i = 0; i < document.getElementsByClassName('coupon-info').length; i++) {
            if (document.getElementsByClassName('coupon-info')[i].classList.contains('clickCoupon')) {
              document.getElementsByClassName('coupon-info')[i].classList.remove('clickCoupon')
            }
          }
        }
      },
      selectAll(selection) {
        this.selectCall(selection)
      },
      del(id) {
        console.log(id)
      },
      toggleSelection() {
        this.$refs.multipleTable.toggleAllSelection();
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      move(div, clickTime) {
        let onClickTime
        if (clickTime != null) {
          onClickTime = parseInt(clickTime)
        } else {
          onClickTime = 300
        }
        let timeStart, timeEnd, time, posX, posY;

        function getTimeNow() {
          let now = new Date();
          return now.getTime()
        }

        function mousemove(ev) {
          if (ev == null) ev = window.event; //IE
          let X = (ev.clientX - posX) > -527 ? (ev.clientX - posX) : -527
          let Y = (ev.clientY - posY) > -310 ? (ev.clientY - posY) : -310
          if (X > 358) {
            X = 358
          }
          if (Y > 131) {
            Y = 131
          }
          div.style.left = X + "px";
          div.style.top = Y + "px";
        }

        div.onmousedown = function (e) {
          timeStart = getTimeNow();
          if (!e) e = window.event; //IE
          posX = e.clientX - parseInt(div.style.left);
          posY = e.clientY - parseInt(div.style.top);
          time = setInterval(function () {
            timeEnd = getTimeNow();
            if (timeEnd - timeStart > onClickTime) {
              clearInterval(time);
              document.onmousemove = mousemove;
            }
          }, 100)
        }
        document.onmouseup = function () {
          document.onmousemove = null;
          clearInterval(time);
        }
      },
      close() {
        this.show = false
      },
      useRedPack() {
        if (!this.show && this.flag) {

          this.show = true
        } else {
          if (!this.show) {
            document.getElementsByClassName('please')[0].innerHTML='请选择课程'
            this.hint = true
          }
        }
      },
      totalPrice(coupon) {
        if (coupon == undefined) {
          coupon = 0
        }
        this.price = this.price2
        if (this.usePack) {
          this.price = (this.price - this.redPack) > 0 ? (this.price - this.redPack) : 0
        }
        if (this.employCoupon) {
          this.price = (this.price - coupon) > 0 ? (this.price - coupon) : 0
        }
        if (!this.usePack && !this.employCoupon) {
          this.price = this.price2
        }
        return this.price
      },
      change($event) {
        if (!this.usePack) {
          this.usePack = true
          this.price = this.totalPrice(this.couponNum)
        } else {
          this.usePack = false
          this.price = this.totalPrice(this.couponNum)
        }
      },
      hintClose() {
        this.hint = false
      },
      getSiblings(o) {//获取兄弟元素
        let a = [];//定义一个数组，用来存o的兄弟元素
        let p = o.previousSibling;
        while (p) {//先取o的哥哥们 判断有没有上一个哥哥元素，如果有则往下执行 p表示previousSibling
          if (p.nodeType === 1) {
            a.push(p);
          }
          p = p.previousSibling//最后把上一个节点赋给p
        }
        a.reverse()//把顺序反转一下 这样元素的顺序就是按先后的了
        let n = o.nextSibling;//再取o的弟弟
        while (n) {//判断有没有下一个弟弟结点 n是nextSibling的意思
          if (n.nodeType === 1) {
            a.push(n);
          }
          n = n.nextSibling;
        }
        return a//最后按从老大到老小的顺序，把这一组元素返回
      },
      useCoupon(e, index) {
        let event = e.currentTarget
        let b = this.getSiblings(event)
        let couponMoney = this.coupon[index]
        if (event.classList.contains(('clickCoupon'))) {//判断是否处于使用状态
          event.classList.remove('clickCoupon')
          this.employCoupon = false
          this.totalPrice()
        } else {
          if (this.price >= couponMoney.withAmount) {//判断是否可以使用
            this.employCoupon = true
            this.couponNum = couponMoney.usedAmount
            this.totalPrice(this.couponNum)
            console.log('可以使用')
            for (let i = 0; i < b.length; i++) {
              if (b[i].classList.contains('clickCoupon')) {
                b[i].classList.remove('clickCoupon')
              }
            }
            event.classList.add('clickCoupon')
          } else {
            // this.open()
            this.hint = true
            document.getElementsByClassName('please')[0].innerHTML='所选课程金额未达到此优惠卷满减条件'
            console.log('金额不足以使用优惠券');
          }
          console.log(this.coupon[index]);
        }
      },
      // open() {
      //   this.$alert('<span style="font-size: 14px">所选课程金额未达到此优惠卷满减条件</span>', '提示',{
      //     confirmButtonText: '确定',
      //     dangerouslyUseHTMLString: true,
      //     center: true,
      //     callback: action => {
      //
      //     }
      //   });
      // }
    }
  }
</script>

<style scoped>
  #shop-car {
    font-size: 16px;
    background-color: white;
  }

  .top {
    height: 124px;
    background-color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-div {
    height: 66px;
  }

  #car {
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
  }

  .shop-infos {
    display: flex;
  }

  .shop-infos img {
    width: 140px;
    height: 132px;
    margin-right: 20px;
    margin-left: 10px;
  }

  .money {
    font-size: 20px;
    color: #ff403a;
    font-weight: bold;
  }

  .operation {
    width: 92px;
    height: 36px;
    border-radius: 18px;
    border: solid 1px #999999;
    text-align: center;
    line-height: 36px;
    margin: 0 auto;
    cursor: pointer;
  }

  .go-pay {
    margin: 60px auto 0px auto;
    display: flex;
    width: 1064px;
    height: 50px;
    box-sizing: border-box;
  }

  .go-pay button {
    width: 100px;
    height: 50px;
    font-size: 16px;
  }

  .choose-num {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    margin-right: 60px;
  }

  .use-packet {
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 120px;
  }

  .total-price {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .white {
    height: 50px;
  }

  .to-pay {
    width: 132px;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    /*background-image: linear-gradient(0deg, #ff403a 0%, #ff6949 100%);*/
    background-image: linear-gradient(0deg, #d4d4d4 0%, #d8d8d8 100%);
    color: white;
  }

  .color1 {
    background-image: linear-gradient(0deg, #d4d4d4 0%, #d8d8d8 100%);
  }

  .color2 {
    background-image: linear-gradient(0deg, #ff403a 0%, #ff6949 100%);
    cursor: pointer;
  }

  .btn {
    width: 150px !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #pop-up {
    width: 740px;
    min-height: 460px;
    box-shadow: 1px 1px 10px rgb(190, 190, 190);
    background-color: rgb(255, 255, 255);
    z-index: 33;
    /*position: fixed;*/
    /*top: 30%;*/
    /*right: 25%;*/
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
  }

  .block {
    display: block !important;
  }

  .title-close {
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
  }

  .close {
    transition: 1s;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .close:hover {
    transform: rotate(180deg);
  }

  .location {
    position: relative;
    left: 15%;
    bottom: 650px;
  }

  .use-pack {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    margin: 0 40px;
  }

  .red-pack {
    font-size: 18px;
  }

  .red-pack span {
    color: rgb(255, 64, 58);
    font-size: 20px;
  }

  .use-click {
    font-size: 18px !important;
  }

  .pack-line {
    border-bottom: 1px solid;
    padding: 10px 0px;
  }

  .coupon {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    height: 300px;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .coupon-info {
    width: 330px;
    height: 90px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    margin: 15px 0px 0px 20px;
    position: relative;
  }

  .coupon-left {
    width: 111px;
    background: url(../../../assets/img/backgroundImg/coupon.png) no-repeat;
    background-size: 100% 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .used-amount {
    font-size: 34px;
    display: inline-block;
    margin-bottom: 5px;
  }

  .clickCoupon {
    border: 0.01rem dashed #1090ff;
  }

  .borderNone {
    border: none;
  }

  .coupon-right {
    padding-left: 12px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .coupon-right {

  }

  .coupon-title {
    font-size: 14px;
    color: #333333;
    margin-top: 12px;
  }

  .coupon-time {
    font-size: 12px;
    color: #999999;
    margin-top: 10px;
  }

  .coupon-line {
    background-color: #e4e4e4;
    width: 100%;
    height: 1px;
    margin-top: 8px;
  }

  .coupon-scope {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
    color: #999999;
    margin-top: 8px;
  }

  #bg-box {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1000000000;
  }

  #hint {
    position: fixed;
    top: 40%;
    left: 40%;
    width: 400px;
    height: 180px;
    background-color: rgb(255, 255, 255);
    border-radius: 6px;
    box-shadow: -2px -2px 9px #c3c3c3, 2px 2px 9px #c3c3c3;
    padding: 10px;
    box-sizing: border-box;
  }

  .hint-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
  }

  .please {
    font-size: 18px;
    color: #666;
    line-height: 70px;
    text-align: center;
  }

  .que-ren {
    transition: .6s;
    width: 40px;
    height: 18px;
    padding: 8px 20px;
    background-image: linear-gradient(0deg, #ff403a 0%, #ff6949 100%);
    border-radius: 18px;
    /* line-height: 0.36rem; */
    text-align: center;
    color: white;
    margin: 16px auto 0px auto;
    cursor: pointer;
  }

  .que-ren:hover {
    box-shadow: 2px 2px 9px #6d6d6d;
    margin-top: 10px;
    color: rgb(255, 254, 205);
  }
</style>

<style>
  .el-button--mini, .el-button--small{
    transition: 0.6s;
    font-size: 16px !important;
    /*background-image: linear-gradient(0deg, #ff403a 0%, #ff6949 100%);*/
  }
  .el-message-box__title{
    font-size: 18px !important;
  }

</style>