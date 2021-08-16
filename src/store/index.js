import { createStore } from 'vuex'
import newsData from '../assets/data/newsData.json';

export default createStore({
    state: {
        oncePageNewsCount: 11,
        isShowLoading: false,
        isShowOverlay: false,
        newsData: [],
        chooseNewsIndex: 0,
        chooseNewsData: [],
        chooseNewsType: 'all',
        newsPageIndex: 1,

        chooseDrinkIndex: 0,
        isShowDrinkOverlay: false,
        shoppingCarList: [],
        isHideShoppingCar: false,
        orderLevel: 1,
        ordertData: {
            chooseShop: {
                city: '台中市',
                area: '太平區',
                shop: "太平長億店",
            },
            chooseMethod: '外帶自取',
            chooseGetTime: {
                chooseDate: '',
                chooseTime: '',
            },
            totalPrice: 0
        },

        isShowMenu: false,
    },
    // 改state資料
    mutations: {
        SetNews(state, newsData) {
            state.newsData = newsData;
        },
        SetShowLoading(state, isShowLoading) {
            state.isShowLoading = isShowLoading;
        },
        SetShowOverlay(state, isShowOverlay) {
            state.isShowOverlay = isShowOverlay;
        },
        SetChooseNewsIndex(state, chooseNewsIndex) {
            state.chooseNewsIndex = chooseNewsIndex;
        },
        SetChooseNewsData(state, chooseNewsData) {
            state.chooseNewsData = chooseNewsData;
        },
        SetChooseNewsType(state, chooseNewsType) {
            state.chooseNewsType = chooseNewsType;
        },
        SetChooseNewsPageIndex(state, newsPageIndex) {
            state.newsPageIndex = newsPageIndex;
        },
        SetChooseDrinkIndex(state, chooseDrinkIndex) {
            state.chooseDrinkIndex = chooseDrinkIndex;
        },
        SetIsShowDrinkOverlay(state, isShowDrinkOverlay) {
            state.isShowDrinkOverlay = isShowDrinkOverlay;
        },
        SetShoppingCarList(state, shoppingCarList) {
            state.shoppingCarList = shoppingCarList;
        },
        SetIsHideShoppingCar(state, isHideShoppingCar) {
            state.isHideShoppingCar = isHideShoppingCar;
        },
        SetOrderLevel(state, orderLevel) {
            state.orderLevel = orderLevel;
        },
        SetOrdertData(state, ordertData) {
            state.ordertData = ordertData;
        },
        SetIsShowMenu(state, isShowMenu) {
            state.isShowMenu = isShowMenu;
        },
    },
    // 讀api
    actions: {
        // 更新所有最新消息
        GetNews(context) {
            context.commit('SetNews', newsData.news);
            // context.commit('SetNews', newsData.news.reverse());
        },
    },
    modules: {}
})