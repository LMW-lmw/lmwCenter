<template>
  <div>111</div>
</template>

<script>
  import {hello} from "../network/test";

  export default {
    name: "Test",
    data() {
      return {
        hello: []
      }
    },
    created() {
      hello().then(res => {
        this.hello = res
        console.log(res)
      })
    },
  }
</script>

<style scoped>

</style>