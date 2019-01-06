<template>
    <div class="page-bodyRight right">
        <!--画家列表-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <div class="painterListBox" v-show="!isEdit">
                        <ul class="checkInfoBox clear">
                            <li class="checkInfoLi left">
                                <label>画家姓名</label>
                                <input type="text" v-model="painterName">
                            </li>
                            <li class="checkInfoLi left">
                                <label>性别</label>
                                <select class="infoInput" v-model="painterGender" >
                                    <option value="0">男</option>
                                    <option value="1">女</option>
                                </select>
                            </li>
                            <li class="checkInfoLi checkBtnBox left">
                                <div class="curr-saveInfo">
                                    <span class="curr-save" @click="checkPainter">查询</span>
                                </div>
                            </li>
                        </ul>
                        <ul class="listInfoTable painterListInfoTable clear">
                            <li class="listInfoTitleLiBox painterListInfoTitleLiBox">
                                <ul class="listInfoTitleUl clear">
                                    <li class="listInfoTitleLi painterListInfoTitleLi left"><strong class="listInfoTitleName">画家姓名</strong></li>
                                    <li class="listInfoTitleLi painterListInfoTitleLi left"><strong class="listInfoTitleGender">性别</strong></li>
                                    <li class="listInfoTitleLi painterListInfoTitleLi left"><strong class="listInfoTitleOptions">操作</strong></li>
                                </ul>
                            </li>
                            <li class="listInfoContentLiBox clear" v-for="(painterList,index) in painterLists" :key="index">
                                <ul class="listInfoContentUl clear">
                                    <li class="listInfoContentli painterInfoContentLi listInfoName left">{{painterList.name}}</li>
                                    <li class="listInfoContentli painterInfoContentLi listInfoPrice left">{{(painterList.gender === 0) ? '男' : '女'}}</li>
                                    <li class="listInfoContentli painterInfoContentLi listInfoEdit left listInfoOptionButton">
                                        <span @click="openEdit" :data-index="index" :data-painterlist="JSON.stringify(painterList)">编辑</span>
                                    </li>
                                    <li class="listInfoContentli painterInfoContentLi listInfoDel left listInfoOptionButton" >
                                        <span @click="painterIsShelf" :data-index="index" :class="{colord52d81:painterList.isShelf === 0}"
                                              :data-painterlist="JSON.stringify(painterList)">{{(painterList.isShelf === 0) ? '上架' : '下架'}}</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Paging :total-page="totalPage" :current-page="currentPage" :pagegroup="pagegroup" v-show="!isEdit"/>
                    <Add_changePainterInfo :isAdd="isAdd" :isClearData="isClearData" @getImages="getImages"
                                           @getPainterInfo="getPainterInfo" v-show="isEdit" :painterDefaultInfo="painterDefaultInfo"/>
                </div>
            </div>
            <PainterSaveInfo :painterInfoData="painterInfoData" :painterUpImgs="painterUpImgs" :isAdd = isAdd @clearData="clearData"
                             v-show="isEdit" :isEidt="isEdit" :isClearData="isClearData" :editIndex="editIndex" @closeEdit="closeEdit"/>
        </div>
    </div>
</template>

<script>
    import Paging from '../../../components/Paging/Paging'
    import Add_changePainterInfo from '../../../components/Add_changePainterInfo/Add_changePainterInfo'
    import PainterSaveInfo from '../../../components/PainterSaveInfo/PainterSaveInfo'
    import {mapState} from 'vuex'
    import {subPainterShelfOption} from "../../../api";

    export default {
       components:{
           Paging,
           Add_changePainterInfo,
           PainterSaveInfo
       },
        data(){
           return{
               totalPage: 20,
               currentPage: 1,
               pagegroup: 5,
               contents:[],
               painterName:'',//画家姓名
               painterGender:'',//画家性别
               isEdit:false,//是否点开编辑
               isAdd:false,//添加true，修改false
               isClearData:false,//是否清除界面
               painterInfoData:{},//修改后需要保存的数据
               painterUpImgs:[],//修改后需要上传的图片
               painterDefaultInfo:{},//点开编辑后交给子组件显示的数据
               editIndex:0,//修改的数据下标
           }
        },
        computed:{
           ...mapState(['painterLists'])
        },
        methods:{
            checkPainter() {
                let {painterName,painterGender} = this
                this.$store.dispatch('getCheckPainter',{painterName,painterGender}).then(result=>{
                    if(!result){
                        alert('找不到该商品')
                    }
                })
                this.painterName = ''
                this.painterGender = ''
            },
            openEdit(e){
                this.isEdit = true
                e=e||event
                let target = e.target
                let painterList = target.dataset ? target.dataset.painterlist : target.srcElement.getAttribute('data-painterlist')
                this.editIndex = target.dataset ? parseInt(target.dataset.index) : parseInt(target.srcElement.getAttribute('data-index'))
                this.painterDefaultInfo = JSON.parse(painterList)
            },
            painterIsShelf(e){
                e=e||event
                let target = e.target
                let painterList = target.dataset ? JSON.parse(target.dataset.painterlist) : JSON.parse(target.srcElement.getAttribute('data-painterlist'))
                let {isShelf,name,gender} = painterList
                let shelfIndex = target.dataset ? parseInt(target.dataset.index) : parseInt(target.srcElement.getAttribute('data-index'))
                let shelfMsg = (isShelf === 0) ? '下架' : '上架'
                let sureShelf = window.confirm(`确认${shelfMsg}？`)
                if(sureShelf){
                    if(isShelf === 0){
                        isShelf = 1
                    }else if(isShelf === 1){
                        isShelf = 0
                    }
                    subPainterShelfOption(name,gender,isShelf).then(result=>{
                        //console.log(result)
                        if(result.code === 0){
                            /*后台更新成功，更新本地数据*/
                            for(let i=0;i<this.painterLists.length;i++){
                                if(shelfIndex === i){
                                    let thispainterList = this.painterLists[i]
                                    thispainterList.isShelf = isShelf
                                    this.painterLists.splice(shelfIndex,1,thispainterList)
                                    //console.log(this.painterLists[shelfIndex])
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
            getPainterInfo(value){
                this.painterInfoData = value
                console.log(value)
            },
            /*接收子组件传递过来的图片*/
            getImages(value){
                console.log(value)
                this.painterUpImgs = value
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
        mounted() {
            let that = this
            let isLogin = this.$zj_globalMethods.judgeUserInfo(that)
           isLogin && this.$store.dispatch('getPainterLists')
            this.$nextTick(()=>{
                //this.$zj_globalMethods.setBkCoror('.listInfoContentLiBox')
            })
        }
    }
</script>

<style lang="less" type="text/less">
    .painterListBox{
        .painterListInfoTable{
            .painterListInfoTitleLiBox{
                .painterListInfoTitleLi{
                    width:40%;
                    &:last-of-type{
                        width:20%;
                    }
                }
            }
            .painterInfoContentLi{
                width:40%;
                &:last-of-type,&:nth-last-of-type(2){
                    width:10%;
                }
            }
        }
    }
</style>