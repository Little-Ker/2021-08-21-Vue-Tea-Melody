<template>
  <div class="news">
      <div class="navBarMargin"></div>
      <div class="banner"></div>

      <h1>最新消息</h1>
      <p>NEWS</p>
      <NewsList />
      <NewsPageLimit />
  </div>
</template>

<script>
import NewsList from '@/components/NewsList.vue'
import NewsPageLimit from '@/components/NewsPageLimit.vue'

export default {
  name: 'News',
  components: {
    NewsList,
    NewsPageLimit
  },
}
</script>

<style scoped>
    .navBarMargin {
        margin-top: 75px;
    }

    .news {
        width: 100%;
        height: 100%;
        background-image: url('../assets/bg/bg02.jpg');
        z-index: -10;
    }

    .news p {
      letter-spacing: 3px;
    }

    .news p::before {
      content: '';
      display: inline-block;
      width: 50px;
      height: 1px;
      background: #918c85;
      transform: translateY(-4px);
      margin-right: 35px;
    }

    .news p::after {
      content: '';
      display: inline-block;
      width: 50px;
      height: 1px;
      background: #918c85;
      transform: translateY(-4px);
      margin-left: 35px;
    }

    /* .news {
        width: 100%;
        height: 100%;
        background-image: url('../assets/about/aboutBg.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        z-index: -10;
    } */

    .banner {
        /* width: 100%; */
        /* background-color: #fff; */
        height: 450px;
        background-image: url('../assets/news/pic1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        /* background-size: contain; */
         background-position:55% 50%;
        background-attachment: fixed;
    }
</style>