<template>
  <div class="div">
    <mt-swipe :auto="4000" style="width:100%;height:3.78rem">
      <mt-swipe-item style="background:red">1</mt-swipe-item>
      <mt-swipe-item style="background:pink">2</mt-swipe-item>
      <mt-swipe-item style="background:#1e853c">3</mt-swipe-item>
    </mt-swipe>
    <div class="nr">
      <span class="xie">鑫峰头条</span>
      <div class="nr1">
        <p>234234</p>
        <p>23423432</p>
      </div>
    </div>
    <div class="event">
      <router-link tag="span" to="/propaganda">
        <img src="../../assets/img/01.png" alt>
        <span>如何宣传</span>
      </router-link>
      <router-link tag="span" to="/propaganda">
        <img src="../../assets/img/2.png" alt>
        <span>鑫峰会员</span>
      </router-link>
      <router-link tag="span" to="/propaganda">
        <img src="../../assets/img/3.png" alt>
        <span>推广二维码</span>
      </router-link>
      <router-link tag="span" to="/propaganda">
        <img src="../../assets/img/6.png" alt>
        <span>关于我们</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "首页"
    };
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("footerTab", true);
    this.$store.commit("header", "鑫峰视觉");
  }
};
</script>
<style scope="">
.div {
  min-height: 100%;
  background: #f5f5f5;
  padding-top: 0.88rem;
}
.nr {
  width: 100%;
  height: 1.2rem;
  background: #fff;
  padding: 0.2rem 0;
  padding-left: 0.3rem;
}
.xie {
  font-size: 0.36rem;
  color: #1e853c;
  font-style: italic;
  font-weight: 700;
  display: inline-block;
  width: 11%;
  line-height: 0.4rem;
  /* margin-right: 0.34rem; */
}
.nr1 {
  /* display: inline-block; */
  height: 100%;
  float: right;
  width: 84%;
  padding-left: 0.3rem;
  margin-left: 0.34rem;
  border-left: 2px solid #1e853c;
}
.nr1 > p {
  line-height: 0.36rem;
  font-size: 0.24rem;
}
.event {
  margin-top: 0.2rem;
  width: 100%;
  height: 3.22rem;
  background: #fff;
}
.event > span {
  display: inline-block;
  width: 50%;
  height: 50%;
  border-right: 2px solid #f5f5f5;
  border-bottom: 2px solid #f5f5f5;
  padding-top: 0.32rem;
  padding-left: 0.6rem;
}
.event > span > img {
  height: 1rem;
  width: 1rem;
}
.event > span > span {
  margin-left: 0.22rem;
  font-size: 0.26rem;
}
</style>
