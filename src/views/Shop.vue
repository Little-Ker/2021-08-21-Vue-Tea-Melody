<template>
  <div class="shop">
      <div class="navBarMargin"></div>
      <h1>飲品訂購</h1>
      <p>PRODUCT</p>
      <div class="marginTop"></div>
      <Popular />
      <div class="marginTop"></div>

      <div class="stickyNav"><DrinkList /></div>
  </div>
</template>

<script>
import Popular from '@/components/Popular.vue'
import DrinkList from '@/components/DrinkList.vue'

export default {
  name: 'Shop',
  components: {
    Popular,
    DrinkList
  },
}
</script>

<style scoped>
  .stickyNav {
      position: sticky;
      bottom: 0;
  }

    .Shop {
        width: 100%;
        height: 100%;
        /* background-image: url('../assets/bg/bg.png'); */
        z-index: -10;
    }

    .navBarMargin {
        margin-top: 75px;
    }

    .marginTop {
        margin-top: 80px;
    }

    .marginBottom {
      margin-top: 130px;
    }

    .shop h1 {
      font-family: 'simsun';
      margin-top: 130px;
    }

    .shop p {
      font-family: 'simsun';
      margin-bottom: 30px;
      letter-spacing: 2px;
    }

    .shop p::before {
      content: '';
      display: inline-block;
      width: 45px;
      height: 1px;
      background: #918c85;
      transform: translateY(-4px);
      margin-right: 30px;
    }

    .shop p::after {
      content: '';
      display: inline-block;
      width: 45px;
      height: 1px;
      background: #918c85;
      transform: translateY(-4px);
      margin-left: 30px;
    }

@media (max-width: 720px) {
    .wrap {
        display: block;
    }

    .textColumn {
        margin-right: 0px;
    }
}
</style>