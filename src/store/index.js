import { createStore } from 'vuex'
import newsData from '../assets/data/newsData.json';

export default createStore({
    state: {
        isShowLoading: false,
        isShowOverlay: false,
        newsData: [],
        chooseNewsIndex: 0,
        chooseNewsData: [],
        chooseNewsType: 'all',
    },
    mutations: {
        SETNEWS(state, newsData) {
            state.newsData = newsData;
        },
        SETSHOWLOADING(state, isShowLoading) {
            state.isShowLoading = isShowLoading;
        },
        SETSHOWOVERLAY(state, isShowOverlay) {
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
        }
    },
    actions: {
        // 更新所有最新消息
        GETNEWS(context) {
            context.commit('SETNEWS', newsData.news);
            // context.commit('SETNEWS', newsData.news.reverse());
        },
        // 是否顯示loading畫面
        GETSHOWLOADING(context, isShowLoading) {
            context.commit('SETSHOWLOADING', isShowLoading);
        },
        // 是否顯示最新消息小視窗
        GETSHOWOVERLAY(context, isShowOverlay) {
            context.commit('SETSHOWOVERLAY', isShowOverlay);
        },
        // 選擇的最新消息id
        GetChooseNewsId(context, chooseNewsIndex) {
            context.commit('SetChooseNewsIndex', chooseNewsIndex);
        },
        // 選擇的最新消息
        GetChooseNewsData(context, chooseNewsData) {
            context.commit('SetChooseNewsData', chooseNewsData);
        },
        // 選擇最新消息的種類
        GetChooseNewsType(context, chooseNewsType) {
            context.commit('SetChooseNewsType', chooseNewsType);
        },
    },
    modules: {}
})