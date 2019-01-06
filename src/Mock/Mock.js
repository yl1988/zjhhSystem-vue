
import Mock from 'mockjs'
import data from './data.json'


let userInfo = [
    {
        info:{
            name:'123',
            pwd:'123',
        },
        islogin:1
    },
    {
        info:{
            name:'123',
            pwd:'123',
        },
        islogin:1
    },
    {
        info:{
            name:'456',
            pwd:'456',
        },
        islogin:0
    },
    {
        info:{
            name:'789',
            pwd:'789',
        },
        islogin:1
    },
    {
        info:{
            name:'abc',
            pwd:'abc',
        },
        islogin:1
    },
]
//登录
Mock.mock(/getlogin/,function (options) {
    console.log(options)
    let body = JSON.parse(options.body)
    console.log(body)
    let {name,pwd} = body
        name = name.toString()
        pwd = pwd.toString()
    let code = 0
    //console.log(userInfo)
    for(let i=0;i<userInfo.length;i++){
        if(userInfo[i].info.name === name){
            if(userInfo[i].info.pwd === pwd){
                console.log(userInfo[i].info.pwd)
                code = 0
                userInfo[i].islogin = 0
                break
            }
        }else {
            code =1
        }
    }
    console.log(userInfo)
    return {
        code:code
    }

})
/*判断用户是否登录*/
Mock.mock('/islogin',function (options) {
    console.log(options)
    let body = JSON.parse(options.body)
    let {name,pwd} = body
    name = name.toString()
    pwd = pwd.toString()
    let code = 1
    for(let i=0;i<userInfo.length;i++){
        if(userInfo[i].info.name === name){
            if(userInfo[i].info.pwd === pwd){
                if(userInfo[i].islogin === 0){
                   code = 0
                }
            }
        }
    }
    return code
})
/*返回课程列表信息*/
Mock.mock('/curriculum/curriculumlist',{
    code:0,
    //data:data.currLists
    listData:{
        currLists:[
            {
                time:"2018-12-02",
                contents:[
                    {
                        title:"课程1",
                        id:0,
                        isBkColor:false,
                        currListInfo:{
                            name:Mock.Random.cname(),
                            teachType:Mock.Random.integer(0, 1),
                            date:  Mock.Random.date(),
                            firstTime:Mock.Random.time(),
                            lastTime:Mock.Random.time(),
                            currCover: {
                                imgSrc:Mock.Random.dataImage(),
                            },
                            'totalPersons|18-60': 1,
                            currLocations: [
                                "上海市松江区泗泾泗砖公路20号",
                                "上海市浦东新区灵之路30号"
                            ],
                            'courseType|0-4':1,
                            'currHard|0-4': 1,
                            'price|20-90': 1,
                            'discount|2-9': 1
                        }
                    },
                    {
                        title:"课程2",
                        id:1,
                        isBkColor:false,
                        currListInfo:{
                            name:Mock.Random.cname(),
                            teachType: Mock.Random.integer(0, 1),
                            date: Mock.Random.date(),
                            firstTime:Mock.Random.time(),
                            lastTime:Mock.Random.time(),
                            currCover: {
                                address:"",
                                imgSrc:Mock.Random.dataImage(),
                            },
                            explain: "说明2",
                            'totalPersons|18-60': 1,
                            currLocations: [
                                "上海市松江区泗泾泗砖公路20号"
                            ],
                            'courseType|0-4':1,
                            'currHard|0-4': 1,
                            'price|20-90': 1,
                            'discount|2-9': 1
                        }
                    },
                    {
                        title:"课程3",
                        id:2,
                        isBkColor:false,
                        currListInfo: {
                            name:Mock.Random.cname(),
                            teachType: Mock.Random.integer(0, 1),
                            date:  Mock.Random.date(),
                            firstTime:Mock.Random.time(),
                            lastTime:Mock.Random.time(),
                            currCover: {
                                address:"",
                                imgSrc:Mock.Random.dataImage()
                            },
                            explain: "说明3",
                            'totalPersons|18-60': 1,
                            currLocations: [
                                "北京市东城区泗泾泗砖公路20号",
                                "上海市宝山区灵之路30号",
                                "上海市宝山区灵之路30号",
                            ],
                            'courseType|0-4':1,
                            'currHard|0-4': 1,
                            'price|20-90': 1,
                            'discount|2-9': 1
                        }
                    }
                ],
                "isShow":false
            },
            {
                time:"2018-10-02",
                contents:[
                    {
                        title:"课程4",
                        id:0,
                        isBkColor:false,
                        currListInfo: {
                            name:Mock.Random.cname(),
                            teachType: Mock.Random.integer(0, 1),
                            date: Mock.Random.date(),
                            firstTime:Mock.Random.time(),
                            lastTime:Mock.Random.time(),
                            currCover: {
                                address:"",
                                imgSrc:Mock.Random.dataImage(),
                            },
                            explain:"说明5",
                            'totalPersons|18-60': 1,
                            currLocations: [
                                "上海市松江区泗泾泗砖公路20号",
                                "上海市浦东新区灵之路30号",
                                "上海市松江区泗泾泗砖公路20号",
                                "上海市浦东新区灵之路30号"
                            ],
                            'courseType|0-4':1,
                            'currHard|0-4': 1,
                            'price|20-90': 1,
                            'discount|2-9': 1
                        }
                    },
                    {
                        title:"课程5",
                        id:1,
                        isBkColor:false,
                        currListInfo: {
                            name:Mock.Random.cname(),
                            teachType: Mock.Random.integer(0, 1),
                            date: Mock.Random.date(),
                            firstTime:Mock.Random.time(),
                            lastTime:Mock.Random.time(),
                            currCover: {
                                address:"",
                                imgSrc:Mock.Random.dataImage()
                            },
                            explain:"说明5",
                            'totalPersons|18-60': 1,
                            currLocations: [
                                "上海市松江区泗泾泗砖公路20号",
                                "上海市浦东新区灵之路30号"
                            ],
                            'courseType|0-4':1,
                            'currHard|0-4': 1,
                            'price|20-90': 1,
                            'discount|2-9': 1
                        }
                    },
                    {
                        title:"课程6",
                        id:2,
                        isBkColor:false,
                        currListInfo: {
                            name:Mock.Random.cname(),
                            teachType: Mock.Random.integer(0, 1),
                            date: Mock.Random.date(),
                            firstTime:Mock.Random.time(),
                            lastTime:Mock.Random.time(),
                            currCover: {
                                address:"",
                                imgSrc:Mock.Random.dataImage(),
                            },
                            explain:"说明6",
                            'totalPersons|18-60': 1,
                            currLocations: [
                                "上海市松江区泗泾泗砖公路20号",
                                "上海市浦东新区灵之路30号"
                            ],
                            'courseType|0-4':1,
                            'currHard|0-4': 1,
                            'price|20-90': 1,
                            'discount|2-9': 1
                        }
                    }
                ],
                "isShow": false
            },
            {
                time:"2018-08-02",
                contents:[
                    {
                        title:"课程7",
                        id:0,
                        isBkColor:false,
                        currListInfo: {
                            name:Mock.Random.cname(),
                            teachType: Mock.Random.integer(0, 1),
                            date: Mock.Random.date(),
                            firstTime:Mock.Random.time(),
                            lastTime:Mock.Random.time(),
                            currCover: {
                                address:"",
                                imgSrc:Mock.Random.dataImage(),
                            },
                            explain:"说明7",
                            'totalPersons|18-60': 1,
                            currLocations: [
                                "上海市松江区泗泾泗砖公路20号",
                                "上海市浦东新区灵之路30号"
                            ],
                            'courseType|0-4':1,
                            'currHard|0-4': 1,
                            'price|20-90': 1,
                            'discount|2-9': 1
                        }
                    },
                    {
                        title:"课程8",
                        id:1,
                        isBkColor:false,
                        currListInfo: {
                            name:Mock.Random.cname(),
                            teachType: Mock.Random.integer(0, 1),
                            date: Mock.Random.date(),
                            firstTime:Mock.Random.time(),
                            lastTime:Mock.Random.time(),
                            currCover: {
                                address:"",
                                imgSrc:Mock.Random.dataImage(),
                            },
                            explain:"说明8",
                            'totalPersons|18-60': 1,
                            currLocations: [
                                "上海市松江区泗泾泗砖公路20号",
                                "上海市浦东新区灵之路30号"
                            ],
                            'courseType|0-4':1,
                            'currHard|0-4': 1,
                            'price|20-90': 1,
                            'discount|2-9': 1
                        }
                    },
                    {
                        title:"课程9",
                        id:2,
                        isBkColor:false,
                        currListInfo:{
                            name:Mock.Random.cname(),
                            teachType: Mock.Random.integer(0, 1),
                            date: Mock.Random.date(),
                            firstTime:Mock.Random.time(),
                            lastTime:Mock.Random.time(),
                            currCover: {
                                address:"",
                                imgSrc:Mock.Random.dataImage(),
                            },
                            explain:"说明9",
                            'totalPersons|18-60': 1,
                            currLocations: [
                                "上海市松江区泗泾泗砖公路20号",
                                "上海市浦东新区灵之路30号",
                                "上海市浦东新区灵之路30号",
                                "上海市浦东新区灵之路30号",
                                "上海市浦东新区灵之路30号",
                            ],
                            'courseType|0-4':1,
                            'currHard|0-4': 1,
                            'price|20-90': 1,
                            'discount|2-9': 1
                        }
                    }
                ],
                "isShow": false
            }
        ],//课程列表
    }
})
/*返回预约课程信息*/
Mock.mock('/curriculum/appointment',{
    code:0,
    data:data.appoinLists
})

