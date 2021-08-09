<template>
    <div class="allDrink">
        <div v-for="(item,index) in typeList" :key="index" class="item">
            <div :id="`moveDinkPos${index}`" class="scrollPos">scrollPos</div>
            <div class="marginTop"></div>
            <div class="title">
                <h3>{{item.type}}</h3>
                <p>{{item.engType}}</p>
            </div>
            <div class="drinWrap">
                <div class="drink" @click="chooseNewsDrink(drink.id)" v-for="(drink,index) in list.typeList[item.engType].drinkList" :key="index">
                    <img :src="drink.imgUrl" alt="">
                    <div class="drinkContent">
                        <p class="drinkName"><b>{{drink.drinkName}}</b></p>
                        <p class="eng">{{drink.content}}</p>
                        <p class="price"><b>${{drink.price}}</b></p>
                    </div>
                    <div class="addBtn">+</div>
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
    name: 'AllDrink',
    data() {
        return {
            typeList: drink.teaType,
            drinkList: drink.drinks
        }
    },
    computed: {
        list() {
            let obj = {
                typeList: {}
            }
            this.drinkList.forEach(({
                id,
                type,
                drinkName,
                imgUrl,
                content,
                price
            }) => {
                if (!obj.typeList[type]) {
                    obj.typeList[type] = {
                        drinkList: []
                    }
                }
                let drinkData = {
                    "id": id,
                    "drinkName": drinkName,
                    "imgUrl": imgUrl,
                    "content": content,
                    "price": price
                }
                obj.typeList[type].drinkList.push(drinkData);
            })
            return obj;
        },
        isShowDrinkOverlay: {
            get() {
                return this.$store.state.isShowDrinkOverlay;
            },
            set(val) {
                return this.$store.commit('SetIsShowDrinkOverlay',val);
            }
        },
        chooseDrinkIndex: {
            get() {
                return this.$store.state.chooseDrinkIndex;
            },
            set(val) {
                return this.$store.commit('SetChooseDrinkIndex',val);
            }
        }
    },
    methods: {
        chooseNewsDrink(id) {
            this.chooseDrinkIndex = id;
            this.isShowDrinkOverlay = true;
        }
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    text-align: left;
}

.marginTop {
    margin-top: 60px;
}

.scrollPos {
    opacity: 0;
}

.allDrink {
    position: relative;
    max-width: 1280px;
    width: 90%;
    margin: auto;
}

.drinWrap {
    display: flex;
    flex-wrap: wrap;
}

.drink {
    cursor: pointer;
    display: flex;
    position: relative;
    overflow: hidden;
    margin: 5px 5px 15px 5px;
    width: 32%;
    height: 130px;
    border-radius: 10px;
    border: 1px solid #fff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    background-color: #fff;
    transition: .3s;
}

.drink .eng {
    margin-top: 8px;
    font-size: 14px;
}

.drink:hover {
    background-color: rgb(238, 238, 238);
    border: 1px solid #ccc;
}

.drink:hover .addBtn {
    top: calc(50% - 30px);
}

.addBtn {
    position: absolute;
    right: 10px;
    top: calc(50% - 20px);
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    text-align: center;
    font-size: 20px;
    background-color: #42b983;
    font-weight: bold;
    color: #fff;
    transition: .3s;    
}

.drinkContent {
    width: 50%;
    padding: 20px 15px;
    line-height: 18px;
}

.drink img {
    height: 130px;
    width: 130px;
    object-fit: cover;
}

.drink .drinkName {
    font-size: 18px;
}

.drink .price {
    position: absolute;
    bottom: 18px;
    color: #42b983;
}

.title {
    font-size: 18px;
    margin: 0px 0px 20px 5px;
}

.title p {
    font-size: 16px;
    margin-top: 3px;
}

@media (max-width: 1200px) {
    .drink {
        width: 48%;
        height: 150px;
    }

    .drink img {
        height: 150px;
        width: 150px;
    }
}

@media (max-width: 700px) {
    .drink {
        width: 98%;
    }
}

@media (max-width: 400px) {
    .drink {
        margin: 5px;
        height: 120px;
    }

    .drink img {
        height: 120px;
        width: 90px;
    }

    .drinkContent {
        width: 50%;
        padding: 10px;
        line-height: 18px;
    }

    .drink .price {
        bottom: 10px;
    }

    .addBtn {
        top: calc(50% - 15px);
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 16px;   
    }

    .drink .drinkName {
        font-size: 16px;
    }
}

</style>
