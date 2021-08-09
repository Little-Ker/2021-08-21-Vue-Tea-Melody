<template>
    <div  class="chooseDrink">
        <div class="overlay">
            <div class="chooseList">
                <div class="topBlock">
                    <p>巴黎天空冰沙</p>
                    <div class="close"></div>
                </div>
                <img src="../assets/drink00.jpeg" alt="">
                <div class="drinkData">
                    <div class="drinkName">
                        <h2>巴黎天空冰沙</h2>
                        <p>總熱量最高值 590.0 大卡</p>
                    </div>
                    <hr>
                    <div class="choose">
                        <h3>甜度選擇</h3>
                        <div class="wrap">
                            <label class="container">全糖
                                <input type="radio" checked="checked" name="sugar">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">8 分糖
                                <input type="radio" name="sugar">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">5 分糖
                                <input type="radio" name="sugar">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">3 分糖
                                <input type="radio" name="sugar">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">無糖
                                <input type="radio" name="sugar">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <hr>
                    <div class="choose">
                        <h3>冰量選擇</h3>
                        <div class="wrap">
                            <label class="container">正常冰
                                <input type="radio" checked="checked" name="ice">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">少冰
                                <input type="radio" name="ice">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">微冰
                                <input type="radio" name="ice">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">去冰
                                <input type="radio" name="ice">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">熱
                                <input type="radio" name="ice">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <hr>
                    <div class="choose">
                        <h3>加料選擇（可複選）</h3>
                        <div class="wrap">
                            <label v-for="(item, index) in toppings" :key="index" class="container">{{item.type}} +${{item.price}}
                                <input type="checkbox" name="add" :value="item.type">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <hr>
                    <div class="choose">
                        <h3>備註</h3>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                    </div>
                </div>
                <div class="addCar">
                    <div class="chooseCount">
                        <div class="countBtn subCountBtn">-</div>
                        <p> 1 </p>
                        <div class="countBtn addCountBtn">+</div>
                    </div>
                    <div class="addBtn">加入購物車</div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import drink from '../assets/data/drink.json';
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'ChooseDrink',
    data() {
        return {
            toppings: drink.toppings
        }
    },
    computed: {
        // isShowLoading: {
        //     get() {
        //         return this.$store.state.isShowLoading;
        //     },
        //     set(val) {
        //         return this.$store.commit('SetShowLoading',val);
        //     }
        // },
    },
    methods: {
        // 禁用滾動條
        stopScrollBar() {
            var tops = $(document).scrollTop();
            $(document).bind("scroll",function (){$(document).scrollTop(tops); });
        },
        startScrollBar() {
            $(document).unbind("scroll");
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
    text-align: left;
    list-style: none;
}

textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: 18px;
}

.wrap {
    display: flex;
    flex-direction: column;
}

.wrap label {
    margin: 10px 0px;
}

.drinkName {
    margin-bottom:20px;
}

.choose {
    padding: 20px 0px;
}

.addCar {
    width: 100%;
    height: 70px;
    background-color: #fff;
    box-shadow: 0px -4px 8px rgb(0 0 0 / 10%), 0px 4px 10px rgb(0 0 0 / 30%);
    position: sticky;
    bottom: 0;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
}

.addBtn {
    cursor: pointer;
    height: 100%;
    width: 50%;
    text-align: center;
    line-height: 50px;
    background-color: #444;
    border-radius: 8px;
    color: #fff;
    transition: .3s;
}

.addBtn:hover {
    background-color: #111;
}

.chooseCount {
    width: 45%;
    display: flex;
    border: 1px solid #aaa;
    border-radius: 8px;
    background-color: #fff;
}

.chooseCount p {
    display: block;
    text-align: center;
    height: 50px;
    line-height: 45px;
    width: 50%;
    font-size: 20px;
    font-weight: bold;
}

.countBtn {
    cursor: pointer;
    background-color: #fff;
    color: #111;
    width: 25%;
    height: 50px;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    transition: .3s;
}

.countBtn:hover {
    background-color: #aaa;
}

.subCountBtn {
    height: 100%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: 1px solid #aaa;
}

.addCountBtn {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    height: 100%;
    border-left: 1px solid #ccc;
}

.topBlock {
    z-index: 100;
    position: sticky;
    top: 0;
    width: 100%;
    max-width: 500px;
    height: 50px;
    line-height: 50px;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    padding: 0px 20px;
    justify-content: space-between;
}

.topBlock p {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #fff;
}

.topBlock .close {
    width: 25px;
    height: 50px;
    cursor: pointer;
    transition: .3s;
}

.close:hover::after, .close:hover::before{
    background-color: #ccc;
}

.close::after, .close::before {
    content: '';
    position: absolute;
    top: 13px;
    right: 25px;
    width: 5px;
    height: 25px;
    border: 50%;
    background-color: #fff;
}

.close::after {
    transform: rotate(45deg);
}

.close::before {
    transform: rotate(-45deg);
}

.choose h3 {
    margin-bottom: 10px;
}
 
.drinkData {
    width: 100%;
    padding: 15px 40px;
    background-color: #fff;
}

.chooseList img {
    vertical-align: bottom;
    width: 100%;
}

.chooseList {
    position: relative;
    max-width: 500px;
    width: 80%;
    height: 90%;
    background-color: #555;
}

.overlay {
    overflow: auto;
    position: fixed;
    z-index: 100;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
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

@media (max-width: 650px) {
    .chooseList {
        width: 100%;
        height: 100%;
        max-width: none;
    }

    .topBlock {
        max-width: none;
    }
}

</style>
