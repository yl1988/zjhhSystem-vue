<template>
    <div class="page-bodyRight right">
        <!--人员管理-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <div class="shopsClassifyBox" v-show="!isOpenAdd">
                        <div class="addClassifyBox"><button @click="openAdd">新增品类</button></div>
                        <ul class="shopsClassifyTable clear">
                            <li class="shops_c_title">
                                <strong class="classifyTitleName">品类名称</strong>
                                <strong class="classifyOptions">操作</strong>
                            </li>
                            <li class="shops_c_content listInfoContentLiBox clear" v-for="(classify,index) in shopClassifys" :key="index">
                                <ul class="shop_c_contentUl clear">
                                    <li class="shops_c_contentli shop_c_classifyName left">{{classify.name}}</li>
                                    <li class="shops_c_contentli shops_c_edit left shops_optionButton"><span @click="openAdd" :data-index="index" :data-name="classify.name">编辑</span></li>
                                    <li class="shops_c_contentli shops_c_del left shops_optionButton" ><span @click="delClassify" :data-index="index">删除</span></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="addShopClassifyBox" v-show="isOpenAdd">
                        <div class="curr-saveInfo back">
                            <span class="curr-save" @click="openAdd">返回</span>
                        </div>
                        <div class="addShopClassify">
                            <span>品类名称:</span>
                            <input type="text" v-model="shopClassifyName" @focus="showWarnFun" @blur="showWarnFun" @keydown.13="saveShopClassify();showWarnFun()">
                            <p class="shopsClassifyWarn" v-show="showWarn">品类名称不能为空!!</p>
                        </div>

                        <div class="curr-saveInfo shopAdd">
                            <span class="curr-save" @click="showWarnFun();saveShopClassify()">{{buttonName}}</span>
                        </div>
                    </div>
                    <Paging v-show="!isOpenAdd" :total-page="totalPage" :current-page="currentPage" :pagegroup="pagegroup"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'name',
        mounted(){
            let that = this
            let isLogin = this.$zj_globalMethods.judgeUserInfo(that)
        }
    }
</script>

<style lang="less" type="text/less">
</style>