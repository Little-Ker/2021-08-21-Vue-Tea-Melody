<template>
    <div class="map">
        <div class="choose">
            <div class="chooseCity">
                縣市
                <select id="cityName" class="form-control" v-model="select.city">
                    <option value="null">請選擇縣市</option>
                    <option :value="item" v-for="item in cityList.cityList" :key="item">
                        {{ item }}
                    </option>
                </select>
            </div>
            <div class="chooseArea">
                地區
                <select id="areaName" class="form-control" v-model="select.area">
                    <option value="null">請選擇地區</option>
                    <option :value="item" v-for="item in areaList" :key="item">
                        {{ item }}
                    </option>
                </select>
            </div>
            
        </div>
        <div id="mapBlock"></div>
    </div>
</template>

<script>
import shopPointData from '../assets/data/shopPointData.json';

import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

// Leaflet
import L from 'leaflet';
// 設定地圖空物件
let openStreetMap = {};

export default {
    name: 'Map',
    data() {
        return {
            shopPointData,
            select: {
                city: '台中市',
                area: 'null'
            }
        }
    },
    computed: {
        shopList() {
            return this.shopPointData.filter((pharmacy) => {
                if (!this.select.area) {
                    return pharmacy.properties.county === this.select.city;
                }
                return pharmacy.properties.town === this.select.area;
            });
        },

        cityList() {
            let obj = {
                cityList: [],
                cityObj: {}
            }

            this.shopPointData.shop.forEach(({
                city,
                area,
            }) => {
                if (!obj.cityObj[city]) {
                    obj.cityList.push(city);
                    obj.cityObj[city] = {
                        areaObj: {},
                        areaList: [],
                    }
                }
                if (!obj.cityObj[city].areaObj[area]) {
                    obj.cityObj[city].areaList.push(area);
                    obj.cityObj[city].areaObj[area] = {}
                }
            })
            console.log('obj',obj);
            return obj;
        },
        areaList() {
            this.clearSelectArea();
            if (this.select.city !== 'null') {
                return this.cityList.cityObj[this.select.city].areaList
            }
            return [];
        },
    },
    methods: {
       clearSelectArea() {
           this.select.area = 'null';
       },
       updateMap() {
            // clear markers
            openStreetMap.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                openStreetMap.removeLayer(layer);
                }
            });

            // 客製化icon
            const customIcon = L.icon({
                iconUrl: 'https://img-premium.flaticon.com/png/512/1078/1078454.png?token=exp=1627801949~hmac=5f95a748b7120a098db1d4473f0defab',
                iconSize: [42, 42],
            });
        
            // add markers
            this.pharmacies.forEach((pharmacy) => {
                const center = [pharmacy.geometry.coordinates[1], pharmacy.geometry.coordinates[0]];
                // 透過藥局經緯度疊加標記
                const marker = L.marker(center, {
                    icon: customIcon,
                    title: '跟 <a> 的 title 一樣', // 跟 <a> 的 title 一樣
                    opacity: 1.0,
                }
                ).addTo(openStreetMap);

                // 地圖中心點改變
                openStreetMap.panTo(center)

                // 圖形標記
                // L.circle(center, {
                //     color: 'red',
                //     fillColor: '#f03',
                //     fillOpacity: 0.5,
                //     radius: 500
                // }).addTo(openStreetMap);

                // 點選標記時有說明框
                marker.bindPopup(`<p><strong style="font-size: 20px;">${pharmacy.properties.name}</strong></p>
                    <strong style="font-size: 16px; color: #d45345;">口罩剩餘：成人 - ${pharmacy.properties.mask_adult ? `${pharmacy.properties.mask_adult} 個` : '未取得資料'} / 兒童 - ${pharmacy.properties.mask_child ? `${pharmacy.properties.mask_child} 個` : '未取得資料'}</strong><br>
                    地址: ${pharmacy.properties.address}<br>
                    電話: ${pharmacy.properties.phone}<br>
                    <small>最後更新時間: ${pharmacy.properties.updated}</small>`);

                // 滑鼠靠近地標時有說明文字
                marker.bindTooltip("my tooltip text", {
                    direction: 'bottom', // right、left、top、bottom、center。default: auto
                    sticky: false, // true 跟著滑鼠移動。default: false
                    permanent: false, // 是滑鼠移過才出現，還是一直出現
                    opacity: 1.0
                }).openTooltip();

            })
        }
    },
    watch: {
    },
    mounted() {
        const centerPoint = [24.9983469, 121.5810358];
        // 生成地圖
        openStreetMap = L.map('mapBlock', {
        center: centerPoint,
        // 可以嘗試改變 zoom 的數值
        zoom: 19,
        zoomControl: true , // 是否秀出 - + 按鈕
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 19,
        }).addTo(openStreetMap);
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#mapBlock {
    max-width: 1280px;
    z-index: 1;
    /* margin: 10px; */
    height: 560px;
    width: 90%;
    margin: auto;
}

.map {
    padding-bottom: 40px;
}

@media (max-width: 460px) {
    #mapBlock {
        width: 90%;
    }
}

</style>
