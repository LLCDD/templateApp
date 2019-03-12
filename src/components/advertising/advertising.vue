<template>
  <div class="div">
    <van-cell-group>
      <van-field v-model="pass" label="新密码" type="password" placeholder="请输入新密码" autosize/>
      <van-field v-model="pass1" label="重复新密码" type="password" placeholder="请重复输入新密码" autosize/>
      <van-field v-model="phone" label="手机号" type="input" placeholder="请输入手机号" autosize/>
      <van-field v-model="code" center clearable label="验证码" placeholder="请输入验证码">
        <van-button
          style="background:none;color:#e60013"
          slot="button"
          size="small"
          type
          @click="tap"
        >{{ timery }}</van-button>
      </van-field>
    </van-cell-group>
    <button class="button" @click="qingqu">确定修改</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pass: "",
      pass1: "",
      phone: "",
      code: "",
      timery: "发送验证码"
    };
  },
  methods: {
    tap() {
      if (this.timery == "发送验证码") {
        var timer = null;
        var count = 60;
        timer = setInterval(() => {
          this.timery = --count + "s";
          if (count <= 0) {
            this.timery = "发送验证码";
          }
        }, 1000);
      } else {
        this.$toasted.error("验证码发送").goAway(1000);
      }
    },
    qingqu() {
      console.log("请求");
    }
  }
};
</script>
<style scoped>
.div {
  padding-top: 0.88rem;
  height: 100%;
  background: #f2f2f2;
}
.button {
  height: 0.8rem;
  width: 90%;
  background: #e60013;
  margin-left: 5%;
  color: #fff;
  border-radius: 0.5rem;
  margin-top: 0.4rem;
}
</style>
