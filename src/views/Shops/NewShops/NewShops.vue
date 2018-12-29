<template>
    <div class="page-bodyRight right">
        <!--添加-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <div class="addShopsInfoBoxDiv">
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
                                    <div class="shopImgBox infoImgBox left"></div>
                                    <div class="shopImgBox infoImgBox left "></div>
                                    <div class="addFileInfoImgBox left">
                                        <input type="file" class="chooseInfoImg" name="shopImgs[]" multiple="multiple" accept=".jpg,.jpeg,.png" @change="selectShopImg" ref="shopImg">
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
                <div class="curr-saveInfo">
                    <span class="curr-save" @click="saveShopInfo">保存</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {subAddShopInfo} from '../../../api'
    import {mapState} from 'vuex'
    export default {
        data(){
            return {
                shopInfoData:{
                    name:'',
                    brand:'',
                    classify:'',
                    price:'',
                    isShelf:'',
                    introdue:''
                }
            }
        },
       methods:{
            /*保存商品信息*/
           saveShopInfo(){
               let {shopInfoData} = this
               let shopInfoDataStr = JSON.stringify(shopInfoData)
               subAddShopInfo(shopInfoDataStr)
               this.selectShopImg()
           },
           /*添加商品图*/
           selectShopImg(){
               let inputDOM = this.$refs.shopImg;
               // 通过DOM取文件数据
               this.fil = inputDOM.files
               console.log(this.fil)
               let fileInfo = this.fil[0]
               for(let i=0;i<this.fil.length;i++){
                   console.log(this.fil[i])
               }
               let size = Math.floor(fileInfo.size / 1024)
               let jpgImgTest =/\/jpeg$/,
                   jpegImgTest = /\/jpeg$/ ,
                   pngImgTest = /\/png$/
               if (!(jpgImgTest.test(fileInfo.type) || jpegImgTest.test(fileInfo.type) || pngImgTest.test(fileInfo.type))){//判断格式
                   alert('请上传jpg,png,jpeg格式的图片')
                   return
               }else {
                   if (size > 1024) {//判断尺寸
                       alert('请选择1M以内的图片！')
                       return false
                   }
               }
               this.$set(this.imgs,fileInfo.name+'?'+new Date().getTime(),fileInfo)
               let $filePath=URL.createObjectURL(this.fil[0])
               if(this.isList){
                   this.currFormData.currCover.imgSrc = $filePath
               }else {
                   !this.currFormData.currCover && (this.currFormData.currCover = {})
                   this.currFormData.currCover.imgSrc = $filePath
               }
               this.previewImgSrc= fileInfo.name//设置预览地址文字
               this.$emit('getImgs',this.imgs)
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
        text-align: center;
        padding:20px 0;
    }


</style>