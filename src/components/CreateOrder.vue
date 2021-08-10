<template>
    <div class="createOrder">
        <div class="allList">
                <div class="item">
                    <div class="itemData">
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
            <div class="item">
                <div class="itemData">
                    <div class="chooseData widthL">百香Q果綠</div>
                    <div class="chooseData widthL">七分糖 / 正常冰</div>
                    <div class="chooseData widthL">仙草凍、咖啡凍、布丁</div>
                    <div class="chooseData widthL">123456</div>
                    <div class="chooseData widthM">1 杯</div>
                    <div class="chooseData widthM">$50</div>
                    <div class="chooseData deleteBtn widthM">
                        <img src="../assets/shop/can2.png" alt="">
                        <img class="deleteHover" src="../assets/shop/can.png" alt="">
                    </div>
                </div>
            </div>
            <hr>
            <div class="item">
                <div class="itemData">
                    <div class="chooseData widthL">百香Q果綠</div>
                    <div class="chooseData widthL">七分糖 / 正常冰</div>
                    <div class="chooseData widthL">仙草凍、咖啡凍、布丁</div>
                    <div class="chooseData widthL">123456</div>
                    <div class="chooseData widthM">1 杯</div>
                    <div class="chooseData widthM">$50</div>
                    <div class="chooseData deleteBtn widthM">
                        <img src="../assets/shop/can2.png" alt="">
                        <img class="deleteHover" src="../assets/shop/can.png" alt="">
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <div class="pickUpData">
            <div class="delivery">
                <h3>取貨方式</h3>
                <div class="wrap">
                    <div class="method">
                        <p>分店選擇</p>
                        <div class="chooseShop">
                            <div class="city">
                                縣市 <select>
                                    <option>台中市</option>
                                </select>
                                <span class="customSelect"></span>
                            </div>
                            <div class="area">
                                區域 <select>
                                    <option>太平區</option>
                                </select>
                                <span class="customSelect"></span>
                            </div>
                            <div class="shop">
                                店名 <select class="selectShop">
                                    <option>太平長億店</option>
                                </select>
                                <span class="customSelect"></span>
                            </div>
                        </div>
                    </div>
                    <div class="method">
                        <label class="container">外帶自取
                            <input type="radio" checked value="" name="pickuUp">
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">外送
                            <input type="radio" value="" name="pickuUp">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="method">
                       <p>等候時間約 5 min</p> 
                    </div>
                </div>
            </div>
            <div class="total">
                <h3>訂單資訊</h3>
                <div class="method">
                    <div class="text">
                        <p>小計</p>
                        <p>$ 1000</p>
                    </div>
                    <div class="text">
                        <p>運費</p>
                        <p>$ 0</p>
                    </div>
                    <p></p>
                    <div class="text totalPrice">
                        <p><b>總計</b></p>
                        <p><b>$ 1000</b></p>
                    </div>
                    <div class="nextBtn"><p>填寫資料</p></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'CreateOrder',
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
    background-color: #42b983;
    color: #fff;
}

.nextBtn {
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
}

.pickUpData {
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding: 0px 10px;
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

.total h3, .delivery h3 {
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
    margin-bottom: 80px;
}

.itemData {
    display: flex;
}

.item {
    padding: 10px 0px;
}

.createOrder {
    max-width: 1280px;
    width: 90%;
    padding: 0px 5px;
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

</style>
