
import {
    RECEIVE_CURRICULUMLIST,
    RECEIVE_USER_INFO

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
    reqSystem

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
}