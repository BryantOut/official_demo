<template>
  <div class="page">
    <swiper :options="swiperOption" class="page hidden-sm hidden-xs">
      <swiper-slide class="swiper-slide">
        <SlideOne></SlideOne>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <SlideTwo></SlideTwo>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <MobileShow class="visible-sm visible-xs"></MobileShow>
  </div>
</template>

<script>
import SlideOne from "./components/SlideOne";
import SlideTwo from "./components/SlideTwo";
import MobileShow from './components/MobileShow'
export default {
  name: "Home",
  components: { SlideOne, SlideTwo, MobileShow },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        direction: "vertical",
        mousewheelControl: true,
      },
    };
  },
  mounted() {},
};
</script>

<style lang="scss">
.page {
  width: 100%;
  height: 100%;
}
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 14px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-pagination-bullet {
  background-color: #fff;
  border: 2px solid #b6b6b6;
  opacity: 1;
  margin: 20px 0 !important;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
}
.swiper-pagination-bullet-active {
  background-color: #e7161a;
  border: none;
}
</style>