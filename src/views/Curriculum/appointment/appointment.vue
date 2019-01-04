<template>
    <div class="page-bodyRight right">
        <third-menu :isList = isList @getInfos="getInfos"/>
        <!--预约情况-->
        <div class="page-rightContent appointment" id="appointment">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <div class="appointment-div clear">
                        <div class="appo-titleBox">
                            <div class="appo-title">
                                <span class="app-title-bk"></span>
                                <strong class="app-title-text" id="app-title-text">{{contents && contents.title}}</strong>
                            </div>
                        </div>
                        <div class="appo-peopleNumberBox">
                            <span class="appo-peopleNumberTitle">当前预约人数:</span>
                            <span class="appo-peopleNumber">{{contents.appinInfos && contents.appinInfos.length}}</span>
                            <span class="appo-peopleTotalNumber">/{{contents && contents.totalNumber}}人</span>
                        </div>
                        <ul class="appo-table right">
                            <li class="appo-table-title">
                                <ul class="appo-table-titleUl clear">
                                    <li class="appo-table-titleText">姓名</li>
                                    <li class="appo-table-titleText">用户类型</li>
                                    <li class="appo-table-titleText">性别</li>
                                    <li class="appo-table-titleText">邮箱</li>
                                </ul>
                            </li>
                            <li class="appo-table-info listInfoContentLiBox" v-for="(appinInfo,index) in contents.appinInfos" :key="index">
                                <ul class="appo-table-infoUl clear clear">
                                    <li class="appo-table-infoText">{{appinInfo.name}}</li>
                                    <li class="appo-table-infoText">{{appinInfo.userClassify}}</li>
                                    <li class="appo-table-infoText">{{appinInfo.sex}}</li>
                                    <li class="appo-table-infoText">{{appinInfo.email}}</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Paging :total-page="totalPage" :current-page="currentPage" :pagegroup="pagegroup"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ThirdMenu from '../../../components/ThirdMenu/ThirdMenu'
    import Paging from '../../../components/Paging/Paging'
    import {mapState} from 'vuex'
    export default {
        name: 'appointment',
        props:{
            isList:false
        },
        data(){
            return {
                totalPage: 20,
                currentPage: 1,
                pagegroup: 5,
                contents:[]
            }

        },
        components:{
            ThirdMenu,
            Paging
        },
        methods:{
            getInfos(indexObj){
                let {time_index,name_index} = indexObj
                this.contents = this.appoinLists[time_index].contents[name_index]
                this.$nextTick(()=>{
                    this.$zj_globalMethods.setBkCoror('.appo-table-info')
                })

            }
        },
        computed:{
            ...mapState(['appoinLists'])
        },
        mounted(){
            this.contents= this.appoinLists[0].contents[0]
            this.$nextTick(()=>{
                //this.$zj_globalMethods.setBkCoror('.appo-table-info')
            })
        }
    }
</script>

<style lang="less" type="text/less">
    /*预约情况*/
    .appointment-div{
        width:90%;
        min-width:510px;
        margin-bottom:30px;
        .appo-titleBox{
            margin:0 0 20px 0;
            .appo-title{
                position:relative;
                text-align:center;
                display:inline-block;
                padding:0 10px;
                .app-title-bk{
                    width:100%;
                    height:14px;
                    -webkit-border-radius: 5px;
                    -moz-border-radius: 5px;
                    border-radius: 5px;
                    background:#d0ccd1;
                    position:absolute;
                    bottom:0;
                    left:0;
                    z-index:1;

                }
                .app-title-text{
                    position:relative;
                    z-index:99;
                    font-size:16px;
                    bottom:3px;
                    left:3px;
                    letter-spacing: 10px;
                }
            }
        }
        .appo-peopleNumberBox{
            span{
                letter-spacing: 5px;
            }
            .appo-peopleNumber{
                margin-left:10px;
            }
        }
        .appo-table{
            background:rgba(255,255,255,0.6);
            width:100%;
            margin-top:10px;
            padding:20px 0;
            max-height:41%;
            .appo-table-title{
                .appo-table-titleUl{
                    width:90%;
                    text-align:center;
                    li{
                        display:inline-block;
                        font-size:14px;
                        border-bottom:solid 1px #999999;
                        padding:0 10px;
                        font-weight:bold;
                        height:28px;
                        line-height:28px;
                        min-width:122px;
                        width:25%;
                        margin-bottom:10px;
                    }
                }
            }
            .appo-table-info{
                .appo-table-infoUl{
                    width:90%;
                    text-align:center;
                    li{
                       display:inline-block;
                        padding:10px;
                        white-space: nowrap;
                        text-align:center;
                        overflow:hidden;
                        width:25%;
                        min-width:122px;
                        &:last-of-type{
                            border-bottm:30px;
                        }
                        &:first-of-type{
                        }
                    }
                }
            }
        }

    }
</style>