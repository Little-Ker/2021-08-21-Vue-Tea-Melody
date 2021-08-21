<template>
    <div class="container">
        <div class="newsList">
            <ul class="chooseWrap">
                <li v-for='(item, index) in chooseAry' :key='index'>
                    <input v-model="chooseNewsType" :id="`type0${index}}`" type="radio" name='newsType' :value="item.value">
                    <label :for="`type0${index}}`" class="radioStyle"><p>{{item.type}}</p></label>  
                </li>
            </ul>
            <ul class="newsWrap">
                <li v-for="(item, index) in showSomeNews" :key='index'>
                    <div @click="chooseNewsCard(item.id)" class="card">
                        <div class="newsImg">
                            <img :src='item.img' alt="">
                            <div class="more">MORE</div>
                        </div>
                        <div class="textBlock">
                            <div class="wrap">
                                <div class="date">
                                    <div class="greenBlock"></div>
                                    <div>{{item.date}}</div>
                                </div>
                                <div class="type">{{showNewsType(item.type)[0].type}}</div>
                            </div>
                            <div class="title">{{item.title}}</div>
                        </div>  
                    </div>
                </li>
            </ul>
            <div class="topPadding"></div>
        </div>
    </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'NewsList',
    data() {
        return {
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
        newsPageIndex: {
            get() {
                return this.$store.state.newsPageIndex;
            },
            set(val) {
                return this.$store.commit('SetChooseNewsPageIndex',val);
            }
        },
        isShowLoading: {
            get() {
                return this.$store.state.isShowLoading;
            },
            set(val) {
                return this.$store.commit('SetShowLoading',val);
            }
        },
        isShowOverlay: {
            get() {
                return this.$store.state.isShowOverlay;
            },
            set(val) {
                return this.$store.commit('SetShowOverlay',val);
            }
        },
        chooseNewsType: {
            get() {
                return this.$store.state.chooseNewsType;
            },
            set(val) {
                return this.$store.commit('SetChooseNewsType',val);
            }
        },
        chooseNewsIndex: {
            get() {
                return this.$store.state.chooseNewsIndex;
            },
            set(val) {
                return this.$store.commit('SetChooseNewsIndex',val);
            }
        },
        chooseNewsData: {
            get() {
                return this.$store.state.chooseNewsData;
            },
            set(val) {
                return this.$store.commit('SetChooseNewsData',val);
            }
        },
        showChooseNews() {
            let chooseNewsData = this.newsData;
            if (this.chooseNewsType !== 'all') {
                chooseNewsData = this.newsData.filter(item => item.type === this.chooseNewsType)
            }
            this.setChooseNewsData(chooseNewsData);
            return chooseNewsData
        },
        showSomeNews() {
            const showOnceCount = this.$store.state.oncePageNewsCount;
            const startNewsIndex = (showOnceCount * (this.newsPageIndex - 1) < 0) ? 0 : showOnceCount * (this.newsPageIndex - 1);
            const endNewsIndex = ((showOnceCount * this.newsPageIndex) >= this.showChooseNews.length) ? (this.showChooseNews.length) : (showOnceCount * this.newsPageIndex);
            const dataAry = this.showChooseNews.slice(startNewsIndex, endNewsIndex);
            return dataAry;
        }
    },
    methods: {
        showNewsType(type) {
            return this.chooseAry.filter(item => item.value === type)
        },
        setChooseNewsData(chooseNewsData) {
            this.chooseNewsData = chooseNewsData;
        },
        chooseNewsCard(id) {
            this.isShowOverlay = true;
            this.chooseNewsIndex = id;
        },
        goTop() {
            $('html,body').scrollTop(300)
        }
    },
    mounted() {
        this.$store.dispatch('GetNews')
    },
    watch: {
        // 選項有改變，需跑loading畫面
        chooseNewsType() {
            this.isShowLoading = true;
            this.newsPageIndex = 1;
        },
        newsPageIndex() {
            this.isShowLoading = true;
            this.goTop();
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
    }

    .container {
        margin: 0px 15px;
    }

    .topPadding {
        padding: 20px;
    }

    .wrap {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }

    .type {
        background-color: #42b983;
        color: #fff;
        padding: 3px 5px;
        border-radius: 5px;
        font-size: 12px;
    }

    ol, ul {
        list-style: none;
    }

    .newsList {
        max-width: 1260px;
        margin: auto;
        width: 100%;
    }

    .date {
        display: flex;
        align-items: center;
    }

    /* 新聞欄 */

    .newsWrap {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4,  1fr);
    }

    .newsWrap li {
        margin: auto;
        width: 300px;
        display: flex;
        justify-content: center;
    }

    .card {
        cursor: pointer;
        width: 85%;
        padding: 10px;
        margin: 15px 5px;
        background-color: #fff;
        border-radius: 5px;
        overflow: hidden;
    }

    .textBlock {
        padding: 15px 0px;
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
        background-color: #42b983;
    }

    .newsImg {
        position: relative;
        display: flex;
        justify-content: center;
        overflow: hidden;
    }

    .newsImg img {
        width: 100%;
        vertical-align: bottom;
    }

    .newsImg::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: -100%;
        background: rgba(12, 12, 12, 0.6);
        transition: .5s;
    }

    .card:hover .newsImg::before {
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

    /* 選單 */
    .chooseWrap {
        text-align: center;
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-bottom: 10px;
        margin-right: 10px;
    }

    label p {
        position: relative;
        box-sizing: border-box;
        width: 80px;
        height: 45px;
        border: 2px solid #fff;
        color: #6fc560;
        z-index: 2;
        font-weight: 600;
        transition: .3s;
    }

    .radioStyle {
        cursor: pointer;
        display: inline-block;
        width: 80px;
        line-height: 40px;
        margin: 5px 15px;
        position: relative;
        overflow: hidden;
    }

    .radioStyle::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 0%;
        height: 100%;
        background-color: #6fc560;
        transition: .6s;
    }

    .radioStyle:hover:before {
        width: 180%;
    }

    label p:hover {
        color: #fff;
    }

    input:checked + label {
        background-color: #6fc560;
    }

    input:checked + label p {
        color: #fff;
    }

    input {
        display: none;
    }

    @media (max-width: 1140px) {
        .newsWrap {
            grid-template-columns: repeat(3,  1fr);
        }
    }

    @media (max-width:840px) {
        .newsWrap {
            grid-template-columns: repeat(2,  1fr);
        }

        .topPadding {
            padding: 10px;
        }

        .card {
            margin: 10px 5px;
        }
    }

    @media (max-width: 590px) {
        .newsWrap {
            grid-template-columns: repeat(1,  1fr);
        }

        .topPadding {
            padding: 0px;
        }

        .card {
            margin: 7px 5px;
        }

        .radioStyle {
            width: 70px;
            margin: 5px;
        }

        label p {
            width: 70px;
            height: 45px;
            font-weight: 600;
            font-size: 14px;
        }

        .chooseWrap {
            justify-content: flex-start;
        }
    }
</style>