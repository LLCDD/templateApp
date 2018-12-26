<template>
  <div class="div">
    <mt-swipe :auto="4000" style="width:100%;height:3.78rem">
      <mt-swipe-item style="background:red">1</mt-swipe-item>
      <mt-swipe-item style="background:pink">2</mt-swipe-item>
      <mt-swipe-item style="background:#1e853c">3</mt-swipe-item>
      <mt-swipe-item style="background:pink">4</mt-swipe-item>
    </mt-swipe>
    <div class="task">
      <router-link tag="span" to="/Taskhall">
        <img src="../../assets/img/task3.png" alt>
        <br>
        <span>任务大厅</span>
      </router-link>
      <router-link tag="span" to="/Submitatask">
        <img src="../../assets/img/task2.png" alt>
        <br>
        <span>提交任务</span>
      </router-link>
      <router-link tag="span" to="/Taskrecord">
        <img src="../../assets/img/task1.png" alt>
        <br>
        <span>任务记录</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("footerTab", true);
    this.$store.commit("header", "任务中心");
  }
};
</script>
<style scoped>
.div {
  padding-top: 0.88rem;
  min-height: 100%;
  background: #f5f5f5;
}
.task {
  width: 100%;
  height: 2.52rem;
  background: #fff;
  margin-top: 0.2rem;
}
.task > span {
  width: 33.3%;
  float: left;
  text-align: center;
}
.task > span > img {
  margin-top: 0.42rem;
  height: 1.2rem;
  width: 1.2rem;
}
.task > span > span {
  margin-top: 0.26rem;
  display: inline-block;
}
</style>
