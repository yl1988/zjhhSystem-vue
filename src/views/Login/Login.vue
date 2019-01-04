<template>
    <div style="height:100%;" >
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
                <span class="loginButton" id="btn" @click="trimFun('pwd',false);trimFun('user',false);login()"></span>
            </form>
        </div>
        <div class="test"></div>
    </div>
</template>

<script>
    import {reqPwdLogin} from "../../api";

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
         async login () {//登录
             //console.log(event)
             let {name,pwd} =this
             name = name.trim()
             pwd = pwd.trim()
             if(name && pwd){
                 //发送异步ajax请求
                let result = await reqPwdLogin({name,pwd})
             }
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
               (isServer=== null) && (isServer = true)
               let {name,pwd} = this
                   if(!name.trim()){
                        (textPwd === 'user') && (this.nameErrMsg = this.tipTextObj(textPwd,isServer))
                   }else{
                       this.nameErrMsg = ''
                   }
                   if (!pwd.trim()) {
                       (textPwd === 'pwd') && (this.pwdErrMsg = this.tipTextObj(textPwd,isServer))
                   } else {
                       this.pwdErrMsg = ''
                   }
            },

        },
        computed: {

        }
    }
</script>

<style lang="less" type="text/less">
    .login-logoBox{
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