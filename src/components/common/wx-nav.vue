<template>
  <div id="wx-nav">
    <nav id="nav">
      <router-link to="/index">
        <img src="../../assets/img/homepage1.png" alt>
        <img src="../../assets/img/homepage.png" alt>
        <span>首页</span>
      </router-link>

      <router-link to="/task">
        <img src="../../assets/img/renw.png" alt>
        <img src="../../assets/img/select.png" alt>
        <span>任务中心</span>
      </router-link>
      <router-link to="/personal">
        <img src="../../assets/img/zhongx.png" alt>
        <img src="../../assets/img/people1.png" alt>
        <span>个人</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
@import "../../assets/css/wx-nav.css";
#wx-nav {
  width: 100%;
  height: 1rem;
}
</style>
