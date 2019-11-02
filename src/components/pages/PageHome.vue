<template>
  <div>
    <app-route-building-form></app-route-building-form>
    <app-recommended-routes></app-recommended-routes>
  </div>
</template>

<script>
import AppRouteBuildingForm from '../app/AppRouteBuildingForm.vue';
import AppRecommendedRoutes from '../app/AppRecommendedRoutes.vue';

export default {
  name: 'PageHome',
  components: {
    AppRouteBuildingForm,
    AppRecommendedRoutes,
  }
}
</script>

<style lang="scss" scoped>

</style>
