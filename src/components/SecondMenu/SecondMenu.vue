<template>
    <!--二级菜单-->
    <ul class="page-secondMenu">
        <router-link tag="li" :to="{path:menuTitle.path}" class="secondMenuLi" :class="{secondMenuActive:$route.path === menuTitle.path}"
        v-for="(menuTitle, index) in menuTitleData" :key="index" @click.native="getFirst">{{menuTitle.title}}</router-link>
    </ul>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        props:{
           menuTitleData: Array
        },
        methods:{
            getFirst(){
                let currListInfo,
                    listArr
                switch (this.$route.path) {
                    case '/curriculum/newcurriculum':
                        break
                    case '/curriculum/curriculumlist':
                        /*将取到的数据缓存到本地*/
                        //console.log(this.currLists)
                        currListInfo = this.currLists[0].contents[0].currListInfo
                        listArr = this.currLists
                        this.$zj_globalMethods.setLocalStorage('currListInfo',currListInfo)
                        this.$zj_globalMethods.setLocalStorage('listArr',listArr)
                        //console.log(currListInfo)
                        //console.log(listArr)
                        break
                    case '/curriculum/appointment':
                        break
                }
                console.log(this.$route.path)
            }
        },
        computed:{
            ...mapState(['currLists'])
        },
        mounted(){
           // console.log(this.$route.path)
            this.$nextTick(()=>{
                this.getFirst()
            })
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