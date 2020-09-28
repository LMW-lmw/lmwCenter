<template>
  <div id="person-center">
    <div class="top">
      <img src="~assets/img/personCenter/icon_livetime.png" alt="">
      <span class="play-info">
        <span class="player">直播</span>
        <span class="play-date">{{liveStreaming.date}}&nbsp;{{liveStreaming.bTime}}&nbsp;~&nbsp;{{liveStreaming.eTime}} , {{liveStreaming.title}}</span>
      </span>
    </div>
    <div id="info">
      <div class="free-class">
        <div class="title">
          <img src="~assets/img/personCenter/icon_course.png">
          <span>免费体验课程</span>
        </div>
        <div class="free-courses">
          <div class="course" v-for="item in freeClass">
            <div class="course-left">
             <img :src="url+item.bigPicUrl" alt="">
              <div>{{item.kcname}}</div>
            </div>
            <div class="course-right">
              开始学习
            </div>
          </div>
        </div>
      </div>
      <div class="info-right">
        <div class="right-top">
          <div class="exercise">
            <ul>
              <li>
                <img src="~assets/img/personCenter/icon_practice.png" alt="">
                <span class="text">每日一练</span>
              </li>
              <li>
                <span class="text1">每天进步一点点</span>
              </li>
            </ul>
          </div>
          <div class="entrance">
            <div class="day">
              <ul>
                <li class="wek">{{wek}}</li>
                <li class="date">{{month}}月{{day}}日</li>
              </ul>
            </div>
            <div class="line1"></div>
            <div class="begin-exercise">
              <div class="go" @click="changeRouter('/doExercise')">
                <img src="~assets/img/personCenter/icon_enter.png" alt="">
                <span>进入练习</span>
              </div>
            </div>
          </div>
        </div>
        <div class="first-shopcar">
          <p>
            <img src="~assets/img/sidebar/shopcar.png" alt="">
            <span>购物车</span>
          </p>
          <div v-if="flag" class="commodity">
            <img :src="url+shopCar.imgUrl">
            <div>
              <span>{{shopCar.kcName}}</span>
              <div class="totalPrice">
                <span class="money">¥{{shopCar.disPrice}}</span>
                <del>¥{{shopCar.price}}</del>
              </div>
            </div>
          </div>
          <p class="empty" v-else>快去添加一件商品吧！</p>
          <div class="more" @click="changeRouter('/shopCar')">
            查看更多
          </div>
        </div>
        <div class="my-order">
          <p>
            <img src="~assets/img/personCenter/icon_order3.png">
            <span>我的订单</span>
          </p>
          <div class="order-buttom">
            <div class="orders" @click="changeRouter('/myOrder')">
              <img src="~assets/img/personCenter/icon_paid.png" alt="">
              <div>已付款订单</div>
            </div>
            <div class="all-class" @click="changeRouter('/couresCenter')">
              <img src="~assets/img/personCenter/icon_all.png" alt="">
              <div>全部课程</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getVideos,getFreeClass} from "../../network/personCenter/personCenter";
  import {getShopCar} from "../../network/shopcar";

  export default {
    name: "personCenter",
    data() {
      return {
        url: "http://www.360xkw.com/",
        month: "",
        wek: "",
        day: "",
        flag: true,
        liveStreaming: {
          date: "",
          bTime: "",
          eTime: "",
          title: ""
        },
        freeClass: [],
        shopCar: {
          imgUrl: "",
          price: "",
          kcName: "",
          disPrice: ""
        }
      }
    },
    created() {
      this.getDay()
      this.getVideos(11)
      this.getFreeClass(11)
      this.getShopCar(1,10,2)
    },
    methods: {
      getDay() {
        let nowday = new Date();
        let weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")
        this.month = nowday.getMonth()+1
        this.wek = weeks[nowday.getDay()]
        this.day = nowday.getDate()
      },
      changeRouter(path) {
        this.$router.replace(path)
      },
      getVideos(courseId){
        getVideos(courseId).then(res => {
          let data = res.V.videoTeachs[0]
          this.liveStreaming.date = data.bTime.split(" ")[0]
          this.liveStreaming.bTime = data.bTime.split(" ")[1].split(".")[0]
          this.liveStreaming.eTime = data.eTime.split(" ")[1].split(".")[0]
          this.liveStreaming.title = data.title

        })
      },
      getFreeClass(courseId){
        getFreeClass(courseId).then(res => {
          this.freeClass = res.V
        })
      },
      getShopCar(page,limit,dlId){
        getShopCar(page,limit,dlId).then(res => {
          if(res.V!=null){
            let item = res.V[0].item
            this.shopCar.imgUrl = item.picUrl
            this.shopCar.price = item.price
            this.shopCar.kcName = item.kcname
            this.shopCar.disPrice = item.disPrice
          }else{
            this.flag = false
          }
        })
      }

    }
  }
</script>

