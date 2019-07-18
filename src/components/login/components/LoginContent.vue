<template>
  <div class="content">
    <!-- <input type="text" placeholder="请输入账号" v-model="phone">
    <input type="password" placeholder="请输入密码" v-model="password">-->
    <div class="landing">
       <i class="el-icon-user img"></i>
      <!-- <img class="img" src="../../../assets/img/mobilephone.png" alt> -->
      <input type="text" placeholder="请输入账号" v-model="phone">
    </div>
    <div class="landing">
      <!-- <img class="img" src="../../../assets/img/lock.png" alt> -->
       <i class="el-icon-unlock img"></i>
      <input type="password" placeholder="请输入密码" v-model="password">
    </div>
    <div class="login" @click="login">登录</div>
    <!-- <div class="problem">
      <router-link tag="span" to="/register">注册新用户</router-link>
      <router-link tag="span" to="/forget">忘记密码？</router-link>
    </div> -->
  </div>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  methods: {
    async login() {
      // this.$router.replace({name:'index'})
      if (!this.phone || !this.password) {
        this.$toasted.error("请输入完善信息", { icon: "error" }).goAway(2000);
        return;
      }
      try {
        // await等待一个异步返回的结果 如果没有await 会报user is undefined 获取不到
        let res = await this.http.post("/admin/api/Login.do", {
          users_id: this.phone,
          users_password: this.password
        });
        // console.log(res)
        if (res.code == 1) {
          // console.log(res);
          localStorage.setItem("user", res.result.list.username);
          localStorage.setItem("token","md5,,,");
          this.$toasted.success("登录成功").goAway(1500);
          this.$router.replace({ name: "index" });
        } else {
          this.$toasted.error(res.message, { icon: "error" }).goAway(2000);
        }
      } catch (error) {
        this.$toasted.error(error.message, { icon: "error" }).goAway(2000);
      }
    }
  }
};
</script>

<style scoped>
.content {
  width: 30%;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  margin: 0 auto;
}
.landing {
  width: 100%;
  height: 0.9rem;
  border-bottom: 2px solid #2e82ff;
  padding: 0 0.8rem;
  position: relative;
}
.landing > input {
  height: 0.9rem;
  padding: 0.3rem 0;
  background: none;
}
.landing > span {
  line-height: 0.9rem;
  color: #1e853c;
  font-weight: 500;
  display: inline-block;
  width: 1.36rem;
  font-size: 0.28rem;
}
.login {
  width: 100%;
  height: 0.8rem;
  border-radius: 0.4rem;
  background: #2e82ff;
  margin-top: 1.23rem;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.3rem;
  color: #ffffff;
  margin-bottom: 0.2rem;
}
.problem {
  width: 100%;
  height: 0.44rem;
  display: flex;
  justify-content: space-between;
}
.problem span {
  width: 1.2rem;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  font-size: 0.24rem;
  color: #e60013;
}
.img {
  position: absolute;
  height: 0.3rem;
  width: 0.3rem;
  left: 0.2rem;
  bottom: 0.25rem;
  color: #2e82ff
}
</style>