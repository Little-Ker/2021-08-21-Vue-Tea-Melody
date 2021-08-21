<template>
  <div class="shpoPoint">
      <div class="navBarMargin"></div>
      <h1>門市據點</h1>
      <p>SHOP Point</p>
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
    .shpoPoint {
        width: 100%;
        height: 100%;
        z-index: -10;
    }

    .navBarMargin {
        margin-top: 75px;
    }

    .shpoPoint h1 {
      font-family: 'simsun';
      margin-top: 130px;
    }

    .shpoPoint p {
      font-family: 'simsun';
      margin-bottom: 50px;
      letter-spacing: 3px;
    }

    .shpoPoint p::before {
      content: '';
      display: inline-block;
      width: 45px;
      height: 1px;
      background: #918c85;
      transform: translateY(-4px);
      margin-right: 35px;
    }

    .shpoPoint p::after {
      content: '';
      display: inline-block;
      width: 45px;
      height: 1px;
      background: #918c85;
      transform: translateY(-4px);
      margin-left: 35px;
    }
</style>