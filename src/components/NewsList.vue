<template>
    <div class="container">
        <div class="newsList">
            <ul class="chooseWrap">
                <li v-for='(item, index) in chooseAry' :key='index'>
                    <div class="typeBtn">
                        <input v-model="chooseType" :id="`type0${index}}`" type="radio" name='newsType' :value="item.value">
                        <label :for="`type0${index}}`" class="radioStyle"><p>{{item.type}}</p></label>  
                    </div>
                </li>
            </ul>
            <div class="topPadding"></div>
            <ul class="newsWrap">
                <li v-for="(item, index) in showChooseNews" :key='index'>
                    <div class="card">
                        <div class="newsImg">
                            <img :src='item.img' alt="">
                            <div class="more">MORE</div>
                        </div>
                        <div class="textBlock">
                            <div class="title">{{item.title}}</div>
                            <div class="left greenBlock"></div>
                            <div class="left date">{{item.date}}</div>
                            <div class="clearBox"></div>
                        </div>  
                    </div>
                </li>
            </ul>
            <div class="topPadding"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NewsList',
    data() {
        return {
            chooseType: 'all',
            pageIndex: 0,
            chooseAry: [
                { type: '全部', value: 'all' },
                { type: '新品上市', value: 'newDrink' },
                { type: '活動新訊', value: 'active' },
                { type: '食安報告', value: 'report' },
                { type: '新店資訊', value: 'shop' },
            ]
        }
    },
    computed: {
        newsData() {
            return this.$store.state.newsData; 
        },
        showChooseNews() {
            if (this.chooseType !== 'all') {
                return this.newsData.filter(item => {
                    return item.type === this.chooseType
                })
            } return this.newsData
        }
    },
    mounted() {
        this.$store.dispatch('GETNEWS', this.newsData)
    },
    watch: {
        // 選項有改變，需跑loading畫面
        chooseType() {
            this.$store.dispatch('GETSHOWLOADING',true)
        }
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "CenturyGothicRegular","微軟正黑體","Microsoft JhengHei","MHei","STHeitiTC-Light",sans-serif,Arial,Helvetica,"Helvetica Neue",Tahoma,Verdana;
        /* font-family: wt024; */
        /* font-family: A-OTF; */
    }

    .container {
        margin: 0px 15px;
    }

    .topPadding {
        padding: 20px;
    }

    ol, ul {
        list-style: none;
    }

    .newsList {
        max-width: 1260px;
        margin: auto;
        width: 100%;
    }

    .left {
        float: left;
    }

    .clearBox {
        clear: both;
    }

    /* 新聞欄 */

    .newsWrap {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .newsWrap li {
        width: 25%;
    }

    .card {
        cursor: pointer;
        width: 97%;
        margin: 15px 5px;
        /* border: 1px solid #ccc; */
        background-color: #fff;
        /* border-radius: 15px; */
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.418);
    }

    .textBlock {
        padding: 15px 20px;
        text-align: left;
    }

    .textBlock .title {
        font-size: 18px;
        margin-bottom: 5px;
    }

    .greenBlock {
        width: 4px;
        height: 25px;
        margin: 0px 12px 0px 2px;
        background-color: #8bc672;
    }

    .newsImg {
        position: relative;
        display: flex;
        justify-content: center;
        overflow: hidden;
    }

    .newsImg img {
        vertical-align: bottom;
    }

    .newsImg::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: -100%;
        /* left: -100%; */
        background: rgba(12, 12, 12, 0.6);
        transition: .5s;
    }

    .card:hover .newsImg::before {
        /* left: 0%; */
        height: 100%;
        bottom: 0%;
    }

    .card:hover .more {
        opacity: 1;
    }

    .more {
        position: absolute;
        bottom: 12%;
        border: 2px solid #fff;
        color: #fff;
        width: 40%;
        height: 25%;
        opacity: 0;
        transition: .5s;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }

    .card img {
        width: 100%;
    }

    @media (max-width: 1215px) {
        .newsWrap li {
            width: 33.33%;
        }
    }

    @media (max-width: 916px) {
        .newsWrap li {
            width: 50%;
        }

        .topPadding {
            padding: 10px;
        }

        .card {
            margin: 10px 5px;
        }
    }

    @media (max-width: 616px) {
        .newsWrap li {
            width: 100%;
        }

        .topPadding {
            padding: 0px;
        }

        .card {
            margin: 7px 5px;
        }
    }

    /* 選單 */
    .chooseWrap {
        text-align: center;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    label p {
        position: relative;
        box-sizing: border-box;
        width: 80px;
        height: 43px;
        border: 2px solid #8bc672;
        border-left: 0px;
        border-right: 0px;
        color: #8bc672;
        z-index: 2;
        font-weight: 600;
        transition: .3s;
    }

    .radioStyle {
        cursor: pointer;
        display: inline-block;
        width: 80px;
        line-height: 38px;
        margin: 5px 10px;
        /* background-color: #fff; */
        color: #8bc672;
        position: relative;
        overflow: hidden;
    }

    .radioStyle::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 0%;
        background-color: #8bc672;
        /* z-index: -1; */
        transition: .6s;
    }

    .radioStyle:hover:before {
        height: 180%;
    }

    label p:hover {
        color: #fff;
    }

    input:checked + label {
        background-color: #8bc672;
    }

    input:checked + label p {
        color: #fff;
    }

    input {
        display: none;
    }
</style>