<template>
    <div v-if="!isHideShoppingCar" class="shoppingCar">
        <div @click="clickCarFn" class="icon">
            <div class="iconBg"></div>
            <img src="../assets/shop/car2.png" alt="">
            <img class="deleteHover" src="../assets/shop/car.png" alt="">
            <div v-show="isShopping" class="circle"></div>
        </div>
        <div v-if="isShowShopping" class="shoppingList">
            <h3 class="left">購物清單</h3>
            <div @click="clickCarFn" class="closeArea right">
                <div class="closeBtn"></div>
            </div>
            <div class="clearBox"></div>
            <hr>
            <div class="list">
                <div class="item" v-for="(item, index) in shoppingCarList" :key="index">
                    <div class="itemName">
                        <p><b>{{item.drinkName}}</b></p>
                        <p class="addContent">{{item.sugarLevel}} / {{item.iceLevel}}</p>
                        <p class="addContent">{{(item.toppingsAry.length !== 0) ? '加' : ''}} {{addTopping(item.toppingsAry)}}</p>
                    </div>
                    <div class="wrap-column">
                        <div class="countNum"><b>{{item.count}} 杯</b></div>
                        <div @click="deleteFn(index)" class="deleteBtn">
                            <img src="../assets/shop/can2.png" alt="">
                            <img class="deleteHover" src="../assets/shop/can.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <router-link v-if="!isShopping" to='shop'>
                <div @click="goTop()" class="buyBtn btnUnLock">前往訂購畫面</div>
            </router-link>
            <router-link v-if="isShopping" to='order'>
                <div @click="clickBuyFn(1)" class="buyBtn btnUnLock">訂單結帳</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'ShoppingCar',
    data() {
        return {
            isShowShopping: false
        }
    },
    computed: {
        isShopping() {
            return (this.shoppingCarList.length === 0) ? false : true;
        },
        shoppingCarList: {
            get() {
                return this.$store.state.shoppingCarList;
            },
            set(val) {
                return this.$store.commit('SetShoppingCarList',val);
            }
        },
        isHideShoppingCar: {
            get() {
                return this.$store.state.isHideShoppingCar;
            },
            set(val) {
                return this.$store.commit('SetIsHideShoppingCar',val);
            }
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
        addTopping(toppingAry) {
            return toppingAry.join('、');
        },
        clickCarFn() {
            this.isShowShopping = !this.isShowShopping
        },
        deleteFn(index) {
            const drinkName = this.shoppingCarList[index].drinkName;
            if (confirm(`是否刪除 ${drinkName} ?`)) {
                this.shoppingCarList.splice(index, 1);
            }
        },
        clickBuyFn(index) {
            this.goTop();
            this.orderLevel = index;
            this.isShowShopping = false;
            this.isHideShoppingCar = true;
        },
        goTop() {
            this.isShowShopping = false;
            $('html,body').scrollTop(0, 0);
        }
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
    text-decoration: none;
}

.left {
    float: left;
}

.right {
    float: right;
}

.clearBox {
    clear: both;
}

.shoppingCar {
    pointer-events: none;
    width: 100%;
    height: 100%;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
}

.circle {
    position: absolute;
    right: 7px;
    top: 10px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #42b983;
    box-shadow: 0px 1px 5px rgb(0 0 0 / 60%);
}

.icon:hover > img {
    opacity: 0;
}

.icon:hover .deleteHover {
    opacity: 1;
}

.icon img{
    position: absolute;
    top: 13px;
    left: 12px;
    width: 30px;
}

.icon:hover .iconBg {
    opacity: 1;
}

.icon {
    pointer-events: auto;
    cursor: pointer;
    width: 55px;
    height: 55px;
    position: absolute;
    right: 10px;
    bottom: 75px;
    border-radius: 10px;
    box-shadow: 0px 1px 5px rgb(0 0 0 / 60%);
}

.iconBg {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #fff;
    opacity: 0.8;
}

.closeArea {
    cursor: pointer;
    width: 30px;
    height: 25px;
}

.closeBtn {
    position: relative;
    top: 8px;
    width: 30px;
    height: 2px;
    border: 10%;
    background-color: #999;
    transform: rotate(45deg);
}

.closeBtn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 2px;
    border: 10%;
    transform: rotate(90deg);
    background-color: #999;
}

.list {
    overflow: auto;
    max-height: 60vh;
    padding: 0px 10px;
}

.shoppingList {
    pointer-events: auto;
    width: 320px;    
    background-color: #fff;
    position: absolute;
    bottom: 135px;
    right: 10px;
    border: 1px solid #999;
    padding: 20px 30px;
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgb(0 0 0 / 30%);
}

.buyBtn {
    margin-top: 10px;
    width: 100%;
    cursor: pointer;
    padding: 7px;
    background-color: #42b983;
    color: #fff;
    transition: .3s;
}

.btnLock {
    background-color: #ccc
}

.btnUnLock:hover {
    background-color: rgba(66, 185, 131, 0.8);
}

.shoppingList hr {
    margin-top: 10px;
}

.addContent {
    font-size: 14px;
}

.itemName {
    text-align: left;
    line-height: 26px;
    width: 85%;
}

.deleteBtn {
    position: relative;
    margin-right: 25px;
    bottom: 28px;
}

.item {
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
    padding-bottom: 12px;
    border-bottom: 1px dashed #999;
}

.wrap-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

@media (max-height: 730px) {
    .list {
        max-height: 55vh;
    }
}

@media (max-width: 485px) {
    .list {
        max-height: 80vh;
    }

    .shoppingList {
        width: 100%;
        height: 100%;
        bottom: 0;
        right: 0;
    }

    .icon {
        bottom: 95px;
    }
}

</style>
