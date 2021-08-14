<template>
    <div class="contactUs">
        <div class="contactData">
            <p><b>十二韻茶飲國際品牌總部</b></p>
            <div class="textBox">
                <p><img src="../assets/contact/contactIcon01.png" alt=""> 電話 \\ </p>
                <p class="context"> 04-22419151</p>
            </div>
            <div class="textBox">
                <p><img src="../assets/contact/contactIcon02.png" alt=""> 地址 \\ </p>
                <p class="context"> 台中市北屯區松明街24號</p>
            </div>
            <div class="textBox">
                <p><img src="../assets/contact/contactIcon03.png" alt=""> 營業時間 \\ </p>
                <p class="context"> 周一至周五 24小時</p>
            </div>           
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14558.378229190834!2d120.7011081!3d24.185948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x78cdbe66a7cf8fa3!2z5Y2B5LqM6Z-76Iy26aOy5ZyL6Zqb5ZOB54mM57i96YOo!5e0!3m2!1szh-TW!2stw!4v1628881365146!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            <div class="mapBtn">
                <a href="https://www.google.com/maps?ll=24.185948,120.701108&z=14&t=m&hl=zh-TW&gl=TW&mapclient=embed&cid=8704823002888376227" target="_blank">前往 Google Map</a>
                <div class="blackBlock"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactUs',
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

.mapBtn a::before {
    position: absolute;
    content: '';
    top: calc(50% - 5px);
    right: -15px;
    width: 6px;
    height: 6px;
    border: solid #555;
    border-width: 0 3px 3px 0;
    transform: rotate(-45deg);
}

.mapBtn a {
    color: #333;
    position: relative;
}

.mapBtn {
    cursor: pointer;
    width: 145px;
}

.mapBtn:hover .blackBlock {
    width: 100%;
}

.blackBlock {
    width: 0%;
    height: 1.5px;
    background-color: #666;
    transition: .6s;
}

.map {
    width: 45%;
    max-width: 500px;
}

.map iframe {
    width: 100%;
    height: calc(100% - 40px);
}

.contactUs {
    padding: 0px 5px;
    height: 100%;
    text-align: left;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    margin: 0px 50px;
}

.contactData {
    width: 45%;
    max-width: 500px;
    padding: 20px 0px;
    line-height: 60px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

.contactData .context {
    width: 170x;
    margin-left: 5px;
}

.contactData img {
    width: 20px;
    height: 20px;
}

.contactData > p {
    font-size: 20px;
}

.textBox {
    display: flex;
    flex-wrap: wrap;
    letter-spacing: 1px;
    margin: 10px 0px;
}

@media (max-width: 720px) {
    .contactData, .map {
        width: 100%;
        max-width: none;
        border-bottom: 0px;
    }

    .contactUs {
        display: block;
        margin-bottom: 100px;
    }

    .map iframe {
        height: 300px;
    }
}

@media (max-width: 385px) {
    .textBox {
        display: flex;
        flex-wrap: wrap;
            margin: 10px 0px;
    }
    .contactUs {
        padding: 0px 10px;
        margin: 0px;
        margin-bottom: 100px;
    }
    .map iframe {
        height: 200px;
    }
}

</style>
