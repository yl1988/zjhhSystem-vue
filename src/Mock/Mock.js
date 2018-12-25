
import Mock from 'mockjs'
import data from './data.json'
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

Mock.mock('/curriculum/appointment',{
    code:0,
    data:data.appoinLists
})