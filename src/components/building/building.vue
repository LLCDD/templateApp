<template>
  <!-- 团队建设 -->
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
          <img style="width:100%;height:100%" src="../../assets/building/banner.png" alt>
          <p>团队建设</p>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 头部结束 -->
    <!-- 我们的使命念开始 -->
    <div class="listart">
      <p class="linian">
        我们的使命
        <span>MISSION</span>
        <span class="spanu"></span>
      </p>
      <div>
        <p>我们要成为高效友好、现代化建筑的互联网平台，</p>
        <p>为建筑工程行业提供信息交流、技术支持、技术分享，让建筑工程行业信息化、</p>
        <p>现代化、智能化、自动化、环保化、做新型建筑工程的开拓者。打造精品，追求卓越，快乐建造美好的生活！</p>
      </div>
      <img src="../../assets/building/shiming.png" alt>
    </div>
    <!-- 我们的使命结束 -->
    <!-- 团队建设开始 -->

    <div class="jiazhiguan">
      <p class="tao">
        团队建设
        <span>VALUES</span>
        <span></span>
      </p>
      <!-- 我们的价值观的图片信息 -->
      <div class="value">
        <div class="zhong">
          <div style="margin-left:0">
            <img src="../../assets/building/xina.png" alt>
            <div>
              <h3>吸纳多方人才， 创有归属感和凝聚力的公司， 全方位发展， 共同进步</h3>
              <p>公司给予员工房补和交通补助，为员工创造免费的外出学习培训，员工在正常工作时间之外加班，公司予以加班薪资补偿；</p>
            </div>
          </div>
          <div>
            <img src="../../assets/building/jiandan.png" alt>
            <div>
              <h3>简单、 自由、 平等、 快乐的工作, 人性化管理。</h3>
              <p>公司鼓励员工都有表达建议的自由; 尊重每一个员工, 给予员工物质和精神鼓励, 制定生涯规划。</p>
            </div>
          </div>
          <div style="margin-left:0">
            <img src="../../assets/building/fuli.png" alt>
            <div>
              <h3>令人眼红的员工福利</h3>
              <p>对公司有特殊贡献或员工有突出行为表现的公司予以奖金鼓励; 公司每年组织不少于 2 次的外出旅游团建, 吃喝玩乐一战解决。</p>
            </div>
          </div>
          <div>
            <img src="../../assets/building/tigong.png" alt>
            <div>
              <h3>为员工提供良好的工作环境和鼓励机制</h3>
              <p>完善员工培养体系和职业发展通道, 使员工获得与企业同步成长的快乐; 充分尊重和信任员工, 不断引导和鼓励, 使其获得成功的喜悦。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 团队建设结束 -->
    <!-- 员工风采开始 -->
    <div class="youshi">
      <div class="youshi_l">
        <p class="y">
          员工风采
          <span>PHOTO</span>
          <span></span>
        </p>
        <div>
          <img style="margin-right:17px" src="../../assets/building/fengc1.png" alt>
          <img style="margin-right:14px" src="../../assets/building/fengcai2.png" alt>
          <img src="../../assets/building/fengcai4.png" alt>
          <img
            style="margin-right:14px;margin-top:14px"
            src="../../assets/building/fengcai3.png"
            alt
          >
          <img style="margin-top:14px" src="../../assets/building/fengcai5.png" alt>
        </div>
        <p>公司成立至今,定期举办大型出游团建, 展示公司团队活力与风采, 加强团队之间的凝聚力、 协作能力。</p>
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
 .position1 > .xiashu  > strong {
   display: block
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
  bottom: 40px;
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
  height: 750px;
  background: #f7f7f7;
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
  background: #2f82ff;
  position: absolute;
  bottom: 45px;
  left: 50%;
}
.value {
  width: 1200px;
  height: 1018px;
  margin: 0 auto;
  cursor: pointer;
}
.value > div > img {
  height: 100%;
  width: 50%;
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
  height: 975px;
  width: 100%;
  background: #ffffff;
}
.youshi_l {
  /* width: 1200px; */
  height: 100%;
  margin: 0 auto;
  padding: 100px 118px 0 132px;
  text-align: center;
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
.youshi_l > div {
  width: 1200px;
  height: 617px;
  margin: 0 auto;
  margin-top: 60px;
}
.youshi_l > div > img {
  float: left;
}
.youshi_l > :last-child {
  font-size: 14px;
  margin-top: 50px;
  color: #797979;
}
/* 团队建设 */
.zhong {
  width: 1200px;
  height: 460px;
}
.zhong > div {
  height: 204px;
  width: 575px;
  background: #fff;
  float: left;
  margin-left: 50px;
  margin-bottom: 50px;
}
.zhong > div:hover {
  box-shadow: 2px 2px 10px #ccc;
}
.zhong > div > img {
  height: 100%;
  width: 45%;
  float: left;
}
.zhong > div > div {
  width: 54.8%;
  float: left;
  padding: 30px 15px 0 15px;
}
.zhong > div > div > h3 {
  font-size: 16px;
  font-weight: 550;
  line-height: 24px;
}
.zhong > div > div > p {
  font-size: 12px;
  margin-top: 24px;
  line-height: 24px;
  color: #8f8f8f;
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
