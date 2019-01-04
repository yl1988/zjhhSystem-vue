
import Mock from 'mockjs'
import data from './data.json'
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
/*返回油画列表信息*/
Mock.mock('/shops/oilpaintinglists',{
    code:0,
    oilpaintingLists:[
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
})
/*油画查询*/
Mock.mock(/checkoilpaitain/,function (options) {
    console.log(options)
    return {
        code:0,
        oilpaintingLists:[
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