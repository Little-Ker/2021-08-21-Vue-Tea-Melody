<template>
    <div class="chooseDrink">
            <div v-if="isShowNotice" class="noticeContainer">
                <transition @after-enter='afterEnterFn' name='fadeIn' appear>
                <div class="showBuyNotice">
                    <p>已將
                    <br>{{chooseDrinkName}}
                    <br>加入至購物清單</p>
                </div>
                </transition>
            </div>
        <div v-show="isShowDrinkOverlay" @click="closeFn($event)" class="overlay">
            <div class="chooseList">
                <div class="topBlock">
                    <p>{{chooseDrinkData.drinkName}}</p>
                    <div class="close"></div>
                </div>
                <img :src="chooseDrinkData.imgUrl" alt="">
                <div class="drinkData">
                    <div class="drinkName">
                        <h2>{{chooseDrinkData.drinkName}}</h2>
                        <p>{{chooseDrinkData.content}}</p>
                    </div>
                    <hr>
                    <div class="choose">
                        <h3>甜度選擇</h3>
                        <div class="wrap">
                            <label v-for="(item, index) in showSugar" :key="index" class="container">{{item.level}}
                                <input v-model="sugarLevel" type="radio" name="sugar" :value="item.level">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <hr>
                    <div class="choose">
                        <h3>冰量選擇</h3>
                        <div class="wrap">
                            <label v-for="(item, index) in showIce" :key="index" class="container">{{item.level}}
                                <input v-model="iceLevel" type="radio" :value="item.level" name="ice">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <hr>
                    <div class="choose">
                        <h3>加料選擇（可複選）</h3>
                        <div class="wrap">
                            <label v-for="(item, index) in toppings" :key="index" class="container">{{item.type}} +${{item.price}}
                                <input v-model="toppingsAry" type="checkbox" name="add" :value="item.type">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <hr>
                    <div class="choose">
                        <h3>備註</h3>
                        <textarea v-model="note" id="subject" name="subject" placeholder="Write something..."></textarea>
                    </div>
                </div>
                <div class="addCar">
                    <div class="chooseCount">
                        <div @click="changeCount(-1)" class="countBtn subCountBtn">-</div>
                        <p>{{ count }}</p>
                        <div @click="changeCount(1)" class="countBtn addCountBtn">+</div>
                    </div>
                    <div @click="addCarFn" class="addBtn">加入購物車&nbsp;&nbsp;${{showPrice}}</div>
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
            sugarLevel: '全糖',
            iceLevel: '正常冰',
            toppingsAry: [],
            count: 1,
            drinkPrice: 0,
            note: '',
            toppings: drink.toppings,
            isShowNotice: false,
        }
    },
    computed: {
        chooseDrinkName() {
            return this.chooseDrinkData.drinkName;
        },
        showPrice() {
            this.changePrice();
            return this.drinkPrice;
        },
        showSugar() {
            let sugarAry = [];
            if (!this.chooseDrinkData.sugarLevel) {
                sugarAry.push(drink.sugarList[0]);
                return sugarAry;
            }
            return sugarAry = drink.sugarList;        
        },
        showIce() {
            let iceAry = [];
            if (!this.chooseDrinkData.iceLevel) {
                iceAry.push(drink.iceList[0]);
                return iceAry;
            }
            iceAry = drink.iceList;
            if (!this.chooseDrinkData.hot) {
                const newIceAry = iceAry.slice(0, iceAry.length - 1)
                return newIceAry;
            }
            return iceAry;         
        },
        chooseDrinkData() {
            return drink.drinks[this.chooseDrinkIndex];
        },
        chooseDrinkIndex() {
            return this.$store.state.chooseDrinkIndex;
        },
        isShowDrinkOverlay: {
            get() {
                return this.$store.state.isShowDrinkOverlay;
            },
            set(val) {
                return this.$store.commit('SetIsShowDrinkOverlay',val);
            }
        },
        shoppingCarList: {
            get() {
                return this.$store.state.shoppingCarList;
            },
            set(val) {
                return this.$store.commit('SetShoppingCarList',val);
            }
        },
    },
    methods: {
        changeCount(num) {
            if (this.count === 1 && num < 0) return;
            this.count = this.count + num; 
        },
        changePrice() {
            let oneDrinkPrice = this.chooseDrinkData.price;
            this.toppingsAry.forEach(element => {
                let price = this.toppings.filter(item => item.type === element)[0].price;
                oneDrinkPrice += price;
            });
            this.drinkPrice = oneDrinkPrice * this.count;
        },
        closeFn(event) {
            const el = event.target.getAttribute('class');
            if (el === 'overlay' || el === 'close') this.isShowDrinkOverlay = false;
        },
        afterEnterFn() {
            this.isShowNotice = false;
        },
        isShowScrollBar() {
            $('.overlay').scrollTop(0);
            if (this.isShowDrinkOverlay) {
                $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', 'auto');
            }
        },
        addCarFn() {
            const buyDrinkData = {
                id: this.chooseDrinkIndex,
                drinkName: this.chooseDrinkData.drinkName,
                sugarLevel: this.sugarLevel,
                iceLevel: this.iceLevel,
                toppingsAry: this.toppingsAry,
                note: this.note,
                count: this.count,
                drinkPrice: this.drinkPrice
            }
            this.shoppingCarList.push(buyDrinkData);

            this.isShowDrinkOverlay = false;
            this.isShowNotice = true;
        }
    },
    watch: {
        isShowDrinkOverlay() {
            this.sugarLevel =  '全糖';
            this.iceLevel = '正常冰';
            this.toppingsAry = [];
            this.count = 1;
            this.note = '';
            this.isShowScrollBar();
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

/* 提示框進出場動畫 */
.fadeIn-enter-active {
  animation: fadeIn 1.5s;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        top: 0px;
    }
    20% {
        opacity: 1;
        top: -20px;
    }
    80% {
        opacity: 1;
        top: -20px;
    }
    100% {
        opacity: 0;
        top: -20px;
    }
}

.noticeContainer {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}

.showBuyNotice {
    position: relative;
    max-width: 400px;
    max-height: 230px;
    width: 80%;
    height: 30%;
    text-align: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    line-height: 40px;
    font-size: 18px;
    border-radius: 10px;
    background-color: #000000c4;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
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
    user-select: none;
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
    text-align: left;
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
