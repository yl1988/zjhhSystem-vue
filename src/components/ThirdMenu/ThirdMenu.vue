<template>
    <!--三级菜单-->
    <div class="page-thirdMenu left">
        <ul class="page-thirdMenuUl" @click="showWitch">
            <li class="page-thirdMenuLi" v-for="(list, index) in listArr" :key="index">
                <p class="page-thirdMenuLi-time" title="time" :data-time_index="index">{{list.time}}</p>
                <ul class="curriculum-detail-ul" v-show="list.isShow">
                    <li class="curr-detail-leftLine"></li>
                    <li class="curriculum-detail-li" v-for="(name, i) in list.names" :key="i">
                        <span class="curr-detail-text" title="name" :class="{'curr-detailActive':name.isBkColor}" :data-name_index="i" :data-parent_index="index">{{name.title}}</span>
                        <span class="curr-detail-line"></span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        props:{
            isList:Boolean
        },
        data () {
            return {
                selectSpan:false
            }
        },
        methods:{
            showWitch(e){
               let time_index = e.target.dataset.time_index
                let name_index = e.target.dataset.name_index
                if(e.target.getAttribute('title') === 'time'){//展开某天的课程名称表
                    for(let i=0;i<this.listArr.length;i++){
                        this.listArr[i].isShow = false
                    }
                    this.listArr[time_index].isShow = true
                    /*清除所有子元素的底色*/
                    for(let j=0;j<this.listArr[time_index].names.length;j++){
                        this.listArr[time_index].names[j].isBkColor = false
                    }
                    this.listArr[time_index].names[0].isBkColor = true
                } else if(e.target.getAttribute('title') === 'name'){//设置课程名称底色
                    time_index = e.target.dataset.parent_index
                    for(let i=0;i<this.listArr.length;i++){
                        for(let j=0;j<this.listArr[i].names.length;j++){
                            this.listArr[i].names[j].isBkColor = false
                        }
                    }
                    this.listArr[time_index].names[name_index].isBkColor = true
                }
            },
            showFirst(){
                this.listArr[0].isShow = true
                this.listArr[0].names[0].isBkColor= true
            }
        },
        computed: {
            ...mapState(['currLists','appoinLists']),
            listArr (){
                if (this.isList) {
                    return this.currLists
                }else {
                    return this.appoinLists
                }
            }
        },
        mounted(){
          this.showFirst()//加载时默认展开第一个显示第一个课程底色
        }
    }
</script>

<style lang="less" type="text/less">
    /*三级菜单*/
    .page-thirdMenu{//三级菜单
        width:12%;
        background:url("./images/thirdMenuBk.jpg") no-repeat;
        background-size:cover;
        background-position:center;
        height:100%;
        padding-top:24px;
        position:relative;
        z-index:99;
        .page-thirdMenuUl{
            .page-thirdMenuLi{
                margin-bottom:5px;
                padding-bottom:5px;
                border-bottom:dashed 1px #dddddd;
                .page-thirdMenuLi-time{
                    margin-left:10px;
                    font-size:14px;
                    cursor:pointer;
                }
                .curriculum-detail-ul{
                    width:80px;
                    position:relative;
                    padding-top:10px;
                    .curriculum-detail-li{
                        margin-bottom:20px;
                        height:20px;
                        line-height:20px;
                        position:relative;
                        .curr-detail-line{
                            display:inline-block;
                            height:1px;
                            line-height:20px;
                            background:#ffaed8;
                            width:30px;
                            vertical-align:middle;
                            position:relative;
                            bottom:1px;
                        }
                        .curr-detail-text{
                            font-size:14px;
                            height:20px;
                            line-height:20px;
                            cursor:pointer;
                            position:absolute;
                            right:0;
                            width:50px;
                            text-align:center;
                        }
                    }
                    .curr-detail-leftLine{
                        width:1px;
                        background:#ffaed8;
                        height:calc(100% - 10px);
                        position:absolute;
                        top:0;
                        left:0;
                    }
                }
            }
        }
    }
</style>