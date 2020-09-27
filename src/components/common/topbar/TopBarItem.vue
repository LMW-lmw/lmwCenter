<template>
  <div id="top-bar-item">
    <slot name="image"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
  export default {
    name: "TopBarItem"
  }
</script>

<style scoped>
  #top-bar-item{
    margin-right: 40px;
    font-size: 15px;
  }
</style>