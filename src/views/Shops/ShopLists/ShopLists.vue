<template>
    <div class="page-bodyRight right">
        <!--商品列表-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <div class="shopListBox" v-show="!isEdit">
                        <ul class="checkInfoBox clear">
                            <li class="checkInfoLi left">
                                <label>商品名称</label>
                                <input type="text" v-model="shopName">
                            </li>
                            <li class="checkInfoLi left">
                                <label>所属分类</label>
                                <select class="infoInput" v-model="selectClassify" >
                                    <option :value ="shopList.classify" v-for="(shopList,index) in shopLists" :key="index">{{shopList.classify}}</option>
                                </select>
                            </li>
                            <li class="checkInfoLi checkBtnBox left">
                                <div class="curr-saveInfo">
                                    <span class="curr-save" @click="checkShop">查询</span>
                                </div>
                            </li>
                        </ul>
                        <ul class="listInfoTable shopListInfoTable clear">
                            <li class="listInfoTitleLiBox shopListInfoTitleLiBox">
                                <ul class="listInfoTitleUl clear">
                                    <li class="listInfoTitleLi shopListInfoTitleLi left"><strong class="listInfoTitleName">品类名称</strong></li>
                                    <li class="listInfoTitleLi shopListInfoTitleLi left"><strong class="listInfoTitleClassify">所属分类</strong></li>
                                    <li class="listInfoTitleLi shopListInfoTitleLi left"><strong class="listInfoTitleBrand">品牌</strong></li>
                                    <li class="listInfoTitleLi shopListInfoTitleLi left"><strong class="listInfoTitlePrice">单价</strong></li>
                                    <li class="listInfoTitleLi shopListInfoTitleLi left"><strong class="listInfoTitleOptions">操作</strong></li>
                                </ul>
                            </li>
                            <li class="listInfoContentLiBox shopListInfoContentliBox clear" v-for="(shopList,index) in shopLists" :key="index">
                                <ul class="listInfoContentUl clear">
                                    <li class="listInfoContentli shopListInfoContentli listInfoName left">{{shopList.name}}</li>
                                    <li class="listInfoContentli shopListInfoContentli listInfoClassify left">{{shopList.classify}}</li>
                                    <li class="listInfoContentli shopListInfoContentli listInfoBrand left">{{shopList.brand}}</li>
                                    <li class="listInfoContentli shopListInfoContentli listInfoPrice left">{{shopList.price}}</li>
                                    <li class="listInfoContentli shopListInfoContentli listInfoEdit left listInfoOptionButton">
                                        <span @click="openEdit" :data-index="index" :data-shoplist="JSON.stringify(shopList)">编辑</span>
                                    </li>
                                    <li class="listInfoContentli shopListInfoContentli listInfoDel left listInfoOptionButton" >
                                        <span @click="shopIsShelf" :data-index="index" :data-shoplist="JSON.stringify(shopList)"
                                              :class="{colord52d81:shopList.isShelf === 0}">{{(shopList.isShelf === 0) ? '上架' : '下架'}}</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Paging :total-page="totalPage" :current-page="currentPage" :pagegroup="pagegroup" v-show="!isEdit"/>
                    <Add_changeShopInfo :isAdd="isAdd" :isClearData="isClearData" @getImages="getImages" @getShopIntroduce="getShopIntroduce"
                                        @getShopInfo="getShopInfo" v-show="isEdit" :shopDefaultInfo="shopDefaultInfo"/>
                </div>
            </div>
            <ShopSaveInfo :shopFormInfo = "shopFormInfo" :shopUpImgs="shopUpImgs" :isAdd = isAdd :shopIntroduceInfo="shopIntroduceInfo"
                          @clearData="clearData" :isClearData="isClearData" v-show="isEdit" :isEidt="isEdit" @closeEdit="closeEdit" :editIndex="editIndex"/>
        </div>

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Paging from '../../../components/Paging/Paging'
    import Add_changeShopInfo from '../../../components/Add_changeShopInfo/Add_changeShopInfo'
    import ShopSaveInfo from '../../../components/ShopSaveInfo/ShopSaveInfo'
    import {subShopShelfOption} from "../../../api";

    export default {
        components:{
            Paging,
            Add_changeShopInfo,
            ShopSaveInfo
        },
        data(){
            return {
                totalPage: 20,
                currentPage: 1,
                pagegroup: 5,
                contents:[],
                shopName:'',//商品名称
                selectClassify:'',//所属分类
                isEdit:false,//是否点开编辑
                isAdd:false,//添加true，修改false
                isClearData:false,//是否清除界面
                shopFormInfo:{},//修改后需要保存的数据
                shopUpImgs:[],//修改后需要上传的图片
                shopIntroduceInfo:{},//修改后需要上传的商品介绍
                shopDefaultInfo:{},//点开编辑后交给子组件显示的数据
                editIndex:0,//修改的数据下标
            }
        },
        methods:{
            checkShop(){
                let {shopName,selectClassify} = this
                console.log(selectClassify)
                this.$store.dispatch('getCheckShop',{shopName,selectClassify}).then(result=>{
                    if(!result){
                        alert('找不到该商品')
                    }
                })
                this.shopName = ''
            },
            openEdit(e){
                this.isEdit = true
                e=e||event
                let target = e.target
                let shopList = target.dataset ? target.dataset.shoplist : target.srcElement.getAttribute('data-shoplist')
                this.editIndex = target.dataset ? parseInt(target.dataset.index) : parseInt(target.srcElement.getAttribute('data-index'))
                this.shopDefaultInfo = JSON.parse(shopList)
            },
            shopIsShelf(e){
                e=e||event
                let target = e.target
                let shopList = target.dataset ? JSON.parse(target.dataset.shoplist) : JSON.parse(target.srcElement.getAttribute('data-isshelf'))
                let {isShelf,name,classify} = shopList
                let shelfIndex = target.dataset ? parseInt(target.dataset.index) : parseInt(target.srcElement.getAttribute('data-index'))
                let shelfMsg = (isShelf === 0) ? '下架' : '上架'
                let sureShelf = window.confirm(`确认${shelfMsg}？`)
                if(sureShelf){
                    if(isShelf === 0){
                        isShelf = 1
                    }else if(isShelf === 1){
                        isShelf = 0
                    }
                   subShopShelfOption(name,classify,isShelf).then(result=>{
                        //console.log(result)
                        if(result.code === 0){
                            /*后台更新成功，更新本地数据*/
                            for(let i=0;i<this.shopLists.length;i++){
                                if(shelfIndex === i){
                                    let thisShopList = this.shopLists[i]
                                    thisShopList.isShelf = isShelf
                                    this.shopLists.splice(shelfIndex,1,thisShopList)
                                    //console.log(this.shopLists[shelfIndex])
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
            getShopInfo(value){
                this.shopFormInfo = value
                console.log(value)
            },
            /*接收子组件传递过来的图片*/
            getImages(value){
                this.shopUpImgs = value
                console.log(value)
            },
            /*接收子组件传递过来的商品介绍*/
            getShopIntroduce(value){
                this.shopIntroduceInfo = value
                console.log(value)
            },
            /*清除商品图片*/
            clearData(value){
                console.log(value)
                this.isClearData = value
            },
            /*关闭编辑页面*/
            closeEdit(value){
                this.isEdit = value
                console.log(this.isEdit)
            }

        },
        computed:{
            ...mapState(['shopLists'])
        },
        mounted(){
            let that = this
            let isLogin = this.$zj_globalMethods.judgeUserInfo(that)
            isLogin && this.$store.dispatch('getShopLists')
            this.$nextTick(()=>{
                //this.$zj_globalMethods.setBkCoror('.listInfoContentLiBox')
            })
        },

    }
</script>

<style lang="less" type="text/less">
    @import "../../../../public/common/less/common";
    .shopListBox{
        min-height:280px;
        .shopListInfoTable{
            .shopListInfoTitleLiBox{
                .shopListInfoTitleLi{
                    width:20%;
                }
            }
            .shopListInfoContentliBox{
                .shopListInfoContentli{
                    width:20%;
                    &:last-of-type,&:nth-last-of-type(2) {
                        width: 10%;
                    }
                }
            }

        }
    }

</style>