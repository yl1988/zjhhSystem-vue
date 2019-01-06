<template>
    <div class="addInfoBoxDiv">
        <ul class="addShopsInfoBox infoBox leftInfo">
            <li class="addShopsInfoLi infoLi">
                <img src="../../views/Shops/images/icon_shop-name.png" width="20" height="20" class="infoIcon">
                <label class="infoLable" >商品名称</label>
                <input type="text" class="infoInput" v-model="shopInfoData.name">
            </li>
            <li class="addShopsInfoLi infoLi">
                <img src="../../views/Shops/images/icon_shop-brand.png" width="20" height="20" class="infoIcon">
                <label class="infoLable" >品&nbsp;&nbsp;&nbsp;&nbsp;牌</label>
                <input type="text" class="infoInput" v-model="shopInfoData.brand">
            </li>
            <li class="addShopsInfoLi infoLi">
                <img src="../../views/Shops/images/icon_shop-classify.png" width="20" height="20" class="infoIcon">
                <label class="infoLable" >所属分类</label>
                <select class="infoInput" v-model="shopInfoData.classify">
                    <option :value ="shopClassify.name" v-for="(shopClassify,index) in shopClassifys" :key="index">{{shopClassify.name}}</option>
                </select>
            </li>
            <li class="addShopsInfoLi infoLi">
                <img src="../../views/Shops/images/icon_shop-price.png" width="20" height="20" class="infoIcon">
                <label class="infoLable" >商品单价</label>
                <input type="number" class="infoInput" v-model="shopInfoData.price">
            </li>
            <li class="addShopsInfoLi infoLi">
                <img src="../../views/Shops/images/icon_shop-shelf.png" width="20" height="20" class="infoIcon">
                <label class="infoLable" >是否上架</label>
                <select class="infoInput isShelf_short" v-model="shopInfoData.isShelf">
                    <option value ="0">上架</option>
                    <option value ="1">下架</option>
                </select>
            </li>
            <li class="addShopsInfoLi addFileInfoLi infoLi">
                <img src="../../views/Shops/images/icon_shop-img.png" width="20" height="20" class="infoIcon">
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
        </ul>
        <ul class="addShopsInfoBox infoBox rightInfo">
            <li class="addShopsInfoLi infoTextareaLi infoLi clear">
                <img src="../../views/Shops/images/icon_shop-introduce.png" width="20" height="20" class="infoIcon infoTextareaIcon">
                <label class="infoLable infoTextareaLable" >商品介绍</label>
                <!--<textarea class="infoInput infoTextarea left" id = 'editor' v-model="shopInfoData.introduce"></textarea>-->
                <textarea class="editorBox" id = 'editor'></textarea>
                <!--
                <editor id='tinymce' v-model='tinymceHtml' :init='init'></editor>
                <div v-html='tinymceHtml'></div>
                -->
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        props:{
            isAdd:Boolean,
            isClearData:Boolean,
            shopDefaultInfo:Object,//修改需要显示的最初数据
        },
        data(){
            return{
                shopInfoData:{
                    name:'',
                    brand:'',
                    classify:'',
                    price:'',
                    isShelf:0,
                },
                imgObjs:[],//上传的图片
                imgSrcArr:[],//图片本地路径数组
                shopIntroduceOb:{}//商品介绍
            }
        },
        computed:{
            ...mapState(['shopClassifys'])
        },
        methods:{
            /*添加商品图*/
            selectShopImg(){
                let fileDom = this.$refs.shopImg
                let {imgObjs,imgSrcArr} = this
                this.$zj_globalMethods.previewImg(fileDom,imgSrcArr)//生成预览
                this.$emit('getImgSrcArr',imgSrcArr)
                let imgObj = new FormData
                imgObj.append('multfile',fileDom.files[0])
                imgObj.append('operaType', this.uploadType)
                let imgsLength = 3
                if(imgObjs.length<imgsLength){
                    imgObjs.push(imgObj)
                    //console.log(imgObjs)
                }
                this.$emit('getImages',imgObjs)
            },
            /*点击删除图片*/
            delPreviewImg(e){
                this.$zj_globalMethods.delPreviewImg(e,this.imgSrcArr,this.imgObjs,this.$refs.shopImg)
            },
        },
        watch:{
            shopInfoData:{//修改时监视本地数据变化
                deep:true,
                handler:function(value){
                    this.shopInfoData = value
                    this.$emit('getShopInfo',value)
                    //console.log(value)
                }
            },
            isClearData:{//监听清除界面数据
                deep:true,
                handler:function(value){
                    if(this.isAdd){
                        this.imgSrcArr = []
                        this.imgObjs = []
                        this.shopInfoData = {}
                        this.shopInfoData.isShelf = 0
                        this.shopIntroduceOb={}
                    }
                }
            },
            shopDefaultInfo:{//监听父组件传递的数据
                deep:true,
                handler:function (value) {
                    if(!this.isAdd){
                        //console.log(this.shopDefaultInfo)
                        this.shopInfoData = this.shopDefaultInfo
                        this.shopDefaultInfo.imgSrcArr && (this.imgSrcArr = this.shopDefaultInfo.imgSrcArr)
                        this.shopDefaultInfo.shopIntroduceOb && (this.shopIntroduceOb = this.shopDefaultInfo.shopIntroduceOb)
                    }
                }
            }
        },
        mounted(){
            window.CKEDITOR.replace( 'editor', {
                width: "100%", toolbar: "Full"
            })
        }
    }
</script>

<style lang="less" type="text/less">
    .isShelf_short{
        width:60px !important;
    }
    .cke_chrome{
        margin-top:10px !important;
    }
    .cke_top{
        width:100% !important;
    }
</style>