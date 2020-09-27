<template>
  <div id="all-side-bar" @click="itemClick">
    <div class="items" :class="{activeStyle:isActive}">
      <div class="item-img" v-if="!isActive">
        <slot name="item-img"></slot>
      </div>
      <div class="item-img-active" v-else>
        <slot name="item-img-active"></slot>
      </div>
      <div class="item-text">
        <slot name="item-text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AllSideBars",
    props: {
      path: String
    },
    data(){
      return{
        // isActive: true,
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      // activeStyle(){
      //   return this.isActive ? {color: this.activeColor} : {}
      // }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path).catch(()=>{})
      }
    }
  }
</script>

<style scoped>
  #all-side-bar{
    height: 50px;
    line-height: 50px;
    cursor: pointer;
  }
  #all-side-bar .items{
    display: flex;
    padding-left: 65px;
  }
  .activeStyle{
    background: url(../../../assets/img/backgroundImg/redbg.png) no-repeat left;
    background-size: 4px 40px;
    background-color: #fff5f5;
    box-sizing: border-box;
  }
  .items{
    font-size: 16px;
  }

  .item-img{
    margin-right: 10px;
  }

  .item-img-active{
    margin-right: 10px;
  }

  .item-img img{
    width: 30px;
    height: 30px;
  }

  .item-img-active img{
    width: 30px;
    height: 30px;
  }
</style>