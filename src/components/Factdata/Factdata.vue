<template>
  <div class="factdata">
    <p class="shuju">
      <span>实时数据</span>
    </p>
    <p class="xuanze">
      <span class="demonstration">默认</span>
      <el-date-picker
        value-format="yyyy-MM-dd"
        v-model="value1"
        type="date"
        @blur="timer"
        placeholder="选择日期"
      ></el-date-picker>
      <!-- <span class="demonstration">开始时间</span>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      <span class="demonstration">截止时间</span>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>-->
      <!-- <el-time-picker
        style="margin-left:30px"
        is-range
        v-model="value2"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
        value-format="HH:mm"
        @blur="aay"
      ></el-time-picker>-->
      开始时间
      <!-- <el-time-picker v-model="value2" format value-format="HH:mm" placeholder="任意时间点"></el-time-picker> -->
      <el-time-picker v-model="value2" value-format="HH:mm" placeholder="任意时间点"></el-time-picker>结束时间
      <el-time-picker v-model="value3" format value-format="HH:mm" placeholder="任意时间点"></el-time-picker>
      <button style="background:#ffac1e" @click="over">重置</button>
      <button style="background:#2e82ff" @click="cha">查询</button>
      <button style="background:#eeeeee;color:#000" @click="shuaxin">刷新</button>
    </p>
    <p class="flex">
      <span>注册用户</span>
      <span>发布人数</span>
      <span>车辆出租发布</span>
      <span>车辆求租发布</span>
      <span>即时信息发布</span>
    </p>
    <p class="flex" style="background:#fff">
      <span>{{ this.tableData[0].date }}</span>
      <span>{{ this.tableData[0].rtmCount }}</span>
      <span>{{ this.tableData[0].name }}</span>
      <span>{{ this.tableData[0].address }}</span>
      <span>{{ this.tableData[0].ass }}</span>
    </p>
    <p style="margin-top:80px" class="shuju">
      <span>统计总数</span>
    </p>
    <p class="flex">
      <span>注册用户</span>
      <span>车辆出租发布</span>
      <span>车辆求租发布</span>
      <span>即时信息发布</span>
      
    </p>
    <p class="flex" style="background:#fff">
      <span>{{ this.tableData1[0].date }}</span>
      <span>{{ this.tableData1[0].name }}</span>
      <span>{{ this.tableData1[0].address }}</span>
      <span>{{ this.tableData1[0].ass }}</span>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "23432",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value1: "",
      value2: "",
      value3: "",
      tableData: [
        {
          date: "999",
          name: "999",
          address: "999",
          ass: "999",
          rtmCount:"999"
        }
      ],
      tableData1: [
        {
          date: "999",
          name: "999",
          address: "999",
          ass: "999"
        }
      ]
    };
  },
  mounted() {
    // if(localStorage.getItem('user')){
    //   this.$router.replace({name:'login'})
    // }
    if (localStorage.getItem("token") == "md5,,,") {
      this.http
        .post("/admin/api/selectMoreCondition.do", {
          time: this.value1,
          beginTime: this.value2,
          endTime: this.value3
        })
        .then(res => {
          if (res.code == 1) {
            this.tableData[0].rtmCount = res.result.rtmCount;
            this.tableData[0].date = res.result.userBetweenCount;
            this.tableData[0].name = res.result.carDataBetweenRentCount;
            this.tableData[0].address = res.result.carDataBetweenWantCount;
            this.tableData[0].ass = res.result.messageCount;

            this.tableData1[0].date = res.result.usersCountNow;
            this.tableData1[0].name = res.result.cardataByTypeRentCountNow;
            this.tableData1[0].address = res.result.cardataByTypeWantCountNow;
            this.tableData1[0].ass = res.result.messagedataCountNow;
          } else {
            this.$toasted.error(res.message).goAway(1000);
          }
        });
       
    } else {
      this.$router.replace({ name: "login" });
      this.$toasted.error("请您先登录!").goAway(1000);
    }
  },
  methods: {
    aay() {
      console.log(this.value2);
    },
    // 日期的选择
    timer() {
      console.log(this.value1);
    },
    // 重置
    over() {
     this.value1 = this.value2 = this.value3 = "";
    },
    // 查询 cha
    cha() {
      this.http
        .post("/admin/api/selectMoreCondition.do", {
          time: this.value1,
          beginTime: this.value2,
          endTime: this.value3
        })
        .then(res => {
          if (res.code == 1) {
             this.tableData[0].rtmCount = res.result.rtmCount;
            this.tableData[0].date = res.result.userBetweenCount;
            this.tableData[0].name = res.result.carDataBetweenRentCount;
            this.tableData[0].address = res.result.carDataBetweenWantCount;
            this.tableData[0].ass = res.result.messageCount;

            this.tableData1[0].date = res.result.usersCountNow;
            this.tableData1[0].name = res.result.cardataByTypeRentCountNow;
            this.tableData1[0].address = res.result.cardataByTypeWantCountNow;
            this.tableData1[0].ass = res.result.messagedataCountNow;
            // this.$forceUpdate();
            // this.$forceUpdate();
          } else {
            this.$toasted.error(res.message).goAway(1000);
          }
        });
    },
    // 刷新 shuaxin
    shuaxin() {
      this.value1 = this.value2 = this.value3 = "";
      this.http
        .post("/admin/api/selectMoreCondition.do", {
          time: this.value1,
          beginTime: this.value2,
          endTime: this.value3
        })
        .then(res => {
          if (res.code == 1) {
             this.tableData[0].rtmCount = res.result.rtmCount;
            this.tableData1[0].date = res.result.usersCountNow;
            this.tableData1[0].name = res.result.cardataByTypeRentCountNow;
            this.tableData1[0].address = res.result.cardataByTypeWantCountNow;
            this.tableData1[0].ass = res.result.messagedataCountNow;
            this.tableData[0].data = res.result.userBetweenCount;
            this.tableData[0].name = res.result.carDataBetweenRentCount;
            this.tableData[0].address = res.result.carDataBetweenWantCount;
            this.tableData[0].ass = res.result.messageCount;
            // this.$forceUpdate();
            // this.$forceUpdate();
          } else {
            this.$toasted.error(res.message).goAway(1000);
          }
        });
    }
  },
  watch: {}
};
</script>
<style scoped>
.factdata {
  height: 100%;
  width: 100%;
}
.factdata >>> .el-date-editor .el-range-separator {
  width: 8%;
}
.factdata > .shuju {
  height: 80px;
  line-height: 80px;
  background: #fff;
}
.xuanze {
  height: 60px;
  width: 100%;
  background: #fff;
  padding-top: 10px;
}
.xuanze > button {
  height: 40px;
  width: 94px;
  color: #fff;
  margin-left: 50px;
  border-radius: 10px;
}
.demonstration {
  padding: 0 10px;
  color: #797979;
}
.factdata > .shuju > span {
  border-left: 4px solid #2e82ff;
  padding-left: 8px;
  font-size: 20px;
}
.flex {
  display: flex;
  justify-content: space-around;
  height: 60px;
  background: #edf4fe;
  line-height: 60px;
  font-size: 16px;
}
</style>
