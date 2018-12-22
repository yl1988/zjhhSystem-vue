<template>
    <div class="page-body">
        <SecondMenu :menuTitleData="menuTitleData"/>
        <router-view></router-view>
    </div>
</template>

<script>
    import SecondMenu from '../../components/SecondMenu/SecondMenu'
    export default {
        name:'system',
        components:{
            SecondMenu,
        },
        data () {
            return {
                menuTitleData:[
                    {
                        title:'人员管理',
                        path:'/system/personnelmanagement'
                    },
                    {
                        title:'添加人员',
                        path:'/system/addpersonnel'
                    },
                    {
                        title: '用户管理',
                        path: '/system/usermanagement'
                    }
                ]
            }
        },
        methods: {
        }
    }
</script>

<style lang="less" type="text/less">
</style>