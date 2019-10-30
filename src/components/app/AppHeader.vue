<template>
  <div class="header">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-2">
          <router-link :to="{ name: 'my-routes' }" class="my-routes">
            Мои маршруты
          </router-link>
        </div>
        <div class="col-md-2">
          <router-link :to="{ name: 'login' }" class="login">
            Войти
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style lang="scss" scoped>
  @import '../../assets/main.scss';

  .header {
    padding: 50px 0;
    background: #F4F2F2;
    font-size: 14px;
  }
</style>