<template>
  <!-- 公司简介 -->
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
            <!--  -->
            <router-link to="/index" tag="span">
              产品介绍
              <strong></strong>
            </router-link>
            <span class="xiashu">
              公司简介
              <ul>
                <router-link to="/Introduction" tag="li">公司简介</router-link>
                <router-link to="/building" tag="li">团队建设</router-link>
              </ul>
              <strong></strong>
            </span>
            <router-link to="/index" tag="span">
              联系我们
              <strong></strong>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 头部的轮播 -->
    </header>
    <div class="block">
      <el-carousel height="600px">
        <el-carousel-item v-for="item in 1" :key="item">
          <img style="width:100%;height:100%" src="../../assets/Introduction/banner.png" alt>
          <p>让服务更便捷</p>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 头部结束 -->
    <!-- 我们的理念开始 -->
    <div class="listart">
      <p class="linian">
        我们的理念
        <span>CONCEPT</span>
        <span class="spanu"></span>
      </p>
      <!-- <img src="../../assets/Introduction/joy.png" alt> -->
      <div>
        <p>公司坚持 " 以人为本、不断创新 " 的企业理念，提倡：激情、坚持、使命担当、尊重的宗旨。</p>
        <p>不断完善公司的研发、运营、服务体系，越来越多的高精尖人才的加入，使我们公</p>
        <p>司一步一个脚印的向前迈进。我们不断探索、不断创新、想方设法从行业的各个角度寻找痛点，细化项目需求、完善产品功能，</p>
        <p>精雕细琢，力求创造舒适的用户环境，超越和满足客户的需求，全身心地为客户服务！</p>
      </div>
      <img src="../../assets/Introduction/gai.png" alt>
    </div>
    <!-- 我们的理念结束 -->
    <!-- 我的的价值观开始 -->

    <div class="jiazhiguan">
      <p class="tao">
        我们的价值观
        <span>VALUES</span>
        <span></span>
      </p>
      <!-- 我们的价值观的图片信息 -->
      <div class="value">
        <div>
          <img src="../../assets/Introduction/tu1.png" alt>
          <div class="zhezhao"></div>
          <div>
            <p>吸纳多方人才， 创有归属感和凝聚力的公司， 全方位发展， 共同成长！</p>
            <div>
              <p>Absorb many talents, create a sense of belonging and cohesion</p>
              <p>of the company, all-round development, common growth!</p>
            </div>
          </div>
        </div>
        <div>
          <img style="float:right" src="../../assets/Introduction/tu2.png" alt>
          <div class="zhezhao1"></div>
          <div style="text-align:center">
            <p>快乐地带工作， 扁平化管理</p>
            <div>
              <p>Happy zone work, flat management</p>
            </div>
          </div>
        </div>
        <div>
          <img src="../../assets/Introduction/tu3.png" alt>
          <div class="zhezhao"></div>
          <div>
            <p>为客户创造价值， 及时主动地为用户解决问题</p>
            <div>
              <p>Create value for customers and actively solve problems</p>
              <p>for users in time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 我的价值观结束 -->
    <!-- 我们的优势开始 -->
    <div class="youshi">
      <div class="youshi_l">
        <p class="y">
          我们的优势
          <span>ADVANTAGE</span>
          <span></span>
        </p>
        <p class="yu">用心服务中国建筑行业用户，推动建筑工程行业进步</p>
        <div>
          <div class="youshi_left">
            <p>
              <span></span>
              <span>建筑工程行业闲置资源共享平台</span>
            </p>
            <p>
              <span></span>
              <span>建筑企业选拔精英方案解决商</span>
            </p>
            <p>
              <span></span>
              <span>建筑行业客户节约成本的好帮手</span>
            </p>
            <p>
              <span></span>
              <span>劳务人员快捷找工作的绿色直通车</span>
            </p>
          </div>
          <div class="youshi_right">
            <img src="../../assets/Introduction/tu4.png" alt>
          </div>
        </div>
      </div>
    </div>

    <!-- 我们的优势结束 -->
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
      activeIndex: "3",
      activeIndex2: "3-3"
    };
  },
  beforeCreate() {
    localStorage.setItem("name", "公司简介");
    document.getElementsByTagName("title")[0].innerHTML = localStorage.getItem(
      "name"
    );
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key == 1) {
        //   首页
        this.$router.push("index");
      } else if (key == 4) {
        //   联系我们
        // this.$router.push("/Introduction");
        this.$router.push("/Contactus");
      } else if (key == 2) {
        //   产品简介
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
  cursor: pointer;
}
.position1 > span > span {
  display: none;
}
.position1 > span > strong {
  display: none;
}
.position1 > .router-link-active > span {
  display: block;
}
.position1 > .router-link-active > strong {
  display: block;
}
.position1 > span:hover ul {
  display: block;
}
.position1 > span > ul {
  position: absolute;
  background: #fff;
  width: 140px;
  height: 80px;
  line-height: 40px;
  display: none;
  color: #000;
}
.position1 > span > ul > li {
  border-bottom: 1px solid #ccc;
  padding-left: 5px;
}
.position1 > span > span {
  position: absolute;
  height: 5px;
  width: 28px;
  background: #fff;
  bottom: 20px;
}
.position1 > .xiashu > strong {
  display: block;
}
.position1 > span > strong {
  position: absolute;
  height: 5px;
  width: 28px;
  background: #fff;
  bottom: 20px;
  left: 14px;
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
.linian {
  padding: 100px 0 50px 0;
  text-align: center;
  font-size: 32px;
  font-weight: 550;
  position: relative;
}
.linian > span {
  font-size: 14px;
  color: #a3a3a3;
}
.linian > .spanu {
  display: inline-block;
  height: 6px;
  width: 60px;
  background: #2f82ff;
  position: absolute;
  bottom: 36px;
  left: 50%;
}
.listart {
  height: 746px;
  background: #ffffff;
  text-align: center;
}
.listart > img {
  /* width: 100%; */
  margin-top: 50px;
}
.listart > div {
  text-align: center;
}
.listart > div > p {
  font-size: 16px;
  line-height: 26px;
  color: #797979;
}
.jiazhiguan {
  width: 100%;
  height: 1314px;
  background: url("../../assets/Introduction/jianzhigna.png") no-repeat;
  background-size: 100% 100%;
}
.jiazhiguan > .tao {
  color: #000;
  font-size: 32px;
  text-align: center;
  padding: 100px 0 60px 0;
  position: relative;
  letter-spacing: 4px;
  font-weight: 550;
}
.jiazhiguan > .tao > span {
  font-size: 14px;
  color: #797979;
  letter-spacing: 0px;
}
.jiazhiguan > .tao > :last-child {
  display: inline-block;
  height: 6px;
  width: 80px;
  background: #2f83ff;
  position: absolute;
  bottom: 45px;
  left: 52%;
}
.value {
  width: 1200px;
  height: 1018px;
  margin: 0 auto;
  cursor: pointer;
}
.value > div {
  height: 338px;
  width: 100%;
  position: relative;
}
.value > div > img {
  height: 100%;
  width: 50%;
}
.value > div > div {
  width: 50%;
  height: 100%;
  float: right;
  padding: 148px 32px 0 44px;
}
.value > div > div > p {
  font-size: 16px;
  font-weight: 550;
}
.value > div > div > div {
  margin-top: 30px;
  color: #a0a0a0;
  line-height: 24px;
}
.value > div:hover .zhezhao {
  display: block;
}
.value > div:hover .zhezhao1 {
  display: block;
}
.zhezhao {
  height: 100%;
  width: 50%;
  background: #1b2760;
  position: absolute;
  left: 0;
  display: none;
  top: 0;
  opacity: 0.5;
}
.zhezhao1 {
  height: 100%;
  width: 50%;
  background: #1b2760;
  position: absolute;
  right: 0;
  display: none;
  top: 0;
  opacity: 0.5;
}
.youshi {
  height: 592px;
  width: 100%;
  background: #ffffff;
}
.youshi_l {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 100px 118px 0 132px;
}
.youshi_l > .y {
  font-size: 30px;
  font-weight: 550;
  text-align: center;
  letter-spacing: 4px;
  position: relative;
}
.youshi_l > .y > span {
  font-size: 14px;
  letter-spacing: 0px;
  color: #797979;
}
.youshi_l > .y > :last-child {
  display: inline-block;
  height: 8px;
  width: 80px;
  background: #2f82ff;
  position: absolute;
  bottom: -18px;
  left: 50%;
}
.youshi_l > .yu {
  text-align: center;
  font-size: 16px;
  color: #adadad;
  margin-top: 60px;
}
.youshi_left {
  width: 400px;
  float: left;
}
.youshi_left > p {
  margin-top: 50px;
  position: relative;
}
.youshi_left > p > span {
  display: inline-block;
}
.youshi_left > p > :first-child {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #2f82ff;
  position: absolute;
}
.youshi_left > p > :last-child {
  margin-left: 52px;
  font-size: 16px;
  color: #797979;
}
.youshi_right {
  float: right;
}
.youshi_right > img {
  margin-top: 42px;
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
  font-size: 16px;
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
