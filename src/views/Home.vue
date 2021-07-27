<template>
  <div class="home">
    <div class="navBg">
      <div id="nav">
          <div class="logo" @click='reover'>
            <img src="../assets/nav/logo.png" alt="">
          </div>
          <div class="rightWrap">
            <div @mouseover='hover' v-for='(item,index) in navList' :key='index' class="link">
              <router-link :to='item.path' class="nav-item">
                <img class='overHover' :src='item.icon' alt="">
                <img class='showHover' :src='item.iconHover' alt="">
                <p>{{item.title}}</p>
              </router-link>
            </div>
          </div>
      </div>
    </div>
    <Loading />
    <router-view></router-view>
    <Footer/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from '@/components/Loading.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    Loading
  },
  data() {
    return {
      navList: [
        { path:'/about', title:'關於我們' ,icon: require('../assets/nav/home1.png'), iconHover: require('../assets/nav/home2.png') },
        { path:'/news', title:'最新消息' ,icon: require('../assets/nav/news1.png'), iconHover: require('../assets/nav/news2.png') },
        { path:'/about', title:'飲品訂購' ,icon: require('../assets/nav/drink1.png'), iconHover: require('../assets/nav/drink2.png') },
        { path:'/about', title:'門市據點' ,icon: require('../assets/nav/point1.png'), iconHover: require('../assets/nav/point2.png') },
        { path:'/about', title:'聯絡我們' ,icon: require('../assets/nav/contact1.png'), iconHover: require('../assets/nav/contact2.png') }
      ]
    }
  },
  methods: {
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

  #nav {
    max-width: 1160px;
    margin: auto;
    width: 100%;
    padding: 0px 10px;
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
    margin: 7px 20px;
  }

  .nav-item {
    text-align: center;
    width: 100px;
    display: block;
    margin: 2px 20px 0px 7px;
    padding: 10px 0px;
    display: flex;
    justify-content: center;
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
    /* border: 1px solid #000; */
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

</style>
