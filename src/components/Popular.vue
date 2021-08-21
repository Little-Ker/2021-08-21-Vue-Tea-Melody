<template>
    <div class="popular">
        <div class="title">
            <h3>熱門推薦</h3>
            <p>Popular Recommendation</p>
        </div>
        <div class="slider">
            <div class="moveSlide">
                <div @mousedown="dragDown($event, item.id)" @mousemove="dragMove($event)" @mouseup="dragUp" @mouseout="dragUp"
                     @touchstart="dragDown($event, item.id)" @touchmove="dragMove($event)" @touchend="dragUp"
                     v-for="(item, index) in popularAry" :key="index" :class="`item item${index}`" :style="`left:${leftPos*index}px;`">
                    <img :src='item.imgUrl' alt="">
                    <div class="text">
                        <div class="name">
                            <p><b>{{item.drinkName}}</b></p>
                        </div>
                        <div class="price">
                            <p>${{item.price}}</p>
                            <div class="addBtn"><b>+</b></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div @click="moveSlider(1)" v-if="!isSlideRight" class="leftBtn"></div>
        <div @click="moveSlider(-1)" v-if="isSlideRight" class="rightBtn"></div>
    </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers'
import drink from '../assets/data/drink.json';

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
            isSlideRight: true,
            popularDrink: drink.drinks
        }
    },
    computed: {
        popularAry() {
            return this.popularDrink.filter(item => {
                return item.isPopular === true
            });
        },
        isShowDrinkOverlay: {
            get() {
                return this.$store.state.isShowDrinkOverlay;
            },
            set(val) {
                return this.$store.commit('SetIsShowDrinkOverlay',val);
            }
        },
        chooseDrinkIndex: {
            get() {
                return this.$store.state.chooseDrinkIndex;
            },
            set(val) {
                return this.$store.commit('SetChooseDrinkIndex',val);
            }
        }
    },
    methods: {
        chooseNewsDrink(id) {
            this.chooseDrinkIndex = id;
            this.isShowDrinkOverlay = true;
        },
        // 幻燈片自動換位
        // slideMoveAnim() {
        //     for (let i = 0; i < this.popularAry.length; i++) {
        //         this.changeIndex(i);
        //     }
        // },
        // changeIndex(i) {
        //     let isPlay = false;
        //     let oriLeftPos = $(`.item${i}`).css('left').slice(0, -2);
        //     if (Number(oriLeftPos) <= -250) {
        //         $(`.item${i}`).css('left',`${250 * (this.popularAry.length - 1)}px`);
        //     }
        //     oriLeftPos = $(`.item${i}`).css('left').slice(0, -2);
        //     $(`.item${i}`).animate({left:`${oriLeftPos -250}px`}, 10000, 'linear', () => {
        //         $(`.item${i}`).css('left',`${oriLeftPos -250}px`);       
        //         if (!isPlay) {
        //             isPlay = true;
        //             $(`.item${i}`).stop(true,true);
        //             this.changeIndex(i)
        //         }       
        //     });
        // },
        // 幻燈片左右滑動
        getPosX(event){
            if (event.clientX === undefined) {
                return event.targetTouches[0].pageX;
            }
            return event.clientX;
        },
        moveSlider(dir) {
            let transform = $('.moveSlide').css('transform')
            let transformMatrix = transform.slice(7, transform.length - 1).split(', ')[4];

            if ((Number(transformMatrix) === 0 && dir > 0) || (Number(transformMatrix) < (this.slideWidth * dir) && dir < 0)) {
                this.moveSpeed = 50;
            }

            $('.moveSlide').css('transform', `translateX(${Number(transformMatrix) + (this.moveSpeed * dir)}px)`);
            let timeout = setTimeout(() => {
                clearTimeout(timeout);
                this.isMoveing = false;
                let transform = $('.moveSlide').css('transform')
                let transformMatrix = transform.slice(7, transform.length - 1).split(', ')[4];
                if (Number(transformMatrix) > 0 && dir > 0) {
                    this.isSlideRight = true;
                    $('.moveSlide').css('transform', 'translateX(0px)');
                } 
                if ((Number(transformMatrix) < (this.slideWidth * dir) > 0) && dir < 0) {
                    this.isSlideRight = false;
                    $('.moveSlide').css('transform', `translateX(${this.slideWidth * dir - 110}px)`);
                }
            }, 300);   
        },
        dragMove(event) {
            if (!this.isDrag) return;
            this.isMoveing = true;
            // console.log('move');
                this.newPosX = this.getPosX(event);

                $('.item').css('pointer-events','none'); 
                $('.item').css('user-select','none'); 

                if (this.newPosX > this.oldPosX) {
                    // console.log('右移');
                    this.moveSlider(1);
                }
                if (this.newPosX < this.oldPosX) {
                    this.moveSlider(-1);
                    // console.log('左移');
                }
        },
        dragUp() {
            if (!this.isDrag) return;
            // console.log('up');
            this.isDrag = false;
            $('.item').css('pointer-events','auto'); 
            $('.item').css('user-select','auto');
        },
        dragDown(event, index){
            this.chooseDrinkIndex = index;
            // console.log('down');
            this.isDrag = true;
            this.oldPosX = this.getPosX(event);

            let timeout = setTimeout(() => {
                clearTimeout(timeout);
                this.newPosX = this.getPosX(event);
                if (!this.isMoveing) {
                    this.isDrag = false;
                    this.chooseNewsDrink(index);
                    return;
                }
            }, 150);
        },
        resize() {
            let slideBgWidth = $('.slider').width();
            this.slideWidth = slideBgWidth;
            this.subWidth = -50;

            if (this.slideWidth > 330) {
                slideBgWidth = 280;
                this.subWidth = 0;
            }
            if (this.slideWidth <= 330 && this.slideWidth > 260) {
                slideBgWidth = 260;
                this.subWidth = -20;
            }

            this.slideWidth = ((slideBgWidth + this.subWidth) * this.popularAry.length) - ((this.slideWidth / slideBgWidth ) * slideBgWidth);

            if (this.isMoveing) return;
            this.leftPos = slideBgWidth + 20 + this.subWidth;
            this.moveSpeed = 150;
            if (!this.isMobile()) {
                this.moveSpeed = slideBgWidth + 20;
            }
            for (let i = 0; i < this.popularAry.length; i++) {
                $(`.item${i}`).css('width',`${slideBgWidth + this.subWidth}px`);
                $(`.item${i}`).css('height',`${slideBgWidth - 20  + (this.subWidth / 2)}px`);
            }
            $('.popular').css('height',`${slideBgWidth + 60}px`);
            $('.slider').css('height',`${slideBgWidth + 30 + (this.subWidth / 2)}px}px`);
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
        },
        // 判斷裝置是否為手機
        isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        }
    },
    mounted() {
        this.resize();
        this.createTimer();  
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
    text-align: left;
}

