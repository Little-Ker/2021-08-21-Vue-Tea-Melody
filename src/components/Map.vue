<template>
    <div class="map">
        <div class="choose">
            <div class="chooseCity">
                縣市
                <select id="cityName" class="form-control" v-model="select.city">
                    <!-- <option value="null">請選擇縣市</option> -->
                    <option :value="item.city" v-for="item in cityList" :key="item.city">
                        {{ item.city }}
                    </option>
                </select>
            </div>
            <div class="chooseArea">
                地區
                <select id="areaName" class="form-control" v-model="select.area">
                    <option value="null">請選擇地區</option>
                    <option :value="item.area" v-for="item in areaList" :key="item.area">
                        {{ item.area }}
                    </option>
                </select>
            </div>
        </div>
        <div id="mapBlock"></div>
    </div>
</template>

<script>
import shopPointData from '../assets/data/shopPointData.json';
import cityCenter from '../assets/data/cityCenter.json';

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
            cityCenter,
            select: {
                city: '台中市',
                area: 'null'
            }
        }
    },
    computed: {
        shopList() {
            return this.shopPointData.shop.filter((shop) => {
                if (this.select.area === 'null') {
                    return shop.city === this.select.city;
                }
                return shop.area === this.select.area;
            });
        },
        setMapCenter() {
            return this.cityCenter.center.filter((city) => {
                return city.city === this.select.city;
            });
        },
        cityList() {
            return this.cityCenter.center.filter((city) => {
                return city;
            });
        },
        areaList() {
            this.clearSelectArea();
            if (this.select.city !== 'null') {
                return this.setMapCenter[0].areaList
            }
            return [];
        },
        chooseArea() {
            return this.setMapCenter[0].areaList.filter((area) => {
                return area.area === this.select.area;
            });
        }
    },
    methods: {
       clearSelectArea() {
           this.select.area = 'null';
       },
       setCityCenter() {
            if (this.select.area === 'null') {
                const geometry = this.setMapCenter[0].geometry;
                openStreetMap.panTo(geometry)
                if (openStreetMap._zoom === 10) return; 
                this.timeout = setTimeout(() => {
                    openStreetMap.setZoom(10);
                }, 300);
                return;
            }
            const geometry = this.chooseArea[0].geometry;
            openStreetMap.panTo(geometry)
            if (openStreetMap._zoom === 13) return; 
            this.timeout = setTimeout(() => {
                openStreetMap.setZoom(13);
            }, 300);
       },
       updateMap() {
            // 清除所有標記
            openStreetMap.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    openStreetMap.removeLayer(layer);
                }
            });

            // 客製化icon
            const customIcon = L.icon({
                iconUrl: require('../assets/mapPoint.png'),
                iconSize: [42, 42],
            });
        
            // add markers
            this.shopList.forEach((shop) => {
                const point = [shop.geometry.x, shop.geometry.y];
                // 透過藥局經緯度疊加標記
                const marker = L.marker(point, {
                    icon: customIcon,
                    title: '跟 <a> 的 title 一樣', // 跟 <a> 的 title 一樣
                    opacity: 1.0,
                }
                ).addTo(openStreetMap);

                // 點選標記時有說明框
                marker.bindPopup(`<p><strong style="font-size: 20px;">${shop.shopName}</strong></p>
                    <p style="font-size: 15px;">地址: ${shop.address}<br>電話: ${shop.phone}<br></p>`);

                // 滑鼠靠近地標時有說明文字
                marker.bindTooltip(`${shop.shopName}`, {
                    direction: 'right', // right、left、top、bottom、center
                    sticky: false, // 跟著滑鼠移動
                    permanent: true, // 是滑鼠移過才出現，還是一直出現
                    opacity: 1.0
                }).openTooltip();
            })

            // 地圖中心點改變
            this.setCityCenter();
        },
    },
    watch: {
        shopList() {
            this.updateMap();
        },
    },
    mounted() {
        const centerPoint = [24.9983469, 121.5810358];
        // 生成地圖
        openStreetMap = L.map('mapBlock', {
        center: centerPoint,
        zoom: 19,
        zoomControl: true , // 是否秀出 - + 按鈕
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 19,
        }).addTo(openStreetMap);

        this.updateMap();

        // // 點擊地圖取得經緯度
        // var popup = L.popup();
        // function onMapClick(e) {
        //     popup
        //         .setLatLng(e.latlng)
        //         .setContent("經緯度座標：" + e.latlng.toString())
        //         .openOn(openStreetMap);
        // }
        // openStreetMap.on('click', onMapClick);
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
    height: 560px;
    width: 90%;
    margin: auto;
}

.map {
    padding-bottom: 40px;
}

.choose {
    margin-bottom: 30px;
}

@media (max-width: 460px) {
    #mapBlock {
        height: 500px;
        width: 90%;
    }
}

</style>
