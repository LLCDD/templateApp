<template>
  <!-- 车辆发布 -->
  <div class="carfabu">
    <!-- <div class="shou">
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
    </div>-->
    <!-- 底部模块的加载  list-->
    <div class="di">
      <p>
        <span style="width:5%">序号</span>
        <span style="width:20%">用户昵称</span>
        <span>绑定手机号</span>
        <span style="width:20%">操作</span>
        <span>操作人员</span>
        <span style="width:20%">操作时间</span>
      </p>
      <p v-for="(item,index) in list" :key="index">
        <span style="width:5%">{{ index +1 }}</span>
        <span style="width:20%">{{ item.nickName }}</span>
        <span>{{ item.phone }}</span>

        <span
          @click="jinyong(item.uuid)"
          style="margin:0 1%;width:8%;background:rgb(46, 130, 255);color:#fff; border-radius:10px;cursor:pointer"
        >发布</span>
        <span
          @click="qiyong(item.uuid)"
          style="margin:0 1%;width:8%;background:rgb(255, 172, 30);color:#fff; border-radius:10px;cursor:pointer"
        >查看</span>
        <!-- 按钮点击启用 改状态为禁用  点击禁用 改状态为 启用 -->
        <span>{{ item.operation_user }}</span>
        <!-- <span style="width:20%">{{ String(item.updatetime).substr(0,19) == }}</span> -->
        <span
          style="width:20%"
        >{{ String(item.updatetime).substr(0,19) == 'undefined' ? "" : String(item.updatetime).substr(0,19) }}</span>
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
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="32%" center>
      <div>
        <el-upload
          ref="my-upload"
          action="http://www.zzjzj.net/admin/api/file/upload.do"
          list-type="picture-card"
          accept=".jpg,.jpeg,.png,.gif"
          :limit="number"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="successs"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </div>
      <textarea v-model="text" class="text" placeholder="请输入车辆描述内容" name id cols="30" rows="10"></textarea>
      <p class="inpup">
        手机号：
        <input v-model="iphone" class="input" placeholder="请输入手机号" type="text" />
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="noy">取 消</el-button>
        <el-button type="primary" @click="oky">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { constants } from "crypto";

import $ from "jquery";
export default {
  data() {
    return {
      input: "",
      input1: "",
      phone: "",
      list: [],
      text: "",
      image1: "",
      iphone: "",
      number: 6,
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
      currentRow: null,
      centerDialogVisible: false,
      dialogImageUrl: "",
      dialogVisible: false,
      uuid: "",
      image: []
    };
  },
  // 0 停用  1 展示
  mounted() {
    this.image = [];
    this.one();
  },
  methods: {
    one() {
      if (localStorage.getItem("token") == "md5,,,") {
        this.http.post("/admin/api/listPage.do").then(res => {
          this.msg = res.lastPage * 10;
          this.list = res.data;
          console.log(res);
        });
      } else {
        this.$router.replace({ name: "login" });
        this.$toasted.error("请您先登录!").goAway(1000);
      }
    },

    // ----------------------
    handleRemove(file, fileList) {
      console.log(file, fileList);
      var arr = [];
      for (var i = 0; i < fileList.length; i++) {
        arr.push(fileList[i].response.path);
      }
      this.image = arr;
    },
    handlePictureCardPreview(file) {
      console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    successs(files, fileList) {
      console.log(files);
      console.log(this.dialogImageUrl);
      var img = this.image;
      console.log(img);
      img.push(files);

      this.image = img;
    },
    // ------------------------------------
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
    // 上一页
    pre(e) {
      console.log(e);
      this.http.post("/admin/api/listPage.do", { pageNo: e }).then(res => {
        this.msg = res.lastPage * 10;
        this.list = res.data;
        console.log(res);
      });
    },
    // 下一页
    next(e) {
      console.log(e);
      this.http.post("/admin/api/listPage.do", { pageNo: e }).then(res => {
        this.msg = res.lastPage * 10;
        this.list = res.data;
        console.log(res);
      });
    },
    jinyong(uuid) {
      this.uuid = uuid;
      this.centerDialogVisible = true;
    },
    clearFiles() {
      this.$refs["my-upload"].clearFiles();
    },
    // 分页的跳转
    chang(e) {
      this.http.post("/admin/api/listPage.do", { pageNo: e }).then(res => {
        this.msg = res.lastPage * 10;
        this.list = res.data;
        console.log(res);
      });
    },
    oky() {
      var _this = this;
      var str = "";
      var img = this.image;
      console.log(img);
      for (var i = 0; i < img.length; i++) {
        console.log(i);
        if(typeof(img[i]) != "undefined"){
           str += img[i] + ",";
        }
      }
      str.substr(0, str.length - 1);
      console.log(str);
      this.image1 = str;
      var telStr = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
      var inputStr = this.iphone;
      if (!telStr.test(inputStr)) {
        alert("手机号码输入不规范");
      } else {
        if (this.text != "") {
          if (this.image.length > 0) {
            if (this.text.length < 100) {
              this.http
                .post("/admin/api/saveMessageData.do", {
                  uuid: this.uuid,
                  describe: this.text,
                  phone: this.iphone,
                  show: 1,
                  photos: this.image1,
                  userId: localStorage.getItem("user")
                })
                .then(res => {
                  this.$toasted.success(res.msg).goAway(1000);
                  this.image = [];
                  // this.one();
                  this.clearFiles();
                  this.dialogImageUrl = "";
                  this.centerDialogVisible = false;
                  this.dialogImageUrl = this.text = this.iphone = "";
                })
                .catch(res => {
                  this.$toasted.error(res.message).goAway(1000);
                });
            } else {
              alert("信息描述不能大于100字");
            }
          } else {
            alert("请选择图片");
          }
        } else {
          alert("请填写详情描述");
        }
      }
    },
    noy() {
      this.centerDialogVisible = false;
       this.clearFiles();
      this.dialogImageUrl = this.text = this.iphone = "";
    },
    // 信息发布的个人详情 模拟数据
    qiyong(uuid) {
      console.log(uuid);
      this.$router.push("/mochlist/" + uuid);
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
.text {
  background: #eff5fd;
  margin-top: 20px;
  font-size: 20px;
  text-align: left !important;
}
.input {
  background: red;
}
.inpup {
  font-size: 20px;
  margin-top: 10px;
}
.inpup > input {
  border-radius: 10px;
  height: 30px;
  background: #eff5fd;
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
