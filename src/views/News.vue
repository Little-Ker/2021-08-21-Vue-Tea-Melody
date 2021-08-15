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
        z-index: -10;
    }

    .news h1 {
      font-family: 'simsun', 'A-OTF';
      margin-top: 55px;
    }

    .news p {
      font-family: 'simsun';
      margin-bottom: 60px;
      letter-spacing: 2px;
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

    .banner {
        height: 450px;
        background-image: url('../assets/news/pic1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position:55% 50%;
        background-attachment: fixed;
    }

    @media (max-width: 910px) {
        .banner {
            background-position: 35% 50%;
        }
    }

    @media (max-width: 800px) {
        .banner {
            background-position: 40% 50%;
        }
    }
</style>