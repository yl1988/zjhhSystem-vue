<template>
    <div class="page-top clear">
        <img class="page-logo left" src="../../../public/common/images/logo.png">
        <div class="page-top-right right">
            <span class="page-time-time" id="page-time-time">{{timeData}}</span>
            <span class="page-time-date" id="page-time-date">{{dateData}}</span>
            <span class="page-time-year" id="page-time-year">{{yearData}}</span>
            <img src="../../../public/common/images/tuichu.png" width="61" height="22" class="sign-out" id="sign-out" @click="signOut">
        </div>
        <div class="navBox">
            <ul class="nav-ul clear">
                <li class="nav-li right" :class="{navActive:'/system'===$route.path}" @click="goTo('/system')"><a href="javascript:;">系统管理</a></li>
                <li class="nav-li right" :class="{navActive:'/forms'===$route.path}" @click="goTo('/forms')"><a href="javascript:;">报表中心</a></li>
                <li class="nav-li right" :class="{navActive:'/shops'===$route.path}" @click="goTo('/shops')"><a href="javascript:;">商城管理</a></li>
                <li class="nav-li right" :class="{navActive:'/curriculum'===$route.path}" @click="goTo('/curriculum')"><a href="javascript:;">课程管理</a></li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'head',
        data() {
            return{
                timeData : '',
                dateData : '',
                yearData : ''
            }
        },
        methods: {
            goTo(path){
                this.$router.push(path)
                this.timeData = path
            },
            /*退出*/
            signOut(){
               this.$router.replace('/login')
            },
            /*显示时间*/
            showTime() {
                setInterval(()=> {
                    let date = new Date()
                      //获取当前年
                    let year=date.getFullYear();
                     //获取当前月
                    let month=date.getMonth()+1;
                          //获取当前日
                    let nowDate=date.getDate();
                    let h=date.getHours();       //获取当前小时数(0-23)
                    let m=date.getMinutes();     //获取当前分钟数(0-59)
                    let s=date.getSeconds();
                    m<10 && (m= '0' + m)
                    s<10 && (s= '0' + s)
                    let monthDate = month + '/' + nowDate
                    let timeData = h + ' : ' + m + ' : ' + s
                    this.timeData = timeData
                    this.dateData = monthDate
                    this.yearData = year
                },1000)

            }
        },
        computed:{

        },
        mounted() {
            this.$nextTick(()=>{
                this.showTime()
            })

        },
        watch:{
            set(){
              //  this.showTime()
            }
        }
    }
</script>

<style lang="less" type="text/less">
    /*页面头部*/
    .page-top{
        height:17.6%;
        //height:162.09px;
        position:relative;
        .page-logo{
            width:6.4%;
        }
        .page-top-right{
            height:50px;
            line-height:50px;
            margin-right:1.6%;
            margin-top:0.5%;
            span{
                font-size:16px;
                color:#6b6b6b;
                margin-right:15px;
                vertical-align:middle;
            }
            img{
                vertical-align:middle;
                cursor:pointer;
            }
            .page-time-time{
                color:#3d90a5;
                margin-right:48px;
            }
        }
        //导航菜单
        .navBox{
            height:38px;
            width:100%;
            margin-top:68px;
            border-bottom:solid 2px #e1e1e1;
            position:absolute;
            bottom:0;
            right:0;
            .nav-ul{
                padding-right:80px;
                width:100%;
                .nav-li{
                    background:url("../../../public/common/images/daohangkuang.png") no-repeat;
                    background-size:contain;
                    width:162px;
                    height:38px;
                    line-height:38px;
                    text-align:center;
                    margin-left:3%;
                    a{
                        color:#333333;
                        font-size:16px;
                        display:block;
                        width:inherit;
                        height:inherit;
                        letter-spacing: 8px;
                    }
                    &:hover{
                        background:url("../../../public/common/images/daohanglan.png") no-repeat;
                        background-size:contain;
                        a{
                            text-decoration:none;
                            color:#ffffff;
                        }
                    }
                }
            }
        }
    }
</style>