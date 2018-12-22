<template>
    <!--二级菜单-->
    <ul class="page-secondMenu">
        <router-link tag="li" :to="{path:menuTitle.path}" class="secondMenuLi" :class="{secondMenuActive:$route.path === menuTitle.path}"
        v-for="(menuTitle, index) in menuTitleData" :key="index">{{menuTitle.title}}</router-link>
    </ul>
</template>

<script>
    export default {
        props:{
           menuTitleData: Array
        },
        methods:{
        }
    }
</script>

<style lang="less" type="text/less">
    /*二级菜单*/
    .page-secondMenu{
        width:12%;
        background:url("../../components/SecondMenu/images/secondMenuBk .jpg") no-repeat;
        background-size:cover;
        background-position:center;
        height:100%;
        padding-top:100px;
        position:absolute;
        left:0;
        top:0;
        .secondMenuLi{
            text-align:center;
            width:100px;
            height:26px;
            font-size:16px;
            margin-bottom:24px;
            line-height:26px;
            letter-spacing:2px;
            font-weight:500;
            cursor:pointer;
        }
    }
</style>