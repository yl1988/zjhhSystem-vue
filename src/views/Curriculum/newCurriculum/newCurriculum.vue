<template>
    <div class="page-bodyRight right">
        <!--新建课程-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <New_ListInfoTable @getFormInfo="getFormInfo" @getImgs="getImgs" :isList = isList />
                </div>
            </div>
            <CurrSaveInfo :currFormInfo = "currFormInfo" :currUpImgs="currUpImgs" :isList = isList />
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
        },
        data(){
            return{
                currFormInfo:{
                    name:'',
                    teachType:0,//授课还是自习课
                    date:0,
                    firstTime:0,
                    lastTime:0,
                    currCover:{
                        imgSrc:'',
                        id:''
                    },//图片预览
                    explain:'',
                    totalPersons:'',
                    currLocations:[],
                    courseType:0,
                    currHard:0,
                    price:'',
                    discount:''

                },
                currUpImgs:{},//表单图片打对象
                isList:false
            }
        },
        methods:{
            getFormInfo(){

            },
            getImgs(){

            }
        },
        mounted(){
            console.log(this.currFormInfo)
        }
    }
</script>

<style lang="less" type="text/less">
    @import "../../../../public/common/until/less/until";

</style>