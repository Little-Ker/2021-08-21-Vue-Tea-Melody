<template>
    <div class="drinkList">
        <span>1111</span>

    </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;





export default {
    name: 'DrinkList',
    data() {
        return {
            typeList: [
                '新品上市','好韻茶','鮮奶茶','鮮果飲'
            ]
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



</style>
