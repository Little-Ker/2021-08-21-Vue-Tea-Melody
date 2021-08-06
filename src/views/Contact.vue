<template>
  <div class="contact">
      <div class="navBarMargin"></div>
      <h1>聯絡我們</h1>
      <p>CONTACT US</p>
      <div class="marginTop"></div>
      <div class="wrap">
         <ContactUs />
         <ContactForm />
      </div>
      <div class="marginTop"></div>
  </div>
</template>

<script>
import ContactUs from '@/components/ContactUs.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'Contact',
  components: {
    ContactUs,
    ContactForm
  },
}
</script>

<style scoped>
    .contact {
        width: 100%;
        height: 100%;
        /* background-image: url('../assets/bg/bg.png'); */
        z-index: -10;
    }

    .navBarMargin {
        margin-top: 75px;
    }

    .marginTop {
        margin-top: 80px;
    }

    .wrap {
      display: flex;
      justify-content: center;
      max-width: 1280px;
      margin: auto;
    }

    .contact h1 {
      font-family: 'simsun';
      margin-top: 130px;
    }

    .contact p {
      font-family: 'simsun';
      margin-bottom: 30px;
      letter-spacing: 2px;
    }

    .contact p::before {
      content: '';
      display: inline-block;
      width: 45px;
      height: 1px;
      background: #918c85;
      transform: translateY(-4px);
      margin-right: 30px;
    }

    .contact p::after {
      content: '';
      display: inline-block;
      width: 45px;
      height: 1px;
      background: #918c85;
      transform: translateY(-4px);
      margin-left: 30px;
    }

@media (max-width: 720px) {
    .wrap {
        display: block;
    }

    .marginTop {
      margin-top: 50px;
    }

    .textColumn {
        margin-right: 0px;
    }
}
</style>