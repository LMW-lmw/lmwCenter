<template>
  <div id="course-center">
    <div class="top">
      <span v-for="(item,i) in title" :class="{active :i==currentIndex}" @click="itemClick(i)">{{item}}</span>
    </div>
    <div class="classes">
      <div v-for="item in item" class="one-class">
        <img :src="url+item.bigPicUrl">
        <div class="title">{{item.kcname}}</div>
        <div class="price">
          <div class="total-price">¥{{item.disPrice}}</div>
          <div class="buy">购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getAllCourse} from "../../../network/courseCenter/CourseCenter";

  export default {
    data () {
      return {
        url: "http://www.360xkw.com/",
        title: ['最热','全科','单科'],
        goods: [],
        item: [],
        currentIndex: 0
      }
    },
    created() {
      this.getAllCourse(11,2785)
    },
    methods: {
      getAllCourse(courseId,dlId) {
        getAllCourse(courseId,dlId).then(res => {
          this.goods[0] = res.V[0]
          this.goods[1] = res.V[1]
          this.goods[2] = res.V[2]
          this.item = this.goods[0].items
          console.log(this.goods)
          console.log(this.item);
        })
      },
      change(){
        console.log(this.goods[0])
      },
      itemClick(index){
        this.currentIndex = index
        this.item = this.goods[this.currentIndex].items
      }
    },
  }
</script>
<style scoped>
  #course-center{
    font-size: 16px;
  }

  .top{
    height: 50px;
    background-color: #fff;
    border-radius: 6px;
    width: 1124px;
  }

  .top span{
    display: inline-block;
    font-size: 16px;
    text-align: center;
    margin: 0 40px;
    height: 40px;
    line-height: 50px;
    cursor: pointer;
  }

  .active {
    border-bottom: 3px solid #ff403a;
  }

  .classes img{
    width: 100%;
  }

  .classes{
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 6px;
  }

  .one-class{
    width: 220px;
    height: 220px;
    border-radius: 6px;
    box-shadow: 6px 6px 10px #dfdfdf, -6px -6px 10px #fcffff;
    margin: 15px 30px 15px 30px;
    cursor: pointer;
    transform: scale(1);
    justify-content: flex-start;
    text-align: center;
  }

  .one-class:hover{
    transform: scale(1.1);
    transition: 0.6s;
  }

  .title{
    color: #333;
    font-size: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 7px 0 0 0;
  }

  .price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
  }

  .total-price{
    font-family: DINBEKBold;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ff403a;
    margin: 10px;
  }

  .buy{
    cursor: pointer;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff403a;
    font-size: 16px;
    width: 64px;
    height: 26px;
    border-radius: 13px;
    border: solid 1px #ff403a;
  }
</style>