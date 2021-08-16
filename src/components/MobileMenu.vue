<template>
    <div class="mobileMenu">
        <transition @after-enter='afterEnterFn' @before-leave='beforeLeaveFn' name='downIn' appear>
            <div v-show="isShowMenu" class="menuBg">
                <div class="logo">
                    <img src="../assets/footer/logo02.png" alt="">
                </div>
                <div v-show="isShowLink" class="menuWrap">
                    <div class="menu">
                        <router-link @click="goTop" :to='item.path' :class="`link addAnim${index}`" v-for="(item, index) in navBarAry" :key="index">
                            <img :src="item.imgUrl" alt="">
                            <div class="text">
                                <p>{{item.eng}}</p>
                                <p>{{item.title}}</p>
                            </div>
                        </router-link>
                    </div>
                    <div class="follow">
                        <p class="followText">Follow Us</p>
                        <div class="iconList">
                            <a v-for='(item, index) in followAry' :key='index'>
                                <div class="circle">
                                    <img :src="item.icon" alt="">
                                    <img class="hoverIcon" :src="item.iconHover" alt="">
                                </div>    
                            </a>
                        </div>      
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'MobileMenu',
    data() {
        return {
            isShowLink: false,
            navBarAry: [
                { path:'/about', title:'關於我們', eng:'About Us', imgUrl:require('../assets/nav/home3.png') },
                { path:'/news', title:'活動新訊', eng:'News', imgUrl:require('../assets/nav/news3.png') },
                { path:'/shop', title:'飲品訂購', eng:'Product', imgUrl:require('../assets/nav/drink3.png') },
                { path:'/shopPoint', title:'門市據點', eng:'Shop Point', imgUrl:require('../assets/nav/point3.png') },
                { path:'/contact', title:'購物清單', eng:'Shop List', imgUrl:require('../assets/nav/contact3.png') }
            ],
            followAry: [
                { title:'FB' ,icon: require('../assets/footer/fb.png'), iconHover: require('../assets/footer/fb02.png') },
                { title:'IG' ,icon: require('../assets/footer/ig.png'), iconHover: require('../assets/footer/ig02.png') },
                { title:'WEB' ,icon: require('../assets/footer/web.png'), iconHover: require('../assets/footer/web02.png') }
            ]
        }
    },
    computed: {
        isShowMenu: {
            get() {
                return this.$store.state.isShowMenu;
            },
            set(val) {
                return this.$store.commit('SetIsShowMenu',val);
            }
        },
    },
    methods: {
        // 背景出現後
        afterEnterFn() {
            this.isShowLink = true;
            this.linkBeforeEnterFn();
        },
        linkBeforeEnterFn() {
            for (let i = 0; i < this.navBarAry.length; i++) {
                $(`.addAnim${i}`).addClass('linkAnim');
                $(`.addAnim${i}`).css("animationDelay",`${i*0.15}s`);
            }
            $('.follow').addClass('followAnim')
        },
        beforeLeaveFn() {
            for (let i = 0; i < this.navBarAry.length; i++) {
                $(`.addAnim${i}`).removeClass('linkAnim');
            }
        },
        goTop() {
            this.isShowMenu = false;
            $('html,body').scrollTop(0, 0);
        },
    },
    watch: {
        isShowMenu() {
            this.isShowLink = false;
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
    text-align: left;
    text-decoration: none;
}

.downIn-leave-to {
    animation: downIn .6s reverse;
}

.downIn-enter-active {
  animation: downIn 1s;
}

.followAnim {
    animation: fade-in 1s;
}

.linkAnim {
    animation: runIn .5s ease-out;
    animation-fill-mode: forwards;
}

@keyframes runIn {
    0% {
        left: -100px;
        opacity: 0;
    }
    100% {
        left: 0px;
        opacity: 1;
    }
}

@keyframes downIn {
    0% {
        height: 0%;
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 100px;
    }
    100% {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        height: 100%;
    }
}

.menuWrap {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    height: calc(100% - 70px);
}

.link {
    opacity: 0;
    cursor: pointer;
    display: flex;
    position: relative;
    margin: 25px 0px;
    padding: 10px;
    transition: .3s;
}

.link::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 1px;
    background-color: #fff;
    transition: .6s;
}

.link:hover::before {
    width: 90%;
}

.link img {
    width: 30px;
    height: 30px;
    margin: 3px 10px 0px 0px
}

.text {
    letter-spacing: 3px;
}

.iconList {
    display: flex;
    justify-content: flex-end;
}

.logo {
    padding: 15px;
    border-bottom: 1px solid #fff;
}

.logo img {
    width: 120px;
}

.menu {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.menuBg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: #322e2a;
    padding: 10px;
}

.circle {
    cursor: pointer;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    padding: 7px;
    margin: 5px 0px 5px 15px;
    transition: .5s;
}

.follow {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 15px;
}

.followText {
    text-align: right;
    padding-bottom: 15px;
}

.follow img {
    width: 25px;
    height: 25px;
}

.hoverIcon {
    position: absolute;
    left: 7px;
    top: 7px;
    opacity: 0;
    transition: .5s;
}

.circle:hover  {
    background-color: #fff;
}

.circle:hover .hoverIcon {
    opacity: 1;
}

@media (max-width: 420px) {
    .link img {
        width: 25px;
        height: 25px;
        margin: 6px 10px 0px 0px
    }

    .link {
        margin: 15px 0px;
        padding: 10px;
    }

    .circle {
        width: 30px;
        height: 30px;
        padding: 4.5px;
        margin: 5px 0px 5px 8px;
    }

    .follow img {
        width: 20px;
        height: 20px;
    }

    .hoverIcon {
        left: 4.5px;
        top: 4.5px;
    }
}

@media (max-width: 310px) {
    .text p, .followText {
        font-size: 14px;
    }
}

</style>
