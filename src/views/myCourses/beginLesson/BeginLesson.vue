<template>
  <div id="begin-lesson" class="begin-lesson">
    <div id="top">
      <div class="top1">
        <p>我的课程</p>
        <div class="line"></div>
      </div>
      <div class="top2">
        <span>教师资格笔试</span>
      </div>
    </div>
    <div id="my-class">
      <div v-for="allClass in allClass">
        <div class="class-info">
          <div class="info">
            <div>
              <img :src="url+allClass.bigPicUrl" class="class-img">
              <span class="kcname">{{allClass.kcname}}</span>
            </div>
            <div class="w-cat">
              <div class="live-streaming">
                <img src="~assets/img/beginLession/icon_broadcast.png">
                <div>直播课程</div>
              </div>
              <div class="wx-group">
                <img src="~assets/img/beginLession/icon_group.png">
                <div>微信群</div>
              </div>
            </div>
          </div>
          <div class="up-down">
            <div @click="slide($event)" class="up">
              <img src="~assets/img/beginLession/icon_down.png" class="downs display-block">
              <img src="~assets/img/beginLession/icon_on.png" class="ons">
            </div>
            <div class="class-content detail" style="height:0">
              <div>
                <div v-for="courses in allClass.courses">
                  <div class="courses-name">
                    <span>{{courses.name}}</span>
                    <i @click="goStudy(courses.id)">开始学习</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getMyClass} from "../../../network/beginLesson/beginLesson";

  export default {
    name: "BeginLesson",
    data() {
      return {
        url: "http://www.360xkw.com/",
        allClass: [],
        activeName: '1'
      }
    },
    computed: {
      account() {
        return this.$store.state.account
      }
    },
    created() {
      this.getMyClass(this.account)
    },
    methods: {
      slide:function(event){
        let curTarget = event.currentTarget,
          containsCurClass = curTarget.classList.contains("up"),
          nextSibling = curTarget.nextSibling;

        while(nextSibling.nodeType == 3 && /\s/.test(nextSibling.nodeValue)){
          nextSibling = nextSibling.nextSibling;
        };
        let detailScrollHeight = nextSibling.scrollHeight;
        if(containsCurClass){
          curTarget.classList.remove("up");
          curTarget.firstElementChild.classList.remove('display-block')
          curTarget.lastElementChild.classList.add('display-block')
          this.toggleSlide(nextSibling,detailScrollHeight,'500');
        }else{
          curTarget.classList.add("up");
          curTarget.lastElementChild.classList.remove('display-block')
          curTarget.firstElementChild.classList.add('display-block')
          this.toggleSlide(nextSibling,0,'500');
        }
      },
      toggleSlide:function(dom,height,time){
        dom.style.transition = 'height ' + time + 'ms';
        dom.style.height = height + 'px';
      },
      goStudy(id){
        console.log(id);
      },
      getMyClass(account) {
        getMyClass(account).then(res => {
          this.allClass = res.V;
        })
      }
    }
  }
</script>

<style scoped>
  .begin-lesson {
    font-size: 14px;
    position: relative;
  }
  #top {
    margin-bottom: 10px;
    background: #fff;
    border-radius: 6px !important;
  }
  .top1 {
    height: 60px;
    box-shadow: 0rem 0.02rem 0.3rem 0rem rgba(0, 0, 0, 0.04);
    padding-left: 30px;
    box-sizing: border-box;
  }
  .top1 p {
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .line {
    width: 74px;
    height: 3px;
    background-color: #ff403a;
    border-radius: 1.5px;
  }
  .top2 {
    height: 60px;
    padding-left: 30px;
    box-sizing: border-box;
    line-height: 60px;
    color: #ff403a;
  }
  #my-class {
    margin-top: 10px;
    border-radius: 6px;
    background-color: #fff;
  }
  .class-img {
    width: 140px;
    height: 132px;
  }
  .class-info {
    min-height: 190px;
    box-sizing: border-box;
    padding-top: 20px;
    padding-left: 30px;

  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    margin: 0 auto;
  }

  .kcname {
    font-size: 18px;
    margin-left: 20px;
  }

  .w-cat {
    display: flex;
    width: 200px;
    justify-content: space-between;
  }

  .w-cat img {
    width: 48px;
    height: 48px;
  }

  .live-streaming {
    cursor: pointer;
    text-align: center;
  }

  .live-streaming div {
    margin-top: 10px;
  }

  .wx-group {
    cursor: pointer;
    text-align: center;
  }

  .wx-group div {
    margin-top: 10px;
  }

  .up-down {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .up-down img {
    width: 44px;
    height: 20px;
    cursor: pointer;
  }
  .downs{
    display: none;
  }
  .ons{
    display: none;
  }
  .display-block{
    display: block !important;
  }
  .class-content {
    background-color: #fcfcfc;
    width: 1048px;
    margin: 20px auto 0 auto;
  }
  .detail{
    overflow: hidden;
  }
  .up .arrow{
    transform: rotate(135deg);
  }
  .courses-name{
    font-size: 16px;
    margin-left: 40px;
    margin-right: 40px;
    line-height: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .courses-name i{
    width: 130px;
    height: 36px;
    display: inline-block;
    background-color: #fffafa;
    border-radius: 18px;
    border: solid 1px #ff403a;
    text-align: center;
    line-height: 36px;
    color: #ff403a;
    font-size: 14px;
    cursor: pointer;
  }

</style>