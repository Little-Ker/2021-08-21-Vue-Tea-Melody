<template>
    <div @click="closeNews" v-if="isShowOverlay" class="newsPage">
        <transition @after-leave='afterLeaveFn' name='bounce' appear>
            <div @click="closeNews" v-if="isShowNews" class="newsBg">
                <div @click="closeNews" class="closeBtn">
                    <div class="cross"></div>
                </div>
                <div class="editor">
                    <div class="title"><p>{{showChooseNews.title}}</p></div>
                    <div class="date">
                        <div class="greenBlock"></div>
                        <p>{{showChooseNews.date}}</p>
                    </div>
                    <div class="text">
                        {{showChooseNews.content}}
                    </div>
                </div>
                <img :src="showChooseNews.img" alt="">
            </div>
        </transition>
    </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'NewsPage',
    data() {
        return {
            isShowNews: false
        }
    },
    computed: {
        isShowOverlay: {
            get() {
                return this.$store.state.isShowOverlay;
            },
            set(val) {
                return this.$store.commit('SetShowOverlay',val);
            }
        },
        newsData() {
            return this.$store.state.newsData;
        },
        chooseNewsIndex() {
            return this.$store.state.chooseNewsIndex;
        },
        showChooseNews() {
            return this.newsData.filter(item => {
                return item.id === this.chooseNewsIndex
            })[0];
        },
    },
    methods: {
        showNews() {
            this.stopScrollBar();
            this.isShowNews = true
            var tops = $(document).scrollTop();
            $(document).bind("scroll",function (){$(document).scrollTop(tops); });
        },
        closeNews() {
            this.isShowNews = false
            $(document).unbind("scroll");
        },
        afterLeaveFn() {
            this.startScrollBar();
            this.isShowOverlay = false;
        },
        // 禁用滾動條
        stopScrollBar() {
            var tops = $(document).scrollTop();
            $(document).bind("scroll",function (){$(document).scrollTop(tops); });
        },
        startScrollBar() {
            $(document).unbind("scroll");
        }
    },
    watch: {
        isShowOverlay() {
            if (this.isShowOverlay) this.showNews();
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: left;
    font-family: "CenturyGothicRegular","微軟正黑體","Microsoft JhengHei","MHei","STHeitiTC-Light",sans-serif,Arial,Helvetica,"Helvetica Neue",Tahoma,Verdana;
}

/* 進出場動畫 */
.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: flyDown-in .5s reverse;
}

.text {
    line-height: 26px;
    margin: 10px 0px;
}

.title p {
    font-size: 28px;
    margin-bottom: 10px;
}

.date .greenBlock {
    width: 4px;
    height: 25px;
    margin: 0px 12px 0px 2px;
    background-color: #42b983;
}

.date {
    display: flex;
    align-items: center;
}

img {
    width: 100%;
    margin-bottom: 5px;
}

.closeBtn {
    cursor: pointer;
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: .3s;
}

.closeBtn:hover {
    background-color: rgba(204, 204, 204, 0.404);
}

.cross {
    position: absolute;
    top: 24px;
    left: 11px;
    width: 30px;
    height: 3px;
    background-color: #666;
    transform: rotate(45deg);
    border-radius: 20px;
}

.cross::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: #666;
    transform: rotate(90deg);
    border-radius: 20px;
}

.newsBg {
    max-width: 640px;
    max-height: 720px;
    width: 100%;
    height: 80%;
    padding: 3% 5%;

    background-color: #fff;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 12px;
    
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.newsPage {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 460px) {
    .newsBg {
        height: 75%;
    }
}

</style>
