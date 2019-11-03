<template>
  <div>
    <app-logo-stp></app-logo-stp>
    <app-route-building-form></app-route-building-form>
    <app-recommended-routes></app-recommended-routes>
  </div>
</template>

<script>
import AppRouteBuildingForm from '../app/AppRouteBuildingForm.vue';
import AppRecommendedRoutes from '../app/AppRecommendedRoutes.vue';
import AppLogoStp from '../app/AppLogoStp.vue';

export default {
  name: 'PageHome',
  components: {
    AppRouteBuildingForm,
    AppRecommendedRoutes,
    AppLogoStp,
  }
}
</script>

<style lang="scss" scoped>

</style>
