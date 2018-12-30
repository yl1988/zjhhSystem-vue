<template>
    <div class="page-bodyRight right">
        <!--商品品类-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <div class="addInfoBoxDiv">
                        <ul class="addOilpaintingsInfoBox infoBox">
                            <li class="addOilpaintingInfoLi infoLi">
                                <img src="" width="20" height="20" class="infoIcon">
                                <label class="infoLable" >标&nbsp;&nbsp;&nbsp;&nbsp;题</label>
                                <input type="text" class="infoInput" v-model="oilPaintingInfoData.name">
                            </li>
                            <li class="addShopsInfoLi addFileInfoLi infoLi">
                                <img src="" width="20" height="20" class="infoIcon">
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
                                <img src="" width="20" height="20" class="infoIcon">
                                <label class="infoLable" >材&nbsp;&nbsp;&nbsp;&nbsp;料</label>
                                <input type="text" class="infoInput" v-model="oilPaintingInfoData.material">
                            </li>
                            <li class="addOilpaintingInfoLi infoLi">
                                <img src="" width="20" height="20" class="infoIcon">
                                <label class="infoLable" >尺&nbsp;&nbsp;&nbsp;&nbsp;寸</label>
                                <input type="text" class="infoInput" v-model="oilPaintingInfoData.size">
                            </li>
                            <li class="addOilpaintingInfoLi infoLi">
                                <img src="" width="20" height="20" class="infoIcon">
                                <label class="infoLable" >所属画家</label>
                                <select class="infoInput" v-model="oilPaintingInfoData.painter">
                                    <option :value ="painter.name" v-for="(painter,index) in painters" :key="index">{{painter.name}}</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="curr-saveInfo">
                <span class="curr-save" @click="saveOilPatingInfo">添加</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {subOilpatingInfo,subOilpatingImg} from '../../../api'
    import {mapState} from 'vuex'
    export default {
        data(){
            return{
                oilPaintingInfoData:{
                    name:'',
                    material:'',
                    size:'',
                    painter:''
                },
                imgSrcArr:[],
                imgObjs:[]
            }
        },
        methods:{
            /*保存画家信息*/
            saveOilPatingInfo() {
                let {oilPaintingInfoData,imgObjs} = this
                if(!oilPaintingInfoData.name.trim()){
                    console.log()
                    alert('油画标题不能为空！')
                    return
                }
                if(!oilPaintingInfoData.material.trim()){
                    console.log()
                    alert('材料不能为空！')
                    return
                }
                if(!oilPaintingInfoData.size.trim()){
                    console.log()
                    alert('尺寸不能为空！')
                    return
                }
                if(!oilPaintingInfoData.painter.trim()){
                    console.log()
                    alert('所属画家不能为空！')
                    return
                }
                if(!this.imgObjs || (JSON.stringify(this.imgObjs) === '{}')){
                    alert('必须有油画图片')
                    return
                }
                let oilPaintingInfoDataStr = JSON.stringify(oilPaintingInfoData)
                subOilpatingInfo(oilPaintingInfoDataStr)
                subOilpatingImg(imgObjs)
                this.oilPaintingInfoData.name = ''
                this.oilPaintingInfoData.material = ''
                this.oilPaintingInfoData.size = ''
                this.oilPaintingInfoData.painter = ''
                this.imgSrcArr = []
                this.imgObjs = []
            },
            /*选择图片*/
            selectOilImg(){
                let fileDom = this.$refs.oilPatingImg
                let {imgObjs,imgSrcArr} = this
                let imgsLength = 3
                console.log(fileDom.fill)
                this.$zj_globalMethods.previewImg(fileDom,imgsLength,imgObjs,imgSrcArr)

            },
            /*点击删除图片*/
            delPreviewImg(e){
                this.$zj_globalMethods.delPreviewImg(e,this.imgSrcArr,this.imgObjs,this.$refs.painterImg)
            },
        },
        computed:{
            ...mapState(['painters'])
        },
        mounted() {
            this.$store.dispatch('getPainters')
        }
    }
</script>

<style lang="less" type="text/less">
    @import "../../../../public/common/less/common";
</style>