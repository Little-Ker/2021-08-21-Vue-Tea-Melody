<template>
    <div class="about">
    <Slide />
    <div class="marginTop"></div>
    <img class='leavesHeigh' src="../assets/about/leave.png" alt="">
    <AboutText/>
    <div class="marginTop"></div>
    <div class="bgGray">
       <div class="marginTop"></div>
        <div class="wrap">
          <div class="bgText">聯絡:</div>
          <ContactUs />
          <div class="marginTop"></div>
          <ContactForm />
        </div>
    </div>
  </div>
</template>

<script>
import Slide from '@/components/Slide.vue'
import AboutText from '@/components/AboutText.vue'
import ContactUs from '@/components/ContactUs.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'About',
  components: {
    Slide,
    AboutText,
    ContactUs,
    ContactForm
  },
}
</script>

<style scoped>

.bgGray {
  padding-top: 50px;
  background-color: #f8f8f8;
}

.bgText {
    font-family: A-OTF;
    writing-mode: vertical-rl;
    font-size: 90px;
    position: absolute;
    opacity: 0.15;
    left: 50px;
    top: -95px;
    letter-spacing: 10px;
}

.marginTop {
    margin-top: 100px;
}

.leavesHeigh {
    opacity: 0.6;
    position: relative;
    width: 5%;
    max-width: 65px;
    min-width: 50px;
    z-index: 2;
}

.wrap {
    position: relative;
    max-width: 1280px;
    margin: auto;
}

@media (max-width: 720px) {
    .marginTop {
        margin-top: 50px;
    }

    .bgText {
        right: 0;
    }
}

</style>