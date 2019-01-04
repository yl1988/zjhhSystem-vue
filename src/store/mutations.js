import {
    RECEIVE_USER_INFO,
    RECEIVE_CURRICULUMLIST,
    RECEIVE_SHOPCLASSIFY,
    RECEIVE_PAINTERS,
    RECEIVE_SHOPLISTS,
    RECEIVE_CHECKSHOP,
    RECEIVE_PAINTERLISTS,
    RECEIVE_CHECKPAINTER,
    REVEIVE_OILPAINTINGLISTS
} from './mutation-type'

export default {
    [RECEIVE_USER_INFO](state, {userInfo}) {//获取用户信息
        state.userInfo = userInfo
    },
    [RECEIVE_CURRICULUMLIST](state, {currLists}) {//获取课程表单信息
        state.currLists = currLists
    },
    [RECEIVE_SHOPCLASSIFY](state, {shopClassifys}) {//获取商品分类信息
        state.shopClassifys = shopClassifys
    },
    [RECEIVE_PAINTERS](state,{painters}){//画家信息
        //console.log(painters)
        state.painters = painters
    },
    [RECEIVE_SHOPLISTS](state,{shopLists}){//商品列表信息
        //console.log( shopLists)
        state.shopLists = shopLists
    },
    [RECEIVE_CHECKSHOP](state,{shopLists}){//商品查询
        //console.log( shopLists)
        state.shopLists = shopLists
    },
    [RECEIVE_PAINTERLISTS](state,{painterLists}){//画家列表
        //console.log( shopLists)
        state.painterLists = painterLists
    },
    [RECEIVE_CHECKPAINTER](state,{painterLists}){//画家查询
        //console.log( shopLists)
        state.painterLists = painterLists
    },
    [REVEIVE_OILPAINTINGLISTS](state,{oilpaintingLists}){//油画列表
        state.oilpaintingLists = oilpaintingLists
    }
}