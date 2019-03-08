<template>
  <div class="div">{{ msg }}</div>
</template>
<script>
export default {
  data() {
    return {
      msg: "首页",
      list: [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    };
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("footerTab", true);
    this.$store.commit("header", "开仓放梁");
  },
  methods: {}
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
  /* height: 3.22rem; */
  height: 100%;
  background: #fff;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
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
.bscroll {
  overflow: hidden;
  height: 100%;
  width: 100%;
  z-index: -1;
}
</style>
