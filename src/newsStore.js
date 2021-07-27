export default ({
    namespaced: true,
    state: {
        chooseType: 'all',
        pageIndex: 0,
        chooseAry: [
            { type: '全部', value: 'all' },
            { type: '新品上市', value: 'newDrink' },
            { type: '活動新訊', value: 'active' },
            { type: '食安報告', value: 'report' },
            { type: '新店資訊', value: 'shop' },
        ],
        newsData: []
    },
    mutations: {
        SETTYPE(state, chooseType) {
            state.chooseType = chooseType
        },
        SETLIST(state, newsData) {
            state.newsData = newsData
        }
    },
    actions: {
        GETLIST(context, type) {
            this.commit('SETTYPE', type)
            this.commit('SETLIST', newsData.news)
        }
    },
    modules: {}
})