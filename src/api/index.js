import ajax from './ajax'
//请求接口函数
export const reqDefault = ()=> ajax('/default')

export const reqShops = ()=> ajax('/shops')
export const reqShopClassify = ()=> ajax('/shops/shopsclassify')
export const subShopClassify = (subShopClassify) => ajax('/addShopClassify',{subShopClassify})//提交商品品类
export const subAddShopInfo = (addShopInfo) => ajax('/addShopInfo/',{addShopInfo},)//新增商品信息
export const subShopInfoImgs = (shopInfoImgs) => ajax('/shopImgs/',{shopInfoImgs},'POST')//新增商品预览图
export const subPainterInfo = (painterInfo) => ajax('/painterInfo',{painterInfo})//画家信息
export const subPainterImg = (painterImg) => ajax('/painterImg',{painterImg},'POST')//画家肖像
export const subOilpatingInfo = (oilpatingInfo) => ajax('/oilpatingInfo',{oilpatingInfo})//油画信息
export const subOilpatingImg = (oilpatingImg) => ajax('/oilpatingImg',{oilpatingImg},'POST')//油画图片
export const reqPainters = () => ajax('/shops/oilpaintinglists/')//异步获取画家列表信息
export const reqShopLists= () => ajax('/shops/shoplists')//异步获取商品列表信息
export const subCheckShop = (shopName,shopClassify) => ajax('/checkshop',{shopName,shopClassify})//商品查询
export const subCheckPainter = (painterName,painterGender) => ajax('/checkpainter',{painterName,painterGender})//画家查询
export const reqPainterList = ()=> ajax('/shops/painterlists')//画家列表
export const reqOilpaintingLists = ()=> ajax('/shops/oilpaintinglists')//油画列表

export const reqCurriculum = ()=> ajax('/curriculum')
export const reqCurriList = ()=> ajax('/curriculum/curriculumlist')
export const reqCurriAppo = ()=> ajax('/curriculum/appointment')
export const subSaveCurrListInfo = (currFormInfo) => ajax('/savecurrinfo',{currFormInfo},'POST')//提交课程信息表单信息
export const subCurrImgs = (currUpImgs,config)=> ajax('/submitcurrimgs',{currUpImgs,config},'POST')//提交课程信息表单信息中的图片

export const reqSystem = ()=> ajax('/system')

export const reqForms = ()=> ajax('/forms')

export const reqLogin = ()=> ajax('/login')//请求登录页面
export const reqPwdLogin = (name,pwd) => ajax('/login_pwd',{name,pwd},'POST')//用户名密码登录


