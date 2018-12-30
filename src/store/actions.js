
import {
    RECEIVE_CURRICULUMLIST,
    RECEIVE_USER_INFO,
    RECEIVE_SHOPCLASSIFY,
    RECEIVE_PAINTERS,
    RECEIVE_SHOPLISTS

} from './mutation-type'
import {
    reqPwdLogin,
    reqCurriAppo,
    reqCurriculum,
    reqCurriList,
    reqDefault,
    reqForms,
    reqLogin,
    reqShops,
    reqSystem,
    reqShopClassify,
    reqPainters,
    reqShopLists
} from '../api'

export default {
    /*异步获取课程列表信息*/
    async getCurrLists({commit}) {
        // 发送异步ajax请求
        const result = await reqCurriList()
        // 提交一个mutation
        if (result.code === 0) {
            const currLists = result.listData.currLists
            commit(RECEIVE_CURRICULUMLIST, {currLists})
        }
    },

    /*异步获取商品分类*/
    async getShopClassify({commit}) {
        const result = await reqShopClassify()
        if (result.code === 0) {
            const shopClassifys = result.shopClassifys
            commit(RECEIVE_SHOPCLASSIFY, {shopClassifys})
        }
    },
    /*异步获取画家列表*/
    async getPainters ({commit}) {
        const result = await reqPainters()
        console.log(result)
        if(result.code === 0){
            const painters = result.data.painters
            commit(RECEIVE_PAINTERS,{painters})
        }
    },
    /*异步获取商品列表信息*/
    async getShopLists ({commit}) {
        const result = await reqShopLists()
        console.log(result)
        if(result.code === 0){
            const shopLists = result.shopLists
            commit(RECEIVE_SHOPLISTS,{shopLists})
        }
    },

}