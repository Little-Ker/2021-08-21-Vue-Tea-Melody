<template>
<div class="aboutBg">
    <div class="about">
        <img class='leavesHeigh containerMargin' src="../assets/about/leave.png" alt="">
        <img class='leavesLeftBg' src="../assets/about/aboutBg01.png" alt="">
        <img class='leavesRightBg' src="../assets/about/aboutBg02.png" alt="">
        <div class="bgText">關於:</div>
        <div class="title">
            <h1>「十二韻」</h1>
            <p>－摘自唐代著名茶詩─詠茶十二韻</p> 
            <div class="titleMargin"></div>
            <div class="description">
                <p>「詠茶十二韻」一詩蘊含茶事，內容闡述茶的地位及珍貴、茶的產地與摘採環境、茶的功效、茶香、茶色、烹茶用水、喫茶、及茶葉存放等，藉以闡述茶在作者心中的重要性。十二韻本著對茶的愛好，運用熟知的茶事，化身手作職人，是以命名之。</p>
            </div>
        </div>
        <div class="titleMargin"></div>
        <div class="wrap">
            <div class="item" v-for='(obj, index) in descriptionAry' :key='index'>
                <div class="circle">
                    <img :src='obj.img' alt=""> 
                </div>
                <h3>{{obj.title}}</h3>
                <p>{{obj.content}}</p>
            </div>
        </div>
    <div class="containerMargin"></div>
    </div>
</div>
</template>

<script>
import '../assets/font/font.css';
export default {
    name: 'AboutText',
    data() {
        return {
            descriptionAry: [
                { title: '- 手沏 -', content:'感動人心的好茶', img:require('../assets/about/tea01.png')  },
                { title: '- 品味 -', content:'喚醒味覺與感官', img:require('../assets/about/tea02.png')  },
                { title: '- 知味 -', content:'用心款待的心意', img:require('../assets/about/tea03.png')  }
            ]
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    text-decoration: none;
    font-family: A-OTF;
}

.containerMargin {
    margin-top: 50px;
}

.titleMargin {
    margin-top: 20px;
}

.leavesHeigh {
    position: relative;
    width: 8%;
    z-index: 2;
}

.leavesLeftBg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: none;
}

.leavesRightBg {
    position: absolute;
    top: 20%;
    width: 100%;
    right: 0;
    display: none;
}

.aboutBg {
    background-attachment: fixed;
    height: 100%;
    background-image: url('../assets/about/aboutBg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 0%;
}

.bgText {
    writing-mode: vertical-rl;
    font-size: 90px;
    position: absolute;
    opacity: 0.15;
    right: 0;
    /* top: 95px; */
    letter-spacing: 10px;
}

.title  {
    position: relative;
    text-align: left;
    margin: 8px;
}

h3 {
    width: 100%;
    font-size: 25px;
}

p {
    font-size: 18px;
}

.about {
    position: relative;
    max-width: 1160px;
    margin: auto;
    overflow: hidden;
}

img {
    width: 120px;
    opacity: 0.7;
    margin: 15px 0px 0px 5px;
}

.title > p {
    text-indent: 3em;
}

.wrap{
    position: relative;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.item{
    width:250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 20px 20px;
    padding: 30px 0px;
    background-color: #fff;
}

.circle {
    width: 150px;
    height: 150px;
    border: 4px solid #555;
    border-radius: 50%;
    position: relative;
}

.circle::after {
    content: '';
    width: 136px;
    height: 136px;
    border: 3px solid #555;
    border-radius: 50%;
    position: absolute;
    left:4px;
    top: 4px;
}

@media screen and (max-width: 885px) {
    .leavesLeftBg {
        display: block;
    }
}

@media screen and (max-width: 430px) {
    .leavesLeftBg {
        display: block;
    }
    .leavesRightBg {
        display: block;
    }
}

</style>