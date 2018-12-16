<template>
    <div style="height:100%;">
        <div class="LoginSlot" style="height:15%;"></div>
        <div class="login-logoBox">
            <img src="../../../public/common/images/logo.png" class="login-logo" width="145" height="148">
        </div>
        <div class="formBox">
            <form class="login-form" action="">
                <div class="inputBox">
                    <div class="form-group row">
                        <label for="name"><img src="./images/icon_user.png" width="20" height="24"></label>
                        <input type="text" id="name" placeholder="请输入账号" v-model="name" @focus="trimFun('user',false)"
                               @keydown.13="trimFun('user',false);trimFun('pwd',false);login()">
                    </div>
                    <div class="form-group row">
                        <label for="password"><img src="./images/icon_pwd.png" width="20" height="24"></label>
                        <input type="password" id="password" placeholder="请输入密码" v-model="pwd" @focus="trimFun('pwd',false)"
                               @keydown.13="trimFun('pwd',false);trimFun('user',false);login()">
                    </div>
                </div>
                <div class="warnBox">
                    <span class="red" :class="{none:name.trim()}" id="tipTextName">{{nameErrMsg}}</span>
                    <span class="red" :class="{none:pwd.trim()}" id="tipTextPwd">{{pwdErrMsg}}</span>
                </div>
                <span class="loginButton" id="btn" @submit.prevent="login()"></span>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                nameErrMsg:'',
                pwdErrMsg:'',
                name:'',
                pwd:''
            }
        },
        methods:{
         login (event) {//登录
            // var name = $('#name').val().trim()
            //var pwd = $('#password').val().trim()
           // var tipName = $('#tipTextName')
            // /var tipPwd = $('#tipTextPwd')
           // var btn = $('#btn')
            // trimFun('#name','#tipTextName',true)
            // trimFun('#password','#tipTextPwd',true)
            //console.log(event)
            //event &&event.preventDefault()
             /*
            if(name && pwd){
            $.ajax({
                type:'POST',
                url:"/login",
                data:{
                    name:name,
                    pwd:pwd
                },
                success:function (result) {
                    if(result.code === 0){
                        alert('登录成功')
                        window.location.replace("file:///E:/%E5%85%B6%E4%BB%96/%E9%85%8C%E9%85%92%E7%BB%98%E8%8A%B1%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/zhuojiuSystem/index.html")
                    } else if(result.code === 1){
                        trimFun('#name','#tipTextName',false)
                    } else if(result.code === 2) {
                        trimFun('#password','#tipTextPwd',false)
                    }
                },
                error:function (err) {
                    console.log(err)
                    if(err.status.toString() === '404'){
                        //alert('找不到您的页面')
                        window.location.replace("file:///E:/%E5%85%B6%E4%BB%96/%E9%85%8C%E9%85%92%E7%BB%98%E8%8A%B1%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/zhuojiuSystem/index.html");
                    } else if(err.status.toString() === '500'){
                        alert('服务器错误')
                    }

                }

            })
        }
        */
             //console.log(event)
        },
            /*
            给错误提示文字赋值
            */
            tipTextObj(textPwd,isServer) {
                let htmlObj = {
                'user':'账户不能为空',
                'pwd':'密码不能为空'
                }
                let htmlObjServer = {
                'user':'账户不存在',
                 'pwd':'密码错误'
                }
             return isServer ? htmlObjServer[textPwd] : htmlObj[textPwd]
            },
            /*
            判断输入是否为空和提示函数
            */
           trimFun (textPwd,isServer) {
               ;(isServer=== null) && (isServer = true)
               let {name,pwd} = this
                   if(!name.trim()){
                       ; (textPwd === 'user') && (this.nameErrMsg = this.tipTextObj(textPwd,isServer))
                   }else{
                       this.nameErrMsg = ''
                   }
                   if (!pwd.trim()) {
                       ;(textPwd === 'pwd') && (this.pwdErrMsg = this.tipTextObj(textPwd,isServer))
                   } else {
                       this.pwdErrMsg = ''
                   }
            },

    //$('#btn').click (login),
   // $('input').keydown(function (e) {
        //console.log(e.keyCode)
      //  (e.keyCode === 13) && login()
  //  }),
    //$('#name').bind('input propertychange focus', function () {
      //  trimFun('#name','#tipTextName',true)
   // }),
  //  $('#password').bind('input propertychange focus', function () {
     //   trimFun('#password','#tipTextPwd',true)
   // })
        },
        computed: {

        }
    }
</script>

<style lang="less" type="text/less">

    .login-logoBox{
        //padding-top:12.3%;
        //padding-top:12.3%;
        text-align:center;
        margin-bottom:56px;
        line-height:normal;
    }
    .formBox{
        text-align:center;
        .login-form{
            display:inline-block;
            text-align:center;
            .inputBox{
                width:300px;
                height:153px;
                padding:0;
                padding-top:27px;
                background:#f5f0f5;
                -webkit-border-radius: 50px;
                -moz-border-radius: 50px;
                border-radius: 50px;
                .form-group{
                    width:250px;
                    height:36px;
                    line-height:36px;
                    background:#bfbfbf;
                    margin:0 auto 30px auto;
                    text-align:left;
                    -webkit-border-radius: 10px;
                    -moz-border-radius: 10px;
                    border-radius: 10px;
                    label{
                        img{
                            vertical-align:middle;
                            margin:0 10px;
                            position:relative;
                            top:-1px;
                        }

                    }
                    input{
                        height:30px;
                        border:none;
                        background:transparent;
                        color:#ffffff;
                        outline:none;
                        font-size:16px;
                        width:180px;
                        &::-webkit-input-placeholder{
                            color:rgba(255,255,255,0.5);
                            letter-spacing: 15px;
                        }
                        &::-moz-placeholder{
                            color:rgba(255,255,255,0.5);
                            letter-spacing: 15px;
                        }
                        &:-moz-placeholder{
                            color:rgba(255,255,255,0.5);
                            letter-spacing: 15px;
                        }
                        &:-ms-input-placeholder{
                            color:rgba(255,255,255,0.5);
                            letter-spacing: 15px;
                        }
                    }
                }
            }
            .warnBox{
                height:30px;
                margin:10px auto;
                span{
                    margin-right:20px;
                }
            }
            .loginButton{
                width:277px;
                height:39px;
                background:url("./images/tijiao.png") no-repeat;
                background-size:contain;
                display:block;
                margin:0 auto;
                cursor:pointer;
            }
        }

    }

</style>