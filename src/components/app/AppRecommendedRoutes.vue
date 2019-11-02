<template>
  <div class="recommended_routes">
    <div class="container">
      <p class="recommended_routes__title">Мы приготовили лучшие маршруты для Вас</p>
    </div>
    <div class="container justify-content-around">
      <div class="row">
        <div class="col-md-4">
          <a href="" class="square"></a>
        </div>
        <div class="col-md-4">
          <a href="" class="square"></a>
        </div>
        <div class="col-md-4">
          <a href="" class="square"></a>
        </div>
        <div class="col-md-4">
          <a href="" class="square"></a>
        </div>
        <div class="col-md-auto">
          <a href="" class="rectangle"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppRecommendedRoutes',
}
</script>

<style lang="scss" scoped>
  .recommended_routes {
    padding: 50px 0;
    .recommended_routes__title {
      text-align: center;
      font-size: 24px;
      margin-bottom: 0;
      margin-bottom: 30px;
    }
  }
  .square,
  .rectangle {
    display: block;
    text-align: center;
    line-height: 350px;
    height: 350px;
    background-color: #C4C4C4;
  }
  .square {
    width: 350px;
  }
  .rectangle {
    width: 730px;
  }
  .row div:nth-child(n+4) {
    margin-top: 30px;
  }
</style>