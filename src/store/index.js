import { createStore } from 'vuex'
import newsData from '../assets/data/newsData.json';

export default createStore({
    state: {
        isShowLoading: false,
        newsData: []
    },
    mutations: {
        SETNEWS(state, newsData) {
            state.newsData = newsData;
        },
        SETSHOWLOADING(state, isShowLoading) {
            state.isShowLoading = isShowLoading;
        }
    },
    actions: {
        GETNEWS(context) {
            context.commit('SETNEWS', newsData.news.reverse());
        },
        GETSHOWLOADING(context, isShowLoading) {
            context.commit('SETSHOWLOADING', isShowLoading);
        }
    },
    modules: {}
})