
<template>
  <div>
    <div>
      <el-upload
        ref="my-upload"
        action="http://www.zzjzj.net/admin/api/file/upload.do"
        list-type="picture-card"
        accept=".jpg, .jpeg, .png, .gif"
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
    <el-form ref="form" :model="form" label-width="80px" style="margin-top:30px">
      <el-form-item label="发布类型">
        <el-select v-model="form.region" placeholder="请选择车辆发布类型">
          <el-option label="出租" value="出租"></el-option>
          <el-option label="求租" value="求租"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="车辆类型">
        <el-select v-model="car" placeholder="请选择车辆发布类型">
          <el-option v-for="(item,index) in list" :key="index" :label="item" :value="item"></el-option>
          <el-option label="求租" value="求租"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="排放标准">
        <el-select v-model="form.delivery" placeholder="请选择车辆排放标准">
          <el-option label="不限" value="不限"></el-option>
          <el-option label="国三及以下" value="国三及以下"></el-option>
          <el-option label="国四" value="国四"></el-option>
          <el-option label="国五" value="国五"></el-option>
          <el-option label="国六" value="国六"></el-option>
        </el-select>
      </el-form-item>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-left:26px">
        <el-form-item label="核载量">
          <el-input v-model="formInline.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label>
          <el-select v-model="unit" placeholder="请选择">
            <el-option label="方" value="方"></el-option>
            <el-option label="吨" value="吨"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-form-item label="业务描述" style="width:60%;height:50px">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="地区选择">
        <el-cascader
          size="large"
          :options="options"
          v-model="selectedOptions"
          @change="addressChange"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="phone" placeholder="请输入" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item label="信息时限">
        <el-select v-model="days" placeholder="请选择">
          <el-option label="7天" value="7天"></el-option>
          <el-option label="15天" value="15天"></el-option>
          <el-option label="30天" value="30天"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import  from './duqu'
import { CodeToText, regionData } from "element-china-area-data";
export default {
  data() {
    return {
      phone: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: "",
        type: [],
        resource: "",
        desc: ""
      },
      formInline: {
        user: "",
        region: ""
      },
      number: 6,
      options: regionData,
      selectedOptions: [],
      image: [],
      unit: "",
      dialogImageUrl: [],
      car: "",
      list: [
        "单桥自卸车",
        "双桥自卸车",
        "平头自卸车",
        "尖头自卸车",
        "前四后八自卸车",
        "双桥半挂自卸车",
        "三桥半挂自卸车",
        "厢货",
        "半挂车",
        "水泥罐车",
        "商砼罐车",
        "砂浆车",
        "搅拌运输车",
        "其他",
        "单桥渣土车",
        "双桥渣土车",
        "生活垃圾车",
        "混凝土泵",
        "泵车",
        "平板拖车",
        "救援拖车",
        "清洗车",
        "洒水车",
        "扫路车",
        "清障车",
        "雾炮车",
        "吸污车",
        "市政环卫车",
        "叉车",
        "桥梁检测车",
        "高空作业车",
        "工程抢险车",
        "随车吊"
      ],
      image1: "",
      address: "",
      days: "7天"
    };
  },
  methods: {
    onSubmit() {
      var _this = this;
      var str = "";
      var img = this.image;
      console.log(img);
      for (var i = 0; i < img.length; i++) {
        console.log(i);
        if (typeof img[i] != "undefined") {
          str += img[i] + ",";
        }
      }
      str.substr(0, str.length - 1);
      console.log(str);
      this.image1 = str;
      this.http
        .post("/admin/api/saveCarData.do", {
          uuid: this.$route.params.uuid,
          describe: this.form.desc,
          phone: this.phone,
          tradeType: this.form.region,
          photos: this.image1,
          carName: this.car,
          standard: this.form.delivery,
          capacity: this.formInline.user,
          unit: this.unit,
          address: this.address,
          valid: this.days
        })
        .then(res => {
          console.log(res);
          if (res.code == 1) {
            this.$toasted.success(res.msg).goAway(1000);
              
              this.$router.go(-1)
          } else {
            this.$toasted.error(res.msg).goAway(1000);
          }
        })
        .catch(res => {
          this.$toasted.error(res.msg).goAway(1000);
        });
    },
    addressChange(arr) {
      console.log(arr);
      console.log(CodeToText[arr[0]], CodeToText[arr[1]], CodeToText[arr[2]]);
      var str =
        CodeToText[arr[0]] +
        "-" +
        CodeToText[arr[1]] +
        "-" +
        CodeToText[arr[2]];
      this.address = str;
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
    }
  },
  mounted() {
    this.image = [];
  }
};
</script>