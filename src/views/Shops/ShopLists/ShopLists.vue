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
                                        <span @click="openEdit" :data-index="index" :data-name="shopList.name">编辑</span>
                                    </li>
                                    <li class="listInfoContentli shopListInfoContentli listInfoDel left listInfoOptionButton" >
                                        <span @click="shopIsShelf" :data-index="index" :class="{colord52d81:shopList.isShelf === 0}">{{(shopList.isShelf === 0) ? '上架' : '下架'}}</span>
                                    </li>
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
                contents:[],
                shopName:'',//商品名称
                selectClassify:'',//所属分类
            }
        },
        methods:{
            checkShop(){
                let {shopName,selectClassify} = this
                console.log(selectClassify)
                this.$store.dispatch('getCheckShop',{shopName,selectClassify})
                this.shopName = ''
            },
            openEdit(){

            },
            shopIsShelf(){

            }
        },
        computed:{
            ...mapState(['shopLists'])
        },
        mounted(){
            this.$store.dispatch('getShopLists')
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