<template>
    <div class="createOrder">
        <!-- 電腦版 -->
        <div class="allList rwd-Large">
            <h3>購物內容</h3>
            <div class="item title">
                <div class="itemData titleBg">
                    <div class="choose widthL"><b>飲品名稱</b></div>
                    <div class="choose widthL"><b>甜度冰量</b></div>
                    <div class="choose widthL"><b>加料</b></div>
                    <div class="choose widthL"><b>備註</b></div>
                    <div class="choose widthM"><b>數量</b></div>
                    <div class="choose widthM"><b>價錢</b></div>
                    <div class="choose widthM"></div>
                </div>
            </div>
            <hr>
            <div class="item" v-for="(item, index) in shoppingCarList" :key="index">
                <div class="itemData">
                    <div class="chooseData widthL"><b>{{item.drinkName}}</b></div>
                    <div class="chooseData widthL">{{item.sugarLevel}} / {{item.iceLevel}}</div>
                    <div class="chooseData widthL">{{(item.toppingsAry.length !== 0) ? '加' : ''}} {{addTopping(item.toppingsAry)}}</div>
                    <div class="chooseData widthL">{{item.note}}</div>
                    <div class="chooseData widthM">{{item.count}} 杯</div>
                    <div class="chooseData widthM">${{item.drinkPrice}}</div>
                    <div @click="deleteFn(index)" class="chooseData deleteBtn widthM">
                        <img src="../assets/shop/can2.png" alt="">
                        <img class="deleteHover" src="../assets/shop/can.png" alt="">
                    </div>
                </div>
                <hr>
            </div>
        </div>
        <!-- 平板手機板 -->
        <div class="allList rwd-mideum">
            <h3>購物內容</h3>
            <div class="item" v-for="(item, index) in shoppingCarList" :key="index">
                <div class="itemData">
                    <div class="choose widthM drinkName"><b>{{item.drinkName}}</b></div>
                    <div class="choose widthL">
                        <div class="noteMargin" style="margin-right:5px"><p>{{item.sugarLevel}} / {{item.iceLevel}} {{(item.toppingsAry.length !== 0) ? '/ 加' : ''}} {{addTopping(item.toppingsAry)}}</p></div>
                        <div>{{(item.note.length !== 0) ? '/ ' : ''}} {{item.note}}</div>
                    </div>
                    <div class="choose widthS rwd-mideum-flex">
                        <div class="noteMargin"><b>{{item.count}} 杯</b></div>
                        <div class="priceMargin"><b>${{item.drinkPrice}}</b></div>
                    </div>
                    <div @click="deleteFn(index)" class="chooseData deleteBtn widthS">
                        <img src="../assets/shop/can2.png" alt="">
                        <img class="deleteHover" src="../assets/shop/can.png" alt="">
                    </div>
                </div>
                <hr>
            </div>
        </div>
        <div class="pickUpData">
            <div class="delivery">
                <h3>取貨方式</h3>
                <div class="wrap">
                    <div class="method">
                        <p>分店選擇</p>
                        <div class="chooseShop">
                            <div class="city">
                                縣市 <select v-model="chooseShop.city">
                                    <option :value="item" v-for="item in cityList.totalCity" :key="item">
                                        {{ item }}
                                    </option>
                                </select>
                                <span class="customSelect"></span>
                            </div>
                            <div class="area">
                                區域 <select v-model="chooseShop.area">
                                    <option :value="item" v-for="(item, index) in areaList.areaList" :key="index">
                                        {{ item }}
                                    </option>
                                </select>
                                <span class="customSelect"></span>
                            </div>
                            <div class="shop">
                                店名 <select v-model="chooseShop.shop" class="selectShop">
                                    <option :value="item" v-for="(item, index) in showView" :key="index">
                                        {{ item }}
                                    </option>
                                </select>
                                <span class="customSelect"></span>
                            </div>
                        </div>
                    </div>
                    <div class="method">
                        <label v-for="(item, index) in methodAry" :key="index" class="container">{{item}}
                            <input v-model="ordertData.chooseMethod" type="radio" :value="item" name="pickuUp">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="method">
                        <ChooseDate />
                    </div>
                </div>
            </div>
            <div class="total">
                <h3>訂單資訊</h3>
                <div class="method">
                    <div class="text">
                        <p>小計</p>
                        <p>$ {{drinkPrice}}</p>
                    </div>
                    <div class="text">
                        <p>運費</p>
                        <p>$ {{purchasePrice}}</p>
                    </div>
                    <p></p>
                    <div class="text totalPrice">
                        <p><b>總計</b></p>
                        <p><b>$ {{totalPrice}}</b></p>
                    </div>
                    <div @click="clickNextFn(2)" class="nextBtn"><p>填寫資料</p></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import shopPointData from '../assets/data/shopPointData.json';
