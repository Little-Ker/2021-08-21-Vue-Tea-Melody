<template>
  <div class="news">
      <div class="navBarMargin"></div>
      <div class="banner"></div>

      <h1>News</h1>
      <NewsList />
  </div>
</template>

<script>
import NewsList from '@/components/NewsList.vue'

export default {
  name: 'News',
  components: {
    NewsList,
  },
}
</script>

<style scoped>
    .navBarMargin {
        margin-top: 75px;
    }

    /* .news {
        width: 100%;
        height: 100%;
        background-image: url('../assets/bg/bg02.jpg');
        z-index: -10;
    } */

    .news {
        width: 100%;
        height: 100%;
        background-image: url('../assets/about/aboutBg.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        z-index: -10;
    }

    .banner {
        /* width: 100%; */
        background-color: #aff;
        height: 450px;
        background-image: url('../assets/news/pic1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        /* background-size: contain; */
         background-position:55% 50%;
        background-attachment: fixed;
    }
</style>