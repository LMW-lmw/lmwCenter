<template>
  <div id="side-bar-item">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="item">
      <slot name="all-side-bars"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SideBarItem"
  }
</script>

<style scoped>
  .title{
    font-size: 14px;
    color: #666666;
    height: 40px;
    line-height: 40px;
    margin-left: 60px;
  }
  /*.item{*/
  /*  display: flex;*/
  /*  align-content: center;*/
  /*  justify-content: center;*/
  /*}*/
  /*.item-img img{*/
  /*  width: 30px;*/
  /*  height: 30px;*/
  /*  margin-right: 14px;*/
  /*}*/
</style>