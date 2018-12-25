import Vue from 'vue'
import {
    RECEIVE_USER_INFO,
    RECEIVE_CURRICULUMLIST,
} from './mutation-type'

export default {
  [RECEIVE_USER_INFO] (state,{userInfo}) {
      state.userInfo = userInfo
  },
    [RECEIVE_CURRICULUMLIST](state,{currLists}){
      state.currLists = currLists
    }
}