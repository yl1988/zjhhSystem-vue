<template>
    <div class="curr-saveInfo">
        <span class="curr-save" id="curr-save-new" @click="saveCurrInfo">保存</span>
    </div>
</template>

<script>
    import {subCurrImgs,subSaveCurrListInfo} from "../../api";
    import axios from 'axios'

    export default {
        props:{
            currUpImgs:Object,
            currFormInfo:Object,
        },
        data(){
            return{
                //formData:new FormData(),
            }
        },
        methods:{
            /*提交表单信息*/
            saveCurrInfo(){
                let currForInfoStr = JSON.stringify(this.currFormInfo)
                subSaveCurrListInfo(currForInfoStr)
                /*上传图片*/
                let file = this.currUpImgs
                let param = new FormData() //创建form对象
                param.append('file',file);//通过append向form对象添加数据
                console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
                let config = {
                    headers:{'Content-Type':'multipart/form-data'}
                }; //添加请求头
                subCurrImgs({file,config})
            },
        }
    }
</script>

<style lang="less" type="text/less">

</style>