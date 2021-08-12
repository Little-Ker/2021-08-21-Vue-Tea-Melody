<template>
    <div class="orderMessage">
        <img :src="imgUrl" alt="">
        <p>{{message}}</p>
        <div @click="returnFn" class="returnBtn">返回點餐畫面</div>
    </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'OrderMessage',
    data() {
        return {
            message: '',
            imgUrl: '',
        }
    },
    computed: {
        orderLevel() {
            return this.$store.state.orderLevel;
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
        returnFn() {
            this.goTop();
            this.$router.push("/shop")
        },
        goTop() {
            $('html,body').scrollTop(0, 0);
        }
    },
    mounted() {
        if (this.orderLevel === 1) {
            this.message = '您的購物車沒有任何品項';
            this.imgUrl = require('../assets/shop/car.png');
            return;
        }
        this.message = '您的訂單已完成！';
        this.imgUrl = require('../assets/shop/complete.png');
        this.shoppingCarList = [];
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.orderMessage {
    max-width: 1280px;
    width: 90%;
    padding: 50px 5px 50px 5px;
    margin: auto;
    background-color: #fff;
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
img {
    max-width: 200px;
    min-width: 100px;
    width: 30%;
    opacity: 0.15;
}

p {
    margin: 10px 0px;
}

.returnBtn {
    cursor: pointer;
    max-width: 300px;
    width: 80%;
    height: 50px;
    line-height: 50px;
    background-color: #555;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    transition: .3s;
    margin: 30px 0px;
}

.returnBtn:hover {
    background-color: #333;
}

</style>
