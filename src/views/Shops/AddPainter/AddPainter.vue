<template>
    <div class="page-bodyRight right">
        <!--商品品类-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <Add_changePainterInfo :isAdd="isAdd" :isClearData="isClearData" @getImages="getImages" @getPainterInfo="getPainterInfo"/>
                </div>
            </div>
            <PainterSaveInfo :painterInfoData="painterInfoData" :painterUpImgs="painterUpImgs" :isAdd = isAdd @clearData="clearData" :isClearData="isClearData"/>
        </div>
    </div>
</template>

<script>
    import Add_changePainterInfo from '../../../components/Add_changePainterInfo/Add_changePainterInfo'
    import PainterSaveInfo from '../../../components/PainterSaveInfo/PainterSaveInfo'
    export default {
        components:{
            Add_changePainterInfo,
            PainterSaveInfo
        },
        data(){
            return {
                isAdd:true,//添加true,修改false
                isClearData:true,//是否清除界面数据
                painterUpImgs:[],//子组件传递的商品图片对象组
                painterInfoData:{
                    name:'',
                    introduce:'',
                    isShelf: 0,
                    gender:1
                },
                imgSrcArr:[],//图片路径数组
            }
        },
        methods:{
            /*接收子组件传递过来的商品信息*/
            getPainterInfo(value){
                this.painterInfoData = value
                console.log(value)
            },
            /*接收子组件传递过来的图片*/
            getImages(value){
                this.painterUpImgs = value
                console.log(value)
            },
            /*清除商品图片*/
            clearData(value){
                console.log(value)
                this.isClearData = value
            }
        },
        mounted(){
            let that = this
            let isLogin = this.$zj_globalMethods.judgeUserInfo(that)
        }
    }
</script>

<style lang="less" type="text/less">
    @import "../../../../public/common/less/common";
    .genderBox{
        display:inline-block;
        label{
            margin-right:10px;
        }
    }
    .addPainterShelLi{
        margin-bottom:0 !important;
    }
    .addPainterImgLi{
        .addPainterImgDiv{
            height:auto !important;
            display:inline-block;
            margin-left:20px !important;
            position:relative;
            bottom:2px;
            .painterImgBox{
                line-height:normal !important;
                height:auto !important;
                .delPrewImg{
                    top:calc(50% - 20px) !important;
                }
            }
            .addFileInfoImgBox{

            }
        }
    }


</style>