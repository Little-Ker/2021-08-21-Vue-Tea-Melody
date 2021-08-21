<template>
  <div class="home">
    <div class="navBg">
      <div id="nav">
          <div class="logo" @click='reover'>
            <img src="../assets/nav/logo.png" alt="">
          </div>
          <div class="rightWrap">
            <div v-for='(item,index) in navList' :key='index' class="link">
              <router-link @click="goTop" :to='item.path' class="nav-item">
                <img class='overHover' :src='item.icon' alt="">
                <img class='showHover' :src='item.iconHover' alt="">
                <p>{{item.title}}</p>
              </router-link>
            </div>
            <MobileMenu />
            <div @click="clickMenuFn" class="menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
          </div>
      </div>
    </div>
    <Loading />
    <ShoppingCar />
    <NewsPage />
    <router-view></router-view>
    <Footer/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;
// @ is an alias to /src
import Loading from '@/components/Loading.vue'
import Footer from '@/components/Footer.vue'
import NewsPage from '@/components/NewsPage.vue'
import ShoppingCar from '@/components/ShoppingCar.vue'
import MobileMenu from '@/components/MobileMenu.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    Loading,
    NewsPage,
    ShoppingCar,
    MobileMenu
  },
  data() {
    return {
      navList: [
        { path:'/about', title:'關於我們' ,icon: require('../assets/nav/home1.png'), iconHover: require('../assets/nav/home2.png') },
        { path:'/news', title:'最新消息' ,icon: require('../assets/nav/news1.png'), iconHover: require('../assets/nav/news2.png') },
        { path:'/shop', title:'飲品訂購' ,icon: require('../assets/nav/drink1.png'), iconHover: require('../assets/nav/drink2.png') },
        { path:'/shopPoint', title:'門市據點' ,icon: require('../assets/nav/point1.png'), iconHover: require('../assets/nav/point2.png') },
        { path:'/order', title:'購物清單' ,icon: require('../assets/nav/contact1.png'), iconHover: require('../assets/nav/contact2.png') }
      ]
    }
  },
  computed:{
    isShowMenu: {
        get() {
            return this.$store.state.isShowMenu;
        },
        set(val) {
            return this.$store.commit('SetIsShowMenu',val);
        }
    },
    isHideShoppingCar: {
        get() {
            return this.$store.state.isHideShoppingCar;
        },
        set(val) {
            return this.$store.commit('SetIsHideShoppingCar',val);
        }
    },
  },
  methods: {
    goTop() {
        $('html,body').scrollTop(0, 0);
        // $('html,body').animate({ scrollTop: 0 }, 'slow');
    },
    clickMenuFn() {
      this.isShowMenu = !this.isShowMenu;
    },
    // 禁用滾動條
    stopScrollBar() {
        var tops = $(document).scrollTop();
        $(document).bind("scroll",function (){$(document).scrollTop(tops); });
    },
    startScrollBar() {
        $(document).unbind("scroll");
    }
    // reover() {
      // console.log(11);
      // const str = document.querySelector('.overHover')
      // console.log('str',str);
      // document.querySelector('#main2').removeChild(str);
    // }
    
    // addText() {
    //   var str = document.createElement('div');
    //   document.querySelector('.logo').appendChild(str);
    //   str.innerHTML = '<h1 class="blue">1234</h1>'
    // }
  },
  watch: {
    isShowMenu() {
      $('.menu-btn').toggleClass('showMenu');
      if (this.isShowMenu) {
        this.isHideShoppingCar = true;
        this.stopScrollBar()
        return;
      }
      this.startScrollBar();
      this.isHideShoppingCar = false;
    }
  }
}
// $("#img_keleyi_com").attr("src", "http:///keleyi/phtml/picnext/images/k03.jpg");
</script>

<style scoped>
  *{
    text-decoration: none;
    box-sizing: content-box;
    padding: 0;
    margin: 0;
  }

  .navBg {
    width: 100%;
    height: 75px;
    background-color: #fff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.19);
    position: fixed;
    top: 0;
    z-index: 99;  
  }

   .menu-btn {
     cursor: pointer;
     display: none;
     position: relative;
     width: 40px;
     height: 50px;
     top: 10px;
     z-index: 99;
   }

  .menu-btn span {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #2c3e50;
    top: 0;
    right: 0;
    transition: .3s;
  }

  .menu-btn span:nth-child(1) {
    top: calc(50% - 12px)
  }

  .menu-btn span:nth-child(2) {
    width: 80%;
    top: 50%;
  }

  .menu-btn span:nth-child(3) {
    top: calc(50% + 12px)
  }

  .showMenu span:nth-child(1) {
    transform: rotate(45deg);
    top: 50%;
    background-color: #fff;
  }

  .showMenu span:nth-child(3) {
    transform: rotate(-45deg);
    top: 50%;
    background-color: #fff;
  }

  .showMenu span:nth-child(2) {
    opacity: 0;
  }

  #nav {
    max-width: 1160px;
    margin: auto;
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
  }

  .rightWrap {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  .logo {
    width: 150px;
    margin: 7px 0px;
  }

  .logo img {
    width: 140px;
  }

  .nav-item {
    text-align: center;
    width: 100px;
    display: block;
    margin: 2px 0px 0px -12px;
    padding: 10px 0px;
    display: flex;
    justify-content: flex-end;
  }

  .nav-item img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    margin-top: -5px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .link {
    height: 50px;
    position: relative;
    padding-top: 15px;
    margin-left: 40px;
  }

  .link img {
    position: absolute;
    left:-10px
  }

  .showHover {
    opacity: 0;
  }

  .nav-item:hover .showHover{
    opacity: 1;
  }

 .nav-item:hover p{
   transition: .3s;
    color: #42b983;
  }

  #nav a.router-link-exact-active .showHover {
    opacity: 1;
  }

  @media (max-width: 900px) {
      .menu-btn {
        display: block;
      }

      .link {
        display: none;
      }
  }

</style>
