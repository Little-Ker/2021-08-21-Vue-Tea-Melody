<template>
    <div class="map">
        <div id="mapBlock"></div>
        <div class="container">
            <div class="choose right">
                <div class="chooseCity">
                    <p>縣市</p>
                    <select id="cityName" class="form-control" v-model="select.city">
                        <!-- <option value="null">請選擇縣市</option> -->
                        <option :value="item.city" v-for="item in cityList" :key="item.city">
                            {{ item.city }}
                        </option>
                    </select>
                    <span class="customSelect"></span>
                </div>
                <div class="chooseArea">
                    <p>地區</p>
                    <select id="areaName" class="form-control" v-model="select.area">
                        <option value="null">請選擇地區</option>
                        <option :value="item.area" v-for="item in areaList" :key="item.area">
                            {{ item.area }}
                        </option>
                    </select>
                    <span class="customSelect"></span>
                </div>
            </div>
            <div class="clearBox"></div>
            <div class="shopList">
                <div class="shop" v-for="item in shopList" :key="item">
                    <div class="textBlock">
                        <img src="../assets/map/mapIcon33.png" alt=""><p><b>{{item.shopName}}</b></p>
                        <img src="../assets/map/mapIcon22.png" alt=""><p>{{item.phone}}</p>
                        <img class="addressImg" src="../assets/map/mapIcon11.png" alt=""><p class="address">{{item.address}}</p> 
                    </div>
                </div> 
            </div>
        </div>
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
                iconUrl: require('../assets/map/mapPoint3.png'),
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
                marker.bindPopup(`<p><strong style="font-size: 20px; color:#6ba723; letter-spacing: 1px">${shop.shopName}</strong></p>
                    <p style="font-size: 14px; letter-spacing: 2px;">地址: ${shop.address}<br>電話: ${shop.phone}<br></p>`);

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
            minZoom: 9,
        }).addTo(openStreetMap);

        this.updateMap();

        // 點擊地圖取得經緯度
        var popup = L.popup();
        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("經緯度座標：" + e.latlng.toString())
                .openOn(openStreetMap);
        }
        openStreetMap.on('click', onMapClick);
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

.right {
    float: right;
}

.clearBox {
    clear: both;
}

.container {
    max-width: 1280px;
    margin: auto;
}

.shop img {
    opacity: 0;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    transition: .1s;
    position: relative;
}

#mapBlock {
    z-index: 1;
    height: 460px;
    width: 100%;
    margin-bottom: 30px;
    box-shadow: 0px 1px 5px rgb(0 0 0 / 42%);
}

.textBlock {
    cursor: pointer;
    display: flex;
    width: 100%;
    padding: 14px 0px;
}

.textBlock p {
    display: inline-block;
    width: 33.33%;
}

.textBlock:hover img {
    opacity: 1;
}

.textBlock:hover {
    background-color: #eee;
}

.shopList {
    border-top: 2px solid #333;
    margin: 20px 10px 30px 10px;
}

.shopList p {
    text-align: left;
    display: inline-block;
    width: 33.33%;
    line-height: 30px;
    letter-spacing: 0.5px;
}

.shop {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px dashed #ccc;
}

.choose {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 10px 0px;
}

.map {
    padding-bottom: 40px;
}
       
select:focus + .customSelect {
    border-color: #555;
    transform: rotate(225deg);
}

.customSelect {
    border-top: 3px solid #ccc;
    border-left: 3px solid #ccc;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    position: absolute;
    right: 10px;
    bottom: 13px;
    transition: .3s;
}

select {
    background-color: rgba(255, 255, 255, 0);
    width: 135px;
    color: #333;
    padding: 10px 15px 10px 10px;
    letter-spacing: 1px;
    font-size: 16px;
    line-height: 18px;
    cursor: pointer;
    appearance: none;
    border: 1px solid #999;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
    margin-left: 10px;
}

.chooseCity, .chooseArea {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 20px 30px;
    position: relative;
}

select option {
    color: gray;
    border: 3px solid #333;
}

@media (max-width: 525px) {
    .textBlock {
        flex-wrap: wrap;
    }

    .textBlock p {
        width: 40%;
    }

    .textBlock .address {
        margin-top: 10px;
        width: 90%;
    }

    .textBlock .addressImg {
        margin-top: 10px;
    }

    .choose {
        justify-content: center;
    }

    .chooseCity, .chooseArea {
        margin: 5px;
    }

    .chooseCity p, .chooseArea p{
        display: none;
    }

    #mapBlock {
        margin-bottom: 18px;
    }

    select {
        width: 110px;
        font-size: 14px;
        padding: 8px 13px 8px 8px;
    }

    .right {
        float: none;
    }
}

@media (max-width: 370px) {
    .textBlock .address {
        margin-top: 0px;
        width: 80%;
    }

    .textBlock p {
        width: 80%;
    }

    .textBlock .addressImg {
        margin-top: 0px;
    }

    select {
        width: 110px;
        font-size: 14px;
        padding: 8px 13px 8px 8px;
    }
}

</style>
