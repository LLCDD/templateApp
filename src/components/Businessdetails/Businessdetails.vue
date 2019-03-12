<template>
  <div class="div">
    <p class="p">
      <span>店铺实拍</span>
    </p>
    <div class="div1">
      <img src="../../assets/images/qrcode.png" alt>
    </div>
    <p class="p1">
      <span>店铺详情</span>
    </p>
    <div class="emial">
      <p>店铺名称: 竞彩1号店</p>
      <p>详情地址：阿斯顿发生撒富士达</p>
    </div>
    <p class="p1">
      <span>联系方式</span>
    </p>
    <div class="emial">
      <p>联系电话1：11111111</p>
      <p style="font-size:0.3rem">联系电话2：22222222</p>
    </div>
    <p class="p1">
      <span>店铺二维码</span>
    </p>
    <div class="footer">
      <p>
        <img src="../../assets/images/qrcode.png" alt>
        <br>
        <span>微信二维码</span>
      </p>
      <p>
        <img src="../../assets/images/qrcode.png" alt>
        <br>
        <span>支付宝二维码</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "4"
    };
  }
};
</script>
<style scoped>
.div {
  padding-top: 0.88rem;
  min-height: 100%;
  background: #f2f2f2;
}
.div > .p {
  padding: 0 0.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
}
.div > .p > span {
  padding-left: 0.2rem;
  border-left: 2px solid #e60013;
  color: #e60013;
  font-size: 0.3rem;
}
.div1 {
  height: 4.6rem;
  width: 100%;
  padding: 0.3rem;
  background: #fff;
}
.div1 > img {
  height: 100%;
  width: 100%;
}
.p1 {
  margin-top: 0.2rem;
}
.p1 {
  padding: 0 0.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
}
.p1 > span {
  padding-left: 0.2rem;
  border-left: 2px solid #e60013;
  color: #e60013;
  font-size: 0.3rem;
}
.emial {
  padding: 0.3rem;
  line-height: 0.4rem;
  background: #fff;
}
.emial > :first-child {
  font-size: 0.3rem;
}
.emial > :last-child {
  font-size: 0.24rem;
}
.footer {
  padding: 0.3rem;
  height: 3.2rem;
}
.footer > p {
  width: 50%;
  float: left;
  height: 100%;
  text-align: center;
}
.footer > p > img {
  height: 2.1rem;
  width: 2.1rem;
  margin-bottom: 0.1rem;
}
</style>
