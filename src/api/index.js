import ajax from './ajax'
//请求接口函数
export const reqDefault = ajax('/default')
export const reqShops = ajax('/shops')
export const reqCurriculum = ajax('/curriculum')
export const reqSystem = ajax('/system')
export const reqLogin() = ajax('/login',{})
export const reqForms = ajax('/forms')