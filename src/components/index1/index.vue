<template>
  <!-- 首页 -->
  <div class="div">
    <!-- 头部的 轮播加导航 -->
    <header>
      <!-- 头部的导航  fiexd -->
      <div class="warp">
        <div class="top">
          <!-- logo的标志 -->
          <img style src="http://www.zzjzj.net/images/logo-01.png" alt>
          <!-- 导航条 -->
          <div class="position1">
            <router-link to="/index" tag="span">
              首页
              <span></span>
            </router-link>
            <router-link to="/Introduction" tag="span">
              产品介绍
              <strong></strong>
            </router-link>
            <span>
              公司简介
              <ul>
                <router-link to="/Introduction" tag="li">公司简介</router-link>
                <router-link to="/building" tag="li">团队建设</router-link>
              </ul>
               <strong></strong>
            </span>
            <router-link to="/lianxi" tag="span">
              联系我们
               <strong></strong>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 头部的轮播 -->
    </header>
    <div class="block">
      <el-carousel height="1000px">
        <el-carousel-item v-for="item in 1" :key="item">
          <img style="width:100%;height:100%" src="../../assets/images/banner.png" alt>
          <div class="size">
            <p>捷友联 APP</p>
            <P>
              建筑信息交流平台 ，
              <span>即将上线...</span>
            </P>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 头部结束 -->
    <!-- 关于我们的模块开始 -->
    <div class="guanyu">
      <!-- 关于我们的小模块 -->
      <div class="gunayux">
        <div class="g_left">
          <p class="biaoti">
            <span>关于我们</span>
            <span class="hr"></span>
            <span>ABOUT US</span>
          </p>
          <p class="nrk">
            河南捷之捷网络技术有限公司成立于 2018 年，注册资金1000万元，位于美丽而又充满激情的郑州市。主要从事网络技术开发、技术服务、数据处理和储存服务、
            建筑信息服务、建材销售、人员招聘、机械租售等相关业务。
          </p>
          <p class="nrk nrk1">
            公司以 "互联网 + 建筑工程" 为核心，以专业、专注的技术团队全力打造专属建筑行业
            的各种需求软件，实现传统建筑工程行业与高新技术的完美结合！
          </p>
          <button class="liaojie">了解更多</button>
        </div>
        <div class="g_right">
          <img src="../../assets/images/other.png" alt>
        </div>
      </div>
    </div>
    <!-- 关于我们的模块结束 -->
    <!-- 产品介绍的 模块开始 -->
    <div class="jieshao">
      <!-- 产品介绍 的内部模块 -->
      <div class="n_jieshao">
        <h2>
          产品介绍
          <span class="bottom"></span>
          <span style="margin-left:12px">PRODUCT</span>
        </h2>
        <div class="big">
          <div>
            <img src="../../assets/index/xinx.png" alt>
            <p>供求信息</p>
            <p>为企业，消费者搭建信息共享平台， 直接在平台上进行沟通、交流、信用评分等。</p>
            <!-- <div>
              <img src="../../assets/images/gongqiu_s.png" alt>
              <p>平台为用户提供建筑工程行业的供求信息。为企业、消费者搭建信息共享平台，直接在平台上进行沟通、交流、信用评分等。</p>
            </div>-->
          </div>
          <div>
            <img src="../../assets/index/fenlei.png" alt>
            <p>分类推荐</p>
            <p>根据不同的分类，推荐相应的产品，在提高用户体验的同时也提高了企业的知名度。</p>
            <!-- <div>
              <img src="../../assets/images/fenlei_s.png" alt>
              <p>在app开发上根据不同的分类，为用户推荐相应的产品，方便用户对比和筛选。在提高用户体验的同时也提高了企业的知名度。</p>
            </div>-->
          </div>
          <div>
            <img src="../../assets/index/jianzhu.png" alt>
            <p>建筑产品</p>
            <p>提供一系列建筑材料购买商城，用户可按品牌、类型、名称等，进行快速搜索。</p>
            <!-- <div>
              <img src="../../assets/images/jianzhu_s.jpg" alt>
              <p>为用户提供一系列建筑材料购买商城，用户可按品牌、类型、名称等，进行快速搜索。</p>
            </div>-->
          </div>
          <div>
            <img style="margin-left:20px;margin-top:25px" src="../../assets/index/hangye.png" alt>
            <p>行业资讯</p>
            <p>及时了解行业动态，问答行业内的问题，对自己的经验和遇到的状况交流分享。</p>
            <!-- <div>
              <img src="../../assets/images/hangye_s.png" alt>
              <p>通过app客户端，用户可以及时了解到行业动态，可以问答行业内的问题，对自己的经验和遇到的状况进行交流、分享。</p>
            </div>-->
          </div>
          <div>
            <img style="margin-top:28px" src="../../assets/index/pois.png" alt>
            <p>定位</p>
            <p>根据用户所在地，快速定位到其周边的材料、机械、工地等相关信息，解决急需问题。</p>
            <!-- <div>
              <img src="../../assets/images/position_s.png" alt>
              <p>APP可以根据用户所在地，快速定位到其周边的材料、机械、工地等相关信息。方便用户挑选，解决急需问题。</p>
            </div>-->
          </div>
          <div>
            <img src="../../assets/index/fenxinag.png" alt>
            <p>在线分享</p>
            <p>通过平台将已发布的信息或需要的信息分享到第三方平台，扩展传播面、节省多次编辑时间，</p>
            <!-- <div>
              <img src="../../assets/images/zaixian_s.png" alt>
              <p>用户可以通过平台对自己发布的信息或朋友需要的信息分享到第三方平台。即可以扩展传播面、节省多次编辑时间，也可以帮助我们对平台进行宣传。</p>
            </div>-->
          </div>
        </div>
      </div>
    </div>
    <!-- 产品介绍 模块结束 -->
    <!-- 加入我们 模块开始-->
    <div class="women">
      <!-- 关于我们的小模块 -->
      <div class="x_wm">
        <h2>
          加入我们
          <span class="bottom"></span>
          <span style="margin-left:12px">JOIN US</span>
        </h2>
        <div class="center">
          <div>
            <div>
              <img src="../../assets/images/jishu.png" alt>
            </div>
            <span>技术栈</span>
          </div>
          <div>
            <div>
              <img src="../../assets/images/xinxiaoshou.png" alt>
            </div>
            <span>新销售</span>
          </div>
          <div>
            <div>
              <img src="../../assets/images/kefu.png" alt>
            </div>
            <span>客服</span>
          </div>
          <div>
            <div>
              <img src="../../assets/images/shouhou.png" alt>
            </div>
            <span>售后</span>
          </div>
        </div>
        <P class="p2">我们希望你：拥有过硬的岗位技术，有成熟的研发经验。坚持的抗压能力，活跃的思维，对自己和工作认真负责的责任心。</P>
        <P class="p2">我们为你提供：满足你的日常办公需求，年底双薪，转正后公司提供五险一金，不定期几餐旅游，以及各种带薪假期。</P>
      </div>
    </div>
    <!-- 加入我们 模块结束 -->
    <!-- 底部模块 开始-->
    <footer>
      <div class="n_footer">
        <div class="left">
          <h3>联系我们</h3>
          <p style="margin-top:50px">公司名称：河南捷之捷网络技术有限公司</p>
          <p>公司电话：0371-63222880</p>
          <p>电子邮箱：3213213213@163.com</p>
          <p>地址：河南省郑州市二七区绿地滨湖国际城3 区 2 号楼 1613</p>
        </div>
        <div class="right">
          <div style="margin-right:34px">
            <img src="../../assets/images/phoneg.png" alt>
            <span>官方公众号</span>
          </div>
          <div>
            <img src="../../assets/images/phonew.png" alt>
            <span>官方微博</span>
          </div>
        </div>
      </div>
    </footer>
    <!-- 底部模块 结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  mounted() {
    localStorage.setItem("name", "首页");
    document.getElementsByTagName("title")[0].innerHTML = localStorage.getItem(
      "name"
    );
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
      } else if (key == 2) {
        // 产品简介
        this.$router.push("/ProductIntroduction");
      }
    }
  }
};
</script>
<style scoped>
.div {
  width: 100%;
  height: 100%;
}
.position1 {
  display: inline-block;
  margin-left: 100px;
  height: 100%; 
}
.position1 > span {
  display: inline-block;
  margin: 0 20px;
  position: relative;
  color: #fff;
  cursor: pointer
}
.position1 > span > span {
  display: none
}
.position1 > span > strong {
  display: none
}
.position1 > .router-link-active > span  {
  display: block
}
.position1 > .router-link-active > strong  {
  display: block
}
.position1 > span:hover ul{
  display: block
}
.position1 > span > ul {
  position: absolute;
  background: #fff;
  width: 140px;
  height: 80px;
  line-height:40px;
  display: none;
  color: #000
}
.position1 > span > ul > li {
  border-bottom: 1px solid #ccc;
  padding-left: 5px
}
.position1 > span > span {
  position: absolute;
  height: 5px;
  width: 28px;
  background: #fff;
  bottom: 20px;
}
.position1 > span > strong {
  position: absolute;
  height: 5px;
  width: 28px;
  background: #fff;
  bottom: 20px;
  left: 14px
}
.warp {
  height: 80px;
  width: 100%;
  /* border-bottom: 1px solid #9ea5bb; */
}
.top {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  line-height: 80px;
  position: relative;
}
.top > img {
  cursor: pointer;
}
.size {
  position: absolute;
  top: 366px;
  font-size: 56px;
  width: 100%;
  text-align: center;
  line-height: 100px;
  letter-spacing: 10px;
  color: #fff
}
.size > p > span {
  color: #ffc22f;
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
.block {
  margin-top: -80px;
}
.gunayux {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}
.gunayux > .g_left {
  float: left;
  width: 48%;
  height: 100%;
  padding-top: 100px;
}
.gunayux > .g_left > .biaoti {
  font-size: 30px;
  font-weight: 800;
  position: relative;
}
.gunayux > .g_left > .biaoti > .hr {
  display: inline-block;
  height: 7px;
  width: 50px;
  background: orange;
  position: absolute;
  bottom: -14px;
  background: #2f82ff;
}
.gunayux > .g_left > .biaoti > :last-child {
  font-size: 14px;
  display: inline-block;
  margin-left: 24px;
  color: #797979;
}
.gunayux > .g_right {
  float: right;
  width: 49.5%;
  /* background: pink; */
  height: 100%;
  position: relative;
}
.gunayux > .g_right > img {
  position: absolute;
  bottom: 100px;
  width: 96%;
  right: 0;
}
.jieshao {
  height: 554px;
  width: 100%;
  padding-top: 100px;
  background: #f7f7f7;
}
.n_jieshao {
  width: 1200px;
  height: 84%;
  background: #f7f7f7;
  margin: 0 auto;
  text-align: center;
}
.big {
  margin-top: 50px;
  height: 100%;
}
.big > div {
  float: left;
  width: 192px;
  height: 264px;
  margin-right: 9px;
  text-align: center;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #d6dde8;
}
.big > div:hover {
  box-shadow: 3px 3px 5px #ccc;
}
.big > :last-child {
  margin: 0;
}
.big > div > img {
  margin-top: 30px;
}
.big > div > p {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 550;
}
.big > div > :last-child {
  font-weight: 400;
  margin-top: 30px;
  padding: 0 20px;
  line-height: 24px;
  color: #9da1a3;
  text-align: left;
}
/* .big > div > div {
  display: none;
} */

.big > div > div > img {
  width: 100%;
}
.big > div > div > p {
  padding: 10px;
  line-height: 26px;
  width: 100%;
}
.n_jieshao > h2 {
  font-size: 30px;
  font-weight: 800;
  position: relative;
}
.n_jieshao > h2 > span {
  font-size: 14px;
  /* font-weight: 400; */
  color: #797979;
}
.n_jieshao > h2 > .bottom {
  display: inline-block;
  height: 7px;
  width: 60px;
  background: #2f82ff;
  position: absolute;
  bottom: -16px;
  left: 50%;
}
.women {
  width: 100%;
  height: 600px;
}
.x_wm {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding-top: 100px;
  text-align: center;
}
.x_wm > .p2 {
  font-size: 16px;
  line-height: 28px;
  color: #797979;
}
.x_wm > h2 {
  font-size: 30px;
  font-weight: 800;
  position: relative;
}
.x_wm > h2 > span {
  font-size: 14px;
  color: #797979;
}
.x_wm > h2 > .bottom {
  display: inline-block;
  height: 7px;
  width: 60px;
  background: #2f82ff;
  position: absolute;
  bottom: -16px;
  left: 50%;
}
.x_wm > .center {
  height: 260px;
  width: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
}
.x_wm > .center > div {
  height: 100%;
  width: 22%;
  text-align: center;
  cursor: pointer;
}
.x_wm > .center > div > div {
  width: 100%;
  border-radius: 50%;
}
.x_wm > .center > div > div > img {
  width: 110px;
  height: 110px;
}
.x_wm > .center > div > span {
  font-size: 24px;
  margin-top: 50px;
  display: inline-block;
}
footer {
  width: 100%;
  height: 360px;
  background: #262836;
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
  color: #b4b4b4;
}
.n_footer > .left > p {
  font-size: 14px;
  margin-top: 10px;
  color: #b4b4b4;
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
  color: #000;
}
</style>
