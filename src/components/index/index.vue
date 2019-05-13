<template>
  <div class="index">
    <!-- 头部 -->
    <header>
      <div>
        <img src="http://www.zzjzj.net/images/logo-01.png" alt>
        <div class="line"></div>
        <el-menu
          style="width:86%;position:absolute;right:0;top:20%"
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="3">
            <router-link to="/index">首页</router-link>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">关于我们</template>
            <el-menu-item index="1-1">
              <router-link to="/index">公司简介</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/index">服务平台</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link to="/index">介绍</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">企业文化</template>
            <el-menu-item index="2-1">
              <router-link to="/index">团队</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/index">创新</router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link to="/index">愿景</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">企业服务</template>
            <el-menu-item index="3-1">
              <router-link to="/index">服务宗旨</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <router-link to="/index">服务目标</router-link>
            </el-menu-item>
            <el-menu-item index="3-3">
              <router-link to="/index">产品介绍</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">咨询服务</template>
            <el-menu-item index="4-1">用户咨询</el-menu-item>
            <el-menu-item index="4-2">广告与媒体咨询</el-menu-item>
            <!-- <el-menu-item index="4-3"></el-menu-item> -->
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">咨询服务</template>
            <el-menu-item index="5-1">
              <router-link to="/index">招聘</router-link>
            </el-menu-item>
            <el-menu-item index="5-2">
              <router-link to="/index">人才战略</router-link>
            </el-menu-item>
            <el-menu-item index="5-3">
              <router-link to="/index">福利介绍</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </header>
    <!-- 轮播图 -->
    <div class="lun">
      <el-carousel :interval="3000" type="card" height="450px">
        <el-carousel-item v-for="item in 6" :key="item">
          <img
            style="width:100%;height:100%"
            src="http://pic1.nipic.com/2008-08-14/2008814183939909_2.jpg"
            alt
          >
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 中间部分 -->
    <section>
      <div class="tit">
        <h2>分析、统计、大数据服务中心</h2>
        <h3>云计算和DB处理中心</h3>
      </div>
      <div class="center">
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="tit" @mouseenter="enter(index)" @mouseleave="leave()">
        <h2>解决方案</h2>
        <h3>智能、互联整体解决方案</h3>
      </div>
      <div class="center">
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="tit">
        <h2>让我们的服务更便捷</h2>
        <h3>专业、简单、科学，便捷的服务</h3>
      </div>
      <div class="center">
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
    <!-- 底部部分 -->
    <footer>
      <p>
        Tel ：
        <span>0371-63222880</span> - Mail :
        <span>@zz-jzj.com</span>
      </p>
      <p>公司对外邮箱：Jzj@zz-jzj.com</p>
      <p>
        河南捷之捷网络技术有限公司 -链接
        <span>zzjzj.net</span>
      </p>
       <p>
        豫ICP证:
        <span>18029020号-1</span> -链接
        <span>http://www.miitbeian.gov.cn/</span>
      </p>
      <!-- <p>法律免责声明页面.</p> -->
      <p>
        版权所有：
        <span>河南捷之捷网络技术有限公司</span>
      </p>
     <!-- <p>版权投诉：</p>
      <p>服务协议：</p>
      <p>公众号：</p>
      <p>邮编：</p>
      <p>网址：</p>
      <p>帮助中心：</p>
      <p>
        媒体资讯：
        <span>0371-63222880</span>
      </p>

      <p>
        Copyright © 2018
        <span>河南捷之捷网络技术有限公司</span> - 豫ICP证:
        <span>18029020号-1</span>
      </p> -->
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "453454",
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  mounted() {
    localStorage.setItem("name", "首页");
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    enter(index) {
      // alert(index)
    },
    leave() {
      //  alert(index)
    }
  }
};
</script>
<style scoped>
.index >>> .el-carousel__item--card.is-active {
  width: 80%;
  margin-left: -15%;
}
.index {
  height: 100%;
  overflow: auto;
  /* background: red */
}
.index > header {
  height: 100px;
  width: 100%;
  /* background: red; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
.index > header > div {
  width: 80%;
  background: pink;
  height: 100%;
  margin: 0 auto;
  line-height: 100px;
  position: relative;
}
.index > header > div > img {
  width: 12%;
  display: inline-block;
}
a {
  color: #fff;
}
.lun {
  margin-top: 100px;
  width: 100%;
  background: red;
  height: 500px;
}
footer {
  min-height: 200px;
  background: red;
  text-align: center;
  margin-top: 10px;
  padding: 60px;
  line-height: 40px;
  font-size: 20px;
  /* overflow: hidden; */
}
/* footer > p {
  float: left;
  padding: 10px;
} */
footer > p > span {
  color: antiquewhite;
}
section {
  margin-top: 20px;
}
.tit {
  height: 100px;
  background: red;
  text-align: center;
  padding: 16px;
  line-height: 34px;
  margin-top: 10px;
}
.tit > :first-child {
  font-size: 30px;
  font-weight: 800;
}
.tit > :last-child {
  font-size: 20px;
  font-weight: 550;
}
.tit:hover {
  cursor: pointer;
}
.center {
  margin-top: 10px;
  height: 240px;
  width: 100%;
}
.center > div {
  width: 80%;
  height: 100%;
  /* background: red; */
  margin: 0 auto;
}
.center > div > div {
  width: 15%;
  background: orange;
  float: left;
  height: 100%;
  margin-right: 6%;
}
.center > div > :last-child {
  margin-right:0 
}
</style>

