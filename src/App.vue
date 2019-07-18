<template>
  <div id="app">
    <div class="outter">
      <el-header
        height="88px"
        width="100%"
        style="background:#2e82ff"
        v-if="this.$route.meta.show1"
      >
        <div id="header">
          <img class="logoi" src="./assets/images/logo.png" alt />
          <p>
            {{ user }} ， 欢迎来到捷之捷产品数据管理后台
            <span style="margin-left:20px" @click="tuich">
              <i class="el-icon-switch-button"></i> 退出
            </span>
          </p>
        </div>
      </el-header>
      <el-container style="height:90%;overflow:auto">
        <el-aside
          style="height:100%;background:#ffffff"
          width="200px"
          v-if="this.$route.meta.show1"
        >
          <el-row class="tac">
            <el-col :span="12" style="width:100%">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item index="1" @click="opne1">
                  <i class="el-icon-s-home"></i>
                  <span slot="title">首页</span>
                </el-menu-item>

                <el-menu-item index="2" @click="opne2">
                  <i class="el-icon-s-marketing"></i>
                  <span slot="title">实时数据</span>
                </el-menu-item>
                <!-- <el-menu-item index="3" @click="opne3">
                  <i class="el-icon-document-copy"></i>
                  <span slot="title">信息审核</span>
                </el-menu-item>-->
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>信息审核</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1" @click="carfabu">车辆发布审核</el-menu-item>
                    <el-menu-item index="1-2" @click="jishi">即时信息审核</el-menu-item>
                    <!-- <el-menu-item index="1-3" @click="">车辆信息发布</el-menu-item> -->
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="4" @click="opne4">
                  <i class="el-icon-user"></i>
                  <span slot="title">用户管理</span>
                </el-menu-item>
                <el-menu-item index="7" @click="carfabu1">
                  <i class="el-icon-info"></i>
                  <span slot="title">即时信息发布</span>
                </el-menu-item>
                <el-menu-item index="8" @click="carxinx">
                  <i class="el-icon-info"></i>
                  <span slot="title">车辆信息发布</span>
                </el-menu-item>
                <el-menu-item index="5" @click="opne5">
                  <i class="el-icon-warning"></i>
                  <span slot="title">举报信息</span>
                </el-menu-item>
                <el-menu-item index="6" @click="opne6">
                  <i class="el-icon-question"></i>
                  <span slot="title">问题与反馈</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <section class="app-content">
            <router-view />
          </section>
        </el-main>
      </el-container>

      <!--底部导航 路由 -->
      <!-- <footer class="app-footer" v-if="this.$route.meta.footer">
        <wx-nav></wx-nav>
      </footer>-->
    </div>
  </div>
</template>
<script>
import mixin from "./mixin"; // 混合被单独放在 mixin.js 中管理
window.mixin = mixin; // 将 混合/mixin 暴露在窗口对象中，某些组件需要时，直接提取 window.mixin
import WxHeader from "@/components/common/wx-header";
import WxNav from "@/components/common/wx-nav";

export default {
  name: "app",
  components: {
    WxHeader,
    WxNav
  },
  data() {
    return {
      pageName: "",
      routerAnimate: false,
      enterAnimate: "", //页面进入动效
      leaveAnimate: "", //页面离开动效
      user: localStorage.getItem("user")
    };
  },
  mounted() {
    console.log(localStorage.getItem("user"));
  },
  created() {},
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 首页
    opne1() {
      this.$router.push("/index");
    },
    // 实时数据
    opne2() {
      this.$router.push("/Factdata");
      console.log("2");
    },
    // 信息审核
    opne3() {
      console.log("2");
    },
    // 用户管理
    opne4() {
      this.$router.push("/user");
      console.log("2");
    },
    // 举报信息
    opne5() {
      this.$router.push("/Toreport");
    },
    // 问题与反馈
    opne6() {
      this.$router.push("/fankui");
    },
    // 车辆发布审核
    carfabu() {
      this.$router.push("/carfabu");
    },
    // 即时信息发布
    jishi() {
      this.$router.push("/jishi");
    },
    // tuichu
    tuich() {
      localStorage.clear();
      this.$router.replace({ name: "login" });
    },
    // 车辆发布
    carfabu1() {
      this.$router.push("/Vehicleinformationrelease");
      console.log("车辆发布");
    },
    // 模拟数据的 车辆信息发布
    carxinx(){
      console.log(1)
      this.$router.push('/carxinx')
    },
    // 即时信息发布
    jishi1() {
      console.log("即时信息");
    }
  },
  watch: {
    // 监听 $route 为店内页设置不同的过渡效果
    $route(to, from) {
      const toDepth = to.path.length;
      const fromDepth = from.path.length;
      if (toDepth === 2) {
        this.$store.commit("setPageName", to.name);
      }
      //同一级页面无需设置过渡效果
      if (to.meta.Athesamelevel) {
        return;
      }
      // this.enterAnimate =
      //   toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft";
      // this.leaveAnimate =
      //   toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight";
    }
  },
  updated() {
    // 只要组件发生变化都会触发可用于切换组件时公共数据的刷新
    // this.$store.dispatch('newbalance')
  }
};
</script>


<style lang="scss">
// .action-block{
//   display: none !important;
// }
$material-icons-font-path: "~material-icons/iconfont/";
@import "material-icons/iconfont/material-icons.scss";
@import "./assets/css/toast.css";
@import "assets/css/base.css";
@import "assets/css/common.css";
@import "assets/css/wx-header.css";
/*阿里 fonticon*/
@import "assets/css/lib/iconfont.css";
/*过渡效果需要的动画库*/
@import "assets/css/lib/animate.css";
/*weui 样式库 非常适合高仿微信*/
@import "assets/css/lib/weui.min.css";
#app {
  height: 100%;
  background: #f0f3fa;
}
.app-content {
  height: 100%;
  background: #f0f3fa;
  -webkit-overflow-scrolling: touch;
}
#header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 88px;
  font-size: 18px;
  color: #fff;
  // background: pink;
}
.logoi {
  width: 120px;
  height: 40px;
  margin-top: 22px;
}
</style>
