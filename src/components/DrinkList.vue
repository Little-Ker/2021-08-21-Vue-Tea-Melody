<template>
    <div class="drinkList">
        <div class="typeNav">
            <a :class="`aShow${index}`" @click="moveToDrink(index)" v-for="(item, index) in typeList" :key="index">
                {{item.type}}
            </a>
        </div>
    </div>
</template>

<script>
import drink from '../assets/data/drink.json';
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'DrinkList',
    data() {
        return {
            typeList: drink.teaType,
        }
    },
    methods: {
        moveToDrink(index) {
            let drinkPosId = `#moveDinkPos${index}`
            $('html,body').animate({ scrollTop: $(drinkPosId).offset().top }, 'slow');
        },
        resetAcss() {
            for(let i = 0; i < this.typeList.length; i++) {
                $(`.aShow${i}`).removeClass('show')
            }
        },
        scrollFn() {
            let scrollBarTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

            // "新品上市"前須重置
            if (scrollBarTop <= 150) {
                this.resetAcss();
            }

            for(let i = 0; i < this.typeList.length; i++) {
                let targetPos = $(`#moveDinkPos${i}`).offset().top;
                if (scrollBarTop < (targetPos + 50) && scrollBarTop > (targetPos - 150)) {
                    this.resetAcss();
                    $(`.aShow${i}`).addClass('show')
                }
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollFn)
    },
    unmounted () {
        window.removeEventListener('scroll', this.scrollFn)
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

.drinkList {
    background-color: #fff;
    width: 100%;
    box-shadow: 0px -4px 8px rgb(0 0 0 / 10%), 0px 4px 10px rgb(0 0 0 / 10%);
}

.typeNav {
    max-width: 1160px;
    margin: auto;
    padding: 0px 5px;
    display: flex;
    justify-content: space-around;
}

a {
    cursor: pointer;
    color: #333;
    font-weight: bold;
    display: block;
    padding: 20px;
    margin: 0px 20px;
    transform: .3s;
}

a:hover {
    color: #42b983;
}

.show {
    color: #42b983;
}

@media (max-width: 545px) {
    a {
        padding: 20px 10px;
        letter-spacing: 2px;
        font-size: 14px;
    }
}

@media (max-width: 485px) {
    a {
        writing-mode: vertical-rl;
        letter-spacing: 2px;
        text-align: left;
        padding: 10px 15px;
        margin: 0px 10px;
        font-size: 14px;
    }
}

</style>
