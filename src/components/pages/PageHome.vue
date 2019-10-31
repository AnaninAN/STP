<template>
  <div>
    <app-route-building-form></app-route-building-form>
    <div class="container">
      <h1>Home</h1>
    </div>
  </div>
</template>

<script>
import AppRouteBuildingForm from '../app/AppRouteBuildingForm.vue';

export default {
  name: 'PageHome',
  components: {
    AppRouteBuildingForm,
  }
}
</script>

<style lang="scss" scoped>

</style>
