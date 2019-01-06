<template>
    <div class="addInfoBoxDiv">
        <ul class="addPaintersInfoBox infoBox">
            <li class="addPainterInfoLi infoLi">
                <img src="../../views/Shops/images/icon_shop-paintername.png" width="20" height="20" class="infoIcon">
                <label class="infoLable" >画家姓名</label>
                <input type="text" class="infoInput" v-model="painterInfoData.name">
            </li>
            <li class="addPainterInfoLi infoLi">
                <img src="../../views/Shops/images/icon_shop-gender.png" width="20" height="20" class="infoIcon">
                <label class="infoLable">画家性别</label>
                <div class="radioBox genderBox">
                    <input type="radio" name="sex" id="isBoy" class="infoInput" value="0" v-model="painterInfoData.gender">
                    <label class="infoLable" for="isBoy">男</label>
                    <input type="radio" name="sex" id="isGirl" class="infoInput" value="1" v-model="painterInfoData.gender">
                    <label class="infoLable" for="isGirl">女</label>
                </div>
            </li>
            <li class="addPainterInfoLi addFileInfoLi infoLi addPainterImgLi clear">
                <img src="../../views/Shops/images/icon_shop-faceimg.png" width="20" height="20" class="infoIcon left">
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
                <img src="../../views/Shops/images/icon_shop-introduce.png" width="20" height="20" class="infoIcon infoTextareaIcon left">
                <label class="infoLable infoTextareaLable left" >画家简介</label>
                <textarea class="infoInput infoTextarea left" v-model="painterInfoData.introduce"></textarea>
            </li>
            <li class="addPainterInfoLi infoLi addPainterShelLi">
                <img src="../../views/Shops/images/icon_shop-shelf.png" width="20" height="20" class="infoIcon">
                <label class="infoLable" >是否上架</label>
                <select class="infoInput isShelf_short" v-model="painterInfoData.isShelf">
                    <option value ="0">上架</option>
                    <option value ="1">下架</option>
                </select>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            isAdd:Boolean,
            isClearData:Boolean,
            painterDefaultInfo:Object,//修改需要显示的最初数据
        },
        data(){
            return{
                painterInfoData:{
                    name:'',
                    introduce:'',
                    isShelf: 0,
                    gender:0
                },
                imgObjs:[],//上传的图片
                imgSrcArr:[],//图片本地路径数组
            }
        },
        methods:{

            /*选择图片*/
            selectPainterImg(){
                let fileDom = this.$refs.painterImg
                let {imgObjs,imgSrcArr} = this
                this.$zj_globalMethods.previewImg(fileDom,imgSrcArr)
                this.$emit('getImgSrcArr',imgSrcArr)

                let imgObj = new FormData
                imgObj.append('multfile',fileDom.files[0])
                imgObj.append('operaType', this.uploadType)
                let imgsLength = 1
                if(imgObjs.length<imgsLength){
                    imgObjs.push(imgObj)
                    //console.log(imgObjs)
                }
                this.$emit('getImages',imgObjs)
            },
            /*点击删除图片*/
            delPreviewImg(e){
                this.$zj_globalMethods.delPreviewImg(e,this.imgSrcArr,this.imgObjs,this.$refs.painterImg)
            },
        },
        watch:{
            painterInfoData:{//修改时监视本地数据变化
                deep:true,
                handler:function(value){
                    this.painterInfoData = value
                    this.$emit('getPainterInfo',value)
                    //console.log(value)
                }
            },
            isClearData:{//监听清除界面数据
                deep:true,
                handler:function(value){
                    if(this.isAdd){
                        this.imgSrcArr = []
                        this.imgObjs = []
                        this.painterInfoData = {}
                        this.painterInfoData.isShelf = 0
                        this.painterInfoData.gender = 0
                    }
                }
            },
            painterDefaultInfo:{//监听父组件传递的数据
                deep:true,
                handler:function (value) {
                    if(!this.isAdd){
                        //console.log(this.shopDefaultInfo)
                        this.painterInfoData = this.painterDefaultInfo
                        this.painterDefaultInfo.imgSrcArr && (this.imgSrcArr = this.painterDefaultInfo.imgSrcArr)
                    }
                }
            }
        },
    }
</script>

<style lang="less" type="text/less">
</style>