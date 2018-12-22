<template>
    <div class="page-body">
        <SecondMenu :menuTitleData="menuTitleData"/>
        <router-view/>
    </div>
</template>

<script>
    import SecondMenu from '../../components/SecondMenu/SecondMenu'
    export default {
        name:'curriculum',
        components:{
            SecondMenu,
        },
        data () {
            return {
                menuTitleData:[
                    {
                        title:'新建课程',
                        path:'/curriculum/newcurriculum'
                    },
                    {
                        title:'课程列表',
                        path:'/curriculum/curriculumlist'
                    },
                    {
                        title:'预约情况',
                        path:'/curriculum/appointment'
                    },
                ]
            }
        },
        methods: {
        }
    }
</script>
<style lang="less" type="text/less">
    .curr-detailActive{
        width:60px !important;
        height:26px !important;
        line-height:26px !important;
        text-align:center;
        background:#ffaed8;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        color:#ffffff;
        right:-5px !important;
    }
    .curr-detailActive + .curr-detail-line{
        bottom:-1px !important;
    }
    /*页面底部*/
</style>