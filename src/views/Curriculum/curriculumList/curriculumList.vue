<template>
    <div class="page-bodyRight right">
        <ThirdMenu :isList = isList />
     <!--课程列表-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
           <div class="page-contentBk">
               <div class="lineLearBorder">
                <New_ListInfoTable/>
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
               isList:true
            }
        },
        computed:{

        }
    }
</script>

<style lang="less" type="text/less">
    @import "../../../../public/common/less/common";
</style>