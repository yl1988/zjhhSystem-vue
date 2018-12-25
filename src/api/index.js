import ajax from './ajax'
//请求接口函数
export const reqDefault = ()=> ajax('/default')
export const reqShops = ()=> ajax('/shops')
export const reqCurriculum = ()=> ajax('/curriculum')
//export const reqCurriList = ()=> ajax('/curriculum/curriculumlist')
export const reqCurriList = ()=> ajax('/curriculum/curriculumlist')
export const reqCurriAppo = ()=> ajax('/curriculum/appointment')
export const reqSystem = ()=> ajax('/system')
export const reqForms = ()=> ajax('/forms')
export const reqLogin = ()=> ajax('/login')//请求登录页面
export const reqPwdLogin = (name,pwd) => ajax('/login_pwd',{name,pwd},'POST')//用户名密码登录