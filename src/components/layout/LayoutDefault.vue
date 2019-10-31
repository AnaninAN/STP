<template>
  <div>
    <app-header></app-header>
    <app-logo-stp></app-logo-stp>
    <main>
      <slot></slot>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../app/AppHeader.vue';
import AppFooter from '../app/AppFooter.vue';
import AppLogoStp from '../app/AppLogoStp.vue';

export default {
  name: 'LayoutDefault',
  components: {
    AppHeader,
    AppFooter,
    AppLogoStp,
  }
}
</script>

<style lang="scss" scoped>
  
</style>

