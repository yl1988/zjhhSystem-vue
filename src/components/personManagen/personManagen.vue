<template>
    <div class="addInfoBoxDiv">
        <ul class="personManageInfoBox infoBox">
            <li class="personManageInfoLi infoLi">
                <img src="./images/icon_system-name.png" width="20" height="20" class="infoIcon">
                <label class="infoLable" >姓名</label>
                <input type="text" class="infoInput" v-model="personInfoData.name">
            </li>
            <li class="personManageInfoLi infoLi">
                <img src="./images/icon_system-gender.png" width="20" height="20" class="infoIcon">
                <label class="infoLable">性别</label>
                <div class="radioBox genderBox">
                    <input type="radio" name="sex" id="isBoy" class="infoInput" value="0" v-model="personInfoData.gender">
                    <label class="infoLable" for="isBoy">男</label>
                    <input type="radio" name="sex" id="isGirl" class="infoInput" value="1" v-model="personInfoData.gender">
                    <label class="infoLable" for="isGirl">女</label>
                </div>
            </li>
            <li class="personManageInfoLi infoLi">
                <img src="./images/icon_system-loginname.png" width="20" height="20" class="infoIcon">
                <label class="infoLable" >登录名</label>
                <input type="text" class="infoInput" v-model="personInfoData.loginName">
            </li>
            <li class="personManageInfoLi infoLi">
                <img src="./images/icon_system-pwd.png" width="20" height="20" class="infoIcon">
                <label class="infoLable" >登录密码</label>
                <input type="text" class="infoInput" v-model="personInfoData.loginPwd">
            </li>
            <li class="personManageInfoLi infoLi">
                <img src="./images/icon_system-quit.png" width="20" height="20" class="infoIcon">
                <label class="infoLable">是否在职</label>
                <div class="radioBox genderBox">
                    <input type="radio" name="quit" id="Quit" class="infoInput" value="0" v-model="personInfoData.isQuit">
                    <label class="infoLable" for="Quit">在职</label>
                    <input type="radio" name="quit" id="noQuit" class="infoInput" value="1" v-model="personInfoData.isQuit">
                    <label class="infoLable" for="noQuit">离职</label>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState } from 'vuex'
    export default {
        props:{
            isAdd:Boolean,
            personListData: Object
        },
       data(){
           return{
               personInfoData:{
                   name:'',
                   gender:0,
                   loginName:'',
                   loginPwd:'',
                   isQuit:0,
               }


           }
       },
        computed:{
            ...mapState(['personLists']),

        },
        mounted(){
        },
        watch:{
            personListData(){
               // console.log(this.isAdd)
                this.personInfoData = this.personListData
            },
            isAdd(){
                console.log(this.isAdd)
                this.isAdd ? (this.personInfoData = {}) : (this.personInfoData = this.personListData)
            },
            personInfoData:{
                deep:true,
                handler:function (value) {
                    this.$emit('getChangePerson',value)
                }
            }
        }
    }
</script>

<style lang="less" type="text/less">
</style>