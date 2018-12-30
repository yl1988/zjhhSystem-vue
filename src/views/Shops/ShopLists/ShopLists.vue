<template>
    <div class="page-bodyRight right">
        <!--商品品类-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <div class="shopListBox">
                        <ul class="checkInfoBox clear">
                            <li class="checkInfoLi left">
                                <label>商品名称</label>
                                <input type="text">
                            </li>
                            <li class="checkInfoLi left">
                                <label>商品名称</label>
                                <input type="text">
                            </li>
                            <li class="checkInfoLi checkBtnBox left">
                                <div class="curr-saveInfo">
                                    <span class="curr-save" @click="checkShop">查询</span>
                                </div>
                            </li>
                        </ul>
                        <ul class="listInfoTable clear">
                            <li class="listInfoTitleLiBox">
                                <ul class="listInfoTitleUl clear">
                                    <li class="listInfoTitleLi left"><strong class="listInfoTitleName">品类名称</strong></li>
                                    <li class="listInfoTitleLi left"><strong class="listInfoTitleClassify">所属分类</strong></li>
                                    <li class="listInfoTitleLi left"><strong class="listInfoTitleBrand">品牌</strong></li>
                                    <li class="listInfoTitleLi left"><strong class="listInfoTitlePrice">单价</strong></li>
                                    <li class="listInfoTitleLi left"><strong class="listInfoTitleOptions">操作</strong></li>
                                </ul>
                            </li>
                            <li class="listInfoContentLiBox clear" v-for="(shopList,index) in shopLists" :key="index">
                                <ul class="listInfoContentUl clear">
                                    <li class="listInfoContentli listInfoName left">{{shopList.name}}</li>
                                    <li class="listInfoContentli listInfoClassify left">{{shopList.classify}}</li>
                                    <li class="listInfoContentli listInfoBrand left">{{shopList.brand}}</li>
                                    <li class="listInfoContentli listInfoPrice left">{{shopList.price}}</li>
                                    <li class="listInfoContentli listInfoEdit left listInfoOptionButton"><span @click="openEdit" :data-index="index" :data-name="shopList.name">编辑</span></li>
                                    <li class="listInfoContentli listInfoDel left listInfoOptionButton" ><span @click="delInfoList" :data-index="index">下架</span></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Paging :total-page="totalPage" :current-page="currentPage" :pagegroup="pagegroup"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Paging from '../../../components/Paging/Paging'
    export default {
        components:{
            Paging
        },
        data(){
            return {
                totalPage: 20,
                currentPage: 1,
                pagegroup: 5,
                contents:[]
            }
        },
        methods:{
            checkShop(){

            },
            openEdit(){

            },
            delInfoList(){

            }
        },
        computed:{
            ...mapState(['shopLists'])
        },
        mounted(){
            this.$store.dispatch('getShopLists')
            this.$nextTick(()=>{
                this.$zj_globalMethods.setBkCoror('.listInfoContentLiBox')
            })
        },

    }
</script>

<style lang="less" type="text/less">
    @import "../../../../public/common/less/common";
    .shopListBox{
        min-height:280px;
    }
</style>