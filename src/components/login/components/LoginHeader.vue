<template>
  <div class="allcontent">
    <img src="../../../assets/img/logo.png" alt>
  </div>
</template>

<script>
export default {
  mounted() {
    _.first = function() {
      console.log("hello world");
    };
  }
};
</script>

<style scoped>
.allcontent img {
  display: block;
  width: 2.2rem;
  height: 2.2rem;
  margin: 0 auto;
  margin-bottom: 1.28rem;
}
</style>


