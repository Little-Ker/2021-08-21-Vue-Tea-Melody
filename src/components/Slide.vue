<template>
<!-- slide -->
  <div class="slide navBarMargin" @mouseleave = 'createTimer' @mouseover = 'clearClock'>
      <div class="sildeImg" v-for='(item, index) in imgAry' :key="index">
          <img :class='item.className' :src="item.imgName" alt="">
      </div>
      <div class="pre" @click='changeIndex(-1)'>
        <a class="arrow">
          <div class="block leftBlock"></div>
        </a>
      </div>
      <div class="next" @click='changeIndex(1)'>
        <a class="arrow">
          <div class="block rightBlock"></div>
        </a>
      </div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers'
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
  name: 'Slide',
  data() {
    return {
      pageIndex: 0,
      imgAry: [
        { className: 'img0', imgName: require('../assets/about/p01.jpg') },
        { className: 'imgPos img1', imgName: require('../assets/about/p02.jpg') },
        { className: 'imgPos img2', imgName: require('../assets/about/p03.jpg') }
      ],
    }
  },
  methods: {
    createTimer() { 
      let timer = 5000;
      this.clock = setInterval(() => {
        this.changeIndex(1)
      }, timer)
    },
    clearClock() {
      clearInterval(this.clock);
      this.clock = null
    },
    changeIndex(num) {
      let oldIndex = this.pageIndex;
      let length = this.imgAry.length - 1;
      this.pageIndex = this.pageIndex + num;
      if (this.pageIndex < 0) {
        this.pageIndex = (length);
      } else if (this.pageIndex > (length)) {
        this.pageIndex = 0;
      }
      this.fadeOut(oldIndex, this.pageIndex);
    },
    fadeOut(oldIndex, newIndex) {
      this.clearImgClass();
      $(`.img${oldIndex}`).addClass('fadeOut');
      $(`.img${newIndex}`).addClass('fadeIn');
    },
    clearImgClass() {
      for (let i = 0; i < this.imgAry.length; i++) {
        $(`.img${i}`).removeClass('fadeOut');
        $(`.img${i}`).removeClass('fadeIn');
      }
    }
  },
  mounted() {
    this.createTimer();
  },
  beforeUnmount() {
      this.clearClock();
  },
}
</script>

<style scoped>

  * {
    padding: 0;
    margin: 0;
    box-sizing: content-box;
  }

  /* 淡入淡出 */

  .imgPos {
    opacity: 0;
    position: absolute;
    top: 0;
  }

  .fadeIn {
    opacity: 1;
  }

  .fadeOut {
    opacity: 0;
  }

  .navBarMargin {
        margin-top: 75px;
    }

  .slide {
    position: relative;
  }

  img {
    display: block;
    width: 100%;
    min-height: 320px;
    object-fit: cover;
    vertical-align: bottom;
    transition: 1s;
  }

  .next {
    right: 0;
  }

  .pre, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -25px;
    padding: 0px 16px;
    color: rgb(255, 255, 255);
    transition: .6s;
  }

  .arrow {
    display: block;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    opacity: 0.5;
    transition: .3s ease;
  }

  .arrow:hover {
    opacity: 0.7;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .block {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-top: 3px solid #656565;
    border-right: 3px solid #656565;
  }

  .leftBlock {
    transform: rotate(225deg);
  }

  .rightBlock {
    transform: rotate(45deg);
  }
</style>
