<template>
    <div class="page-bodyRight right">
        <!--商品品类-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <div class="shopsClassifyBox">
                        <div class="addClassifyBox"><button @click="goto()">新增品类</button></div>
                        <ul class="shopsClassifyTable clear">
                            <li class="shops_c_title">
                                <strong class="classifyTitleName">品类名称</strong>
                                <strong class="classifyOptions">操作</strong>
                            </li>
                            <li class="shops_c_content clear" v-for="(classify,index) in classifys" :key="index">
                                <ul class="shop_c_contentUl clear">
                                    <li class="shops_c_contentli shop_c_classifyName left">{{classify.name}}</li>
                                    <li class="shops_c_contentli shops_c_edit left shops_optionButton"><span>编辑</span></li>
                                    <li class="shops_c_contentli shops_c_del left shops_optionButton"><span>删除</span></li>
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
    export default {
        name: 'shopsclassify',
        data(){
            return{
               classifys:[
                   {
                       name:'画材',
                       id:'0'
                   },
                   {
                       name:'材料包',
                       id:'1'
                   },
                   {
                       name:'艺术品',
                       id:'2'
                   },
                   {
                       name:'材料包',
                       id:'3'
                   },
                   {
                       name:'画材',
                       id:'4'
                   },
               ]
            }
        },
        methods:{
            goto(){
                this.$router.replace('/shops/AddClassify')
            }
        }
    }
</script>

<style lang="less" type="text/less">
    .shopsClassifyBox{
        .addClassifyBox{
            button{
                text-align: center;
                display: inline-block;
                border-radius: 20px;
                background: #505050;
                width: 165px;
                height: 22px;
                color: #ffffff;
                font-size: 14px;
                text-indent: 14px;
                cursor:pointer;
                letter-spacing: 5px;
            }
        }
        .shopsClassifyTable{
            width:90%;
            text-align:center;
            background:rgba(255,255,255,0.6);
            margin:20px auto;
            .shops_c_title{
                border-bottom:solid 1px #999999;
                padding:0 10px;
                height:28px;
                line-height:28px;
                width:80%;
                margin-bottom:10px;
                strong{
                    font-size:14px;
                    display:inline-block;
                }
                .classifyTitleName{
                    width:80%;
                    text-align:left;
                }
                .classifyOptions{
                    width:20%;
                }
            }
            .shops_c_content{
                height:28px;
                line-height:28px;
                width:80%;
                margin-bottom:20px;
                .shop_c_contentUl{
                    width:100%;
                    .shops_c_contentli{
                       height:20px;
                        line-height:20px;
                    }
                    .shop_c_classifyName{
                        width:80%;
                        text-align:left;
                        padding-left:10px;
                    }
                    .shops_optionButton{
                        width:10%;
                        text-align:center;
                        height:20px;
                        line-height:20px;
                        span{
                            color:#d52d81;
                            cursor:pointer;
                            width:50px;
                            margin:0;
                        }
                    }
                    .shops_c_edit{
                        border-right:solid 1px #999999;
                    }
                }
            }
        }
    }


</style>