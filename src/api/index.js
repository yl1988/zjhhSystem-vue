import ajax from './ajax'
//请求接口函数
export const reqDefault = ()=> ajax('/default')
export const reqShops = ()=> ajax('/shops')
export const reqShopClassify = ()=> ajax('/shops/shopsclassify')
export const reqCurriculum = ()=> ajax('/curriculum')
export const reqCurriList = ()=> ajax('/curriculum/curriculumlist')
export const reqCurriAppo = ()=> ajax('/curriculum/appointment')
export const reqSystem = ()=> ajax('/system')
export const reqForms = ()=> ajax('/forms')
export const reqLogin = ()=> ajax('/login')//请求登录页面
export const reqPwdLogin = (name,pwd) => ajax('/login_pwd',{name,pwd},'POST')//用户名密码登录
export const subSaveCurrListInfo = (currFormInfo) => ajax('/savecurrinfo',{currFormInfo},'POST')//提交课程信息表单信息
export const subCurrImgs = (currUpImgs,config)=> ajax('/submitcurrimgs',{currUpImgs,config},'POST')//提交课程信息表单信息中的图片
export const subShopClassify = (subShopClassify) => ajax('/addShopClassify',{subShopClassify})//提交商品品类
export const subAddShopInfo = (addShopInfo) => ajax('/addShopInfo/',{addShopInfo},)//新增商品信息
export const subShopInfoImgs = (shopInfoImgs) => ajax('/shopImgs/',{shopInfoImgs},'POST')