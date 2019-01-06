<template>
    <div class="curr-saveInfo">
        <span class="curr-save" @click="savePainterInfo">{{isAdd ? '添加' : '保存'}}</span>
        <span class="curr-save goBackBtn" @click="goBack" v-show="!isAdd">取消</span>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {subPainterInfo,subPainterImg} from "../../api";

    export default {
        props:{
            isAdd:Boolean,//添加true，修改false
            painterInfoData:Object,
            painterUpImgs:Array,//父组件传递的商品图片对象
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
            ...mapState(['painterLists'])
        },
        methods:{
            /*保存画家信息*/
            savePainterInfo() {
                let {painterInfoData,painterUpImgs} = this
                //console.log(painterInfoData)
                if(!painterInfoData.name.trim()){
                    console.log()
                    alert('商品名称不能为空！')
                    return
                }
                if((parseInt(painterInfoData.gender) !== 0) && (parseInt(painterInfoData.gender) !== 1) ){

                    alert('性别必须选择')
                    return
                }
                console.log(this.painterUpImgs)
                if(!this.painterUpImgs || (JSON.stringify(this.painterUpImgs) === '[]')){
                    alert('必须选择头像')
                    return
                }
                let painterInfoDataStr = JSON.stringify(painterInfoData)
                subPainterInfo(painterInfoDataStr)
                subPainterImg(painterUpImgs)
                /*保存完成后更新vuex数据*/
                this.painterLists.splice(this.editIndex,1,painterInfoData )
                /*关闭修改页面*/
                //console.log(this.isEdit)
                this.saveIsEdit = !this.isEdit
                if(this.saveIsEdit){
                    console.log('this.saveIsEDIT')
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