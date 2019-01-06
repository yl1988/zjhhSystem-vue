<template>
    <div class="curr-saveInfo">
        <span class="curr-save" @click="saveShopInfo">{{isAdd ? '添加' : '保存'}}</span>
        <span class="curr-save goBackBtn" @click="goBack" v-show="!isAdd">取消</span>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {subAddShopInfo,subShopInfoImgs} from '../../api'
    export default {
        props:{
            isAdd:Boolean,//添加true，修改false
            shopFormInfo:Object,
            shopUpImgs:Array,//父组件传递的商品图片对象
            shopIntroduceInfo:Object,//父组件传递的商品介绍对象
            isClearData:Boolean,
            isEdit:Boolean,
            editIndex:Number,//被编辑数据的下标
        },
        data(){
            return{
                //clearImgs:false
                saveIsEdit:false
            }
        },
        computed:{
            ...mapState(['shopLists'])
        },
       methods:{

           /*保存商品信息*/
           saveShopInfo(){
               //console.log(window.CKEDITOR.instances)
               // window.CKEDITOR.tools.callFunction(1,'../NewImg/20190103164155.png','')
               // console.log(window.CKEDITOR.tools.callFunction())
               let {shopFormInfo,shopUpImgs} = this
               if(!shopFormInfo.name.trim()){
                   console.log()
                   alert('商品名称不能为空！')
                   return
               }
               if(!shopFormInfo.brand.trim()){
                   alert('品牌不能为空')
                   return
               }
               if(!shopFormInfo.classify.trim()){
                   alert('分类必须选择')
                   return
               }
               if(!shopFormInfo.price.toString().trim()){
                   alert('价格不能为空')
                   return
               }
               let shopFormInfoStr = JSON.stringify(shopFormInfo)
               console.log(shopFormInfo)
               subAddShopInfo(shopFormInfoStr)
               subShopInfoImgs(shopUpImgs)
                   //this.isClearData = false
               /*保存完成后更新vuex数据*/
               this.shopLists.splice(this.editIndex,1,shopFormInfo )
               /*关闭修改页面*/
               //console.log(this.isEdit)
               this.saveIsEdit = !this.isEdit
               if(this.saveIsEdit){
                   console.log()
                   this.$emit('closeEdit',!this.saveIsEdit)
               }
               this.$emit('clearData',!this.isClearData)
           },
           /*取消修改*/
           goBack(){
               this.saveIsEdit = !this.isEdit
               if(this.saveIsEdit){
                   this.$emit('closeEdit',!this.saveIsEdit)
               }
           }
       }
    }
</script>

<style lang="less" type="text/less">

</style>