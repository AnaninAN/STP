<template>
  <div class="logo">
    <div class="container">
      <div class="row col-md-12 justify-content-center">
        <p>мы планируем</p>
        <router-link :to="{ name: 'home' }" class="logo__img"></router-link>
        <p>вы отдыхаете</p>
      </div>
      <div class="row col-md-12 justify-content-center">
        <p class="logo__stp">Smart Travel Planner</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLogoStp',
}
</script>

<style lang="scss" scoped>
  @import '../../assets/main.scss';

  .logo {
    background: #F4F2F2;
    p {
      line-height: 100px;
      margin-bottom: 0;
    }
    .logo__img {
      display: block;
      height: 100px;
      width: 100px;
      background: #C4C4C4;
      margin: 0 50px;
    }
    .logo__stp {
      font-size: 72px;
    }
  }
</style>