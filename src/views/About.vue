<template>
  <div class="about">
    <Slide />
    <AboutText/>
    <!-- <h1>This is an about page</h1> -->
  </div>
</template>

<script>
import Slide from '@/components/Slide.vue'
import AboutText from '@/components/AboutText.vue'

export default {
  name: 'About',
  components: {
    Slide,
    AboutText
  },
}
</script>

<style scoped>

</style>