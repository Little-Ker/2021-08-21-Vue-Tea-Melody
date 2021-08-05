<template>
    <div class="contactUs">
        <p class="textColumn">INFORMATION -</p>
        <div class="contactData">
            <p><b>十二韻茶飲國際品牌總部</b></p>
            <div class="textBox">
                <p class="title left"><img src="../assets/contact/contactIcon01.png" alt=""> 電話 \\ </p>
                <p class="context left"> 04-22419151</p>
                <div class="clearBox"></div>
            </div>
            <div class="textBox">
                <p class="title left"><img src="../assets/contact/contactIcon02.png" alt=""> 地址 \\ </p>
                <p class="context left"> 台中市北屯區松明街24號</p>
                <div class="clearBox"></div>
            </div>
            <div class="textBox">
                <p class="title left"><img src="../assets/contact/contactIcon03.png" alt=""> 營業時間 \\ </p>
                <p class="context left"> 周一至周五 24小時</p>
                <div class="clearBox"></div>
            </div>           
        </div>
    </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'ContactUs',
    computed: {
       
    },
    methods: {
       
    },
    watch: {
       
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.left {
    float: left;
}

.clearBox {
    clear: both;
}

.contactUs {
    padding: 0px 5px;
    height: 100%;
    text-align: left;
    line-height: 30px;
    display: flex;
    justify-content: center;
    margin: 0px 50px;
}

.contactData {
    padding: 20px 10px;
    line-height: 60px;
}

.contactData .context {
    width: 170x;
    margin-left: 5px;
}

.contactData img {
    width: 25px;
    height: 25px;
}

.contactData p {
    font-size: 15px;
}

.contactData > p {
    font-size: 18px;
}

.textColumn {
    height: 280px;
    writing-mode: vertical-lr;
    letter-spacing: 3px;
    background-color: #8bc672;
    color: #fff;
    padding: 8px 0px;
    margin-right: 10px;
}

@media (max-width: 900px) {
    .contactUs {
        margin: 0px;
    }
}

@media (max-width: 720px) {
    .contactUs {
        flex-wrap: wrap;
    }

    .textColumn {
        width: 100%;
        height: 100%;
        text-align: center;
        writing-mode:horizontal-tb;
        margin-right: 0px;
    }

    .contactData {
        padding: 30px 0px;
    }

    .textBox {
        padding: 5px 0px;
    }
}

</style>
