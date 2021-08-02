<template>
  <div class="news">
      <div class="navBarMargin"></div>

      <h1>門市據點</h1>
      <Map />
  </div>
</template>

<script>
import Map from '@/components/Map.vue'

export default {
  name: 'ShopPoint',
  components: {
    Map,
  },
}
</script>

<style scoped>
    .navBarMargin {
        margin-top: 75px;
    }
</style>