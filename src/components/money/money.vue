<template>
  <div class="div">
    <div class="div1">
      <p>
        余额：
        <span>￥100.00</span>
      </p>
      <div class="divn">
        <p @click="tap">
          <img src="../../assets/images/money1.png" alt>
          余额充值
        </p>
        <p @click="tap1">
          <img src="../../assets/images/money2.png" alt>
          申请提现
        </p>
      </div>
    </div>
    <p class="p">
      <span>资金记录</span>
    </p>
    <table>
      <th>时间</th>
      <th>金额</th>
      <th>备注</th>
      <tr>
        <td>232343324423</td>
        <td class="red">+100</td>
        <td>23423423</td>
      </tr>
      <tr>
        <td>23423</td>
        <td class="green">-100</td>
        <td>23423</td>
      </tr>
      <tr>
        <td>232343324423</td>
        <td class="red">+100</td>
        <td>23423423</td>
      </tr>
      <tr>
        <td>23423</td>
        <td class="green">-100</td>
        <td>23423</td>
      </tr>
      <tr>
        <td>232343324423</td>
        <td class="red">+100</td>
        <td>23423423</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "123"
    };
  },
  methods: {
    //   余额 充值
    tap() {
      this.$router.push("/balance");
    },
    // 申请提现
    tap1() {
      this.$router.push("/apply");
    }
  }
};
</script>
<style scoped>
.div {
  padding-top: 0.88rem;
  min-height: 100%;
}
.div1 {
  height: 3.5rem;
  width: 100%;
  background: url("../../assets/images/b.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
  padding-top: 0.9rem;
  position: relative;
}
.div1 > p {
  font-size: 0.36rem;
  color: #fff;
}
.div1 > p > span {
  font-size: 0.6rem;
  font-weight: 550;
}
.divn {
  position: absolute;
  width: 100%;
  bottom: 0.3rem;
  display: flex;
  justify-content: space-around;
}
.divn > p {
  height: 0.8rem;
  width: 3rem;
  background: #e97c4d;
  font-size: 0.3rem;
  line-height: 0.8rem;
  color: #fff;
}
.divn > p > img {
  height: 0.5rem;
  width: 0.5rem;
  margin-top: -0.05rem;
}
.p {
  padding: 0 0.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
}
.p > span {
  padding-left: 0.2rem;
  border-left: 2px solid #e60013;
  color: #e60013;
  font-size: 0.3rem;
}
table {
  width: 100%;
  border: 0;
  margin-bottom: 1rem;
}
table > th {
  border: 0;
  border-bottom: 1px solid #f2f2f2;
  height: 0.88rem;
  font-size: 0.3rem;
}
table > tr {
  border: 0;
  height: 0.88rem;
  font-size: 0.22rem;
}
table > tr > td {
  border: 0;
  border-bottom: 1px solid #f2f2f2;
}
.red {
  color: #e60013;
}
.green {
  color: #a3f3bc;
}
</style>
