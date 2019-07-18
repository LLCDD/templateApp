<template>
  <div class="centere">
    <p>用户量</p>
    <div class="auto">
      <p>
        <span>{{ rult.usercount }}</span>
        <span>用户总量</span>
      </p>
      <p>
        <span>{{ rult.usersCountYesterday }}</span>
        <span>昨日注册量</span>
      </p>
      <p>
        <span>{{ (res.DPC * 100).toFixed(2) }}%</span>
        <span>转化率(天)</span>
      </p>
      <p>
        <span>{{ (res.LWP *100).toFixed(2) }}%</span>
        <span>转化率(周)</span>
      </p>
      <!-- 19.7.11 注释 原因 上线时间没有那么久 -->
      
         <p>
        <span>{{ (res.LWCF *100).toFixed(2) }}%</span>
        <span>周期环比(周)</span>
      </p>
      <p>
        <span>{{ (res.LMCF *100).toFixed(2) }}%</span>
        <span>周期环比(月)</span>
      </p> 
    </div>
    <p style="margin-top:20px;">信息发布量</p>
    <div class="auto1">
      <div>
        <p>{{ rult.sumCount }}</p>
        <p>信息发布总量</p>
      </div>
      <div class="two">
        <div>
          <p class="p1">
            <span style="color:#3a9945">{{ rult.cardataTypeWantCount }}</span>
            <span>求租信息发布总量</span>
          </p>
          <p class="p2">
            <span style="color:#db7217">{{ rult.cardataTypeRentCount }}</span>
            <span>出租信息发布总量</span>
          </p>
        </div>
        <div>
          <p class="p3">
            <span style="color:#3a469a">{{ rult.cardataCount }}</span>
            <span>车辆信息发布总量</span>
          </p>
          <p class="p4">
            <span style="color:#9d20a8">{{ rult.messageCount }}</span>
            <span>即时信息发布总量</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "2545",
      rult: {},
      res:{}
    };
  },
  mounted() {
    if (localStorage.getItem("token") == "md5,,,") {
      this.http.post("/admin/api/homeCount.do").then(res => {
        console.log(res);
        if (res.code == 1) {
          this.rult = res.result;
        } else {
          this.$toasted.error(res.message, { icon: "error" }).goAway(2000);
        }
      });
       this.http.post('/admin/api/statistics/getStatisticsData.do').then(res =>{
          console.log(res)
          this.res = res
        })
    } else {
      this.$router.replace({ name: "login" });
      this.$toasted.error("请您先登录!").goAway(1000);
    }
  }
};
</script>
<style scoped>
.centere {
  background: #f0f3fa;
  height: 100%;
}
.centere > p {
  font-size: 20px;
  width: 100%;
  border-left: 3px solid #2e82fe;
  padding-left: 5px;
}
.auto {
  width: 900px;
  height: 240px;
  /* background: red; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.auto > p {
  width: 48%;
  height: 100%;
  background: pink;
  border-radius: 20px;
  text-align: center;
  margin: 0 10px
}
/* .auto > :first-child {
  background: url("../../assets/images/back1.png") no-repeat;
  background-size: 100% 100%;
} */
.auto > p {
  background: url("../../assets/images/bcak2.png") no-repeat;
  background-size: 100% 100%;
}
.auto > p > span {
  display: block;
  font-size: 26px;
  /* line-height: 100px; */
}
.auto > p > :first-child {
  margin-top: 50px;
  font-weight: 600;
}
.auto > p > :last-child {
  margin-top: 50px;
  font-size: 20px;
  font-weight: 550;
}
.auto1 {
  height: 440px;
  width: 1430px;

  margin-top: 20px;
}
.auto1 > :first-child {
  margin-left: 10px;
  height: 440px;
  width: 440px;
  border-radius: 10px;
  background: url("../../assets/images/b1.png") no-repeat;
  background-size: 100% 100%;
  float: left;
  text-align: center;
}
.auto1 > :first-child > :first-child {
  margin-top: 184px;
  font-size: 26px;
  color: #e10f0e;
  font-weight: 600;
}
.auto1 > :first-child > :last-child {
  margin-top: 30px;
  font-size: 16px;
}
.two {
  float: right;
  width: 930px;
  margin-left: 30px;
}
.two > div {
  width: 100%;
  margin-bottom: 30px;
  height: 200px;
  display: flex;
  justify-content: space-between;
}
.two > div > p {
  width: 440px;
  background: pink;
  border-radius: 10px;
  text-align: center;
}
.two > div > p > span {
  display: block;
}
.two > div > p > :first-child {
  margin-top: 88px;
  font-size: 26px;
  font-weight: 600;
}
.two > div > p > :last-child {
  margin-top: 30px;
  font-size: 16px;
}
.two > div > .p1 {
  background: url("../../assets/images/p1.png") no-repeat;
  background-size: 100% 100%;
}
.two > div > .p2 {
  background: url("../../assets/images/p2.png") no-repeat;
  background-size: 100% 100%;
}
.two > div > .p3 {
  background: url("../../assets/images/p3.png") no-repeat;
  background-size: 100% 100%;
}
.two > div > .p4 {
  background: url("../../assets/images/p4.png") no-repeat;
  background-size: 100% 100%;
}
</style>
