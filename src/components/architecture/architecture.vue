<template>
<!-- 公司架构 -->
  <div class="div">
    <!-- 头部的 轮播加导航 -->
    <header>
      <!-- 头部的导航  fiexd -->
      <div class="warp">
        <div class="top">
          <!-- logo的标志 -->
          <img style src="http://www.zzjzj.net/images/logo-01.png" alt>
          <!-- 导航条 -->
          <el-menu
            style="width:70%;position:absolute;right:0;top:20%"
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#fff"
            text-color="#fff"
            active-text-color="#fff"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">产品介绍</el-menu-item>
            <!-- <el-menu-item index="3">公司简介</el-menu-item> -->
            <el-submenu index="3">
              <template slot="title">关于我们</template>
              <el-menu-item index="3-1">
                <router-link tag="p" class="py" to="/Introduction">服务宗旨</router-link>
              </el-menu-item>
              <el-menu-item index="3-2">
                 <router-link tag="p" class="py" to="/architecture">公司架构</router-link>
              </el-menu-item>
              <el-menu-item index="3-3">
                <router-link tag="p" class="py" to="/building">团队建设</router-link>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="4">联系我们</el-menu-item>
          </el-menu>
        </div>
      </div>
      <!-- 头部的轮播 -->
    </header>
    <div class="gongsijiagou"> 
        <h2>公司架构  <span class="giagou">ARCHITECTURE</span>
        <span class="posi"></span>
        </h2>
    </div>
    <div class="img1">
        <img  src="../../assets/architecture/jiegou.png" alt="">
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "3",
      activeIndex2: "3-1"
    };
  },
  mounted() {
    localStorage.setItem("name", "首页");
    document.getElementsByTagName('title')[0].innerHTML = localStorage.getItem("name")
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key == 1) {
        // /首页
        this.$router.push("/index");
      } else if (key == 4) {
        // 联系我们
         this.$router.push("/Contactus");
        // this.$router.push("Introduction");
      }else if(key == 2){
        // 产品简介
        this.$router.push('/ProductIntroduction')
      }
    }
  }
};
</script>
<style scoped>
.div {
  width: 100%;
  min-height: 100%;
  background: url('../../assets/architecture/back.png') no-repeat left;
  background-size: 100% 100%;
}
.div >>> .el-menu {
  background: none !important;
}
.div >>> .is-active {
  color: #fff !important;
  border-bottom: 4px solid #fff !important;
  background: none !important;
}
.div >>> .el-submenu__title {
  border: 0;
}
.div >>> .el-menu-item {
  background: none !important;
}
.div >>> .el-submenu__title {
  color: #fff !important;
  /* border-bottom:2px solid #fff !important; */
  background: none !important;
}
.div >>> .el-menu.el-menu--horizontal {
  border: 0 !important;
}
.div >>> .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border: 0;
}
.div >>> .el-menu-item {
  padding: 0 !important;
}
.div >>> .el-menu-item {
  margin: 0 20px;
}
.div >>> .el-submenu__title > i {
  display: none;
}
/* .div >>> .el-submenu__title {
  padding: 0
} */
.warp {
  height: 80px;
  width: 100%;
}
.top {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  line-height: 80px;
  position: relative;
}
.gongsijiagou {
    margin-top: 106px;
    color: #fff;
    text-align: center;
    font-size: 32px;
    font-weight: 800;
    letter-spacing:4px;
    position: relative;
}
.giagou {
    letter-spacing:0px;
    font-size: 14px;
    color: #797979
}
.posi {
    position: absolute;
    height: 6px;
    width: 106px;
    background: #fff;
    bottom: -20px;
    left: 48%
}
.top > img {
  cursor: pointer;
}
.img1 {
    width: 100%;
    text-align: center;
    margin-top: 90px
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/* 关于我们的样式 */
.guanyu {
  height: 600px;
  width: 100%;
}
header {
  background-size: 100% 100%;
  position: relative;
  width: 100%;
  z-index: 99;
  top: 0;
}
footer {
  width: 100%;
  height: 360px;
  background: #000;
}
.n_footer {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding-top: 100px;
}
.n_footer > .left {
  float: left;
}
.n_footer > .right {
  float: right;
}
.n_footer > .left > h3 {
  font-size: 24px;
  font-size: 550;
  color: #fff;
}
.n_footer > .left > p {
  font-size: 14px;
  margin-top: 10px;
  color: #fff;
}
.n_footer > .right > div {
  height: 140px;
  width: 140px;
  float: left;
  margin-right: 0px;
  position: relative;
}
.n_footer > .right > div > img {
  height: 100%;
  width: 100%;
}
.n_footer > .right > div > span {
  position: absolute;
  bottom: -20px;
  left: 36px;
  text-align: center;
  font-size: 16px;
  color: #fff;
}
.nrk {
  margin-top: 50px;
  text-indent: 18px;
  font-size: 14px;
  line-height: 30px;
}
.nrk1 {
  margin-top: 18px;
}
.liaojie {
  height: 64px;
  width: 180px;
  margin-top: 44px;
  color: #2f82ff;
  border: 2px solid #2f82ff;
  font-size: 24px;
  background: none;
  cursor: pointer;
}
.liaojie:hover {
  background: #2f82ff;
  color: #fff;
}
.back {
  background: #fff;
}
.py {
  color: #000
}
</style>