.title {
    font-size: 18px;
    margin: 0px 0px 20px 5px;
}

.title p {
    font-size: 16px;
    margin-top: 3px;
}

.popular {
    position: relative;
    max-width: 1280px;
    width: 90%;
    height: 360px;
    margin: auto;
}

.slider {
    overflow: hidden;
    justify-content: center;
    position: relative;
    height: 100%;
    width: 100%;
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
    max-height: 280px;
    width: 280px;
    height: 280px;
    border: 1px solid #ccc;
    margin: 5px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.20) 0px 6px 6px;
}

.item img {
    width: 100%;
}

.text {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
}

.text .price {
    text-align: center;
    margin-top: 3px;
}

.price p {
    color: #42b983;
    font-weight: bold;
}

.leftBtn, .rightBtn {
    position: absolute;
    z-index: 2;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-color: #999;
    border-radius: 50%;
    top: 50%;
    left: -20px;
    transition: .3s;
}

.leftBtn:hover, .rightBtn:hover {
    background-color: #333;
}

.leftBtn::before, .rightBtn::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border: 3px solid #fff;
    border-right: 0;border-bottom: 0;
}

.leftBtn::before, .rightBtn::before {
    position: absolute;
    top: 14px;
    right: 12px;
}

.leftBtn {
    transform: rotate(-45deg);
}

.rightBtn {
    transform: rotate(135deg);
}

.addBtn {
    position: relative;
    top: -100px;
    left: 1px;
    width: 50px;
    height: 50px;
    background-color: rgba(204, 204, 204, 0.6);
    border-radius: 50%;
    color: #333;
    line-height: 50px;
    font-size: 30px;
    text-align: center;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.616);
}

.item:hover .addBtn {
    background-color: rgba(51, 51, 51);
    color: #fff;
}

@media (max-width: 325px) {
    .text {
        padding: 10px 20px;
        font-size: 14px;
    }

    .text .price {
        margin-top: 3px;
    }

    .addBtn {
        width: 35px;
        height: 35px;
        line-height: 35px;
        top: -85px;
    }
}

</style>
