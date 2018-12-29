
import {
    RECEIVE_CURRICULUMLIST,
    RECEIVE_USER_INFO,
    RECEIVE_SHOPCLASSIFY,
    SUBMIT_CURRFORMSINFO

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
    reqShopClassify
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
    }
}