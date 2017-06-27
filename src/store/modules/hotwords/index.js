import * as types from './types'
import { fetchItemPrice, fetchItemList } from './api'
import { Toast } from 'mint-ui'
import _ from 'lodash'

let msg = {
    netErr: '请检查网络后再试',
    serverErr: '服务器错误'
}
let hotwords = {
    state: {
        itemInfo: [],
        /* 相关品牌 */
        relatedBrand: [],
        /* 相关分类 */
        relatedCategory: [],
        /* 相关热搜 */
        relatedHotKey: [],
        solrParams: {},
        /* 评论信息 */
        commentInfo: [],
        /* 无商品渲染 */
        isRenderNone: false,
        /* 加载到的页数 */
        loadPage: 1,
        /* 总页数 */
        totalPage: 1,
        /* 总商品数 */
        totalItem: 1,
        loading: false,
        noMore: false
    },
    getters: {
        getRelateList(state) {
            let arr = new Array({}, {}, {})
            arr[0] = {
                title: '相关品牌',
                list: state.relatedBrand,
                type: 0
            }
            arr[1] = {
                title: '相关分类',
                list: state.relatedCategory,
                type: 1
            }
            arr[2] = {
                title: '相关热搜',
                list: state.relatedHotKey,
                type: 2
            }
            let isEmpty = arr.every(item => {
                return item.list.length == 0
            })
            if (isEmpty) {
                return false
            } else {
                return arr
            }
        }
    },
    mutations: {
        [types.SET_LOADING](state, playload) {
            state.loading = playload.type
        },
        [types.SET_TARGET_VAL](state, { key, val }) {
            state[key] = val
        },
        [types.SET_ITEM_INFO](state, obj) {
            state.itemInfo = state.itemInfo.concat(obj.itemInfo)
            state.totalPage = obj.totalPageCount || 1
            state.totalItem = obj.total
            state.isRenderNone = state.itemInfo.length ? false : true
        },
        [types.UPDATE_ITEM_INFO](state, obj) {
            let cloneItemList = []
            state.itemInfo.forEach((item) => {
                cloneItemList.push(Object.assign({}, item, obj[item.item_id]))
            })
            state.itemInfo = cloneItemList
        },
        [types.SET_PAGE_DATA](state, data) {
            state.commentInfo = data.commentInfo || []
            state.relatedCategory = data.relatedCategory || []
            state.relatedHotKey = data.relatedHotKey || []
            state.relatedBrand = data.relatedBrand || []
            state.solrParams = data.solrParams || {}
        },
        [types.RENDER_LIST_NONE](state, playload) {
            state.isRenderNone = playload.type
        }
    },
    actions: {
        renderPageData({ commit, dispatch }, data) {

            commit(types.SET_PAGE_DATA, data)

            if (data.itemInfo && data.itemInfo.length !== 0) {

                dispatch('renderListData', data.itemInfo)
                commit(types.RENDER_LIST_NONE, { type: false })

            } else {

                commit(types.RENDER_LIST_NONE, { type: true })

            }

        },
        /* 渲染热搜列表 */
        renderListData({ commit, dispatch }, data) {

            let itemList = data.itemInfo || []

            if (_.isEmpty(itemList)) {
                return
            }

            let itemidArr = itemList.map((item) => {

                return item.item_id

            })
            
            commit(types.SET_ITEM_INFO, data)

            dispatch('renderItemPrice', { itemidArr, itemList })

        },
        /* 获取商品价格 */
        renderItemPrice({ commit }, { itemidArr, itemList }) {

            fetchItemPrice({

                itemid: itemidArr.join(',')

            }).then((res) => {

                let data = res.data

                if (data.code == 0) {

                    commit(types.UPDATE_ITEM_INFO, data.data)

                } else {

                    Toast(data.msg);

                }
            }, () => {

                Toast(msg.netErr);

            })
        },
        /* 加载下一页 */
        loadMoreData({ commit, dispatch, state }, obj) {

            commit(types.SET_LOADING, { type: true })

            let loadPage = state.loadPage + 1

            if (loadPage > state.totalPage) {
                commit(types.SET_TARGET_VAL, { key: 'noMore', val: true })
                commit(types.SET_LOADING, { type: false })
                return

            }

            fetchItemList(Object.assign({}, {

                    pageIndex: loadPage

                }, state.solrParams)

            ).then(res => {

                let data = res.data

                commit(types.SET_LOADING, { type: false })
                
                if (data.code == 0) {

                    let renderData = data.data

                    if (renderData && renderData.itemInfo) {
     
                        dispatch('renderListData', renderData)

                        commit(types.SET_TARGET_VAL, { key: 'loadPage', val: loadPage })

                    }


                } else {
                    data.msg ? Toast(data.msg) : Toast(data.serverErr)

                }

                

            }, () => {

                Toast(msg.netErr)

                commit(types.SET_LOADING, { type: false })

            })
        }
    }

}

export default hotwords
