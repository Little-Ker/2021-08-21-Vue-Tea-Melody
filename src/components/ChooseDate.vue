<template>
    <div class="chooseDate">
        <p>預計取餐 / 送達時間</p>
        <div class="wrap">
            <div class="item" v-for="(item, index) in setDate" :key="index">
                <input v-model="chooseGetTime.chooseDate" :id="`type0${index}`" type="radio" name='date' :value="item">
                <label :for="`type0${index}`">
                    <p>{{item.date}}<br>
                    {{item.week}}</p>
                </label>
            </div>
        </div>
        <select v-model="chooseGetTime.chooseTime" id="areaName">
            <option :value="item" v-for="(item, index) in totalTime" :key="index">
                {{ item }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'ChooseDate',
    data() {
        return {
            nowTime: 0,
        }
    },
    computed: {
        setDate() {
            let addDay = this.getNowTime();

            let dateAry = [];
            for(let i = addDay; i < (5 + addDay); i++) {
                dateAry.push(this.getDate(i));
            }
            return dateAry;
        },
        totalTime() {
            let allTime = [];
            let earlyTime = 9;
            if (this.chooseGetTime.chooseDate.index === 0 && this.nowTime > earlyTime) earlyTime = this.nowTime;
            const lately = 20;
            const timePoint = [ '00', '15', '30', '45' ];

            for (let i = (earlyTime + 1); i < (lately + 1); i++) {
                for (let j = 0; j < timePoint.length; j++) {
                    const time = `${i} : ${timePoint[j]}`;
                    allTime.push(time);
                }
            }
            return allTime;
        },
        ordertData: {
            get() {
                return this.$store.state.ordertData;
            },
            set(val) {
                return this.$store.commit('SetOrdertData',val);
            }
        },
        chooseGetTime() {
            return this.ordertData.chooseGetTime;
        }
    },
    methods: {
        getNowTime() {
            const nowDate = new Date();
            this.nowTime = nowDate.getHours();
            if (this.nowTime > 20) {
                this.nowTime = 0;
                return 1;
            }
            return 0;
        },
        getDate(addDay) {
            const nowDate = new Date(new Date().getTime() + addDay * 24 * 60 * 60 * 1000);
            let month = (nowDate.getMonth() + 1);
            if (month < 10) month = `0${month}`;
            let date = nowDate.getDate();
            if (date < 10) date = `0${date}`;
            let day = nowDate.getDay();

            const weekAry = [ '日', '一', '二', '三', '四', '五', '六' ];
            let dayWord = weekAry[day];
            const today = `${month}/${date}`;
            const weekday = `週${dayWord}`;

            const openDate = {
                index: addDay,
                date: today,
                week: weekday
            }
            return openDate;
        },
    },
    mounted() {
        if (this.chooseGetTime.chooseDate === '') {
            this.chooseGetTime.chooseDate = this.setDate[0];
        }
        if (this.chooseGetTime.chooseTime === '') {
            this.chooseGetTime.chooseTime = this.totalTime[0];
        }
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: left;
    font-family: "CenturyGothicRegular","微軟正黑體","Microsoft JhengHei","MHei","STHeitiTC-Light",sans-serif,Arial,Helvetica,"Helvetica Neue",Tahoma,Verdana;
}

.wrap {
    display: flex;
}

.item {
    max-width: 70px;
    width: 20%;
    margin: 5px 5px 0px 0px;
}

label p {
    cursor: pointer;
    display: block;
    width: 100%;
    text-align: center;
    padding: 5px 0px;
    border: 1px solid #999;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
}

input {
    display: none;
}

input:checked + label p {
    background-color: #666;
    color: #fff;
}

select {
    background-color: rgba(255, 255, 255, 0);
    max-width: 370px;
    width: 100%;
    color: #333;
    padding: 5px 15px 5px 10px;
    letter-spacing: 1px;
    font-size: 16px;
    line-height: 18px;
    cursor: pointer;
    border: 1px solid #999;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
    margin: 5px 0px;
}

@media (max-width: 390px) {
    .item {
        min-width: 55px;
        font-size: 14px;
        width: 18%;
    }

    .wrap {
        flex-wrap: wrap;
    }
}

</style>
