<template>
  <swiper :options="swiperOption" class="SlideOne">
    <swiper-slide
      class="swiper-slide"
      v-for="(item, index) in picList"
      :key="index"
    >
      <el-image class="pic" :src="item.pic" fit="cover"></el-image>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: "SlideOne",
  data() {
    return {
      picList: [
        {
          pic:
            require('@/assets/images/bg1.jpeg'),
        }
      ],
      swiperOption: {
        // autoplay: 1000
        // loop: true
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.SlideOne {
  width: 100%;
  height: 100%;
  .pic {
    width: 100%;
    height: 100%;
    opacity: 1;
  }
}
</style>