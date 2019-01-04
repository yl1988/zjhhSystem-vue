<template>
    <div class="page-bodyRight right">
        <!--商品品类-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <div class="oilpaintingListBox">
                        <ul class="checkInfoBox clear">
                            <li class="checkInfoLi left">
                                <label>标&nbsp;&nbsp;&nbsp;&nbsp;题</label>
                                <input type="text" v-model="oilPainTitle">
                            </li>
                            <li class="checkInfoLi left">
                                <label>所属画家</label>
                                <select class="infoInput" v-model="selectPainter" >
                                    <option :value ="painterList.name" v-for="(painterList,index) in painterLists" :key="index">{{painterList.name}}</option>
                                </select>
                            </li>
                            <li class="checkInfoLi checkBtnBox left">
                                <div class="curr-saveInfo">
                                    <span class="curr-save" @click="checkOilpainting">查询</span>
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
                            <li class="listInfoContentLiBox oilPianListInfoContentLiBox clear" v-for="(oilpaintingList,index) in oilpaintingLists" :key="index">
                                <ul class="listInfoContentUl clear">
                                    <li class="listInfoContentli oilPianInfoContentLi listInfoName left">{{oilpaintingList.title}}</li>
                                    <li class="listInfoContentli oilPianInfoContentLi listInfoPrice left">{{oilpaintingList.painterName}}</li>
                                    <li class="listInfoContentli oilPianInfoContentLi listInfoEdit left listInfoOptionButton">
                                        <span @click="openEdit" :data-index="index" :data-title="oilpaintingList.title" :data-painter_name = "oilpaintingList.painterName">编辑</span>
                                    </li>
                                    <li class="listInfoContentli oilPianInfoContentLi listInfoDel left listInfoOptionButton" >
                                        <span @click="oilPianIsShelf" :data-index="index" :class="{colord52d81:oilpaintingList.isShelf === 0}">{{(oilpaintingList.isShelf === 0) ? '上架' : '下架'}}</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
       data() {
           return {
               selectPainter:'',
               oilPainTitle:''
           }
       },
        computed:{
           ...mapState(['painterLists','oilpaintingLists'])
        },
        methods:{
            checkOilpainting(){

            },
            oilPianIsShelf(){

            },
            openEdit(){

            }

        },
        mounted(){
           this.$store.dispatch('getOilpaintingLists')
            this.$store.dispatch('getPainterLists')
        }

    }
</script>

<style lang="less" type="text/less">
    @import "../../../../public/common/less/common";
    .oilpaintingListBox{
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