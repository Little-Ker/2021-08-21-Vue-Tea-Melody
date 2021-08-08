<template>
    <div class="shoppingCar">
        <div @click="clickCarFn" class="icon">
            <div class="iconBg"></div>
            <img src="../assets/shop/car2.png" alt="">
            <img class="deleteHover" src="../assets/shop/car.png" alt="">
            <div v-show="isShopping" class="circle"></div>
        </div>
        <div v-if="isShowShopping" class="shoppingList">
            <h3 class="left">購物清單</h3>
            <div @click="clickCarFn" class="closeBtn right"></div>
            <div class="clearBox"></div>
            <hr>
            <div class="list">
                <div class="item">
                    <div class="itemName">
                        <p><b>桃膠蜂蜜檸檬</b></p>
                        <p class="addContent">七分糖 / 完全去冰</p>
                        <p class="addContent">加 珍珠、芋園</p>
                    </div>
                    <div class="wrap-column">
                        <div class="countNum"><b>1 杯</b></div>
                        <div class="deleteBtn">
                            <img src="../assets/shop/can2.png" alt="">
                            <img class="deleteHover" src="../assets/shop/can.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="itemName">
                        <p><b>寶島1號奶茶</b></p>
                        <p class="addContent">七分糖 / 完全去冰</p>
                    </div>
                    <div class="wrap-column">
                        <div class="countNum"><b>1 杯</b></div>
                        <div class="deleteBtn">
                            <img src="../assets/shop/can2.png" alt="">
                            <img class="deleteHover" src="../assets/shop/can.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="buyBtn">訂單結帳</div>
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
            isShopping: true,
            isShowShopping: true
        }
    },
    computed: {
    },
    methods: {
        clickCarFn() {
            this.isShowShopping = !this.isShowShopping
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
    background-color: #8bc672;
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

.closeBtn {
    cursor: pointer;
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
    background-color: #8bc672;
    color: #fff;
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
    width: 55%;
}

.deleteBtn {
    position: relative;
    margin-right: 25px;
    bottom: 28px;
}

.deleteBtn:hover img{
    background-color: #999;
}

.deleteBtn:hover .deleteHover{
    opacity: 0.8;
}

.deleteBtn img {
    cursor: pointer;
    position: absolute;
    width: 28px;
    height: 28px;
    padding: 5px;
    border-radius: 50%;
    border: 1px solid #ccc;
}

.deleteHover {
    position: absolute;
    opacity: 0;
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
