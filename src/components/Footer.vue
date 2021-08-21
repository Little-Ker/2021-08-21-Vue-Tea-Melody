<template>
        <div class="footerBg">
            <div class="footerColor">
                <div class="footer">
                    <div class="upFooter">
                        <div class="left">
                            <div class="naverbar titleMargin">
                                <router-link :to='item.path' @click="goTop" v-for='(item, index) in navBarAry' :key='index' href="">{{item.title}}</router-link>
                            </div>
                            <div class="logo">
                                <img class="horialLogo" src="../assets/footer/logo02.png" alt="">
                                <img class="verticalLogo" src="../assets/footer/logo03.png" alt="">
                            </div>
                        </div>
                        <div class="contact right">
                            <p class="titleMargin followText">Follow Us</p>
                            <a v-for='(item, index) in followAry' :key='index'>
                                <div class="circle">
                                    <img :src="item.icon" alt="">
                                    <img class="hoverIcon" :src="item.iconHover" alt="">
                                </div>    
                            </a>
                        </div>
                        <div class="clearBox "></div>
                    </div>
                    <div class="footerBox"></div>
                    <p>© 2021 Vue Tea Melody</p>
                    <div @click='goTopSlide' class="btn titleMargin"><p>↑</p></div>
                </div>
            </div>
        </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'Footer',
    data() {
        return {
            navBarAry: [
                { path:'/about', title:'關於我們' },
                { path:'/news', title:'活動新訊' },
                { path:'/shop', title:'飲品訂購' },
                { path:'/shopPoint', title:'門市據點' },
                { path:'/order', title:'購物清單' }
            ],
            followAry: [
                { title:'FB' ,icon: require('../assets/footer/fb.png'), iconHover: require('../assets/footer/fb01.png') },
                { title:'IG' ,icon: require('../assets/footer/ig.png'), iconHover: require('../assets/footer/ig01.png') },
                { title:'WEB' ,icon: require('../assets/footer/web.png'), iconHover: require('../assets/footer/web01.png') }
            ]
        }
    },
    methods: {
        // 回到到最上面
        goTopSlide() {
            $('html,body').animate({ scrollTop: 0 }, 'slow');
        },
        goTop() {
            $('html,body').scrollTop(0, 0);
        },
        // 判斷裝置是否為手機
        isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        }
    },
    mounted() {
        if (this.isMobile()) {
             $('.btn p').css('top', '-10px');
        }
    },
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        box-sizing: content-box;
    }

    .left {
        float: left;
        text-align: left;
    }

    .right {
        float: right;
    }

    .verticalLogo {
        display: none;
    }

    .clearBox {
        clear: both;
    }

    .titleMargin {
        margin-bottom: 20px;
    }

    .upFooter {
        height: 100%;
    }

    .footerBox {
        margin-top: 30px;
        margin-bottom: 40px;
        border-bottom: 2px solid #fff;
    }

    .circle {
        cursor: pointer;
        display: inline-block;
        position: relative;
        width: 25px;
        height: 25px;
        border: 1px solid #fff;
        border-radius: 50%;
        padding: 7px;
        margin: 5px 0px 5px 15px;
        transition: .5s;
    }

    .contact img {
        width: 25px;
        height: 25px;
    }

    .hoverIcon {
        position: absolute;
        left: 7px;
        opacity: 0;
        transition: .5s;
    }

    .circle:hover  {
        background-color: #fff;
    }

    .circle:hover .hoverIcon {
        opacity: 1;
    }

    .naverbar a {
        width: 64px;
        display: inline-block;
        padding: 10px 0px;
        margin-right: 30px;
        color: #fff;
        position: relative;
        transition: .5s;
        top: 0;
    }

    .naverbar a:hover {
        top: -5px;
        font-weight: bold;
    }

    .followText {
        text-align: right;
        padding: 10px 0px;
    }

    .btn {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #fff;
        color: #8bc672;
        /* color: #8bc6726e; */
        font-size: 50px;
        margin: auto;
        margin-top: 50px;
        position: relative;
        overflow: hidden;
    }

    .btn p {
        position: absolute;
        left: 7px;
        top: 0;
        transition: .6s;
    }

    .btn:hover p {
        top: -10px;
    }

    .footer {
        max-width: 1160px;
        margin: auto;
        padding: 30px 20px;
        color: #fff;
    }

    .footerBg {
        background-image: url('../assets/bg/bg.png');
        width: 100%;
    }

    .footerColor {
        width: 100%;
        height: 100%;
        background-color: #8bc672;
        background-blend-mode: screen;
    }

    @media (max-width: 685px) {
        .naverbar, .horialLogo  {
            display: none;
        }

        .logo img {
            width:85px;
        }

        .verticalLogo {
            display: block;
        }
    }
</style>