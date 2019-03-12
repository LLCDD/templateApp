<template>
  <div class="div">
    <div class="header">
      <div class="left"></div>
      <div class="center">
        <p style="font-size:0.35rem">竞彩1号店</p>
        <p>联系电话 : 1212121212</p>
        <div class="right" @click="add">查询详情</div>
      </div>
    </div>
    <p class="tab">
      <span @click="tap">
        <img src="../../assets/images/qrcode.png" alt> 二维码
      </span>
      <span>
        <img src="../../assets/img/mobilephone.png" alt>
        APP下载
      </span>
      <span>
        <img src="../../assets/images/share.png" alt> 分享
      </span>
    </p>
    <p class="tab1">
      <span>
        <img src="../../assets/images/01.png" alt>
        <p>
          店内合买
          <span>+10</span>
        </p>
      </span>
      <span>
        <img src="../../assets/images/02.png" alt>
        <p>
          店内跟单
          <span>+2</span>
        </p>
      </span>
      <span @click="announcement">
        <img src="../../assets/images/03.png" alt>
        <p>
          店铺活动
          <span>+3</span>
        </p>
      </span>
    </p>
    <div class="footer">
      <p class="p">
        <span>项目名称</span>
        <span>比分直播 >></span>
      </p>
      <div class="di">
        <div>
          <img src="../../assets/images/ball.png" alt>
          <span>
            <span>竞彩足球</span>
            <span>暂无比赛</span>
          </span>
        </div>
        <div>
          <img src="../../assets/images/11.png" alt>
          <span>
            <span>竞彩篮球</span>
            <span>暂无比赛</span>
          </span>
        </div>
        <div>
          <img src="../../assets/images/14.png" alt>
          <span>
            <span>足球14场</span>
            <span>暂无比赛</span>
          </span>
        </div>
        <div>
          <img src="../../assets/images/9.png" alt>
          <span>
            <span>任选9场</span>
            <span>暂无比赛</span>
          </span>
        </div>
      </div>
    </div>
    <van-popup class="pupo" v-model="show">
      <p>店铺二维码</p>
      <img src="../../assets/images/ball.png" alt>
      <br>
      <button @click="tap1">确定</button>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "首页",
      show: false
    };
  },
  mounted() {},
  methods: {
    // 二维码的弹窗
    tap() {
      this.show = true;
    },
    // 暂时 是关闭二微码的弹窗
    tap1() {
      this.show = false;
    },
    // 店铺活动
    announcement() {
      this.$router.push("/announcement");
    },
    // 商家详情  Business details
    add() {
      this.$router.push("/Businessdetails");
    }
  }
};
</script>
<style scoped>
.div {
  min-height: 100%;
  background: #f2f2f2;
  padding-top: 0.88rem;
}
.header {
  height: 1.8rem;
  padding: 0.3rem;
  width: 100%;
  background: #ffffff;
  position: relative;
  border-bottom: 1px solid #f2f2f2;
}
.header > .left {
  height: 1.2rem;
  width: 1.2rem;
  background: #ccc;
  border-radius: 50%;
  border: 1px solid red;
  float: left;
}
.header > .center {
  text-align: left;
  float: left;
  margin-left: 0.2rem;
  line-height: 0.5rem;
  font-size: 0.3rem;
}
.header > .center > .right {
  height: 0.5rem;
  width: 1.5rem;
  background: url("../../assets/img/shouyeb.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
  color: #fff;
  position: absolute;
  right: 0;
  bottom: 40%;
  font-size: 0.22rem;
}
.tab {
  height: 0.8rem;
  width: 100%;
}
.tab > span {
  display: inline-block;
  width: 33.3%;
  line-height: 0.8rem;
  text-align: center;
  border-right: 1px solid #f2f2f2;
  background: #fff;
  color: #e60417;
  font-size: 0.26rem;
}
.tab > span > img {
  height: 0.36rem;
  width: 0.36rem;
  margin-top: -0.05rem;
  margin-right: 0.06rem;
}
.tab1 {
  margin-top: 0.2rem;
  height: 2.5rem;
  width: 100%;
}
.tab1 > span {
  display: inline-block;
  width: 33.3%;
  height: 100%;
  background: #fff;
  text-align: center;
  line-height: 0.9rem;
}
.tab1 > span > img {
  height: 1rem;
  width: 1.1rem;
  margin-top: 0.5rem;
}
.tab1 > span > p {
  font-size: 0.26rem;
  position: relative;
}
.tab1 > span > p > span {
  height: 0.5rem;
  line-height: 0.5rem;
  width: 0.5rem;
  display: block;
  border-radius: 50%;
  background: red;
  color: #fff;
  position: absolute;
  right: 0.1rem;
  top: 0;
}
.footer {
  margin-top: 0.22rem;
}
.footer > .p {
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fff;
  padding: 0 0.3rem;
  border-bottom: 1px solid #f2f2f2;
}

.footer > .p > :first-child {
  font-size: 0.36rem;
  border-left: 2px solid #e60013;
  padding-left: 0.2rem;
  color: #e60013;
}
.footer > .p > :last-child {
  float: right;
  color: #999;
}
.footer > .di {
  float: left;
  margin-bottom: 1.5rem;
}
.footer > .di > div {
  float: left;
  width: 50%;
  height: 1.8rem;
  background: #fff;
  line-height: 1.8rem;
  border-bottom: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
}
.footer > .di > div > img {
  height: 1.2rem;
  margin-left: 0.3rem;
  margin-right: 0.2rem;
  float: left;
  margin-top: 8%;
}
.footer > .di > div > span {
  float: left;
}
.footer > .di > div > span > :first-child {
  font-size: 0.3rem;
  font-weight: 550;
  display: inherit;
  margin-top: -0.4rem;
  height: 0.5rem;
}
.footer > .di > div > span > :last-child {
  color: #999;
}
.pupo {
  height: 5rem;
  width: 4.5rem;
  background: #ffffff;
  border-radius: 0.1rem;
  text-align: center;
}
.pupo > p {
  font-size: 0.3rem;
  padding: 0.3rem 0;
  color: #e60013;
}
.pupo > img {
  height: 3rem;
  width: 3rem;
  background: red;
  border-radius: 0.1rem;
}
.pupo > button {
  margin-top: 0.2rem;
  height: 0.6rem;
  width: 1.3rem;
  border-radius: 0.4rem;
  color: #fff;
  background: #e60013;
}
</style>
