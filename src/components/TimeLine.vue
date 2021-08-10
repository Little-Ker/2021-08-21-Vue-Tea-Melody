<template>
    <div class="timeLine">
        <div class="wrap">
            <div class="block runPos">
                <p>1</p>
            </div>
            <div class="line"></div>
            <div class="block">
                <p>2</p>
            </div>
            <div class="line"></div>
            <div class="block">
                <p>3</p>
            </div>
        </div>
    </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'TimeLine',
    data() {
        return {
            targetIndex: 1,
        }
    },
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

.line {
    width: 35%;
    height: 2px;
    background-color: #ccc;
}

.block::before {
    content: '購物明細';
    position: absolute;
    color: #333;
    width: 70px;
    top: 35px;
    left: -20px;
}

.block:nth-child(3)::before {
    content: '填寫資料';
}

.block:nth-child(5)::before {
    content: '訂單完成';
}

.block {
    position: relative;
    width: 30px;
    height: 30px;
    line-height: 30px;
    background-color: #ccc;
    color: #fff;
}

.runPos {
    background-color: #42b983;
}

.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 12px;
    margin: 40px 0px 60px 0px;
}

.timeLine {
    max-width: 640px;
    width: 100%;
    margin: auto;
    padding: 0px 5px;
}

</style>
