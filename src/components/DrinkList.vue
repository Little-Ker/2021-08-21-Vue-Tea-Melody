<template>
    <div class="drinkList">
        <div class="typeNav">
            <a v-for="(item, index) in typeList" :key="index" href="">
                {{item.type}}
            </a>
        </div>
    </div>
</template>

<script>
import drink from '../assets/data/drink.json';

export default {
    name: 'DrinkList',
    data() {
        return {
            typeList: drink.teaType,
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
