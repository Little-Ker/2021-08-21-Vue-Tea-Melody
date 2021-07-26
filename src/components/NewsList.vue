<template>
    <div class="container">
        <div class="newsList">
            <ul class="chooseList">
                <li v-for='(item, index) in chooseAry' :key='index'>
                    <div class="typeBtn">
                        <input :id="`type0${index}}`" checked type="radio" name='newsType' :value="item.value">
                        <label :for="`type0${index}}`" class="radioStyle"><p>{{item.type}}</p></label>  
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsList',
    data() {
        return {
            chooseAry: [
                { type: '全部', value: 'all' },
                { type: '新品上市', value: 'newDrink' },
                { type: '活動新訊', value: 'active' },
                { type: '食安報告', value: 'report' },
                { type: '新店資訊', value: 'shop' },
            ]
        }
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: content-box;
        /* font-family: wt024; */
        /* font-family: A-OTF; */
    }

    ol, ul {
        list-style: none;
    }

    .newsList {
        max-width: 920px;
        margin: auto;
    }

    .chooseList {
        text-align: center;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    label p {
        box-sizing: border-box;
        width: 80px;
        height: 40px;
        border: 2px solid #8bc672;
        color: #8bc672;
        z-index: 2;
        font-weight: bold;
    }

    .radioStyle {
        cursor: pointer;
        display: inline-block;
        width: 80px;
        height: 40px;
        line-height: 40px;
        margin: 5px 5px;
        /* background-color: #fff; */
        color: #8bc672;
        position: relative;
        overflow: hidden;
    }

    .radioStyle::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 0%;
        height: 100%;
        background-color: #8bc672;
        z-index: -1;
        transition: .6s;
    }

    .radioStyle:hover:before {
        width: 180%;
    }

    label p:hover {
        color: #fff;
    }

    input:checked + label {
        background-color: #8bc672;
    }

    input:checked + label p {
        color: #fff;
    }

    input {
        display: none;
    }
</style>