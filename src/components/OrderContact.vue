<template>
    <div class="orderContact">
        <div class="wrap">
            <div class="product">
                <h3>訂單資料</h3>
                <div class="data">
                    <p class="totalPrice"><b>付款總額 $ 1000</b></p>
                    <p>XXX分店</p>
                    <p>外帶自取</p>
                    <p>領取時間</p>
                </div>
            </div>
            <div class="customer">
                <div class="customerData">
                    <h3>聯絡資料</h3>
                    <div class="data">
                        <div class="inputData">
                            <p>姓名</p><input type="text" id="name" name="name" required>
                        </div>
                        <div class="inputData">
                            <p>電話</p><input type="text" placeholder="請輸入聯絡電話" name="uname" required>
                        </div>
                        <div class="inputData">
                            <p>地址</p><input type="text" placeholder="請輸入外送地址" name="uname" required>
                        </div>
                    </div>
                </div>
                <div class="payData">
                    <h3>付款方式</h3>
                    <div class="data">
                        <label class="container">信用卡付款
                            <input type="radio" checked name="payType" value="type">
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">ATM轉帳
                            <input type="radio" name="payType" value="type">
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">現場付款
                            <input type="radio" name="payType" value="type">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <!-- <div class="wrap">
                    <div class="btn preBtn">回上一步</div>
                    <div class="btn submitBtn">提交訂單</div>
                </div> -->
            </div>
        </div>
        <div class="wrap btnWrap">
            <div class="btn preBtn">回上一步</div>
            <div class="btn submitBtn">提交訂單</div>
        </div>
    </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'OrderContact',
    methods: {
        
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: left;
}

.product {
    width: 35%;
}

.customer {
    width: 55%;
}

.totalPrice {
    font-size: 17px;
}

.product p {
    position: relative;
    line-height: 42px;
    margin-left: 25px;
}

.product p::after {
    content: '';
    position: absolute;
    top: 11px;
    left: -20px;
    width: 5px;
    height: 10px;
    border: solid #666;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}


.inputData p {
    position: relative;
    letter-spacing: 3px;
    width: 60px
}

.inputData p::before {
    content: '';
    position: absolute;
    right: 0;
    top: 4px;
    width: 1px;
    height: 15px;
    background-color: #666;
}


.inputData {
    display: flex;
    margin-bottom: 30px;
    padding: 5px;
    border-bottom: 1px solid #ccc;

}

input[type=text] {
  width: 80%;
  padding: 5px 20px;
  display: inline-block;
  letter-spacing: 3px;
  border: 0px;
  outline: none;
}

.btn {
    max-width: 450px;
    position: relative;
    padding: 0px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 55%;
    line-height: 50px;
    height: 50px;
    text-align: center;
    transition: .3s;
}

.submitBtn::before, .preBtn::before {
    position: absolute;
    content: '';
    top: calc(50% - 6px);
    right: 20px;
    width: 8px;
    height: 8px;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    transform: rotate(-45deg);
}

.preBtn::before {
    top: calc(50% - 4px);
    border: solid #666;
    border-width: 0 3px 3px 0;
    left: 20px;
    transform: rotate(135deg);
}

.preBtn {
    max-width: 180px;
    width: 40%;
    border: 1px solid #ccc;
}

.preBtn:hover {
   background-color: #eee;
}

.submitBtn {
    background-color: #666;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}

.submitBtn:hover {
    background-color: #222;
}

.data {
    padding: 30px 0px;
}

.product h3, .payData h3, .customerData h3 {
    text-align: left;
    line-height: 30px;
    border-bottom: 1px dashed #999;
}

.wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px 5px;
}

.orderContact {
    max-width: 1280px;
    width: 90%;
    padding: 70px 40px 50px 40px;
    margin: auto;
    background-color: #fff;
    padding-bottom: 70px;
}

.container {
    display: block;
    position: relative;
    padding-left: 40px;
    margin-bottom: 20px;
    cursor: pointer;
}

.container input {
    display: none;
}

.checkmark {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
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
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}

@media (max-width: 945px) {
    .customer, .product {
        width: 100%;
    }
}

@media (max-width: 620px) {
    .orderContact {
        padding: 70px 20px 50px 20px;
    }

    .btnWrap {
        flex-direction: column-reverse;
    }

    .submitBtn, .preBtn {
        max-width: 100%;
        width: 100%;
    }
}

@media (max-width: 400px) {
    .orderContact {
        padding: 70px 5px 50px 5px;
    }
}
</style>
