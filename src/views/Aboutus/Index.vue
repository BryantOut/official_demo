<template>
  <div class="Aboutus">
    <div class="emptyBoxOfHeader"></div>
    <div class="aboutus-bg">
      <div class="title">关于我们</div>
      <div class="aboutus-box">
        <div class="about-box-desc">
          <section class="about-desc-item">
            <h4>公司地址</h4>
            <div class="desc-detail">
              <p class="address">
                <i class="iconfont icon-gongsi"></i
                >广州市黄埔区凝彩路26号锦昊智谷
              </p>
            </div>
          </section>
          <section class="about-desc-item">
            <h4>公司简介</h4>
            <div class="desc-detail-info">
              <p>
                广州万有返利信息科技有限公司成立于2021年1月，是一家集合全网优惠信息的电商导购平台。
              </p>
              <p>
                公司致力于满足网购爱好者对品质好货与极致性价比的追求，接入了淘宝、天猫、京东、拼多多等大型购物平台的海量优惠券，让用户在追求高性价比商品的同时，能享受大平台购物的权益保障。
              </p>
              <p>
                万有返利秉承着让分享更有价值、让服务更有温度、让生活更加美好的理念，为广大网购爱好者带来福利，让用户在这里可以一站式享受全网的优惠，实现“万物皆有返利”的美好愿景。
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as UrlLink from "@/api/urllink";
export default {
  name: "Aboutus",
  data() {
    return {
      imgBaseUrl: UrlLink.BaseImgUrl,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.aboutus-bg {
  height: auto;
  width: 100%;
  background: url("../../assets/images/bannerbg.png") no-repeat center top;
  background-size: 100% auto;
  padding-bottom: 30px;
  .title {
    height: 120px;
    line-height: 120px;
    // padding-top: 20px;
    text-align: center;
    color: #fff;
    font-size: 30px;
    font-weight: 500;
  }
}

@media screen and (max-width: 768px) {
  .aboutus-bg {
    height: auto;
    width: 100%;
    background: url("../../assets/images/bannerbg.png") no-repeat center top;
    background-size: auto 300px;
    padding-bottom: 30px;
    .title {
      height: 120px;
      line-height: 120px;
      // padding-top: 20px;
      text-align: center;
      color: #fff;
      font-size: 30px;
      font-weight: 500;
    }
  }
}

.aboutus-box {
  min-height: 600px;
  width: 65%;
  margin: 0 auto;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  overflow-x: hidden;
}

@media screen and (max-width: 768px) {
  .aboutus-box {
    min-height: 600px;
    width: 90%;
    margin: 0 auto;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    overflow-x: hidden;
  }
}

.about-desc-item {
  margin-bottom: 40px;
}
.about-desc-item:last-child {
  margin-bottom: 0;
}
.about-box-desc {
  width: 75%;
  margin: 0 auto;
  padding: 30px 0 30px;
  box-sizing: border-box;
  h4 {
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    border-bottom: 2px solid #dd4c4f;
    margin-bottom: 20px;
  }
  .desc-detail-info {
    font-size: 15px;
  }
  .desc-detail {
    display: flex;
    align-items: center;
    // padding: 25px 0;
    box-sizing: border-box;
    line-height: 22px;
    font-size: 15px;
    .detail-img {
      display: flex;
      align-items: center;
      margin-right: 30px;
      img {
        display: inline-block;
        height: 120px;
        width: 120px;
        margin-left: -8px;
      }
    }
    .address {
      align-self: flex-start;
      .iconfont {
        margin-right: 10px;
        color: #666666;
      }
    }
  }
}
</style>