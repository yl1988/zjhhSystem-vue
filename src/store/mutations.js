import {
    RECEIVE_USER_INFO,
    RECEIVE_CURRICULUMLIST,
    RECEIVE_SHOPCLASSIFY,
    RECEIVE_PAINTERS,
    RECEIVE_SHOPLISTS
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
    [RECEIVE_PAINTERS](state,{painters}){
        //console.log(painters)
        state.painters = painters
    },
    [RECEIVE_SHOPLISTS](state,{shopLists}){
        //console.log( shopLists)
        state.shopLists = shopLists
    }
}