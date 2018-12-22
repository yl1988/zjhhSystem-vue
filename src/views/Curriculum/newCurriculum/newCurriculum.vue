<template>
    <div class="page-bodyRight right">
        <!--新建课程-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <New_ListInfoTable/>
                </div>
            </div>
            <CurrSaveInfo/>
        </div>
    </div>
</template>

<script>
    import New_ListInfoTable from '../../../components/New_ListInfoTable/New_ListInfoTable'
    import CurrSaveInfo from '../../../components/CurrSaveInfo/CurrSaveInfo'
    export default {
        name: 'newcurriculum',
        components:{
            New_ListInfoTable,
            CurrSaveInfo
        }
    }
</script>

<style lang="less" type="text/less">
    @import "../../../../public/common/until/less/until";

</style>