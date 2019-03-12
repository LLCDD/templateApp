<template>
  <div class="uu">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div>
        <div v-for="(item,index) in list " :key="index" @click="top(item.id)">
          <p class="p">{{ item }}</p>
          <!-- <p class="p1" v-html="item.content">{{ item.content }}</p> -->
          <p class="p2">{{ item }}</p>
          <!-- <img src="../../assets/imgs/returnf.png" alt> -->
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "45345",
      list: [1111, 4, 4, 7],
      isLoading: false
    };
  },
  mounted() {
    this.http
      .post("/api/notice_list")
      .then(res => {
        if (res.code == 200) {
          console.log(res);
          this.list = res.data.data;
          // Toast.clear();
        } else if (res.code == 400) {
          // Toast.clear();
          this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
        }
      })
      .catch(res => {
        // Toast.clear();
        this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
      });
  },
  methods: {
    top(id) {
      console.log(id);
      this.$router.push("/gdetails/" + id);
    },
    onRefresh() {
      this.http
        .post("/api/notice_list")
        .then(res => {
          if (res.code == 200) {
            console.log(res);
            this.list = res.data.data;
            this.isLoading = false;
            // Toast.clear();
          } else if (res.code == 400) {
            // Toast.clear();
            this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
          }
        })
        .catch(res => {
          // Toast.clear();
          this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
        });
    }
  }
};
</script>
<style scoped>
.uu {
  padding-top: 0.88rem;
  min-height: 100%;
  background: #f5f5f5;
  width: 100%;
}
.uu > div > div > div > div {
  padding-top: 0.2rem;
  padding-left: 0.3rem;
  height: 1.2rem;
  background: #fff;
  position: relative;
  border-bottom: 2px solid #f5f5f5;
}
.uu > div > div > div > div > .p {
  width: 78%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.3rem;
  font-weight: 500;
}
.uu > div > div > div > div > .p1 {
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #666666;
  padding-top: 0.1rem;
  font-size: 0.24rem;
  height: 0.8rem;
}
.uu > div > div > div > div > .p2 {
  bottom: 0.26rem;
  position: absolute;
  right: 0.8rem;
}
.uu > div > div > div > div > img {
  position: absolute;
  right: 0.3rem;
  top: 36%;
  height: 0.4rem;
}
</style>
