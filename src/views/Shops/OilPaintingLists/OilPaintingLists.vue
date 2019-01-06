<template>
    <div class="page-bodyRight right">
        <!--商品品类-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <div class="oilPaintingListBox" v-show="!isEdit">
                        <ul class="checkInfoBox clear">
                            <li class="checkInfoLi left">
                                <label>标&nbsp;&nbsp;&nbsp;&nbsp;题</label>
                                <input type="text" v-model="oilPainTitle">
                            </li>
                            <li class="checkInfoLi left">
                                <label>所属画家</label>
                                <select class="infoInput" v-model="selectoilPainting" >
                                    <option :value ="painterList.name" v-for="(painterList,index) in painterLists" :key="index">{{painterList.name}}</option>
                                </select>
                            </li>
                            <li class="checkInfoLi checkBtnBox left">
                                <div class="curr-saveInfo">
                                    <span class="curr-save" @click="checkOilPainting">查询</span>
                                </div>
                            </li>
                        </ul>
                        <ul class="listInfoTable oilPianListInfoTable clear">
                            <li class="listInfoTitleLiBox oilPianListInfoTitleLiBox">
                                <ul class="listInfoTitleUl clear">
                                    <li class="listInfoTitleLi oilPianListInfoTitleLi left"><strong class="listInfoTitleName">标题</strong></li>
                                    <li class="listInfoTitleLi oilPianListInfoTitleLi left"><strong class="listInfoTitleGender">所属画家</strong></li>
                                    <li class="listInfoTitleLi oilPianListInfoTitleLi left"><strong class="listInfoTitleOptions">操作</strong></li>
                                </ul>
                            </li>
                            <li class="listInfoContentLiBox oilPianListInfoContentLiBox clear" v-for="(oilPaintingList,index) in oilPaintingLists" :key="index">
                                <ul class="listInfoContentUl clear">
                                    <li class="listInfoContentli oilPianInfoContentLi listInfoName left">{{oilPaintingList.title}}</li>
                                    <li class="listInfoContentli oilPianInfoContentLi listInfoPrice left">{{oilPaintingList.painterName}}</li>
                                    <li class="listInfoContentli oilPianInfoContentLi listInfoEdit left listInfoOptionButton">
                                        <span @click="openEdit" :data-index="index" :data-oilpaintinglist="JSON.stringify(oilPaintingList)">编辑</span>
                                    </li>
                                    <li class="listInfoContentli oilPianInfoContentLi listInfoDel left listInfoOptionButton" >
                                        <span @click="oilPaintingIsShelf" :data-index="index" :class="{colord52d81:oilPaintingList.isShelf === 0}"
                                              :data-oilpaintinglist="JSON.stringify(oilPaintingList)">{{(oilPaintingList.isShelf === 0) ? '上架' : '下架'}}</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Paging :total-page="totalPage" :current-page="currentPage" :pagegroup="pagegroup" v-show="!isEdit"/>
                    <Add_changeOilPaintingInfo :isAdd="isAdd" :isClearData="isClearData" @getImages="getImages"
                                               @getOilPaintingInfo="getOilPaintingInfo" v-show="isEdit" :oilPaintingDefaultInfo="oilPaintingDefaultInfo"/>
                </div>
            </div>
            <OilPaintingSaveInfo :oilPaintingInfoData="oilPaintingInfoData" :oilPaintingUpImgs="oilPaintingUpImgs" :isAdd = isAdd @clearData="clearData"
                                 v-show="isEdit" :isEidt="isEdit" :isClearData="isClearData" :editIndex="editIndex" @closeEdit="closeEdit"/>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Paging from '../../../components/Paging/Paging'
    import Add_changeOilPaintingInfo from '../../../components/Add_changeOilPaintingInfo/Add_changeOilPaintingInfo'
    import OilPaintingSaveInfo from '../../../components/OilPaintingSaveInfo/OilPaintingSaveInfo'
    import {subOilPaintingShelfOption} from "../../../api";

    export default {
        components:{
            Add_changeOilPaintingInfo,
            OilPaintingSaveInfo,
            Paging
        },
       data() {
           return {
               selectoilPainting:'',//选择画家
               oilPainTitle:'',//油画标题
               totalPage: 20,
               currentPage: 1,
               pagegroup: 5,
               contents:[],
               isEdit:false,//是否点开编辑
               isAdd:false,//添加true，修改false
               isClearData:false,//是否清除界面
               oilPaintingInfoData:{},//修改后需要保存的数据
               oilPaintingUpImgs:[],//修改后需要上传的图片
               oilPaintingDefaultInfo:{},//点开编辑后交给子组件显示的数据
               editIndex:0,//修改的数据下标
           }
       },
        computed:{
           ...mapState(['oilPaintingLists','painterLists'])
        },
        methods:{
            checkOilPainting() {
                let {oilPainTitle,selectoilPainting} = this
                this.$store.dispatch('getCheckOilPainting',{oilPainTitle,selectoilPainting}).then(result=>{
                    if(!result){
                        alert('找不到该商品')
                    }
                })
                this.oilPainTitle = ''
                this.selectoilPainting = ''
            },
            openEdit(e){
                this.isEdit = true
                e=e||event
                let target = e.target
                let oilPaintingList = target.dataset ? target.dataset.oilpaintinglist : target.srcElement.getAttribute('data-oilpaintinglist')
                this.editIndex = target.dataset ? parseInt(target.dataset.index) : parseInt(target.srcElement.getAttribute('data-index'))
                this.oilPaintingDefaultInfo = JSON.parse(oilPaintingList)
            },
            oilPaintingIsShelf(e){
                e=e||event
                let target = e.target
                let oilPaintingList = target.dataset ? JSON.parse(target.dataset.oilpaintinglist) : JSON.parse(target.srcElement.getAttribute('data-oilpaintinglist'))
                let {isShelf,name,painterName} = oilPaintingList
                let shelfIndex = target.dataset ? parseInt(target.dataset.index) : parseInt(target.srcElement.getAttribute('data-index'))
                let shelfMsg = (isShelf === 0) ? '下架' : '上架'
                let sureShelf = window.confirm(`确认${shelfMsg}？`)
                if(sureShelf){
                    if(isShelf === 0){
                        isShelf = 1
                    }else if(isShelf === 1){
                        isShelf = 0
                    }
                    subOilPaintingShelfOption(name,painterName,isShelf).then(result=>{
                        //console.log(result)
                        if(result.code === 0){
                            /*后台更新成功，更新本地数据*/
                            for(let i=0;i<this.oilPaintingLists.length;i++){
                                if(shelfIndex === i){
                                    let thisoilPaintingList = this.oilPaintingLists[i]
                                    thisoilPaintingList.isShelf = isShelf
                                    this.oilPaintingLists.splice(shelfIndex,1,thisoilPaintingList)
                                    //console.log(this.oilPaintingLists[shelfIndex])
                                    break
                                }
                            }
                        }else {
                            /*后台更新失败*/
                            alert('网络繁忙')
                        }
                    })


                }

            },
            /*接收子组件传递过来的商品信息*/
            getOilPaintingInfo(value){
                this.oilPaintingInfoData = value
                console.log(value)
            },
            /*接收子组件传递过来的图片*/
            getImages(value){
                console.log(value)
                this.oilPaintingUpImgs = value
            },
            /*清除商品图片*/
            clearData(value){
                console.log(value)
                this.isClearData = value
            },
            /*关闭编辑页面*/
            closeEdit(value){
                this.isEdit = value
                //console.log(this.isEdit)
            },

        },
        mounted(){
            let that = this
            let isLogin = this.$zj_globalMethods.judgeUserInfo(that)
            if(isLogin){
                this.$store.dispatch('getOilPaintingLists')//油画
                this.$store.dispatch('getPainterLists')//画家
            }

        }

    }
</script>

<style lang="less" type="text/less">
    @import "../../../../public/common/less/common";
    .oilPaintingListBox{
        min-height:280px;
        .oilPianListInfoTable{
            .oilPianListInfoTitleLiBox{
                .oilPianListInfoTitleLi{
                    width:40%;
                    &:last-of-type{
                        width:20%;
                    }
                }
            }
            .oilPianListInfoContentLiBox{
                .oilPianInfoContentLi{
                    width:40%;
                    &:last-of-type,&:nth-last-of-type(2) {
                        width: 10%;
                    }
                }
            }

        }
    }
</style>