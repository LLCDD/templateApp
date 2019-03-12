<template>
  <div class="div">
    <p class="p">
      <span>输入金额</span>
    </p>
    <van-cell-group>
      <van-field v-model="moey" label="金额" type="input" placeholder="请输入金额" autosize/>
    </van-cell-group>
    <p class="p" style="margin-top:0.2rem">
      <span>选择方式</span>
    </p>
    <van-radio-group v-model="radio">
      <van-radio class="check" checked-color="#e60013" name="1">微信</van-radio>
      <van-radio class="check" checked-color="#e60013" name="2">支付宝</van-radio>
    </van-radio-group>
    <button @click="chongzhi">确认充值</button>
    <van-popup class="pupo" v-model="show">
      <p>温馨提示</p>
      <p style="color:#999">提交后请务必联系商家！</p>
      <br>
      <button @click="tap1">确定</button>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "余额充值",
      radio: "1",
      //   提现的金额
      moey: "",
      show: false
    };
  },
  methods: {
    //   充值
    chongzhi() {
      console.log("充值");
      this.show = true;
    },
    // 提示框消失
    tap1() {
      this.show = false;
    }
  }
};
</script>
<style scoped>
.div {
  padding-top: 0.88rem;
  background: #f2f2f2;
  height: 100%;
}
.p {
  padding: 0 0.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
}
.p > span {
  padding-left: 0.2rem;
  border-left: 2px solid #e60013;
  color: #e60013;
  font-size: 0.3rem;
}
.check {
  height: 0.8rem;
  padding: 0 0.32rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #f2f2f2;
  background: #fff;
}
button {
  height: 0.8rem;
  width: 90%;
  margin-left: 5%;
  color: #fff;
  background: #e60013;
  border-radius: 0.5rem;
  margin-top: 0.4rem;
}
.pupo {
  height: 3rem;
  width: 5rem;
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
  margin-top: 0.1rem;
  height: 0.6rem;
  width: 1.3rem;
  border-radius: 0.4rem;
  color: #fff;
  background: #e60013;
}
</style>
