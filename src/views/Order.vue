<template>
    <div class="order">
        <div class="navBarMargin"></div>
        <h1>購物清單</h1>
        <p>SHOPPING LIST</p>
        <!-- <div class="marginTop"></div> -->
        <div class="listContainer">
            <TimeLine />
            <div v-if="shoppingCarList.length !== 0">
              <CreateOrder />
            </div>
            <div v-if="shoppingCarList.length === 0">
              <OrderNull />
            </div>
        </div>
      
       
    <!-- <div>
      <router-link :to="{name: 'Slide'}">Info</router-link> | 
      <router-link :to="{name: 'AboutText'}">Img</router-link>
    </div>
    <router-view></router-view> -->

    <!-- <Slide />
    <AboutText/> -->
    <!-- <h1>This is an about page</h1> -->
  </div>
</template>

<script>
import TimeLine from '@/components/TimeLine.vue'
import CreateOrder from '@/components/CreateOrder.vue'
import OrderNull from '@/components/OrderNull.vue'

export default {
  name: 'Order',
  components: {
    TimeLine,
    CreateOrder,
    OrderNull
  },
  computed: {
    shoppingCarList() {
        return this.$store.state.shoppingCarList;
    },
  }
}
</script>

<style scoped>
    .navBarMargin {
        margin-top: 75px;
    }

    .marginTop {
        margin-top: 50px;
    }

    .listContainer {
        margin-top: 50px;
        background: #f8f8f8;
        width: 100%;
        min-height: 500px;
        border-top: 1px solid #e1e1e1;
    }

    .order h1 {
      font-family: 'simsun';
      margin-top: 130px;
    }

    .order p {
      font-family: 'simsun';
      margin-bottom: 30px;
      letter-spacing: 2px;
    }

    .order p::before {
      content: '';
      display: inline-block;
      width: 45px;
      height: 1px;
      background: #918c85;
      transform: translateY(-4px);
      margin-right: 30px;
    }

    .order p::after {
      content: '';
      display: inline-block;
      width: 45px;
      height: 1px;
      background: #918c85;
      transform: translateY(-4px);
      margin-left: 30px;
    }
</style>