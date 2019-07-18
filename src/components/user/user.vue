<template>
  <div class="carfabu">
    <div class="shou">
      <p>
        <span>手机号</span>
        <el-input style="width:200px" v-model="input1" placeholder="请输入用户手机号"></el-input>
      </p>
      <p>
        <span>账号状态</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </p>
      <div class="rihgt">
        <p style="background:#ffac1e" @click="chongzhi">重置</p>
        <p style="background:#2e82ff" @click="cha">查询</p>
      </div>
    </div>
    <!-- 底部模块的加载  list-->
    <div class="di">
      <p>
        <span style="width:5%">序号</span>
        <span style="width:20%">用户昵称</span>
        <span style="width:20%">注册时间</span>
        <span>用户评分</span>
        <span>绑定手机号</span>
        <span>车辆发布次数</span>
        <span style="width:18%">即时信息发布次数</span>
        <span>举报次数</span>
        <span>被举报次数</span>
        <span>违规次数</span>
        <span>账号状态</span>
        <span>操作人员</span>
        <span style="width:20%">操作时间</span>
      </p>
      <p v-for="(item,index) in list" :key="index">
        <span style="width:5%">{{ item.id }}</span>
        <span style="width:20%">{{ item.nickName }}</span>
        <span style="width:20%">{{ item.registdate.substr(0,19) }}</span>
        <span>{{ item.average }}</span>
        <span>{{ item.phone }}</span>
        <span>{{ item.cardatCount }}</span>
        <span style="width:18%">{{ item.messageCount }}</span>
        <span>{{ item.reportCount }}</span>
        <span>{{ item.informCount }}</span>
        <span>{{ item.violatorCount }}</span>
        <span
          @click="jinyong(item.uuid)"
          v-if="item.state == '启用中'"
          style="background:rgb(46, 130, 255);color:#fff; border-radius:10px;cursor:pointer"
        >{{ item.state }}</span>
        <span
          @click="qiyong(item.uuid)"
          v-else
          style="background:rgb(255, 172, 30);color:#fff; border-radius:10px;cursor:pointer"
        >{{ item.state }}</span>
        <!-- 按钮点击启用 改状态为禁用  点击禁用 改状态为 启用 -->
        <span>{{ item.operation_user }}</span>
        <span style="width:20%">{{ String(item.updatetime).substr(0,19) == 'undefined' ? "" :  String(item.updatetime).substr(0,19) }}</span>
      </p>
    </div>
    <div style="text-align:center">
      <el-pagination
        @current-change="chang"
        background
        @prev-click="pre"
        @next-click="next"
        layout="prev, pager, next"
        :total="msg"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      input1: "",
      phone: "",
      list: [],
      options: [
        {
          value: "0",
          label: "禁用"
        },
        {
          value: "1",
          label: "启用"
        }
      ],
      value: "",
      list: [],
      msg: 0,
      num: 0,
      currentRow: null
    };
  },
  // 0 停用  1 展示
  mounted() {
    this.one();
  },
  methods: {
    one() {
      if (localStorage.getItem("token") == "md5,,,") {
        this.http
          .post("/admin/api/selectUser_manage.do", {
            phone: this.input1,
            state: this.value
          })
          .then(res => {
            this.msg = res.result.pageNumber * 10;
            this.list = res.result.list;
            console.log(res);
          });
      } else {
        this.$router.replace({ name: "login" });
        this.$toasted.error("请您先登录!").goAway(1000);
      }
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    val() {
      console.log(this.value1);
    },
    open() {
      this.dialogVisible = true;
    },
    // 重置
    chongzhi() {
      console.log(this.value);
      this.value = this.input1 = "";
    },
    cha() {
      this.http
        .post("/admin/api/selectUser_manage.do", {
          state: this.value,
          phone: this.input1
        })
        .then(res => {
          if (res.code == 1) {
            this.list = res.result.list;
            this.msg = res.result.pageNumber * 10;
          }
        });
    },
    // 上一页
    pre(e) {
      console.log(e);
      this.http
        .post("/admin/api/selectUser_manage.do", {
          phone: this.input1,
          state: this.value,
          page: e
        })
        .then(res => {
          if (res.code == 1) {
            // this.num = res.result.pageNumber *10
            this.list = res.result.list;
          }
        });
    },
    // 下一页
    next(e) {
      console.log(e);
      this.http
        .post("/admin/api/selectUser_manage.do", {
          phone: this.input1,
          state: this.value,
          page: e
        })
        .then(res => {
          if (res.code == 1) {
            this.list = res.result.list;
            // this.num = res.result.pageNumber *10
          }
        });
    },
    // 分页的跳转
    chang(e) {
      this.http
        .post("/admin/api/selectUser_manage.do", {
          phone: this.input1,
          state: this.value,
          page: e
        })
        .then(res => {
          if (res.code == 1) {
            this.list = res.result.list;
          }
        });
    },
    // 禁用 jinyong
    jinyong(uuid) {
      // /admin/api/updateUsersState.do
      this.http
        .post("/admin/api/updateUsersStateByUuid.do", {
          uuid: uuid,
          operation_user: localStorage.getItem("user"),
          state: 0
        })
        .then(res => {
          this.one();
        })
        .catch(res => {
          this.$toasted.error(res.message).goAway(1000);
        });
      console.log("禁用");
    },
    qiyong(uuid) {
      console.log("启用");
      this.http
        .post("/admin/api/updateUsersStateByUuid.do", {
          uuid: uuid,
          operation_user: localStorage.getItem("user"),
          state: 1
        })
        .then(res => {
          this.one();
        })
        .catch(res => {
          this.$toasted.error(res.message).goAway(1000);
        });
    }
  }
};
</script>
<style scoped>
.carfabu {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  /* background: red */
}
.shou {
  height: 74px;
  width: 100%;
  background: #fff;
}
.shou > p {
  width: 400px;
  line-height: 75px;
  float: left;
}
.shou > p > span {
  float: left;
  padding: 0 20px;
}
.rihgt {
  float: right;
}
.rihgt > p {
  float: left;
  height: 40px;
  width: 94px;
  line-height: 40px;
  text-align: center;
  margin-top: 14px;
  margin-right: 30px;
  color: #fff;
  border-radius: 10px;
}
.di {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 80px;
}
.di > p {
  width: 100%;
  display: flex;
  height: 60px;
  line-height: 60px;
  background: #eff5fd;
  margin-top: 10px;
}
.di > p > span {
  width: 10%;
  text-align: center;
}
.di > div {
  margin: 10px 10px 10px 0;
  height: 424px;
  width: 500px;
  background: #fff;
  border-radius: 10px;
  padding: 14px;
  float: left;
}
.di > div > p {
  width: 100%;
  float: left;
}
.di > div > .p1 {
  color: #797979;
  margin: 8px 0;
}
.di > div > p > span {
  width: 33.3%;
  float: left;
}
.carfa {
  color: #797979;
  /* font-size: 16px; */
  margin-top: 30px;
}
.zhanshi {
  margin-top: 8px;
  color: #797979;
  /* background: red; */
  height: 75px;
}
.tu {
  width: 100%;
  height: 74px;
  /* background: pink */
}
.tu > span {
  height: 74px;
  width: 74px !important;
  margin-right: 5px;
  background: red;
}
.tu > :last-child {
  margin: 0;
}
.button {
  width: 100%;
  text-align: center;
  height: 40px;
  width: 90px;
}
.button > button {
  height: 40px;
  width: 90px;
  border-radius: 10px;
  margin: 20px 10px;
  color: #fff;
}
.text {
  width: 100%;
  text-align: center;
}
</style>
