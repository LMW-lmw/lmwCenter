<template>
  <div>
    <div id="all-top-bar">
      <div class="top-left">
        <slot name="top-bar-left"></slot>
      </div>
      <div class="top-right">
        <slot name="top-bar-right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "topBar"
  }
</script>

<style scoped>
  #all-top-bar {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 1400px;
    height: 50px;
    margin: 0 auto;
    line-height: 50px;
    background: #fff;
  }
  .top-left{
    height: 50px;
  }
  .top-right{
    height: 50px;
  }
  /*.top-left{*/
  /*  display: flex;*/
  /*  justify-content: center;*/
  /*  align-content: center;*/
  /*}*/
  /*.top-right{*/
  /*  display: flex;*/
  /*  justify-content: center;*/
  /*  align-content: center;*/
  /*}*/
</style>