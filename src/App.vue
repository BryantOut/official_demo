<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: { Header }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/public.scss';
@import './assets/scss/iconfont.scss';
@import './assets/scss/var.scss';
@import './assets/scss/tap.scss';
</style>
