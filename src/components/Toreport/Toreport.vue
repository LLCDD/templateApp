<template>
  <!-- 车辆信息发布 -->
  <div class="carfabu">
    <div class="shou">
      <p>
        <span>举报人电话</span>
        <el-input style="float:left;width:200px" placeholder="请输入内容" v-model="phone" clearable></el-input>
      </p>
      <p>
        <span>被举报人电话</span>
        <el-input style="float:left;width:200px" placeholder="请输入内容" v-model="oldphone" clearable></el-input>
      </p>
      <p>
        <span>处理状态</span>
        <el-select v-model="valueyyy" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </p>
      <p>
        <span>时间</span>
        <!-- <el-time-picker
          v-model="value1"
          @blur="val"
          value-format="yyyy-MM-dd-HH:mm"
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
        <p style="background:#2e82ff" @click="cha">查询</p>
      </div>
    </div>
    <!-- 底部模块的加载  list-->
    <div class="di">
      <div v-for="(item,index) in list" :key="index">
        <p class="p1">
          <span>举报人：</span>
          <span>绑定手机号：</span>
          <!-- <span>交易类型：</span> -->
        </p>
        <p>
          <span>{{ item.informer_nickName }}</span>
          <span>{{ item.informer_phone }}</span>
          <!-- <span>{{ item.tradeType }}</span> -->
        </p>
        <p class="p1">
          <span>用户名称：</span>
          <span>绑定手机号：</span>
          <!-- <span>车辆核载：</span> -->
        </p>
        <p>
          <span>{{ item.reported_nickName }}</span>
          <span>{{ item.reported_phone }}</span>
          <!-- <span>{{ item.capacity }} {{ item.unit }}</span> -->
        </p>
        <p class="p1">
          <!-- <span>地址：</span> -->
          <span>反馈时间：</span>
          <span></span>
        </p>
        <p>
          <!-- <span>{{ item.address }}</span> -->
          <span>{{ item.releasetime }}</span>
          <span></span>
        </p>
        <p class="carfa">车辆描述：</p>
        <p class="zhanshi">{{ item.explain }}</p>
        <p class="tu">
          <span v-for="(item,index) in item.list" :key="index">
            <img @click="img12(item)" style="height:100%;width:100%" :src="item" alt />
          </span>
        </p>
        <p class="button">
          <el-button
            v-if="item.state == 0"
            style="background:#f25278"
            type="text"
            @click="open1(item.uuid,item.id)"
          >未处理</el-button>
          <!-- <el-button style="background:#2e82ff" type="text" @click="open(item.uuid,item.id)"></el-button> -->
        </p>
      </div>
    </div>
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
    <!-- <span title="提示" :visible.sync="centerDialogVisible2" width="30%" center>
      <img :src="urly" alt="">
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </span>-->
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
      bool: false,
      num: 0,
      list: [],
      uuid: "",
      id: "",
      valey: "",
      centerDialogVisible2: false,
      oldphone: "",
      options: [
        {
          value: "0",
          label: "未处理"
        },
        {
          value: "1",
          label: "已处理"
        }
      ],
      valueyyy: ""
    };
  },
  methods: {
    img12(url) {
      console.log(1);
      window.open(url);
    },
    //   处理举报
    open1(uuid, id) {
      // /admin/api/updateInform.do
      console.log(id);
      this.http.post("/admin/api/updateInform.do", { id: id }).then(res => {
        this.one();
      });
    },
    // 重置
    chong() {
      this.oldphone = this.phone = this.valueyyy = this.value1 = "";
    },
    cha() {
      var str = "";
      var value = this.value1;
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
        .post("/admin/api/selectInfrom.do", {
          reported_phone: this.oldphone,
          informer_phone: this.phone,
          state: this.valueyyy,
          releasetime: this.value1
        })
        .then(res => {
          this.list = res.result.list;
          this.num = res.result.pageNumber * 10;
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
    // 上一页
    pre(e) {
      console.log(e);
      this.http
        .post("/admin/api/selectInfrom.do", {
          reported_phone: this.oldphone,
          informer_phone: this.phone,
          state: this.valueyyy,
          releasetime: this.value1,
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
        .post("/admin/api/selectInfrom.do", {
          reported_phone: this.oldphone,
          informer_phone: this.phone,
          state: this.valueyyy,
          releasetime: this.value1,
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
        .post("/admin/api/selectInfrom.do", {
          reported_phone: this.oldphone,
          informer_phone: this.phone,
          state: this.valueyyy,
          releasetime: this.value1
        })
        .then(res => {
          if (res.code == 1) {
            this.num = res.result.pageNumber * 10;
            this.list = res.result.list;
          }
        });
    },
    // 分页的跳转
    chang(e) {
      this.http
        .post("/admin/api/selectInfrom.do", {
          reported_phone: this.oldphone,
          informer_phone: this.phone,
          state: this.valueyyy,
          releasetime: this.value1,
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
  width: 336px;
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
