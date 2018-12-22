<template>
    <div class="page-body">
        <SecondMenu/>
        <router-view></router-view>
    </div>
</template>

<script>
    import SecondMenu from '../../components/SecondMenu/SecondMenu'
    export default {
        name:'forms',
        components:{
            SecondMenu,
        },
        data () {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style lang="less" type="text/less">
</style>