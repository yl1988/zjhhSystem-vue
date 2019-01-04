
import {
    RECEIVE_CURRICULUMLIST,
    RECEIVE_USER_INFO,
    RECEIVE_SHOPCLASSIFY,
    RECEIVE_PAINTERS,
    RECEIVE_SHOPLISTS,
    RECEIVE_CHECKSHOP,
    RECEIVE_PAINTERLISTS,
    RECEIVE_CHECKPAINTER,
    REVEIVE_OILPAINTINGLISTS

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
    reqShopLists,
    subCheckShop,
    reqPainterList,
    subCheckPainter,
    reqOilpaintingLists
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
    /*异步查询商品*/
    async getCheckShop ({commit},{shopName,selectClassify}) {
        //console.log(selectClassify)
        const result = await subCheckShop(shopName,selectClassify)
        console.log(result)
        if(result.code === 0){
            const shopLists = result.shopLists
            commit(RECEIVE_CHECKSHOP,{shopLists})
        }
    },
    /*异步获取画家列表信息*/
    async getPainterLists ({commit}) {
        const result = await reqPainterList()
        console.log(result)
        if(result.code === 0){
            const painterLists = result.painterLists
            commit(RECEIVE_PAINTERLISTS,{painterLists})
        }
    },
    /*异步查询画家*/
    async getCheckPainter ({commit},{painterName,painterGender}) {
        //console.log(selectClassify)
        const result = await subCheckPainter(painterName,painterGender)
        console.log(result)
        if(result.code === 0){
            const painterLists = result.painterLists
            commit(RECEIVE_CHECKPAINTER,{painterLists})
        }
    },
    /*异步获取油画列表信息*/
    async getOilpaintingLists ({commit}){
        const result = await reqOilpaintingLists()
        if(result.code===0){
            const oilpaintingLists = result.oilpaintingLists
            commit(REVEIVE_OILPAINTINGLISTS,{oilpaintingLists})
        }
    }

}