<template>
  <div class="personal">
    <div class="header">
      <div>
        <img :src="src" alt>
      </div>
      <p>{{ nickname }}</p>
    </div>
    <div class="dynamic">
      <div class="first">
        <img src="../../assets/img/icon2.png" alt>
        <div>动态收益
          <br>
          <span>{{ static }}</span>
        </div>
      </div>
      <div class="two">
        <img src="../../assets/img/icon1.png" alt>
        <div>静态收益
          <br>
          <span>{{ dynamic }}</span>
        </div>
      </div>
    </div>
    <div class="data">
      <div class="dw">
        <router-link tag="p" to="/data">个人资料</router-link>
        <img class="dw1" src="../../assets/img/gr.png" alt>
        <img class="dw2" src="../../assets/img/jinruyou.png" alt>
      </div>
      <div class="dw">
        <router-link tag="p" to="/team">我的团队</router-link>
        <img class="dw1" src="../../assets/img/td.png" alt>
        <img class="dw2" src="../../assets/img/jinruyou.png" alt>
      </div>
    </div>
    <div class="data1">
      <div class="dw">
        <router-link tag="p" to="/card">绑定银行卡</router-link>
        <img class="dw1" src="../../assets/img/bank.png" alt>
        <img class="dw2" src="../../assets/img/jinruyou.png" alt>
      </div>
      <div class="dw">
        <router-link tag="p" to="/advertising">广告合作商家</router-link>
        <img class="dw1" src="../../assets/img/gg.png" alt>
        <img class="dw2" src="../../assets/img/jinruyou.png" alt>
      </div>
      <div class="dw">
        <router-link tag="p" to="/record">提现记录</router-link>
        <img class="dw1" src="../../assets/img/tx.png" alt>
        <img class="dw2" src="../../assets/img/jinruyou.png" alt>
      </div>
    </div>
    <div class="data2">
      <div class="dw">
        <router-link tag="p" to="/service">客服中心</router-link>
        <img class="dw1" src="../../assets/img/kf.png" alt>
        <img class="dw2" src="../../assets/img/jinruyou.png" alt>
      </div>
      <div class="dw">
        <router-link tag="p" to="/problem">问题反馈</router-link>
        <img class="dw1" src="../../assets/img/wt.png" alt>
        <img class="dw2" src="../../assets/img/jinruyou.png" alt>
      </div>
      <div class="dw">
        <router-link tag="p" to="/Set">设置</router-link>
        <img class="dw1" src="../../assets/img/sz.png" alt>
        <img class="dw2" src="../../assets/img/jinruyou.png" alt>
      </div>
    </div>
    <button>安全退出</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "个人中心",
      nickname: "18342342343",
      dynamic: "0.00",
      static: "0.00",
      src:
        "http://biyouxi.baodekeji.com/uploads/head_img/20181211/5c0f572527f8f.jpeg"
    };
  },
  mounted() {
    this.$store.commit("headerTab", false);
    this.$store.commit("footerTab", true);
  }
};
</script>
<style scoped="">
.personal {
  min-height: 100%;
  background: #f5f5f5;
}
.header {
  height: 3.04rem;
  width: 100%;
  background: #1e853c;
  text-align: center;
  padding-top: 0.44rem;
}
.header > div {
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  background: red;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  border: 0.1rem solid #62aa77;
}
.header > div > img {
  position: absolute;
  left: 0;
  top: 0;
}
.header > p {
  color: #fff;
  margin-top: 0.18rem;
}
.dynamic {
  height: 2.2rem;
  background: #fff;
}
.dynamic > div {
  height: 1.64rem;
  width: 45.6%;
  border-radius: 0.15rem;
  float: left;
  margin-top: 0.28rem;
  /* background: pink; */
}
.first {
  background: url("../../assets/img/icon2b.png") no-repeat;
  background-size: cover;
  margin-left: 4%;
}
.two {
  background: url("../../assets/img/icon1b.png") no-repeat top;
  background-size: cover;
  margin-left: 4px;
}
.dynamic > div > img {
  display: block;
  border: 0;
  height: 1.24rem;
  width: 1.24rem;
  margin-left: 0.2rem;
  float: left;
  margin-top: 0.14rem;
}
.first > div {
  padding-top: 0.35rem;
  margin-left: 0.1rem;
  float: left;
  font-size: 0.36rem;
  color: #fff;
}
.two > div {
  padding-top: 0.35rem;
  margin-left: 0.1rem;
  float: left;
  font-size: 0.36rem;
  color: #fff;
}
.two > div > span {
  display: inline-block;
  margin-top: 0.24rem;
}
.first > div > span {
  display: inline-block;
  margin-top: 0.24rem;
}
.data {
  margin-top: 0.2rem;
  background: #fff;
}
.data > div {
  height: 0.82rem;
  font-size: 0.3rem;
  line-height: 0.82rem;
  padding-left: 0.9rem;
  border-bottom: 2px solid #f5f5f5;
}
.data > p {
  height: 0.82rem;
  font-size: 0.3rem;
  line-height: 0.82rem;
  padding-left: 0.9rem;
  border-bottom: 2px solid #f5f5f5;
}

.data1 {
  margin-top: 0.2rem;
  background: #fff;
}
.data1 > div {
  height: 0.82rem;
  font-size: 0.3rem;
  line-height: 0.82rem;
  padding-left: 0.9rem;
  border-bottom: 2px solid #f5f5f5;
}
.data1 > p {
  height: 0.82rem;
  font-size: 0.3rem;
  line-height: 0.82rem;
  padding-left: 0.9rem;
  border-bottom: 2px solid #f5f5f5;
}
.data2 {
  margin-top: 0.2rem;
  background: #fff;
}
.data2 > div {
  height: 0.82rem;
  font-size: 0.3rem;
  line-height: 0.82rem;
  padding-left: 0.9rem;
  border-bottom: 2px solid #f5f5f5;
}
.data2 > p {
  height: 0.82rem;
  font-size: 0.3rem;
  line-height: 0.82rem;
  padding-left: 0.9rem;
  border-bottom: 2px solid #f5f5f5;
}
button {
  margin-top: 0.4rem;
  margin-bottom: 1.4rem;
  height: 0.8rem;
  width: 92%;
  margin-left: 4%;
  background: #1e853c;
  font-size: 0.3rem;
  color: #fff;
  border-radius: 6px;
}
.dw {
  position: relative;
}
.dw1 {
  position: absolute;
  left: 0.34rem;
  top: 0.28rem;
  height: 0.28rem;
}
.dw2 {
  height: 0.38rem;
  position: absolute;
  right: 0.08rem;
  top: 0.14rem;
}
</style>
