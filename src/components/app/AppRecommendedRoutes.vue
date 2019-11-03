<template>
  <div class="recommended_routes">
    <div class="container">
      <p class="recommended_routes__title">Мы приготовили лучшие маршруты для Вас</p>
    </div>
    <div class="container justify-content-around">
      <div class="row">
        <!-- определение классов необходимо переписать через computed -->
        <div v-for="(item, index) in routes" :key="item._id" :class="{'col-md-4': index < 4, 'col-md-auto': index == 4 }">
          <router-link :class="{square: index < 4, rectangle: index == 4 }" :to="{ name: 'route-single', params: { id: item._id } }">
            {{item.name}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppRecommendedRoutes',
  data() {
    return {
      routes: [],
    };
  },
  mounted() {
    fetch('http://localhost:8888/routes')
      .then((request) => request.json())
      .then((routes) => {
        this.routes = routes;
      });
  }
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
    text-decoration: none;
    font-size: 24px;
    color: #000;
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