<template>
  <div>
    <div class="emptyBoxOfHeader"></div>
    <el-image
      class="pic"
      :src="require('@/assets/images/bg1.jpeg')"
      fit="cover"
    ></el-image>
    <el-image
      class="pic"
      :src="require('@/assets/images/bg2.jpeg')"
      fit="cover"
    ></el-image>
    <div class="footer">
      <div class="item">
        <div class="con" @click="openBlankWindow('https://beian.miit.gov.cn/')">
          <el-image
            class="icon"
            :src="require('@/assets/images/icon1.png')"
            fit="cover"
          ></el-image>
          备案：等待备案
        </div>
      </div>
      <div type="text" class="item" @click="linkTo('AboutUs')">
        <div class="con">
          <i class="iconfont icon-gongsi icon"></i>
          广州万有返利信息科技有限公司
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileShow",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    openBlankWindow(tempLink) {
      window.open(tempLink, "_blank");
    },
    linkTo(routeName) {
      this.showMoreMenu = false
      if (!routeName && routeName === "") {
        this.$utils.showMessage("功能正在开发，敬请期待！", "info");
        return;
      }
      this.$router.push({ name: routeName });
    },
  },
};
</script>

<style lang="scss">
.footer {
  margin-top: 40px;
  .item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 40px;
    .con {
    }
  }
}
</style>