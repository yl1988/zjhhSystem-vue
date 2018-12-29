<template>
    <div class="page-bodyRight right">
        <!--商品品类-->
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
                            <li class="shops_c_content clear" v-for="(classify,index) in shopClassifys" :key="index">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {subShopClassify} from '../../../api'
    import {mapState} from 'vuex'
    export default {
        name: 'shopsclassify',
        components:{
           // SubmitClassify
        },
        data(){
            return{
                isOpenAdd:false,//是否打开添加窗口
                buttonName:'添加',
                shopClassifyName:'',//
                showWarn:false,
                popMsg:'添加成功'
            }
        },
        methods:{
            /*删除*/
            delClassify(e){
                e || window.event
                let target = e.srcElement ? e.srcElement : e.target
                let index = target.dataset ? target.dataset.index : target.getAttribute('data-index')
                let isDel = window.confirm('确认删除？')
                if(isDel){
                    this.shopClassifys.splice(index,1)
                }

            },
            /*打开添加或编辑窗口*/
            openAdd(e){
                this.isOpenAdd = !this.isOpenAdd
                e || window.event
                let target = e.srcElement ? e.srcElement : e.target
                let index = target.dataset ? target.dataset.index : target.getAttribute('data-index')
                let name = target.dataset ? target.dataset.name : target.getAttribute('data-name')
                if(index){
                    this.buttonName = '修改'
                    this.popMsg = '修改成功'
                    this.shopClassifyName = name
                }else{
                    this.buttonName = '添加'
                    this.popMsg = '添加成功'
                    this.shopClassifyName = ''
                }
                this.showWarn = false
            },
            showWarnFun(){
                if(!this.shopClassifyName.trim()){
                    this.showWarn = true
                    return false
                } else{
                    this.showWarn = false
                    return true
                }
            },
            /*保存商品品类*/
            saveShopClassify(){
                let shopClassifyName = this.shopClassifyName
                let isWarn = this.showWarnFun()
                if(isWarn){
                    for(let i=0;i<this.shopClassifys.length;i++){//检查品类是否存在
                        if(this.shopClassifys[i].name === shopClassifyName.trim()){
                            alert('该品类已经存在')
                            return
                        }
                    }
                    let classifyObj = {
                        id:this.shopClassifys.length + 1,
                        name:shopClassifyName.trim()
                    }
                    this.shopClassifys.push(classifyObj)
                    subShopClassify(shopClassifyName.trim())//将数据发给后台
                    let addSucssce = window.confirm(this.popMsg)
                    if(addSucssce){
                        this.shopClassifyName = ''
                        this.isOpenAdd = false
                    }
                }
            }
        },
        computed:{
            ...mapState(['shopClassifys'])
        },
        mounted(){
            this.$nextTick(()=>{
                this.$zj_globalMethods.setBkCoror('.shops_c_content')
            })
        },
        watch:{
            shopClassifyName(value){
                this.showWarnFun()
                this.shopClassifyName = value
            }
        }
    }
</script>

<style lang="less" type="text/less">
    @import "../../../../public/common/less/common";
    .shopsClassifyBox{
        min-height:300px;
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
                height:38px;
                width:100%;
                padding-top:10px;
                .shop_c_contentUl{
                    width:80%;
                    .shops_c_contentli{
                       height:38px;
                    }
                    .shop_c_classifyName{
                        width:80%;
                        text-align:left;
                        padding-left:10px;
                    }
                    .shops_optionButton{
                        width:10%;
                        text-align:center;
                        span{
                            color:#d52d81;
                            cursor:pointer;
                            width:50px;
                            margin:0;
                        }
                    }
                    .shops_c_edit{
                        border-right:solid 1px #999999;
                        height:20px;
                        span{

                        }

                    }
                }
            }
        }
    }
    .addShopClassifyBox{
        min-height:290px;
        .back{
            width:50px;
            margin-top:0;
            span{
                width:60px;
                text-align:center;
                letter-spacing:3px;
                text-indent:3px;
            }
        }
        .addShopClassify{
            min-height:50px;
            margin-top:100px;
            width:60%;
            text-align:center;
            span{
                font-size:18px;
            }
            input{
                border: solid 1px #d52d81;
                width:75%;
                padding:3px 10px;
                margin-left:10px;
            }
            .shopsClassifyWarn{
                color:red;
            }
        }
        .shopAdd{
            //margin-bottom:100px;
        }

    }


</style>