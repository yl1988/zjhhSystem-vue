<template>
    <div class="page-bodyRight right">
        <ThirdMenu :isList = isList @getInfos="getInfos" />
     <!--课程列表-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
           <div class="page-contentBk">
               <div class="lineLearBorder">
                <New_ListInfoTable :currListInfo.sync="currListInfo" @getFormInfo="getFormInfo" @getImgs="getImgs" :isList = isList />
                </div>
           </div>
            <CurrSaveInfo :currFormInfo = "currFormInfo" :currUpImgs="currUpImgs" :isList = isList />
        </div>
    </div>
</template>

<script>
    import ThirdMenu from '../../../components/ThirdMenu/ThirdMenu'
    import New_ListInfoTable from '../../../components/New_ListInfoTable/New_ListInfoTable'
    import CurrSaveInfo from '../../../components/CurrSaveInfo/CurrSaveInfo'
    import {mapState} from 'vuex'
    export default {
        name: 'curriculumlist',
        components:{
            ThirdMenu,
            New_ListInfoTable,
            CurrSaveInfo
        },
        data(){
            return{
                isList:true,
                currListInfo:{},//从后台获取并交给表单显示的数据
                currFormInfo:{},//从表单传递过来的数据
                currUpImgs:{},//从表单传过来的图片
            }
        },
        computed:{
            ...mapState(['currLists'])
        },
        methods:{
            /*获取三级菜单返回的下标*/
            getInfos(indexObj){
                //console.log(indexObj)
                let {time_index,name_index} = indexObj
               this.currListInfo = this.currLists[time_index].contents[name_index].currListInfo
                console.log(this.currListInfo)
                //console.log(this.currListInfo)
           },
            /*获取修改后的课程列表信息表*/
            getFormInfo(value) {
                this.currFormInfo = value
                //console.log(value)
            },
            /*获取上传的图片*/
            getImgs(file){
                console.log(file)
            }
        },
        mounted() {
            let that = this
            let isLogin = this.$zj_globalMethods.judgeUserInfo(that)
            if(isLogin){
                this.$nextTick(()=>{
                    /*先从本地读取数据*/
                    let item = 'currListInfo'
                    let currListInfo = this.$zj_globalMethods.getLocalStorage(item)
                    //console.log(currListInfo)
                    if(currListInfo){
                        this.currListInfo =currListInfo
                        //console.log(this.currListInfo)
                    } else{
                        this.currListInfo = this.currLists[0].contents[0].currListInfo
                        // console.log(this.currListInfo)
                    }

                })
            }

        }
    }
</script>

<style lang="less" type="text/less">
    @import "../../../../public/common/less/common";
</style>