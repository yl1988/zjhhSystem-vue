<template>
    <div class="page-body">
        <SecondMenu :menuTitleData="menuTitleData"/>
        <router-view></router-view>
    </div>
</template>

<script>
    import SecondMenu from '../../components/SecondMenu/SecondMenu'
    export default {
        name:'shops',
        components:{
            SecondMenu,
        },
        data () {
            return {
                menuTitleData:[
                    {
                        title:'商品分类',
                        path:'/shops/shopsclassify'
                    },
                    {
                        title:'添加商品',
                        path:'/shops/newshops'
                    },
                    {
                        title:'商品列表',
                        path:'/shops/shoplists'
                    },
                    {
                        title:'添加画家',
                        path:'/shops/addpainter'
                    },
                    {
                        title:'画家列表',
                        path:'/shops/painterlists',
                    },
                    {
                        title:'添加油画',
                        path:'/shops/addoipainting'
                    },
                    {
                        title:'油画列表',
                        path:'/shops/oilpaintinglists'
                    },
                ]
            }
        },
        methods: {
        },
        mounted() {
            let that = this
            let isLogin = this.$zj_globalMethods.judgeUserInfo(that)
            console.log(isLogin)
           isLogin && this.$store.dispatch('getShopClassify')
        }
    }
</script>

<style lang="less" type="text/less">
    @import "../../../public/common/less/common";
</style>