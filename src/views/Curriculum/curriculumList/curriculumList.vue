<template>
    <div class="page-bodyRight right">
        <ThirdMenu :isList = isList @getInfos="getInfos" />
     <!--课程列表-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
           <div class="page-contentBk">
               <div class="lineLearBorder">
                <New_ListInfoTable :currListInfo="currListInfo"/>
                </div>
           </div>
            <CurrSaveInfo />
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
                currListInfo:{}
            }
        },
        computed:{
            ...mapState(['currLists'])
        },
        methods:{
            getInfos(indexObj){
                let {time_index,name_index} = indexObj
               this.currListInfo = this.currLists[time_index].contents[name_index].currListInfo
                //console.log(this.currListInfo)
           }
        },
        mounted() {
            //this.$store.dispatch('getCurrLists')
            this.$nextTick(()=>{
                /*先从本地读取数据*/
                let item = 'currListInfo'
                let currListInfo = this.$zj_globalMethods.getLocalStorage(item)
                console.log(currListInfo)
                if(currListInfo){
                    this.currListInfo =currListInfo
                    console.log(this.currListInfo)
                } else{
                    this.currListInfo = this.currLists[0].contents[0].currListInfo
                    console.log(this.currListInfo)
                }


            })
        }
    }
</script>

<style lang="less" type="text/less">
    @import "../../../../public/common/less/common";
</style>