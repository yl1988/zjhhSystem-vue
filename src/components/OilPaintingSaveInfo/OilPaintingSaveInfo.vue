<template>
    <div class="curr-saveInfo">
        <span class="curr-save" @click="saveOilPatingInfo">{{isAdd ? '添加' : '保存'}}</span>
        <span class="curr-save goBackBtn" @click="goBack" v-show="!isAdd">取消</span>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {subOilPatingImg,subOilPatingInfo} from "../../api";

    export default {
        props:{
            isAdd:Boolean,//添加true，修改false
            oilPaintingInfoData:Object,
            oilPaintingUpImgs:Array,//父组件传递的商品图片对象
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
            ...mapState(['oilPaintingLists'])
        },
        methods:{
            /*保存油画信息*/
            saveOilPatingInfo() {
                let {oilPaintingInfoData,oilPaintingUpImgs} = this
                console.log(oilPaintingInfoData)
                if(!oilPaintingInfoData.title.trim()){
                    console.log()
                    alert('油画标题不能为空！')
                    return
                }
                if(!oilPaintingInfoData.material.trim()){
                    console.log()
                    alert('材料不能为空！')
                    return
                }
                if(!oilPaintingInfoData.size.toString().trim()){
                    console.log()
                    alert('尺寸不能为空！')
                    return
                }
                if(!oilPaintingInfoData.painterName.trim()){
                    console.log()
                    alert('所属画家不能为空！')
                    return
                }
                if(!this.oilPaintingUpImgs || (JSON.stringify(this.oilPaintingUpImgs) === '{}')){
                    alert('必须有油画图片')
                    return
                }
                let oilPaintingInfoDataStr = JSON.stringify(oilPaintingInfoData)
                subOilPatingInfo(oilPaintingInfoDataStr)
                subOilPatingImg(oilPaintingUpImgs)
                /*保存完成后更新vuex数据*/
                this.oilPaintingLists.splice(this.editIndex,1,oilPaintingInfoData )
                this.$emit('clearData',!this.isClearData)//清除界面数据
                /*关闭修改页面*/
                //console.log(this.isEdit)
                this.saveIsEdit = !this.isEdit
                if(this.saveIsEdit){
                    //console.log('this.saveIsEDIT')
                    this.$emit('closeEdit',!this.saveIsEdit)
                }

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