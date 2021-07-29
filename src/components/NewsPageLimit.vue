<template>
  <div class="newsPageLimit">
    <ul>
        <li>
            <div @click="addPage(-1)" v-if="newsPageIndex !== 1" class="block">
                <div class="leftBtn btn"></div>
            </div>
        </li>
        <li @click="choosePage(index + 1)" v-for="(item, index) in getTotalPage" :key="index">
            <div class="block">
                <div class="num"><p>{{index + 1}}</p></div>         
            </div>
        </li>
        <li>
            <div @click="addPage(1)" v-if="newsPageIndex !== getTotalPage" class="block">
                <div class="rightBtn btn"></div>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
  name: 'NewsPageLimit',
  computed: {
      getChooseNewsNum() {
          return this.$store.state.chooseNewsData.length;
      },
      newsPageIndex: {
          get() {
            return this.$store.state.newsPageIndex;
          },
          set(val) {
            return this.$store.commit('SetChooseNewsPageIndex',val);
          }
      },
      getTotalPage() {
          const count = this.$store.state.oncePageNewsCount;
          const addPage = ((this.getChooseNewsNum % count) !== 0) ? 1 : 0;
          const totalPage = Math.floor((this.getChooseNewsNum / count) + addPage);
          return totalPage;
      },
      chooseNewsType() {
          return this.$store.state.chooseNewsType;
      }
  },
  methods: {
      choosePage(num) {
          this.newsPageIndex = num;
      },
      addPage(num) {
        this.newsPageIndex = this.newsPageIndex + num;
      },
      showIndexBtn() {
          $('.block').removeClass('chooseIndexBg');
          $('.block p').removeClass('chooseIndexColor');
          $(`ul li:nth-child(${this.newsPageIndex + 1}) .block`).addClass('chooseIndexBg');
          $(`ul li:nth-child(${this.newsPageIndex + 1}) p`).addClass('chooseIndexColor');
      }
  },
  mounted() {
      this.timeout = setTimeout(() => {
         this.showIndexBtn();
         clearTimeout(this.timeout);
      }, 500);
  },
  watch: {
      chooseNewsType() {
          this.newsPageIndex = 1;
          this.showIndexBtn();
      },
      newsPageIndex() {
          this.showIndexBtn();
      }
  }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: "微軟正黑體","Microsoft JhengHei","MHei","STHeitiTC-Light",sans-serif,Arial,Helvetica,"Helvetica Neue",Tahoma,Verdana;
}

.chooseIndexBg {
    background-color: #8bc672;
}

.chooseIndexColor {
    color: #fff;
}

.newsPageLimit {
    padding-top: 30px;
    padding-bottom: 50px;
}

ul {
    display: flex;
    justify-content: center;
    align-items: center;
}

li {
    width: 38px;
    height: 38px;
    margin: 0px 5px;
}

.block {
    cursor: pointer;
    width: 38px;
    height: 38px;
    line-height: 37px;
    color: #8bc672;
    border-radius: 50%;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    transition: .3s;
}

.block:hover {
    color: #fff;
    background-color: #8bc672;
}

.block:hover .btn {
    border-color: #fff;
}

.btn {
    width: 13px;
    height: 13px;
    border: 3px solid #8bc672;
    transform: rotate(45deg);
    position: absolute;
}

.leftBtn {
    border-top: 0;
    border-right: 0;
    left: 14px;
    top: 12px;
}

.rightBtn {
    border-left: 0;
    border-bottom: 0;
    left: 10px;
    top: 12px;
}

</style>