<style scoped>
  #person-center{

  }

  #person-center .top{
    background-color: white;
    height: 50px;
    border-radius: 6px;
    line-height: 50px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    box-sizing: border-box;
    font-size: 14px;
  }

  #person-center .top img{
    width: 20px;
    height: 20px;
  }

  .play-info{
    position: relative;
    top: 1px;
  }

  .player{
    color: #ff403a;
    margin-left: 10px;
    margin-right: 20px;
    font-size: 16px;
  }

  .play-date{
    font-size: 16px;
  }

  #info{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .free-class{
    width: 830px;
    border-radius: 6px;
    background: url(../../assets/img/backgroundImg/bg3.png) no-repeat;
    background-size: 830px 100%;
    padding-left: 30px;
    padding-top: 20px;
    box-sizing: border-box;
  }
  
  .title{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .title img{
    width: 20px;
    height: 20px;
  }

  .title span{
    font-size: 16px;
    color: #333333;
    font-weight: 500;
    margin-left: 6px;
  }

  .course{
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  }

  .course-left{
    display: flex;
  }

  .course img{
    width: 140px;
    height: 132px;
    margin-right: 30px;
  }

  .course-right{
    cursor: pointer;
    width: 122px;
    height: 36px;
    background-image: linear-gradient(0deg, #ff403a 0%, #ff6949 100%);
    border-radius: 18px;
    text-align: center;
    line-height: 36px;
    color: #fff;
    margin-right: 38px;
    margin-top: 13px;
  }

  .course-right:hover{
    background-image: linear-gradient(0deg, #fc5e58 0%, #fa7e63 100%);
  }

  .course{
    height: 170px;
  }

  .info-right{

  }

  .right-top{
    border-radius: 6px;
  }

  .info-right .exercise{
    padding-top: 33px;
    padding-left: 23px;
    box-sizing: border-box;
    width: 270px;
    height: 102px;
    background: url(../../assets/img/backgroundImg/bg2.png) no-repeat;
    background-size: 270px 102px;
  }

  .info-right .exercise img{
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  .info-right .exercise li{
    height: 20px;
  }

  .info-right .exercise .text{
    font-size: 16px;
    color: #333333;
    font-weight: 500;
  }

  .text1{
    font-size: 14px;
    margin-left: 20px;
    margin-top: 2px;
    color: #666;
  }

  .entrance{
    display: flex;

    width: 270px;
    height: 104px;
    background: white;
    border-radius:0px 0px 6px 6px;
  }

  .entrance .day{
    text-align: center;
    width: 135px;
  }

  .entrance .wek{
    font-size: 28px;
    letter-spacing: 0px;
    color: #24959a;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .entrance .date{
    font-size: 16px;
    letter-spacing: 0px;
    color: #666666;
  }
  
  .line1{
    width: 1px;
    height: 80px;
    background-color: #f5f5f5;
    margin-top: 12px;
  }

  .begin-exercise{
    width: 134px;
  }

  .go{
    width: 108px;
    height: 36px;
    border-radius: 18px;
    border: solid 1px #666666;
    margin: 34px auto;
    cursor: pointer;
    line-height: 36px;
    text-align: center;
    font-size: 14px;
  }

  .go img{
    width: 15px;
    height: 16px;
    margin-bottom: 4px;
    margin-right: 5px;
  }

  .first-shopcar{
    width: 270px;
    height: 194px;
    background-color: #fff;
    padding-top: 20px;
    padding-left: 20px;
    box-sizing: border-box;
    border-radius: 6px;
    font-size: 16px;
    margin-top: 10px;
  }

  .first-shopcar p{
    margin-bottom: 10px;
  }

  .first-shopcar p img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
    position: relative;
    bottom: 1px;
  }

  .first-shopcar p span{
    font-size: 16px;
  }

  .commodity{
    display: flex;
  }

  .totalPrice{
    margin-top: 30px;
  }

  .commodity img{
    width: 92px;
    height: 72px;
    margin-right: 10px;
  }

  .money{
    font-family: DINBEKBold;
    font-size: 20px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #ff403a;
    font-weight: bold;
    margin-right: 7px;
  }

  del{
    width: 27px;
    height: 9px;
    font-family: DINBEKBold;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #999999;
    font-weight: bold;
  }

  .more{
    width: 160px;
    height: 32px;
    background-color: #fffafa;
    border-radius: 16px;
    border: solid 1px #ff403a;
    margin: 15px auto 0px auto;
    cursor: pointer;
    text-align: center;
    line-height: 32px;
    color: #ff403a;
  }

  .my-order{
    width: 270px;
    height: 148px;
    background-color: #ffffff;
    border-radius: 6px;
    margin-top: 10px;
    padding-top: 15px;
    box-sizing: border-box;
  }

  .my-order p{
    margin-left: 20px;
  }

  .my-order p img {
    width: 20px;
    height: 20px;
    margin-right: 3px;
  }

  .my-order p span{
    font-family: MicrosoftYaHei-Bold;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
    font-weight: bold;
    position: relative;
    bottom: 2px;
  }

  .order-buttom{
    width: 186px;
    margin: 20px auto 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #333;
  }

  .order-buttom img{
    width: 44px;
    height: 44px;
    margin-bottom: 10px;
  }

  .orders{
    cursor: pointer;
    text-align: center;
  }

  .all-class{
    cursor: pointer;
    text-align: center;
  }

  .empty{
    font-size: 18px;
    height: 70px;
    line-height: 70px;
    text-align: center;
  }
</style>