<template>
    <div class="page-bodyRight right">
        <!--商品品类-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <div class="addInfoBoxDiv">
                        <ul class="addPaintersInfoBox infoBox">
                            <li class="addPainterInfoLi infoLi">
                                <img src="" width="20" height="20" class="infoIcon">
                                <label class="infoLable" >画家姓名</label>
                                <input type="text" class="infoInput" v-model="painterInfoData.name">
                            </li>
                            <li class="addPainterInfoLi infoLi">
                                <img src="" width="20" height="20" class="infoIcon">
                                <label class="infoLable">画家性别</label>
                                <div class="radioBox genderBox">
                                    <input type="radio" name="sex" id="isBoy" class="infoInput" value="0" v-model="painterInfoData.gender">
                                    <label class="infoLable" for="isBoy">男</label>
                                    <input type="radio" name="sex" id="isGirl" class="infoInput" value="1" v-model="painterInfoData.gender">
                                    <label class="infoLable" for="isGirl">女</label>
                                </div>
                            </li>
                            <li class="addPainterInfoLi addFileInfoLi infoLi addPainterImgLi clear">
                                <img src="" width="20" height="20" class="infoIcon left">
                                <label class="infoLable left" >商品肖像</label>
                                <div class="addPainterImgDiv addFileInfoImgDiv left">
                                    <div class="painterImgBox infoImgBox left" v-for="(imgSrc,index) in imgSrcArr" :key="index" :data-index='index'>
                                        <img :src="imgSrc">
                                        <strong class="delPrewImg" @click="delPreviewImg" :data-index="index">-</strong>
                                    </div>
                                    <div class="addFileInfoImgBox left" v-show="imgSrcArr.length<1">
                                        <input type="file" class="chooseInfoImg" name="shopImgs" multiple="multiple" accept=".jpg,.jpeg,.png" @change="selectPainterImg" ref="painterImg">
                                        <strong class="addFileInfoImg">+</strong>
                                    </div>
                                </div>
                            </li>
                            <li class="addPainterInfoLi infoTextareaLi infoLi clear">
                                <img src="" width="20" height="20" class="infoIcon infoTextareaIcon left">
                                <label class="infoLable infoTextareaLable left" >商品简介</label>
                                <textarea class="infoInput infoTextarea left" v-model="painterInfoData.introduce"></textarea>
                            </li>
                            <li class="addPainterInfoLi infoLi addPainterShelLi">
                                <img src="" width="20" height="20" class="infoIcon">
                                <label class="infoLable" >是否上架</label>
                                <select class="infoInput isShelf_short" v-model="painterInfoData.isShelf">
                                    <option value ="0">上架</option>
                                    <option value ="1">下架</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="curr-saveInfo">
                <span class="curr-save" @click="savePainterInfo">添加</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {subPainterInfo,subPainterImg} from '../../../api'
    export default {
        data(){
            return {
                painterInfoData:{
                    name:'',
                    introduce:'',
                    isShelf: 0,
                    gender:1
                },
                imgSrcArr:[],//图片路径数组
                imgObjs:[],//上传的图片对象数组
            }
        },
        methods:{
            /*保存画家信息*/
            savePainterInfo() {
                let {painterInfoData,imgObjs} = this
                if(!painterInfoData.name.trim()){
                    console.log()
                    alert('商品名称不能为空！')
                    return
                }
                if(!painterInfoData.gender){
                    alert('性别必须选择')
                    return
                }
                if(!this.imgObjs || (JSON.stringify(this.imgObjs) === '{}')){
                    alert('必须选择头像')
                    return
                }
                let painterInfoDataStr = JSON.stringify(painterInfoData)
                subPainterInfo(painterInfoDataStr)
                subPainterImg(imgObjs)
                this.painterInfoData.name = ''
                this.painterInfoData.introduce = ''
                this.painterInfoData.isShelf = 0
                this.painterInfoData.gender = 0
                this.imgSrcArr = []
                this.imgObjs = []
            },
            /*选择图片*/
            selectPainterImg(){
                let fileDom = this.$refs.painterImg
                let {imgObjs,imgSrcArr} = this
                let imgsLength = 1
                console.log(fileDom.fill)
                this.$zj_globalMethods.previewImg(fileDom,imgsLength,imgObjs,imgSrcArr)

            },
            /*点击删除图片*/
            delPreviewImg(e){
                this.$zj_globalMethods.delPreviewImg(e,this.imgSrcArr,this.imgObjs,this.$refs.painterImg)
            },
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