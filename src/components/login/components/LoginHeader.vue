<template>
  <div class="allcontent">
    <!-- <img src="../../../assets/img/logo.png" alt> -->
    <i class="el-icon-s-promotion img"></i>
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
.allcontent {
  text-align: center
}
.allcontent .img {
  display: block;
  font-size: 200px;
  color: #2e82ff;
  margin: 0 auto;
  margin-bottom: 1.28rem;
}
</style>


