<template>
    <div v-show="isShowLoading" class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'Loading',
    computed: {
        isShowLoading: {
            get() {
                return this.$store.state.isShowLoading;
            },
            set(val) {
                return this.$store.commit('SetShowLoading',val);
            }
        },
    },
    methods: {
        createRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },

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
        isShowLoading() {
            if (!this.isShowLoading) return;
            this.stopScrollBar();

            let randomSec = this.createRandom(500, 1500)
            this.timeout = setTimeout(() => {
                this.startScrollBar();
                this.isShowLoading = false;
                clearTimeout(this.timeout);
            }, randomSec);
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@keyframes loadingAnim {
    0% { opacity: 1; }
    100% { opacity: 0; }
}

span:nth-child(1) {
    animation: loadingAnim 1s 0.13s ease-out infinite
}

span:nth-child(2) {
    animation: loadingAnim 1s 0.26s ease-out infinite
}

span:nth-child(3) {
    animation: loadingAnim 1s 0.39s ease-out infinite
}

span:nth-child(4) {
    animation: loadingAnim 1s 0.52s ease-out infinite
}

span:nth-child(5) {
    animation: loadingAnim 1s 0.65s ease-out infinite
}

.loading {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
}

span {
    width: 20px;
    height: 20px;
    background-color: #8bc672;
    margin: 0px 5px;
    /* border-radius: 50%; */
}

</style>