/*返回商品分类信息*/
Mock.mock('/shops/shopsclassify',{
    code:0,
    shopClassifys:[
        {
            name:Mock.Random.cname(),
            id:'0'
        },
        {
            name:Mock.Random.cname(),
            id:'1'
        },
        {
            name:Mock.Random.cname(),
            id:'2'
        },
        {
            name:Mock.Random.cname(),
            id:'3'
        },
        {
            name:Mock.Random.cname(),
            id:'4'
        },
    ]
})
/*返回商品列表信息*/
Mock.mock('/shops/shoplists',{
    code:0,
    shopLists:[
        {
            name:Mock.Random.cname(),
            classify:Mock.Random.cname(),
            brand:Mock.Random.cname(),
            'price|10-60':1,
            isShelf:Mock.Random.integer(0,1),
            id:'0'
        },
        {
            name:Mock.Random.cname(),
            classify:Mock.Random.cname(),
            brand:Mock.Random.cname(),
            'price|10-60':1,
            isShelf:Mock.Random.integer(0,1),
            id:'1'
        },
        {
            name:Mock.Random.cname(),
            classify:Mock.Random.cname(),
            brand:Mock.Random.cname(),
            'price|10-60':1,
            isShelf:Mock.Random.integer(0,1),
            id:'2'
        },
        {
            name:Mock.Random.cname(),
            classify:Mock.Random.cname(),
            brand:Mock.Random.cname(),
            'price|10-60':1,
            isShelf:Mock.Random.integer(0,1),
            id:'3'
        },
        {
            name:Mock.Random.cname(),
            classify:Mock.Random.cname(),
            brand:Mock.Random.cname(),
            'price|10-60':1,
            isShelf:Mock.Random.integer(0,1),
            id:'4'
        },
    ]
})
/*接收前台发送来的课程信息*/
Mock.mock('/savecurrinfo',function (options) {
    console.log(options)
})
/*结收前台发送过来的课程封面图片*/
Mock.mock('/submitcurrimgs',function (options) {
    console.log(options)
})
/*接收前台发送的商品品类信息*/
Mock.mock(/^\/addShopClassify/,function (options) {
    console.log(options)
})
/*接收前台发过来的新增商品信息*/
Mock.mock(/^\/addShopInfo/,function (options) {
    console.log(options)
})
/*接收前台发过来的商品图片*/
Mock.mock(/shopImgs/,function (options) {
    console.log(options)
})
/*接收商品上下架操作信息*/
Mock.mock(/shopShelfOption/,function (options) {
    console.log(options)
    return{
        code:0
    }
})
/*接收前台发送过来的画家信息*/
Mock.mock(/painterInfo/,function (options) {
    console.log(options)
})
/*接收前台发送过来的画家肖像*/
Mock.mock(/painterImg/,function (options) {
    console.log(options)
})
/*返回画家信息*/
Mock.mock('/shops/oilpaintinglists/',{
    code:0,
    data:{
        painters:[
            {
                name:Mock.Random.cname(),
                id:'0'
            },
            {
                name:Mock.Random.cname(),
                id:'1'
            },
            {
                name:Mock.Random.cname(),
                id:'2'
            },
            {
                name:Mock.Random.cname(),
                id:'3'
            },
            {
                name:Mock.Random.cname(),
                id:'4'
            },
        ]
    }
})
/*接收前台发送过来的油画信息*/
Mock.mock(/oilpatingInfo/,function (options) {
    console.log(options)
})
/*接收前台发送过来的画家肖像*/
Mock.mock(/oilpatingImg/,function (options) {
    console.log(options)
})
/*商品查询*/
Mock.mock(/checkshop/,function (options) {
    console.log(options)
    return {
        code:1,
        shopLists:[
            {
                name:Mock.Random.cname(),
                classify:Mock.Random.cname(),
                brand:Mock.Random.cname(),
                'price|10-60':1,
                isShelf:Mock.Random.integer(0,1),
                id:'0'
            },
            {
                name:Mock.Random.cname(),
                classify:Mock.Random.cname(),
                brand:Mock.Random.cname(),
                'price|10-60':1,
                isShelf:Mock.Random.integer(0,1),
                id:'1'
            },
            {
                name:Mock.Random.cname(),
                classify:Mock.Random.cname(),
                brand:Mock.Random.cname(),
                'price|10-60':1,
                isShelf:Mock.Random.integer(0,1),
                id:'2'
            },
            {
                name:Mock.Random.cname(),
                classify:Mock.Random.cname(),
                brand:Mock.Random.cname(),
                'price|10-60':1,
                isShelf:Mock.Random.integer(0,1),
                id:'3'
            },
            {
                name:Mock.Random.cname(),
                classify:Mock.Random.cname(),
                brand:Mock.Random.cname(),
                'price|10-60':1,
                isShelf:Mock.Random.integer(0,1),
                id:'4'
            },
        ]
    }
})
/*返回画家列表信息*/
Mock.mock('/shops/painterlists',{
    code:0,
    painterLists:[
        {
            name:Mock.Random.cname(),
            gender:Mock.Random.integer(0,1),
            isShelf:Mock.Random.integer(0,1),
            id:'0'
        }, {
            name:Mock.Random.cname(),
            gender:Mock.Random.integer(0,1),
            isShelf:Mock.Random.integer(0,1),
            id:'0'
        },
        {
            name:Mock.Random.cname(),
            gender:Mock.Random.integer(0,1),
            isShelf:Mock.Random.integer(0,1),
            id:'0'
        },
        {
            name:Mock.Random.cname(),
            gender:Mock.Random.integer(0,1),
            isShelf:Mock.Random.integer(0,1),
            id:'0'
        },
        {
            name:Mock.Random.cname(),
            gender:Mock.Random.integer(0,1),
            isShelf:Mock.Random.integer(0,1),
            id:'0'
        },

    ]
})
/*画家查询*/
Mock.mock(/checkpainter/,function (options) {
    console.log(options)
    return {
        code:0,
        painterLists:[
            {
                name:Mock.Random.cname(),
                classify:Mock.Random.cname(),
                brand:Mock.Random.cname(),
                'price|10-60':1,
                isShelf:Mock.Random.integer(0,1),
                id:'0'
            },
            {
                name:Mock.Random.cname(),
                classify:Mock.Random.cname(),
                brand:Mock.Random.cname(),
                'price|10-60':1,
                isShelf:Mock.Random.integer(0,1),
                id:'1'
            },
            {
                name:Mock.Random.cname(),
                classify:Mock.Random.cname(),
                brand:Mock.Random.cname(),
                'price|10-60':1,
                isShelf:Mock.Random.integer(0,1),
                id:'2'
            },
            {
                name:Mock.Random.cname(),
                classify:Mock.Random.cname(),
                brand:Mock.Random.cname(),
                'price|10-60':1,
                isShelf:Mock.Random.integer(0,1),
                id:'3'
            },
            {
                name:Mock.Random.cname(),
                classify:Mock.Random.cname(),
                brand:Mock.Random.cname(),
                'price|10-60':1,
                isShelf:Mock.Random.integer(0,1),
                id:'4'
            },
        ]
    }
})
/*接收画家上下架操作信息*/
Mock.mock(/painterShelfOption/,function (options) {
    console.log(options)
    return{
        code:0
    }
})
/*返回油画列表信息*/
Mock.mock('/shops/oilpaintinglists',{
    code:0,
    oilPaintingLists:[
        {
            painterName:Mock.Random.cname(),
            title:Mock.Random.cname(),
            material:Mock.Random.cname(),
            isShelf:Mock.Random.integer(0,1),
            'size|20-100':1,
            id:'0'
        },
        {
            painterName:Mock.Random.cname(),
            title:Mock.Random.cname(),
            material:Mock.Random.cname(),
            isShelf:Mock.Random.integer(0,1),
            'size|20-100':1,
            id:'0'
        },
        {
            painterName:Mock.Random.cname(),
            title:Mock.Random.cname(),
            material:Mock.Random.cname(),
            isShelf:Mock.Random.integer(0,1),
            'size|20-100':1,
            id:'0'
        },
        {
            painterName:Mock.Random.cname(),
            title:Mock.Random.cname(),
            material:Mock.Random.cname(),
            isShelf:Mock.Random.integer(0,1),
            'size|20-100':1,
            id:'0'
        },
        {
            painterName:Mock.Random.cname(),
            title:Mock.Random.cname(),
            material:Mock.Random.cname(),
            isShelf:Mock.Random.integer(0,1),
            'size|20-100':1,
            id:'0'
        },
        {
            painterName:Mock.Random.cname(),
            title:Mock.Random.cname(),
            material:Mock.Random.cname(),
            isShelf:Mock.Random.integer(0,1),
            'size|20-100':1,
            id:'0'
        },
        {
            painterName:Mock.Random.cname(),
            title:Mock.Random.cname(),
            material:Mock.Random.cname(),
            isShelf:Mock.Random.integer(0,1),
            'size|20-100':1,
            id:'0'
        },
        {
            painterName:Mock.Random.cname(),
            title:Mock.Random.cname(),
            material:Mock.Random.cname(),
            isShelf:Mock.Random.integer(0,1),
            'size|20-100':1,
            id:'0'
        },

    ]
})
/*油画查询*/
Mock.mock(/checkoilpaitain/,function (options) {
    console.log(options)
    return {
        code:0,
        oilPaintingLists:[
            {
                painterName:Mock.Random.cname(),
                title:Mock.Random.cname(),
                isShelf:Mock.Random.integer(0,1),
                id:'0'
            },
            {
                painterName:Mock.Random.cname(),
                title:Mock.Random.cname(),
                isShelf:Mock.Random.integer(0,1),
                id:'0'
            },
            {
                painterName:Mock.Random.cname(),
                title:Mock.Random.cname(),
                isShelf:Mock.Random.integer(0,1),
                id:'0'
            },
            {
                painterName:Mock.Random.cname(),
                title:Mock.Random.cname(),
                isShelf:Mock.Random.integer(0,1),
                id:'0'
            },
            {
                painterName:Mock.Random.cname(),
                title:Mock.Random.cname(),
                isShelf:Mock.Random.integer(0,1),
                id:'0'
            },
            {
                painterName:Mock.Random.cname(),
                title:Mock.Random.cname(),
                isShelf:Mock.Random.integer(0,1),
                id:'0'
            },
            {
                painterName:Mock.Random.cname(),
                title:Mock.Random.cname(),
                isShelf:Mock.Random.integer(0,1),
                id:'0'
            },

        ]
    }
})
/*接油画上下架操作信息*/
Mock.mock(/oilpaintingShelfOption/,function (options) {
    console.log(options)
    return{
        code:0
    }
})

