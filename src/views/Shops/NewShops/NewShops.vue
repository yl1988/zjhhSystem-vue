<template>
    <div class="page-bodyRight right">
        <!--添加-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <div class="addInfoBoxDiv">
                        <ul class="addShopsInfoBox infoBox leftInfo">
                            <li class="addShopsInfoLi infoLi">
                                <img src="" width="20" height="20" class="infoIcon">
                                <label class="infoLable" >商品名称</label>
                                <input type="text" class="infoInput" v-model="shopInfoData.name">
                            </li>
                            <li class="addShopsInfoLi infoLi">
                                <img src="" width="20" height="20" class="infoIcon">
                                <label class="infoLable" >品&nbsp;&nbsp;&nbsp;&nbsp;牌</label>
                                <input type="text" class="infoInput" v-model="shopInfoData.brand">
                            </li>
                            <li class="addShopsInfoLi infoLi">
                                <img src="" width="20" height="20" class="infoIcon">
                                <label class="infoLable" >所属分类</label>
                                <select class="infoInput" v-model="shopInfoData.classify">
                                    <option :value ="shopClassify.name" v-for="(shopClassify,index) in shopClassifys" :key="index">{{shopClassify.name}}</option>
                                </select>
                            </li>
                            <li class="addShopsInfoLi infoLi">
                                <img src="" width="20" height="20" class="infoIcon">
                                <label class="infoLable" >商品单价</label>
                                <input type="number" class="infoInput" v-model="shopInfoData.price">
                            </li>
                            <li class="addShopsInfoLi infoLi">
                                <img src="" width="20" height="20" class="infoIcon">
                                <label class="infoLable" >是否上架</label>
                                <select class="infoInput isShelf_short" v-model="shopInfoData.isShelf">
                                    <option value ="0">上架</option>
                                    <option value ="1">下架</option>
                                </select>
                            </li>
                        </ul>
                        <ul class="addShopsInfoBox infoBox rightInfo">
                            <li class="addShopsInfoLi addFileInfoLi infoLi">
                                <img src="" width="20" height="20" class="infoIcon">
                                <label class="infoLable" >商品图片</label>
                                <div class="addShopImgDiv addFileInfoImgDiv clear">
                                    <div class="shopImgBox infoImgBox left" v-for="(imgSrc,index) in imgSrcArr" :key="index"
                                         :data-index='index'>
                                        <img :src="imgSrc">
                                        <strong class="delPrewImg" @click="delPreviewImg" :data-index="index">-</strong>
                                    </div>
                                    <div class="addFileInfoImgBox left" v-show="imgSrcArr.length<3">
                                        <input type="file" class="chooseInfoImg" name="shopImgs" multiple="multiple" accept=".jpg,.jpeg,.png" @change="selectShopImg" ref="shopImg">
                                        <strong class="addFileInfoImg">+</strong>
                                    </div>
                                </div>
                            </li>
                            <li class="addShopsInfoLi infoTextareaLi infoLi clear">
                                <img src="" width="20" height="20" class="infoIcon infoTextareaIcon left">
                                <label class="infoLable infoTextareaLable left" >商品介绍</label>
                                <textarea class="infoInput infoTextarea left" v-model="shopInfoData.introduce"></textarea>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="curr-saveInfo">
                <span class="curr-save" @click="saveShopInfo">添加</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {subAddShopInfo,subShopInfoImgs} from '../../../api'
    import {mapState} from 'vuex'
    export default {
        data(){
            return {
                shopInfoData:{
                    name:'',
                    brand:'',
                    classify:'',
                    price:'',
                    isShelf:0,
                    introduce:''
                },
                imgObjs:[],//上传的图片
                imgSrcArr:[],//图片本地路径数组
            }
        },
       methods:{
            /*保存商品信息*/
           saveShopInfo(){
               let {shopInfoData,imgObjs} = this
               if(!shopInfoData.name.trim()){
                   console.log()
                   alert('商品名称不能为空！')
                   return
               }
               if(!shopInfoData.brand.trim()){
                   alert('品牌不能为空')
                   return
               }
               if(!shopInfoData.classify.trim()){
                   alert('分类必须选择')
                   return
               }
               if(!shopInfoData.price.trim()){
                   alert('价格不能为空')
                   return
               }
               let shopInfoDataStr = JSON.stringify(shopInfoData)
               subAddShopInfo(shopInfoDataStr)
               subShopInfoImgs(imgObjs)
               /*清空界面数据*/
               this.shopInfoData.name = ''
               this.shopInfoData.brand = ''
               this.shopInfoData.classify = ''
               this.shopInfoData.price = ''
               this.shopInfoData.isShelf = 0
               this.shopInfoData.introduce = ''
               this.imgSrcArr = []
               this.imgObjs = []
               //console.log(this.shopInfoData)
           },
           /*添加商品图*/
           selectShopImg(){
               let fileDom = this.$refs.shopImg
               let {imgObjs,imgSrcArr} = this
               let imgsLength = 3
               this.$zj_globalMethods.previewImg(fileDom,imgsLength,imgObjs,imgSrcArr)
           },
           /*点击删除图片*/
           delPreviewImg(e){
               this.$zj_globalMethods.delPreviewImg(e,this.imgSrcArr,this.imgObjs,this.$refs.shopImg)
           },
       },
        computed:{
            ...mapState(['shopClassifys'])
        }
    }
</script>

<style lang="less" type="text/less">
    @import "../../../../public/common/less/common";
    .isShelf_short{
        width:60px !important;
    }
    .addShopsInfoBoxDiv{

    }


</style>