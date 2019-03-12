<template>
  <div class="personal">
    <div class="header">
      <div>
        <img :src="src" alt>
      </div>
      <p>用户信息</p>
      <p>{{ nickname }}</p>
      <div class="inline">
        <p>粉丝数： 120</p>|
        <p>已关注：13</p>
      </div>
    </div>
    <div class="dynamic"></div>
    <div class="data">
      <div class="dw">
        <router-link tag="p" to="/data">关注</router-link>
        <img class="dw1" src="../../assets/images/select.png" alt>
        <img class="dw2" src="../../assets/images/enter.png" alt>
      </div>
      <div class="dw">
        <router-link tag="p" to="/team">最新消息</router-link>
        <img class="dw1" src="../../assets/images/systemprompt.png" alt>
        <img class="dw2" src="../../assets/images/enter.png" alt>
        <div class="nie">+19</div>
      </div>

      <div class="dw">
        <router-link tag="p" to="/card">详细资料</router-link>
        <img class="dw1" src="../../assets/images/addressbook.png" alt>
        <img class="dw2" src="../../assets/images/enter.png" alt>
      </div>
      <div class="dw">
        <router-link tag="p" to="/advertising">修改密码</router-link>
        <img class="dw1" src="../../assets/images/setup.png" alt>
        <img class="dw2" src="../../assets/images/enter.png" alt>
      </div>
      <div class="dw">
        <router-link tag="p" to="/record">意见反馈</router-link>
        <img class="dw1" src="../../assets/images/editor.png" alt>
        <img class="dw2" src="../../assets/images/enter.png" alt>
      </div>
    </div>
    <button>
      <img src="../../assets/images/prompt.png" alt>
      安全退出
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "个人中心",
      nickname: "18342342343",
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
<style scoped>
.personal {
  min-height: 100%;
  background: #f5f5f5;
}
.header {
  height: 4rem;
  width: 100%;
  background: url("../../assets/images/b1.png") no-repeat;
  background-size: 100%;
  text-align: center;
  padding-top: 0.44rem;
}
.header > :first-child {
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  background: red;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  border: 0.1rem solid #fac399;
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
.inline {
  display: flex;
  width: 50%;
  justify-content: space-around;
  margin: 0 auto;
  color: #ffffff;
  margin-top: 0.2rem;
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
  line-height: 0.8rem;
  width: 92%;
  margin-left: 4%;
  background: #e60013;
  font-size: 0.3rem;
  color: #fff;
  border-radius: 0.5rem;
}
button > img {
  height: 0.4rem;
  width: 0.4rem;
  margin-top: -0.1rem;
}
.dw {
  position: relative;
}
.dw1 {
  position: absolute;
  left: 0.34rem;
  top: 0.2rem;
  height: 0.4rem;
}
.dw2 {
  height: 0.38rem;
  position: absolute;
  right: 0.3rem;
  top: 0.24rem;
}
.nie {
  background: red;
  position: absolute;
  height: 0.5rem;
  width: 0.5rem;
  line-height: 0.5rem;
  border-radius: 50%;
  right: 0.8rem;
  text-align: center;
  top: 26%;
  color: #fff;
}
</style>
