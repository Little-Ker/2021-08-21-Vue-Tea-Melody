<template>
<div class="aboutBg">
    <div class="about">
        <div class="containerMargin"></div>
        <div class="bgText">關於:</div>
        <div class="wrap">
            <div class="title">
                <h1>「十二韻」</h1>
                <p>－摘自唐代著名茶詩─詠茶十二韻</p> 
                <div class="titleMargin"></div>
                <div class="description">
                    <p>「詠茶十二韻」一詩蘊含茶事，內容闡述茶的地位及珍貴、茶的產地與摘採環境、茶的功效、茶香、茶色、烹茶用水、喫茶、及茶葉存放等，藉以闡述茶在作者心中的重要性。十二韻本著對茶的愛好，運用熟知的茶事，化身手作職人，是以命名之。</p>
                </div>
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
                { title: '台灣好茶', content:'嚴選南投原生茶葉', img:require('../assets/about/01.jpg')  },
                { title: '手熬蔗糖', content:'手工慢熬自然清甜', img:require('../assets/about/02.jpg')  },
                { title: '初鹿鮮乳', content:'台東牧場新鮮直送', img:require('../assets/about/03.jpg')  }
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

.bgText {
    writing-mode: vertical-rl;
    font-size: 90px;
    position: absolute;
    opacity: 0.15;
    right: 0;
    letter-spacing: 10px;
}

.title  {
    width: 90%;
    position: relative;
    text-align: left;
    margin: 8px;
    padding-bottom: 20px;
}

h3 {
    font-weight: normal;
    margin-top: 10px;
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
    width: 150px;
}

.title > p {
    text-indent: 3em;
}

.wrap{
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
    margin: 20px 20px;
    padding: 30px 0px;
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px 2px, rgba(0, 0, 0, 0.15) 0px 3px 5px -3px;
}

.circle {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
}

</style>