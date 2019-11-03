<template>
  <div class="container">
    <h1>Форма для route-single</h1>
    <p>{{route}}</p>
  </div>
</template>

<script>
export default {
  name: 'PageRouteSingle',
  props: ['id'],
  data() {
    return {
      route: {},
    }
  },
  mounted() {
    fetch(`http://localhost:8888/routes/${this.id}`)
      .then((response) => response.json())
      .then((route) => {
        this.route = route;
      })
  }
}
</script>

<style lang="scss" scoped>

</style>