import ChooseDate from '@/components/ChooseDate.vue'

import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'CreateOrder',
    components: {
        ChooseDate
    },
    data() {
        return {
            shopPointData: shopPointData.shop,
            purchasePrice: 0,
            methodAry: [
                '外帶自取', '外送'
            ]
        }
    },
    computed: {
        ordertData: {
            get() {
                return this.$store.state.ordertData;
            },
            set(val) {
                return this.$store.commit('SetOrdertData',val);
            }
        },
        chooseShop() {
            return this.ordertData.chooseShop;
        },
        drinkPrice() {
            let price = 0;
            this.shoppingCarList.forEach((item) => {
                price += item.drinkPrice;
            })
            return price;
        },
        totalPrice() {
            let price = this.drinkPrice + this.purchasePrice;
            this.resetTotalPrice(price);
            return price;
        },
        cityList() {
            let obj = {
                totalCity: [],
                cityList: {}
            }
            this.shopPointData.forEach(({
                city,
                area,
                shopName
            }, index) => {
                if (!obj.cityList[city]) {
                    obj.totalCity.push(city);
                    obj.cityList[city] = {
                        viewData: {},
                        areaList: []
                    }
                }
                if (!obj.cityList[city].viewData[area]) {
                    obj.cityList[city].areaList.push(area);
                    obj.cityList[city].viewData[area] = {
                        index: index,
                        shopList: []
                    }
                }
                obj.cityList[city].viewData[area].shopList.push(shopName);
            })
            return obj;
        },
        areaList() {
            let list = this.cityList.cityList[this.chooseShop.city];
            return list;
        },
        showView() {
            let list = this.areaList.viewData[this.chooseShop.area].shopList
            return list;
        },
        shoppingCarList() {
            return this.$store.state.shoppingCarList;
        },
        orderLevel: {
            get() {
                return this.$store.state.orderLevel;
            },
            set(val) {
                return this.$store.commit('SetOrderLevel',val);
            }
        }
    },
    methods: {
        changeAreaValue(areaList) {
            this.chooseShop.area = areaList[0];
        },
        changeShopValue(shopList) {
            this.chooseShop.shop = shopList[0];
        },
        resetTotalPrice(price) {
            this.ordertData.totalPrice = price;
        },
        addTopping(toppingAry) {
            return toppingAry.join('、');
        },
        deleteFn(index) {
            const drinkName = this.shoppingCarList[index].drinkName;
            if (confirm(`是否刪除 ${drinkName} ?`)) {
                this.shoppingCarList.splice(index, 1);
            }
        },
        clickNextFn(index) {
            this.orderLevel = index;
            this.goTop();
        },
        goTop() {
            $('html,body').scrollTop(0, 0);
        },
        changePurchasePrice() {
            this.purchasePrice = (this.ordertData.chooseMethod === '外帶自取') ? 0 : 60;
        }
    },
    watch: {
        ['chooseShop.city']() {
            let list = this.cityList.cityList[this.chooseShop.city];
            this.changeAreaValue(list.areaList);
        },
        ['chooseShop.area']() {
            let list = this.areaList.viewData[this.chooseShop.area].shopList
            this.changeShopValue(list)
        },
        ['ordertData.chooseMethod']() {
            this.changePurchasePrice();
        }
    },
    mounted() {
        this.changePurchasePrice();
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.rwd-mideum {
    display: none;
}

.widthM {
    width: 10%;
}

.widthL {
    width: 20%;
}

.method {
    margin: 20px 0px;
}

.nextBtn p::before {
    position: absolute;
    content: '';
    top: calc(50% - 4px);
    right: 20px;
    width: 8px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(-45deg);
}

.nextBtn p {
    text-align: center;
    position: relative;
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #666;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    transition: .3s;
}

.nextBtn p:hover {
    background-color: #222;
}

.nextBtn {
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    margin-top: 43px
}

.pickUpData {
    display: flex;
    justify-content: space-between;
    text-align: left;
}

.delivery {
    padding: 0px 5px;
    width: 55%;
}

.total {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    padding: 0px 5px;
}

.total h3, .delivery h3, .allList h3 {
    text-align: left;
    line-height: 30px;
    margin-top: 20px;
    border-bottom: 1px dashed #999;
}

.total .text {
    display: flex;
    justify-content: space-between;
}

.total p {
    margin: 5px 0px;
}

.totalPrice {
    margin-top: 50px;
}

.choose {
    position: relative;
    padding: 10px 0px;
}

.chooseData {
    position: relative;
    padding: 5px 5px;
}

.deleteBtn {
    position: relative;
}

.deleteBtn img {
    position: absolute;
    top: 1px;
    right: calc(50% - 14px);
}

.allList {
    padding: 0px 5px;
    margin-bottom: 50px;
}

.itemData {
    position: relative;
    padding: 15px 0px;
    display: flex;
}

.createOrder {
    max-width: 1280px;
    width: 90%;
    padding: 5px 5px 0px 5px;
    margin: auto;
    background-color: #fff;
    padding-bottom: 70px;
}

.chooseShop {
    display: flex;
}

.city, .area, .shop {
    display: flex;
    align-items: center;
    position: relative;
}

select:focus + .customSelect {
    border-color: #42b983;
    bottom: 15px;
    transform: rotate(225deg);
}

.customSelect {
    border-top: 3px solid #ccc;
    border-left: 3px solid #ccc;
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
    position: absolute;
    right: 15px;
    bottom: 13px;
    transition: .3s;
}

select {
    background-color: rgba(255, 255, 255, 0);
    width: 90px;
    color: #333;
    padding: 7px 15px 7px 10px;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    appearance: none;
    border: 1px solid #999;
    margin: 3px 5px;
    outline: none;
}

.selectShop {
    width: 120px;
}

.container {
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
}

.container input {
    display: none;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #eee;
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
    background-color: #42b983;
}

.container .checkmark::after {
    content: "";
    position: absolute;
    left: 6px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}

.titleBg {
    background-color: #888;
    color: #fff;
    padding: 0px 0px;
}

@media (max-width: 896px) {
    .totalPrice {
        margin-top: 100px;
    }

    .nextBtn {
        margin-top: 30px;
    }
}

@media (max-width: 920px) {
    .chooseShop {
        flex-wrap: wrap;
    }

    .rwd-Large {
        display: none;
    }

    .rwd-mideum {
        display: block;
    }

    .itemData {
        justify-content: space-between;
        text-align: left;
    }

    .noteMargin {
        margin-bottom: 7px;
    }
    
    .choose {
        padding: 0px 5px;
    }

    .widthM {
        width: 30%;
    }

    .widthL {
        width: 60%;
    }

    .widthS {
        width: 10%;
    }

    .deleteBtn img {
        top: calc(50% - 14px);
    }

    .deleteBtn {
        top: 10px;
    }
}

@media (max-width: 710px) {
    .itemData {
        flex-wrap: wrap;
    }

    .drinkName {
        margin-bottom: 10px
    }

    .widthM {
        width: 100%;
    }

    .widthL {
        width: 75%;
    }
}

@media (max-width: 650px) {
    .pickUpData {
        flex-wrap: wrap;
    }

    .delivery, .total {
        width: 100%;
    }

    .totalPrice {
        margin-top: 50px;
    }
}

@media (max-width: 500px) {
    .itemData {
        flex-wrap: wrap;
        justify-content: flex-end;
    }

    .widthM {
        width: 100%;
    }

    .widthL {
        width: 100%;
    }

    .widthS {
        width: auto;
    }

    .rwd-mideum-flex {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }

    .noteMargin {
        margin-right: 10px;
    }

    .priceMargin {
        margin-top: 3px;
    }

    .deleteBtn {
        position: absolute;
        right: 0;
        margin-right: 10px;
        top: 20px;
    }
}

</style>
