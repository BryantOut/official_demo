<template>
  <div class="SlideTwo">
    <el-image class="pic" :src="pic" fit="cover"></el-image>
    <div class="footer">
      <el-button type="text" class="btn">
        <div class="con" @click="openBlankWindow('https://beian.miit.gov.cn/')">
          <el-image
            class="icon"
            :src="require('@/assets/images/icon1.png')"
            fit="cover"            
          ></el-image>
          备案：等待备案
        </div>
      </el-button>
      <div type="text" class="btn" @click="linkTo('AboutUs')"> 
        <i class="iconfont icon-gongsi icon"></i>
        广州万有返利信息科技有限公司</div
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideTwo",
  data() {
    return {
      pic:
        require('@/assets/images/bg2.jpeg'),
    };
  },
  mounted() {},
  methods: {
    openBlankWindow(tempLink) {
      window.open(tempLink, '_blank')
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
.SlideTwo {
  width: 100%;
  height: 100%;
  .pic {
    width: 100%;
    height: 100%;
  }
  .footer {
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: flex-end;
    bottom: 0;
    left: 1;
    width: 100%;
    height: 74px;
    z-index: 1000;
    color: #fff;
    box-sizing: border-box;
    padding: 0 60px;
    .btn {
      color: #fff;
      margin-right: 30px;
      cursor: pointer;
      .con {
        display: flex;
        align-items: center;
      }
      .icon {
        margin-right: 8px;
      }
    }
    .btn:hover {
      color: #e7161b;
    }
  }
}
</style>