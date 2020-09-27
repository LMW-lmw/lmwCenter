<template>
  <div id="side-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "SideBar"
  }
</script>

<style scoped>
  #side-bar{
    display: flex;
    flex-direction: column;
    width: 256px;
    background-color: white;
    border-radius: 6px;
    padding-bottom: 30px;
    padding-top: 6px;
  }
</style>