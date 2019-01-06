<template>
    <div class="addInfoBoxDiv">
        <ul class="addOilpaintingsInfoBox infoBox">
            <li class="addOilpaintingInfoLi infoLi">
                <img src="../../views/Shops/images/icon_shop-title.png" width="20" height="20" class="infoIcon">
                <label class="infoLable" >标&nbsp;&nbsp;&nbsp;&nbsp;题</label>
                <input type="text" class="infoInput" v-model="oilPaintingInfoData.title">
            </li>
            <li class="addShopsInfoLi addFileInfoLi infoLi">
                <img src="../../views/Shops/images/icon_shop-previw.png" width="20" height="20" class="infoIcon">
                <label class="infoLable" >预&nbsp;览&nbsp;图</label>
                <div class="addShopImgDiv addFileInfoImgDiv clear">
                    <div class="shopImgBox infoImgBox left" v-for="(imgSrc,index) in imgSrcArr" :key="index"
                         :data-index='index'>
                        <img :src="imgSrc">
                        <strong class="delPrewImg" @click="delPreviewImg" :data-index="index">-</strong>
                    </div>
                    <div class="addFileInfoImgBox left" v-show="imgSrcArr.length<3">
                        <input type="file" class="chooseInfoImg" name="shopImgs" multiple="multiple" accept=".jpg,.jpeg,.png" @change="selectOilImg" ref="oilPatingImg">
                        <strong class="addFileInfoImg">+</strong>
                    </div>
                </div>
            </li>
            <li class="addOilpaintingInfoLi infoLi">
                <img src="../../views/Shops/images/icon_shop-material.png" width="20" height="20" class="infoIcon">
                <label class="infoLable" >材&nbsp;&nbsp;&nbsp;&nbsp;料</label>
                <input type="text" class="infoInput" v-model="oilPaintingInfoData.material">
            </li>
            <li class="addOilpaintingInfoLi infoLi">
                <img src="../../views/Shops/images/icon_shop-size.png" width="20" height="20" class="infoIcon">
                <label class="infoLable" >尺&nbsp;&nbsp;&nbsp;&nbsp;寸</label>
                <input type="number" class="infoInput" v-model="oilPaintingInfoData.size">
            </li>
            <li class="addOilpaintingInfoLi infoLi">
                <img src="../../views/Shops/images/icon_shop-classify.png" width="20" height="20" class="infoIcon">
                <label class="infoLable" >所属画家</label>
                <select class="infoInput" v-model="oilPaintingInfoData.painterName">
                    <option :value ="painter.name" v-for="(painter,index) in painters" :key="index">{{painter.name}}</option>
                </select>
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
            oilPaintingDefaultInfo:Object,//修改需要显示的最初数据
        },
        data(){
            return{
                oilPaintingInfoData:{
                    title:'',
                    material:'',
                    size: 0,
                    painter:''
                },
                imgObjs:[],//上传的图片
                imgSrcArr:[],//图片本地路径数组
            }
        },
        computed:{
            ...mapState(['painters'])
        },
        methods:{
            /*选择图片*/
            selectOilImg(){
                let fileDom = this.$refs.oilPatingImg
                let {imgObjs,imgSrcArr} = this
                this.$zj_globalMethods.previewImg(fileDom,imgSrcArr)
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
                this.$zj_globalMethods.delPreviewImg(e,this.imgSrcArr,this.imgObjs,this.$refs.oilPatingImg)
            },
        },
        watch:{
            oilPaintingInfoData:{//修改时监视本地数据变化
                deep:true,
                handler:function(value){
                    console.log(value)
                    this.oilPaintingInfoData = value
                    this.$emit('getOilPaintingInfo',value)
                    //console.log(value)
                }
            },
            isClearData:{//监听清除界面数据
                deep:true,
                handler:function(value){
                    if(this.isAdd){
                        this.imgSrcArr = []
                        this.imgObjs = []
                        this.oilPaintingInfoData = {}
                        this.oilPaintingInfoData.size = 0
                    }
                }
            },
            oilPaintingDefaultInfo:{//监听父组件传递的数据
                deep:true,
                handler:function (value) {
                    console.log(value)
                    console.log(this.isAdd)
                    if(!this.isAdd){
                        //console.log(this.shopDefaultInfo)
                        this.oilPaintingInfoData = this.oilPaintingDefaultInfo
                        //console.log(this.oilPaintingInfoData)
                        this.oilPaintingDefaultInfo.imgSrcArr && (this.imgSrcArr = this.oilPaintingDefaultInfo.imgSrcArr)
                    }
                }
            }
        },
        mounted(){
            this.$store.dispatch('getPainters')
        }
    }
</script>

<style lang="less" type="text/less">
</style>