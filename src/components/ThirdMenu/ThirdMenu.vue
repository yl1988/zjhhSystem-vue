<template>
    <!--三级菜单-->
    <div class="page-thirdMenu left">
        <ul class="page-thirdMenuUl" @click="showWitch">
            <li class="page-thirdMenuLi" v-for="(list, index) in listArr" :key="index">
                <p class="page-thirdMenuLi-time" title="time" :data-time_index="index">{{list.time}}</p>
                <ul class="curriculum-detail-ul" v-show="list.isShow">
                    <li class="curr-detail-leftLine"></li>
                    <li class="curriculum-detail-li" v-for="(name, i) in list.contents" :key="i">
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
                e || window.event
                let target = e.srcElement ? e.srcElement : e.target
               let time_index = target.dataset ? target.dataset.time_index : target.getAttribute('data-time_index')
                let name_index = target.dataset ? target.dataset.name_index : target.getAttribute('data-name_index')
                if(target.getAttribute('title') === 'time'){//展开某天的课程名称表
                    for(let i=0;i<this.listArr.length;i++){
                        this.listArr[i].isShow = false
                    }
                    this.listArr[time_index].isShow = true
                    /*清除所有子元素的底色*/
                    for(let j=0;j<this.listArr[time_index].contents.length;j++){
                        this.listArr[time_index].contents[j].isBkColor = false
                    }
                    this.listArr[time_index].contents[0].isBkColor = true
                    let indexObj = {
                        time_index,
                        name_index:0
                    }
                    this.$emit('getInfos',indexObj)
                } else if(target.getAttribute('title') === 'name'){//设置课程名称底色
                    time_index = target.dataset ? target.dataset.parent_index : target.getAttribute('data-parent_index')
                    for(let i=0;i<this.listArr.length;i++){
                        for(let j=0;j<this.listArr[i].contents.length;j++){
                            this.listArr[i].contents[j].isBkColor = false
                        }
                    }
                    this.listArr[time_index].contents[name_index].isBkColor = true
                    let indexObj = {
                        time_index,
                        name_index
                    }
                    this.$emit('getInfos',indexObj)
                }
            },
            showFirst(){
                //console.log(this.listArr)
                let listArr = this.$zj_globalMethods.getLocalStorage('listArr')
                // console.log(listArr)
                if(this.listArr.length === 0){
                    for(let i=0;i<listArr.length;i++){
                        this.listArr.push(listArr[i])
                    }
                    console.log(this.listArr)
                }else {
                    for(let i=0;i<this.listArr.length;i++){
                        this.listArr[i].isShow = false
                        for(let j=0;j<this.listArr[i].contents.length;j++){
                            this.listArr[i].contents[j].isBkColor = false
                        }
                    }
                }
                this.listArr[0].isShow = true
                this.listArr[0].contents[0].isBkColor= true
            }
        },
        computed: {
            ...mapState(['currLists','appoinLists']),
            listArr (){
                if (this.isList) {
                    //console.log(this.currLists)
                    return this.currLists
                }else {
                    return this.appoinLists
                }
            }
        },
        mounted(){
            this.$nextTick(()=>{
                setTimeout(()=>{
                    this.showFirst()//加载时默认展开第一个显示第一个课程底色
                },0)

            })

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