<template>
    <div class="popular">
        <h3>熱門推薦</h3>
        <div class="slider">
            <div class="button leftBtn">left</div>
            <div class="moveSlide">
                <div @mousedown="dragDown($event, index)" @mousemove="dragMove($event)" @mouseup="dragUp" @mouseout="dragUp" v-for="(index) in ary" :key="index" :class="`item item${index}`" :style="`left:${leftPos*index}px`">
                <img src="https://images.deliveryhero.io/image/fd-tw/Products/3059644.jpg?width=600" alt="">
                <div class="text">
                    <div class="name"><b>{{index}}巴黎天空冰沙</b></div>
                    <div class="price">$55</div>
                </div>
            </div>
            </div>
            
            <div class="clearfix"></div>
            <div class="button leftBtn">right</div>
        </div>
    </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers'
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'Popular',
    data() {
        return {
            slideWidth: 1280,
    
            isDrag: false,
            leftPos: 300,
            oldPosX: 0,
            newPosX: 0,
            moveSpeed: 350,
            isMoveing: false,

            isPlaying: false,
            pageIndex: 0,
            
            ary: [0,1,2,3,4, 5]
        }
    },
    computed: {
        // isShowLoading: {
        //     get() {
        //         return this.$store.state.isShowLoading;
        //     },
        //     set(val) {
        //         return this.$store.commit('SetShowLoading',val);
        //     }
        // },
    },
    methods: {
        // pauseAnim() {
        //     console.log('hover')
        //     // for (let i = 0; i < this.ary.length; i++) {
        //     //     // $(`.item${i}`).animate('pause');
        //     // }
        // },
        // 幻燈片自動換位
        slideMoveAnim() {
            for (let i = 0; i < this.ary.length; i++) {
                this.changeIndex(i);
            }
        },
        changeIndex(i) {
            let isPlay = false;
            let oriLeftPos = $(`.item${i}`).css('left').slice(0, -2);
            if (Number(oriLeftPos) <= -250) {
                $(`.item${i}`).css('left',`${250 * (this.ary.length - 1)}px`);
            }
            oriLeftPos = $(`.item${i}`).css('left').slice(0, -2);
            $(`.item${i}`).animate({left:`${oriLeftPos -250}px`}, 10000, 'linear', () => {
                $(`.item${i}`).css('left',`${oriLeftPos -250}px`);       
                if (!isPlay) {
                    isPlay = true;
                    $(`.item${i}`).stop(true,true);
                    this.changeIndex(i)
                }       
            });
        },
        // 幻燈片左右滑動
        getPosX(event){
            return event.clientX;
        },
        moveSlider(dir) {
            let transform = $('.moveSlide').css('transform')
            let transformMatrix = transform.slice(7, transform.length - 1).split(', ')[4];

            if ((Number(transformMatrix) === 0 && dir > 0) || (Number(transformMatrix) < (this.slideWidth * dir) && dir < 0)) {
                this.moveSpeed = 50
            }

            $('.moveSlide').css('transform', `translateX(${Number(transformMatrix) + (this.moveSpeed * dir)}px)`);
            let timeout = setTimeout(() => {
                clearTimeout(timeout);
                this.isMoveing = false;
                let transform = $('.moveSlide').css('transform')
                let transformMatrix = transform.slice(7, transform.length - 1).split(', ')[4];
                if (Number(transformMatrix) > 0 && dir > 0) {
                    $('.moveSlide').css('transform', 'translateX(0px)');
                }
                if ((Number(transformMatrix) < (this.slideWidth * dir) > 0) && dir < 0) {
                    $('.moveSlide').css('transform', `translateX(${this.slideWidth * dir - 110}px)`);
                }
            }, 300);   
        },
        dragMove(event) {
            if (!this.isDrag) return;
            this.isMoveing = true;
            console.log('move');
                this.newPosX = this.getPosX(event);

                $('.item').css('pointer-events','none'); 
                $('.item').css('user-select','none'); 

                if (this.newPosX > this.oldPosX) {
                    console.log('右移');
                    this.moveSlider(1);
                }
                if (this.newPosX < this.oldPosX) {
                    this.moveSlider(-1);
                    console.log('左移');
                }
        },
        dragUp() {
            if (!this.isDrag) return;
            console.log('up');
            this.isDrag = false;
            $('.item').css('pointer-events','auto'); 
            $('.item').css('user-select','auto');
        },
        dragDown(event, index){
            console.log('down');
            this.isDrag = true;
            this.oldPosX = this.getPosX(event);

            let timeout = setTimeout(() => {
                clearTimeout(timeout);
                this.newPosX = this.getPosX(event);
                if (!this.isMoveing) {
                    this.isDrag = false;
                    console.log('click', index);
                    return;
                }
            }, 150);
        },
        resize() {
            let slideBgWidth = $('.slider').width();
            this.slideWidth = slideBgWidth;
            if (slideBgWidth > 280) slideBgWidth = 280;
            this.slideWidth = (slideBgWidth*this.ary.length) - ((this.slideWidth / slideBgWidth ) * slideBgWidth)

            if (this.isMoveing) return;
            this.leftPos = slideBgWidth + 20;
            this.moveSpeed = slideBgWidth + 20;
            for (let i = 0; i < this.ary.length; i++) {
                $(`.item${i}`).css('width',`${slideBgWidth}px`);
                $(`.item${i}`).css('height',`${slideBgWidth + 10}px`);
            }
        },
        createTimer() { 
            let timer = 500;
            this.clock = setInterval(() => {
                this.resize();
            }, timer)
        },
        clearClock() {
            clearInterval(this.clock);
            this.clock = null
        }
        // // 禁用滾動條
        // stopScrollBar() {
        //     var tops = $(document).scrollTop();
        //     $(document).bind("scroll",function (){$(document).scrollTop(tops); });
        // },
        // startScrollBar() {
        //     $(document).unbind("scroll");
        // }
    },
    mounted() {
        this.resize();
        this.createTimer();
    },
    watch: {
        // isShowLoading() {
        //     if (!this.isShowLoading) return;
        //     this.stopScrollBar();

        //     let randomSec = this.createRandom(500, 1500)
        //     this.timeout = setTimeout(() => {
        //         this.startScrollBar();
        //         this.isShowLoading = false;
        //         clearTimeout(this.timeout);
        //     }, randomSec);
        // }
    },
    beforeUnmount() {
      this.clearClock();
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.clearfix  {
    clear: both;
}

.button {
    position: absolute;
}

.popular {
    max-width: 1280px;
    width: 80%;
    height: 360px;
    margin: auto;
}

.slider {
    overflow: hidden;
    /* display: flex; */
    justify-content: center;
    position: relative;
    height: 100%;
    width: 100%;
    cursor: pointer;
}

.slider:after {
    right: 0;
    background: linear-gradient(-90deg, rgb(255, 255, 255), transparent);
}

.slider:before {
    left: 0;
    background: linear-gradient(90deg, rgb(255, 255, 255), transparent);
}

.slider:before, .slider:after {
    content: "";
    position: absolute;
    top: 0;
    z-index: 1;
    display: block;
    width: 10px;
    height: 240px;
}

.moveSlide {
    height: 100%;
    width: 100%;
    transition: .3s;
    transform: translateX(0px);
}

.item {
    max-width: 280px;
    max-height: 255px;
    width: 280px;
    height: 255px;
    border: 1px solid #ccc;
    margin: 5px;
    position: absolute;
    top: 0;
    left: 0;
}

.item img {
    width: 100%;
}

.text {
    padding: 10px;
    display: flex;
    justify-content: space-between;
}

.text .price {
    margin-top: 3px;
}

</style>