/*返回人员列表信息*/
Mock.mock('/system/personnelmanagement',{
    code:0,
    personLists:[
        {
            name:Mock.Random.cname(),
            loginName:Mock.Random.cname(),
            gender:Mock.Random.integer(0,1),
            isQuit:Mock.Random.integer(0,1),
            loginPwd:'XXXXXXXXXX',
            id:'0'
        },
        {
            name:Mock.Random.cname(),
            loginName:Mock.Random.cname(),
            gender:Mock.Random.integer(0,1),
            isQuit:Mock.Random.integer(0,1),
            loginPwd:'XXXXXXXXXX',
            id:'0'
        },
        {
            name:Mock.Random.cname(),
            loginName:Mock.Random.cname(),
            gender:Mock.Random.integer(0,1),
            isQuit:Mock.Random.integer(0,1),
            loginPwd:'XXXXXXXXXX',
            id:'0'
        },
        {
            name:Mock.Random.cname(),
            loginName:Mock.Random.cname(),
            gender:Mock.Random.integer(0,1),
            isQuit:Mock.Random.integer(0,1),
            loginPwd:'XXXXXXXXXX',
            id:'0'
        },
        {
            name:Mock.Random.cname(),
            loginName:Mock.Random.cname(),
            gender:Mock.Random.integer(0,1),
            isQuit:Mock.Random.integer(0,1),
            loginPwd:'XXXXXXXXXX',
            id:'0'
        },
        {
            name:Mock.Random.cname(),
            loginName:Mock.Random.cname(),
            gender:Mock.Random.integer(0,1),
            isQuit:Mock.Random.integer(0,1),
            loginPwd:'XXXXXXXXXX',
            id:'0'
        },
        {
            name:Mock.Random.cname(),
            loginName:Mock.Random.cname(),
            gender:Mock.Random.integer(0,1),
            isQuit:Mock.Random.integer(0,1),
            loginPwd:'XXXXXXXXXX',
            id:'0'
        },
        {
            name:Mock.Random.cname(),
            loginName:Mock.Random.cname(),
            gender:Mock.Random.integer(0,1),
            isQuit:Mock.Random.integer(0,1),
            loginPwd:'XXXXXXXXXX',
            id:'0'
        },
        {
            name:Mock.Random.cname(),
            loginName:Mock.Random.cname(),
            gender:Mock.Random.integer(0,1),
            isQuit:Mock.Random.integer(0,1),
            loginPwd:'XXXXXXXXXX',
            id:'0'
        },


    ]
})
/*接收前台发送过来的人员信息*/
Mock.mock(/personInfo/,function (options) {
    console.log(options)
})
/*人员查询*/
Mock.mock(/checkperson/,function (options) {
    let personLists = [
        {
            name:'张三',
            loginName:'zhangsan',
            gender:0,
            isQuit:0,
            loginPwd:'XXXXXXXXXX',
            id:'0'
        },
        {
            name:'李四',
            loginName:'lisi',
            gender:1,
            isQuit:0,
            loginPwd:'zzzdddd',
            id:'0'
        },
        {
            name:'王二',
            loginName:'wanger',
            gender:0,
            isQuit:1,
            loginPwd:'drerferee',
            id:'0'
        },
        {
            name:'麻子',
            loginName:'mazi',
            gender:1,
            isQuit:0,
            loginPwd:'XdefedfeXXXX',
            id:'0'
        },
        ]
    //console.log(options)
    let body = JSON.parse(options.body)
    let checkPersonData = JSON.parse(body.checkPersonData)
    console.log(checkPersonData)
    let name = checkPersonData.name
    let gender = checkPersonData.gender
    let isQuit = checkPersonData.isQuit
    //console.log(checkPersonData)
    let personInfo = {
        code:1,
        info:{}
    }
    if(name && !gender && !isQuit){
        for(let i=0;i<personLists.length;i++){
            if(personLists[i].name === name){
                personInfo.info = personLists[i]
                personInfo.code = 0
               break
            }
        }
    }else if(name && gender && isQuit){
        for(let i=0;i<personLists.length;i++){
            if(personLists[i].name === name){
                if(personLists[i].gender === parseInt(gender)){
                    if(personLists[i].isQuit=== parseInt(isQuit)){
                        personInfo.info = personLists[i]
                        personInfo.code = 0
                        break
                    }
                }
            }
        }
    }

   return personInfo
})