<template>
  <div class="carfabu">
    <div class="shou">
      <p>
        <span>手机号</span>
        <el-input style="float:left;width:230px" placeholder="请输入内容" v-model="phone" clearable></el-input>
      </p>
      <p>
        <span>内容检索</span>
        <el-input style="float:left;width:230px" placeholder="请输入内容" v-model="input1" clearable></el-input>
      </p>
      <p>
        <span>时间</span>
        <!-- <el-time-picker
          v-model="value1"
          @blur="val"
          value-format="yyyy-MM-dd HH:mm"
          placeholder="任意时间点"
        ></el-time-picker>-->
        <el-date-picker
          v-model="value1"
          value-format="yyyy-MM-dd HH:mm"
          type="datetime"
          placeholder="选择日期时间"
        ></el-date-picker>
      </p>
      <div class="rihgt">
        <p style="background:#ffac1e" @click="chong">重置</p>
        <p style="background:#2e82ff" @click="cah">查询</p>
      </div>
    </div>
    <!-- 底部模块的加载  list-->
    <div class="di">
      <div v-for="(item,index) in list" :key="index">
        <p class="p1">
          <span>用户名：</span>
          <span>绑定手机号：</span>
          <span>交易类型：</span>
        </p>
        <p>
          <span>{{ item.nickName }}</span>
          <span>{{ item.phone }}</span>
          <span>{{ item.tradeType }}</span>
        </p>
        <p class="p1">
          <span>车辆类型：</span>
          <span>排放标准：</span>
          <span>车辆核载：</span>
        </p>
        <p>
          <span>{{ item.carName }}</span>
          <span>{{ item.standard }}</span>
          <span>{{ item.capacity }} {{ item.unit }}</span>
        </p>
        <p class="p1">
          <span>地址：</span>
          <span>发布时间：</span>
          <span></span>
        </p>
        <p>
          <span>{{ item.address }}</span>
          <span>{{ item.releasetime.substr(0,19) }}</span>
          <span></span>
        </p>
        <p class="carfa">车辆描述：</p>
        <p class="zhanshi">{{ item.describe }}</p>
        <p class="tu">
          <span v-for="(item,index) in item.list" :key="index">
            <img @click="img12(item)" style="height:100%;width:100%" :src="item" alt />
          </span>
        </p>
        <p class="button">
          <el-button style="background:#f25278" type="text" @click="open1(item.uuid,item.id)">驳回</el-button>
          <el-button style="background:#2e82ff" type="text" @click="open(item.uuid,item.id)">删除</el-button>
        </p>
      </div>
    </div>
    <!-- 删除回复 -->
    <el-dialog title="删除回复" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <textarea
        style="padding:10px;width:80%;border:1px solid #ccc;margin-left:10%"
        placeholder="请填写删除理由，用于告知用户信息已被删除"
        v-model="valey"
        name
        id
        cols="30"
        rows="10"
      ></textarea>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2">取 消</el-button>
        <el-button type="primary" @click="dialogVisible1">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 驳回回复 -->
    <el-dialog title="驳回回复" :visible.sync="bool" width="30%" :before-close="handleClose">
      <textarea
        style="padding:10px;width:80%;border:1px solid #ccc;margin-left:10%"
        placeholder="请填写驳回理由，用于告知用户信息已被驳回"
        v-model="valey"
        name
        id
        cols="30"
        rows="10"
      ></textarea>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible12">取 消</el-button>
        <el-button type="primary" @click="dialogVisible11">确 定</el-button>
      </span>
    </el-dialog>
    <!--  -->
    <div class="text">
      <el-pagination
        @current-change="chang"
        background
        @prev-click="pre"
        @next-click="next"
        layout="prev, pager, next"
        :total="num"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      msg: "2432",
      value1: new Date(),
      input1: "",
      phone: "",
      vale: "",
      dialogVisible: false,
      bool: false,
      num: 0,
      list: [],
      uuid: "",
      id: "",
      valey: ""
    };
  },
  methods: {
    img12(url) {
      console.log(1);
      window.open(url);
    },
    chong() {
      this.value1 = this.phone = this.input1 = "";
    },
    cah() {
      var str = "";
      var value = this.value1;
      console.log(value)
      if (value != null) {
        for (var i = 0; i < value.length; i++) {
          // console.log(value[i]);
          if (i == 10) {
            str += " ";
          } else {
            str += value[i];
          }
        }
      }
      this.value1 = str;
      this.http
        .post("/admin/api/selectUsersAndCarDate.do", {
          releasetime: this.value1,
          describe: this.input1,
          phone: this.phone
        })
        .then(res => {
          if (res.code == 1) {
            this.num = res.result.pageNumber * 10;
            this.list = res.result.list;
          }
        });
    },
    val() {
      console.log(this.value1);
    },
    // 删除发布
    open(uuid, id) {
      console.log(uuid, id);
      this.uuid = uuid;
      this.id = id;
      this.dialogVisible = true;
    },
    // 驳回发布
    open1(uuid, id) {
      this.bool = true;
      this.uuid = uuid;
      this.id = id;
    },
    // 驳回的取消
    dialogVisible12() {
      this.valey = "";
      this.bool = false;
    },
    // 驳回的成功
    dialogVisible11() {
      this.http
        .post("/admin/api/updateCardata.do", {
          uuid: this.uuid,
          id: this.id,
          reason: this.valey,
          audit: 3
        })
        .then(res => {
          this.one();
          console.log(res);
        });
      this.bool = false;
    },
    handleClose(done) {
      this.uuid = this.id = "";
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    // 确定一
    dialogVisible1(e) {
      console.log(e);
      console.log(this.vale);
      this.dialogVisible = false;
      this.http
        .post("/admin/api/updateCardata.do", {
          uuid: this.uuid,
          id: this.id,
          reason: this.valey,
          audit: 4
        })
        .then(res => {
          this.one();
          console.log(res);
        });
    },
    // 取消事件
    dialogVisible2() {
      this.uuid = this.id = "";
      this.vale = "";
      this.dialogVisible = false;
    },
    // 上一页
    pre(e) {
      console.log(e);
      this.http
        .post("/admin/api/selectUsersAndCarDate.do", {
          releasetime: this.value1,
          describe: this.input1,
          phone: this.phone,
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
        .post("/admin/api/selectUsersAndCarDate.do", {
          releasetime: this.value1,
          describe: this.input1,
          phone: this.phone,
          page: e
        })
        .then(res => {
          if (res.code == 1) {
            this.list = res.result.list;
            // this.num = res.result.pageNumber *10
          }
        });
    },
    one() {
      this.http
        .post("/admin/api/selectUsersAndCarDate.do", {
          releasetime: this.value1,
          describe: this.input1,
          phone: this.phone
        })
        .then(res => {
          if (res.code == 1) {
            this.vale = this.valey = "";
            this.num = res.result.pageNumber * 10;
            this.list = res.result.list;
          }
        });
    },
    // 分页的跳转
    chang(e) {
      this.http
        .post("/admin/api/selectUsersAndCarDate.do", {
          releasetime: this.value1,
          describe: this.input1,
          phone: this.phone,
          page: e
        })
        .then(res => {
          if (res.code == 1) {
            this.list = res.result.list;
          }
        });
    }
  },
  mounted() {
    this.value1 = "";
    if (localStorage.getItem("token") == "md5,,,") {
      this.one();
    } else {
      this.$router.replace({ name: "login" });
      this.$toasted.error("请您先登录!").goAway(1000);
    }
    // this.http
    //   .post("/admin/api/selectUsersAndCarDate.do", {
    //     releasetime: this.value1,
    //     describe: this.input1,
    //     phone: this.phone
    //   })
    //   .then(res => {
    //     if (res.code == 1) {
    //       this.num = res.result.pageNumber * 10;
    //       this.list = res.result.list;
    //     }
    //   });
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
