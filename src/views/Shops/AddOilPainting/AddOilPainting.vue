<template>
    <div class="page-bodyRight right">
        <!--添加油画-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <Add_changeOilPaintingInfo :isAdd="isAdd" :isClearData="isClearData" @getImages="getImages" @getOilPaintingInfo="getOilPaintingInfo"/>
                </div>
            </div>
           <OilPaintingSaveInfo :oilPaintingInfoData="oilPaintingInfoData" :oilPaintingUpImgs="oilPaintingUpImgs" :isAdd = isAdd @clearData="clearData" :isClearData="isClearData"/>
        </div>
    </div>
</template>

<script>

    import {mapState} from 'vuex'
    import Add_changeOilPaintingInfo from '../../../components/Add_changeOilPaintingInfo/Add_changeOilPaintingInfo'
    import OilPaintingSaveInfo from '../../../components/OilPaintingSaveInfo/OilPaintingSaveInfo'
    export default {
        components:{
            Add_changeOilPaintingInfo,
            OilPaintingSaveInfo
        },
        data(){
            return{
                oilPaintingInfoData:{
                    name:'',
                    material:'',
                    size:'',
                    oilPainting:''
                },
                imgSrcArr:[],
                imgObjs:[],
                isAdd:true,//添加true,修改false
                isClearData:true,//是否清除界面数据
                oilPaintingUpImgs:[],//子组件传递的商品图片对象组              
            }
        },
        methods:{
            /*接收子组件传递过来的商品信息*/
            getOilPaintingInfo(value){
                this.oilPaintingInfoData = value
                console.log(value)
            },
            /*接收子组件传递过来的图片*/
            getImages(value){
                this.oilPaintingUpImgs = value
                console.log(value)
            },
            /*清除商品图片*/
            clearData(value){
                console.log(value)
                this.isClearData = value
            }

        },
        computed:{
            ...mapState(['oilPaintings'])
        },
        mounted() {
            let that = this
            let isLogin = this.$zj_globalMethods.judgeUserInfo(that)
            isLogin && this.$store.dispatch('getOilPaintingLists')
        }
    }
</script>

<style lang="less" type="text/less">
</style>