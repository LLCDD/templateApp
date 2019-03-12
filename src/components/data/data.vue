<template>
  <div class="div">
    <div v-for="(item,index) in list" :key="index">
      <img class="img" src="../../assets/images/share.png" alt>
      <div>
        <p style="font-size:0.3rem">张三</p>
        <p style="color:#999;font-size:0.22rem">粉丝数：120</p>
      </div>
      <img class="img1" src="../../assets/images/enter.png" alt>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "345",
      list: [1, 2, 3]
    };
  }
};
</script>
<style scoped>
.div {
  padding-top: 0.88rem;
  height: 100%;
  background: #f2f2f2;
}
.div > div {
  height: 1.6rem;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
  padding: 0.3rem;
  position: relative;
}
.div > div > .img {
  height: 100%;
  border-radius: 50%;
  float: left;
  background: pink;
}
.div > div > div {
  float: left;
  line-height: 0.5rem;
  margin-left: 0.3rem;
}
.img1 {
  position: absolute;
  right: 0.3rem;
  height: 0.34rem;
  width: 0.2rem;
  top: 44%;
}
</style>
