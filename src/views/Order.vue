<template>
    <div class="order">
        <div class="navBarMargin"></div>
        <h1>購物清單</h1>
        <p>SHOPPING LIST</p>
        <!-- <div class="marginTop"></div> -->
        <div class="listContainer">
            <TimeLine />
            <div v-if="shoppingCarList.length !== 0 && orderLevel === 1">
              <CreateOrder />
            </div>
            <div v-if="(shoppingCarList.length === 0) || (orderLevel === 3)">
              <OrderMessage />
            </div>
            <div v-if="orderLevel === 2">
              <OrderContact />
            </div>
            <!-- <ChooseDate /> -->
            <!-- <div v-if="orderLevel === 3">
              <OrderComplete />
            </div> -->
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
import OrderMessage from '@/components/OrderMessage.vue'
import OrderContact from '@/components/OrderContact.vue'
// import ChooseDate from '@/components/ChooseDate.vue'

export default {
  name: 'Order',
  components: {
    TimeLine,
    CreateOrder,
    OrderMessage,
    OrderContact,
    // ChooseDate
  },
  computed: {
    shoppingCarList: {
        get() {
            return this.$store.state.shoppingCarList;
        },
        set(val) {
            return this.$store.commit('SetShoppingCarList',val);
        }
    },
    orderLevel() {
        return this.$store.state.orderLevel;
    },
    isHideShoppingCar: {
        get() {
            return this.$store.state.isHideShoppingCar;
        },
        set(val) {
            return this.$store.commit('SetIsHideShoppingCar',val);
        }
    }
  },
  methods: {
      resetList() {
          if (this.orderLevel === 3) {
              this.shoppingCarList = [];
          }
          this.orderLevel = 1;
      }
  },
  unmounted() {
    this.isHideShoppingCar = false;
    this.resetList();
  },
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