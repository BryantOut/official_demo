<template>
  <div class="Header" :class="{ normalHeaderBg: normalHeaderBg }">
    <!-- /vancheerfile/Images/2020/7/20200709154459676.png" -->
    <router-link :to="{ name: 'Home' }"
      ><el-image class="logo" :src="logoPic" fit="cover"></el-image
    ></router-link>
    <div class="rightPart hidden-sm hidden-xs">
      <div
        class="item"
        v-for="(item, index) in handlerList"
        :key="index"
        v-text="item.label"
        @click="linkTo(item.routeName)"
      ></div>
    </div>
    <div class="moreBtn visible-sm visible-xs" @click="showMoreMenu=!showMoreMenu">
      <i class="iconfont icon-gengduo"></i>
    </div>
    <div class="moreMenu" v-show="showMoreMenu">
      <div
        class="item tap-active"
        v-for="(item, index) in handlerList"
        :key="index"
        v-text="item.label"
        @click="linkTo(item.routeName)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logoPic: require("@/assets/images/logo.png"),
      handlerList: [
        {
          label: "关于我们",
          routeName: "AboutUs",
        }
        // {
        //   label: "我们的服务",
        //   routeName: "",
        // },
        // {
        //   label: "联系我们",
        //   routeName: "",
        // },
        // {
        //   label: "技术支持",
        //   routeName: "",
        // },
      ],
      normalHeaderBg: false,
      showMoreMenu: false
    };
  },
  mounted() {},
  methods: {
    linkTo(routeName) {
      this.showMoreMenu = false
      if (!routeName && routeName === "") {
        this.$utils.showMessage("功能正在开发，敬请期待！", "info");
        return;
      }
      this.$router.push({ name: routeName });
    },
  },
  watch: {
    $route(to) {
      this.showMoreMenu = false
      let routeName = to.name;
      let limitRouters = ["Home"];
      if (limitRouters.indexOf(routeName) !== -1) {
        this.normalHeaderBg = false;
        return;
      }
      this.normalHeaderBg = true;
    },
  },
};
</script>

<style lang="scss">
.Header.normalHeaderBg {
  background-color: #fff;
  .rightPart {
    color: #666;
  }
}
.Header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  background-color: transparent;
  z-index: 1000;
  box-sizing: border-box;
  .logo {
    width: 158px;
    height: 50px;
  }
  .rightPart {
    display: flex;
    align-items: center;
    font-size: 16px;
    height: 100%;
    color: #666;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 20px;
      cursor: pointer;
      height: 100%;
      box-sizing: border-box;
    }
    .item:hover {
      color: #e7161a;
      box-sizing: border-box;
    }
  }
  .moreBtn {
    width: 40px;
    height: 40px;
    cursor: pointer;
    .iconfont {
      font-size: 30px;
      line-height: 40px;
      text-align: center;
      color: #ccc;
      margin: 0 auto;
    }
  }
  .moreBtn:hover {
    opacity: 0.6;
  }
  .moreMenu {
    position: fixed;
    top: 72px;
    left: 0;
    width: 100%;
    background-color: #2c2c32;
    .item {
      height: 50px;
      line-height: 50px;
      box-sizing: border-box;
      padding-left: 20px;
      color: #fff;
    }
  }
}
// .Header:hover {
//   background-color: #fff;
//   .rightPart {
//     color: #666;
//   }
// }
</style>