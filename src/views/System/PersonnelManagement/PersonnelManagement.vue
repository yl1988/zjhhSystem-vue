<template>
    <div class="page-bodyRight right">
        <!--人员管理-->
        <div class="page-rightContent curriculumList curr_new-list" id="curriculumList">
            <div class="page-contentBk">
                <div class="lineLearBorder">
                    <div class="personManagBox" v-show="!isOpenAdd">
                        <div class="curr-saveInfo addPersonBtnBox">
                            <span class="curr-save addpersonBtn" @click="openAdd(true,$event)">添加人员</span>
                        </div>
                        <ul class="checkInfoBox clear">
                            <li class="checkInfoLi left">
                                <label>姓名</label>
                                <input type="text" v-model="personName">
                            </li>
                            <li class="checkInfoLi left">
                                <label>性别</label>
                                <select class="infoInput personSelect" v-model="gender" >
                                    <option value =0>男</option>
                                    <option value =1>女</option>
                                </select>
                            </li>
                            <li class="checkInfoLi left">
                                <label>是否在职</label>
                                <select class="infoInput personSelect" v-model="isQuit" >
                                    <option value =0 >在职</option>
                                    <option value =1 >离职</option>
                                </select>
                            </li>
                            <li class="checkInfoLi checkBtnBox left">
                                <div class="curr-saveInfo">
                                    <span class="curr-save" @click="checkPerson">查询</span>
                                </div>
                            </li>
                        </ul>
                        <ul class="listInfoTable personInfoTable clear">
                            <li class="listInfoTitleLiBox personListInfoTitleLiBox">
                                <ul class="listInfoTitleUl clear">
                                    <li class="listInfoTitleLi personListInfoTitleLi left"><strong class="listInfoTitleName">姓名</strong></li>
                                    <li class="listInfoTitleLi personListInfoTitleLi left"><strong class="listInfoTitleGender">性别</strong></li>
                                    <li class="listInfoTitleLi personListInfoTitleLi left"><strong class="listInfoTitleLoginName">登录名</strong></li>
                                    <li class="listInfoTitleLi personListInfoTitleLi left"><strong class="listInfoTitleIsQuit">是否在职</strong></li>
                                    <li class="listInfoTitleLi personListInfoTitleLi left"><strong class="listInfoTitleOptions">操作</strong></li>
                                </ul>
                            </li>
                            <li class="listInfoContentLiBox personListInfoContentliBox clear" v-for="(personList,index) in personLists" :key="index">
                                <ul class="listInfoContentUl clear">
                                    <li class="listInfoContentli personListInfoContentli listInfoName left">{{personList.name}}</li>
                                    <li class="listInfoContentli personListInfoContentli listInfoGender left">{{(personList.gender === 0) ? '男' : '女'}}</li>
                                    <li class="listInfoContentli personListInfoContentli listInfoLoginName left">{{personList.loginName}}</li>
                                    <li class="listInfoContentli personListInfoContentli listInfoIsQuit left">{{(personList.isQuit === 0) ? '是' : '否'}}</li>
                                    <li class="listInfoContentli personListInfoContentli listInfoEdit left listInfoOptionButton">
                                        <span @click="openAdd(false,$event)" :data-personlist="JSON.stringify(personList)">编辑</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="addPersonBox" v-show="isOpenAdd">
                        <div class="curr-saveInfo backBtn">
                            <span class="curr-save" @click="openAdd">返回</span>
                        </div>
                        <PersonManagen :isAdd="isAdd" :personListData="personListData" @getChangePerson="getChangePerson"/>
                        <div class="curr-saveInfo shopAdd">
                            <span class="curr-save" @click="savePersonInfo()">{{isAdd ? '添加' : '保存'}}</span>
                        </div>
                    </div>
                    <Paging v-show="!isOpenAdd" :total-page="totalPage" :current-page="currentPage" :pagegroup="pagegroup"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Paging from '../../../components/Paging/Paging'
    import PersonManagen from '../../../components/PersonManagen/PersonManagen'
    import {subPersonInfo} from "../../../api";

    export default {
        name: 'personnelmanagement',
        components:{
            Paging,
            PersonManagen
        },
        data(){
            return{
                isOpenAdd:false,//是否打开添加窗口
                personName:'',//
                gender:'',
                isQuit:'',
                showWarn:false,
                popMsg:'添加成功',
                totalPage: 20,
                currentPage: 1,
                pagegroup: 5,
                isAdd:true,//添加true,修改false
                personListData:{},//编辑人员信息时传递的数据
                add_changePersonInfo:{//子组件返回的添加或修改人员信息
                    name:'',
                    loginName:'',
                    loginPwd:'',
                    gender:0,
                    isQuit:0
                },
            }
        },
        computed:{
            ...mapState(['personLists'])
        },
        methods:{
            /*查询人员*/
            checkPerson(){
                let {personName,gender,isQuit} = this
                let checkPersonData = {}
                personName.trim() && (checkPersonData.name = personName.trim())
                gender.trim() && (checkPersonData.gender = gender.trim())
                isQuit.trim() && (checkPersonData.isQuit = isQuit.trim())
                console.log(checkPersonData)
                let checkPersonDataStr = JSON.stringify(checkPersonData)
                this.$store.dispatch('getCheckPersonInfo',{checkPersonDataStr})
            },
            /*打开新增人员窗口*/
            openAdd(isAdd,e){
                //console.log(isAdd)
               // console.log(e)
                this.isOpenAdd = !this.isOpenAdd
                if(!this.isOpenAdd){
                    return
                }
                this.isAdd = isAdd
                if(isAdd){
                    return
                }
                //console.log(e)
                e || window.event
                let target = e.srcElement ? e.srcElement : e.target
                //console.log(target.dataset)
                let personlist = target.dataset ? JSON.parse(target.dataset.personlist) : JSON.parse(target.getAttribute('data-personlist'))
                console.log(personlist)
                this.personListData = personlist
                  console.log(this.personListData)
            },
            /*获取组件修改的信息*/
            getChangePerson(value){
                //console.log(value)
                this.add_changePersonInfo = value
            },
            /*添加或保存人员信息*/
            savePersonInfo(){
                let {name,loginName,loginPwd} = this.add_changePersonInfo
                //console.log(this.add_changePersonInfo)
               if(!name.trim()){
                   alert('姓名不能为空')
                   return
               }
               if(!loginName.trim()){
                   alert('登录名不能为空')
                   return
               }
               if(!loginPwd.trim()){
                   alert('登录密码不能为空')
                   return
               }
               let personInfoStr = JSON.stringify(this.add_changePersonInfo)
                subPersonInfo(personInfoStr)
                /////console.log(this.isAdd)
                if(this.isAdd){
                    this.add_changePersonInfo.name = ''
                    this.add_changePersonInfo.loginName = ''
                    this.add_changePersonInfo.loginPwd = ''
                    this.add_changePersonInfo.gender = 0
                    this.add_changePersonInfo.isQuit = 0
                    this.personListData = this.add_changePersonInfo
                    /////console.log(this.personListData)
                }
            }
        },
        mounted(){
            let that = this
            let isLogin = this.$zj_globalMethods.judgeUserInfo(that)
            //console.log(isLogin)
            isLogin && this.$store.dispatch('getPersonLists')
        }
    }
</script>

<style lang="less" type="text/less">
    //@import "../../../../public/common/less/common";
    .personManagBox{
        min-height:300px;
        .addPersonBtnBox{
            margin:0;
            display:inline-block;
            span{
                letter-spacing: 5px;
            }
        }
        .checkInfoBox {
            margin-top:30px;
            .checkInfoLi .personSelect{
                width:60px;
            }
        }
        .personInfoTable{
            .personListInfoTitleLiBox{
                .personListInfoTitleLi{
                    width:20%;
                }
            }
            .personListInfoContentliBox{
                .personListInfoContentli{
                    width:20%;
                    border:none;
                    span{
                        color:#d52d81;
                    }
                }
            }

        }
    }
</style>