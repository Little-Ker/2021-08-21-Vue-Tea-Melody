<template>
  <div class="news">
      <div class="navBarMargin"></div>
      <div class="banner"></div>

      <h1>News</h1>
      <NewsList />
      
    <!-- <Slide />
    <AboutText/> -->
    <!-- <h1>This is an about news</h1> -->
  </div>
</template>

<script>
import NewsList from '@/components/NewsList.vue'

export default {
  name: 'News',
  components: {
    NewsList
    // AboutText
  },
}
</script>

<style scoped>
    .navBarMargin {
        margin-top: 75px;
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