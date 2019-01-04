<template>
    <div class="page-bodyRight right">
        <!--商品品类-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <div class="painterListBox">
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
                                        <span @click="openEdit" :data-index="index" :data-name="painterList.name">编辑</span>
                                    </li>
                                    <li class="listInfoContentli painterInfoContentLi listInfoDel left listInfoOptionButton" >
                                        <span @click="painterIsShelf" :data-index="index" :class="{colord52d81:painterList.isShelf === 0}">{{(painterList.isShelf === 0) ? '上架' : '下架'}}</span>
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
    import Paging from '../../../components/Paging/Paging'
    import {mapState} from 'vuex'
    export default {
       components:{
           Paging
       },
        data(){
           return{
               totalPage: 20,
               currentPage: 1,
               pagegroup: 5,
               contents:[],
               painterName:'',//画家姓名
               painterGender:'',//画家性别
           }
        },
        computed:{
           ...mapState(['painterLists'])
        },
        methods:{
            checkPainter() {
                let {painterName,painterGender} = this
                this.$store.dispatch('getCheckPainter',{painterName,painterGender})
                this.painterName = ''
                this.painterGender = ''
            },
            openEdit(){

            },
            painterIsShelf(){

            }
        },
        mounted() {
           this.$store.dispatch('getPainterLists')
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