<template>
    <div class="page-bodyRight right">
        <!--添加-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <Add_changeShopInfo :isAdd="isAdd" :isClearData="isClearData" @getImages="getImages" @getShopIntroduce="getShopIntroduce" @getShopInfo="getShopInfo"/>
                </div>
            </div>
            <ShopSaveInfo :shopFormInfo = "shopFormInfo" :shopUpImgs="shopUpImgs" :isAdd = isAdd :shopIntroduceInfo="shopIntroduceInfo"
                          @clearData="clearData" :isClearData="isClearData"/>
        </div>
    </div>
</template>

<script>

    import {mapState} from 'vuex'
    import Add_changeShopInfo from '../../../components/Add_changeShopInfo/Add_changeShopInfo'
    import ShopSaveInfo from '../../../components/ShopSaveInfo/ShopSaveInfo'
    /*
    import tinymce from 'tinymce/tinymce'
    import 'tinymce/themes/modern/theme'
    import Editor from '@tinymce/tinymce-vue'
    import 'tinymce/plugins/image'
    import 'tinymce/plugins/link'
    import 'tinymce/plugins/code'
    import 'tinymce/plugins/table'
    import 'tinymce/plugins/lists'
    import 'tinymce/plugins/contextmenu'
    import 'tinymce/plugins/wordcount'
    import 'tinymce/plugins/colorpicker'
    import 'tinymce/plugins/textcolor'
    */
    export default {
        components:{
           // Editor
            Add_changeShopInfo,
            ShopSaveInfo
        },
        data(){
            return {
                isAdd:true,//添加true，修改false
                /*
                tinymceHtml: '请输入内容',
                init: {
                    language_url: './static/tinymce/langs/zh_CN.js',
                    language: 'zh_CN',
                    skin_url: '/static/tinymce/skins/lightgray',
                    height: 300,
                    plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
                    toolbar: 'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
                    branding: false
                }
                */
                shopFormInfo:{
                    name:'',
                    brand:'',
                    classify:'',
                    price:'',
                    isShelf:0,
                    introduce:''
                },
                shopUpImgs:[],//子组件传递的商品图片对象组
                shopIntroduceInfo:{},//子组件传递的商品介绍对象
                isClearData:false,//是否清除图片
            }
        },
       methods:{
           /*接收子组件传递过来的商品信息*/
           getShopInfo(value){
               this.shopFormInfo = value
               console.log(value)
           },
           /*接收子组件传递过来的图片*/
           getImages(value){
               this.shopUpImgs = value
               console.log(value)
           },
           /*接收子组件传递过来的商品介绍*/
           getShopIntroduce(value){
               this.shopIntroduceInfo = value
               console.log(value)
           },
           /*清除商品图片*/
           clearData(value){
               console.log(value)
               this.isClearData = value
           }

       },
        computed:{
            ...mapState(['shopClassifys'])
        },
        mounted() {
            let that = this
            this.$zj_globalMethods.judgeUserInfo(that)
        }
    }
</script>

<style lang="less" type="text/less">
    //@import "../../../../public/common/less/common";



</style>