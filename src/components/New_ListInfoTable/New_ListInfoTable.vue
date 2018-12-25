<template>
    <div style="text-align:center;">
        <ul class="curriculumInfoUL curriculumList curr_new-list">
            <li class="curriculumInfoLi">
                <img src="./images/icon_nc_name.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName">课程名称</label>
                <input type="text" class="curr-curriculumName" id="curr-curriculumName-list" v-model="currName">
            </li>
            <li class="curriculumInfoLi curr-teachLi">
                <img src="./images/icon_nc_type.png" width="20" height="20" class="curr-nameImg">
                <label class="curr-teachText curriculumInfoName">授课类型</label>
                <div class="isTeachBox radioBox">
                    <input type="radio" name="isTeachList" id="teach-list" class="curr-isTeach" :checked="isListInfo_teach">
                    <label class="curriculumInfoName" for="teach-list">老师授课</label>
                    <input type="radio" name="isTeachList" id="noteach-list" class="curr-isTeach" :checked="isListInfo_noTeach">
                    <label class="curriculumInfoName" for="noteach-list">自习课</label>
                </div>
            </li>
            <li class="curriculumInfoLi curr-dateLi">
                <img src="./images/icon_nc_date.png" width="20" height="20" class="curr-nameImg-list">
                <label class="curriculumInfoName">开课日期</label>
                <input type="date" class="curr-curriculumDate" id="curr-curriculumDate-list" v-model="showDate">
            </li>
            <li class="curriculumInfoLi curr-timeLi">
                <img src="./images/icon_nc_time.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName">开课时间</label>
                <input type="time" class="curr-curriculumTime curr-firstTime" id="curr-firstTime-list" v-model="showFirstTime">
                <span class="time-line"></span>
                <input type="time" class="curr-curriculumTime curr-lastTime" id="curr-lastTime-list" v-model="showLastTime">
            </li>
            <li class="curriculumInfoLi curr-coverLi clear" v-show="isTeach">
                <div class="coverTitleBox left">
                    <img src="./images/icon_nc_cover.png" width="20" height="20" class="curr-nameImg">
                    <label class="curriculumInfoName">课程封面</label>
                </div>
                <div class="fileBox left" id="fileBox-list">
                    <input type="text" class="showFileText" id="showFileTextList" v-model="showFileAdress">
                    <span class="chooseImgBtn" id="chooseImgBtn-list" style="">选择图片</span>
                    <input type="file" name="fileImgNew" class="fileImg" accept=".jpg,.jpeg,.png" @change="addImg" ref="inputer">
                </div>
                <div class="coverBox clear">
                    <div class="coverImgBox left" id="coverImgBox-list" :class="{coverImgBoxBk:!hasImg}">
                        <img v-if="currListInfo && currListInfo.currCover.imgSrc" :src="currListInfo.currCover && currListInfo.currCover.imgSrc">
                        <img :src="getObjectURL(value)" v-if="showFileImg">
                    </div>
                    <span class="coverText left">请上传小于1M，宽度大于高度的图片，支持格式为jpg,jpeg,png</span>
                </div>
            </li>
            <li class="curriculumInfoLi curr-explainLi clear">
                <img src="./images/icon_nc_explain.png" width="20" height="20" class="curr-nameImg left">
                <label class="curriculumInfoName left">课程说明</label>
                <textarea class="curr-explain left" id="curr-explainList" v-model="showExpain"></textarea>
            </li>
        </ul>
        <ul class="curriculumInfoUL newCurriculum curr_new-list">
            <li class="curriculumInfoLi">
                <img src="./images/icon_nc_pepleNumber.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >容纳人数</label>
                <input type="number" id="curr-personNumberList" v-model="showTotalPerson">
            </li>
            <li class="curriculumInfoLi curr-addr">
                <img src="./images/icon_nc_addr.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >上课地点</label>
                <div class="curr-addrInputBox">
                    <input type="text" id="curr-addr-list">
                    <strong class="curr-sureAddr">+</strong>
                </div>
                <div class="curr-addrText_delBox clear">
                    <div class="curr-addTextBox clear" v-for="(currLocation,index) in currLocationArr" :key="index">
                        <p class="curr-addText left" >{{currLocation}}</p>
                        <strong class="delAddr right">-</strong>
                    </div>
                </div>

            </li>
            <li class="curriculumInfoLi curr-typeLi" v-show="isTeach">
                <img src="./images/icon_nc_type.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >课程类别</label>
                <div class="curr-typeBox radioBox">
                    <div>
                        <input type="radio" name="type1List" id="type1-list" class="curr-radio" :checked="courseType4">
                        <label class="curriculumInfoName" for="type1-list"><img src="./images/icon_cu-sbs.png"></label>
                        <input type="radio" name="type1List" id="type2-list" class="curr-radio" :checked="courseType3">
                        <label class="curriculumInfoName" for="type2-list"><img src="./images/icon_cu-ws.png"></label>
                        <input type="radio" name="type1List" id="type3-list" class="curr-radio" :checked="courseType2">
                        <label class="curriculumInfoName" for="type3-list"><img src="./images/icon_cu-sc.png"></label>
                    </div>
                    <div>
                        <input type="radio" name="type1List" id="type4-list" class="curr-radio" :checked="courseType1">
                        <label class="curriculumInfoName" for="type4-list"><img src="./images/icon_cu-heart.png"></label>
                        <input type="radio" name="type1List" id="type5-list" class="curr-radio" :checked="courseType0">
                        <label class="curriculumInfoName" for="type5-list"><img src="./images/icon_cu-star.png"></label>
                    </div>

                </div>
            </li>
            <li class="curriculumInfoLi curr-lvStarLi" v-show="isTeach">
                <img src="./images/icon_nc_lv.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >课程难度</label>
                <div class="curr_lvStar">
                    <img :src="hardImg0">
                    <img :src="hardImg1">
                    <img :src="hardImg2">
                    <img :src="hardImg3">
                    <img :src="hardImg4">
                </div>
            </li>
            <li class="curriculumInfoLi">
                <img src="./images/icon_nc_price.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >课程单价</label>
                <input type="number" id="curr-price" v-model="currPrice">
            </li>
            <li class="curriculumInfoLi curr_discountLi">
                <img src="./images/icon_nc_discount.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >多人折扣</label>
                <div class="discountBox">
                    <input type="number" id="curr-dicount" v-model="currListInfo.discount">
                    <strong>%</strong>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        props:{
              currListInfo: Object
        },
        data(){
            return{
                dashImg:require('./images/icon_lvStar-dash.png'),
                solidImg:require('./images/icon_lvStar-solid.png'),
                formData:new FormData(),
                imgs: {},
                imgLen:0,
            }
        },
        computed:{
            ...mapState(['currLists','appoinLists']),
            currName(){
                return this.currListInfo ? this.currListInfo.name : ''
            },
            hasImg(){//判断是否有封面图片
                return (this.currListInfo && this.currListInfo.currCover) ? this.currListInfo.currCover.imgSrc : ''
            },
            hardImg0(){//第一颗难度星星
                //let courseType = this.currListInfo.courseType
               // console.log(courseType)
                return this.currListInfo ? this.solidImg : this.dashImg
            },
            hardImg1(){//第二颗难度星星
                if(this.currListInfo){
                    let currHard = this.currListInfo.currHard
                    return (currHard === 0) ? this.dashImg : this.solidImg
                }else{
                    return this.dashImg
                }
            },
            hardImg2(){//第三颗难度星星
                if(this.currListInfo){
                    let currHard = this.currListInfo.currHard
                    //console.log(courseType)
                    return ((currHard === 0) || (currHard === 1)) ? this.dashImg : this.solidImg
                }else{
                    return this.dashImg
                }

            },
            hardImg3(){//第四颗难度星星
                if(this.currListInfo){
                    let currHard = this.currListInfo.currHard
                    //console.log(courseType)
                    return ((currHard === 3) || (currHard === 4)) ? this.solidImg : this.dashImg
                }else{
                    return this.dashImg
                }

            },
            hardImg4(){//第五颗难度星星
                if(this.currListInfo){
                    let currHard = this.currListInfo.currHard
                    //console.log(courseType)
                    return (currHard === 4) ? this.solidImg : this.dashImg
                }else{
                    return this.dashImg
                }

            },
            isTeach(){//授课还是自习
                if(this.currListInfo){
                    return  this.currListInfo.teachType === 0
                }else {
                    return false
                }

            },
            isListInfo_teach (){//课程列表页面下显示授课
                return this.currListInfo ? (this.currListInfo.teachType === 0) : false
            },
            isListInfo_noTeach(){//课程列表页面下显示自习
                return this.currListInfo ? (this.currListInfo.teachType === 1) : false
            },
            showDate(){//显示日期
                return this.currListInfo ? this.currListInfo.date : ''
            },
            showFirstTime() {//显示开始时间
                return this.currListInfo ? this.currListInfo.firstTime : ''
            },
            showLastTime(){//显示结束时间
                return this.currListInfo ? this.currListInfo.lastTime : ''
            },
            showFileImg(){//预览图显示

            },
            showFileAdress(){//显示地址

            },
            showExpain(){//显示说明
                if(this.currListInfo){
                    return this.currListInfo.explain
                }else{
                    return false
                }
            },
            showTotalPerson(){//容纳人数
                if(this.currListInfo){
                    return this.currListInfo.totalPersons
                }else {
                    return false
                }

            },
            currLocationArr(){//上课地址
                return this.currListInfo ? this.currListInfo.currLocations : []
            },
            courseType4(){//课程类别4
                return this.currListInfo ? (this.currListInfo.courseType === 4) : false
            },
            courseType3(){//课程类别3
                return this.currListInfo ? (this.currListInfo.courseType === 3) : false
            },
            courseType2(){//课程类别2
                return this.currListInfo ? (this.currListInfo.courseType === 2) : false
            },
            courseType1(){//课程类别1
                return this.currListInfo ? (this.currListInfo.courseType === 1) : false
            },
            courseType0(){//课程类别0
                return this.currListInfo ? (this.currListInfo.courseType === 0) : false
            },
            currPrice(){//课程单价
                if(this.currListInfo){
                    return this.currListInfo.price
                }else {
                    return false
                }
            }


        },
        methods:{
            /*添加预览图*/
            addImg(){
                let inputDOM = this.$refs.inputer;
                // 通过DOM取文件数据
                this.fil = inputDOM.files
                let oldLen=this.imgLen
                let len=this.fil.length+oldLen
                if(len>4){
                    alert('最多可上传4张，您还可以上传'+(4-oldLen)+'张')
                    return false;
                }
                for (let i=0; i < this.fil.length; i++) {
                    let size = Math.floor(this.fil[i].size / 1024)
                    if (size > 5*1024*1024) {
                        alert('请选择5M以内的图片！')
                        return false
                    }
                    this.imgLen++
                    this.$set(this.imgs,this.fil[i].name+'?'+new Date().getTime()+i,this.fil[i])
                }
            },
            /*获取图片地址*/
            getObjectURL(file) {
                let url = null ;
                if (window.createObjectURL!=undefined) { // basic
                    url = window.createObjectURL(file)
                } else if (window.URL!=undefined) { // mozilla(firefox)
                    url = window.URL.createObjectURL(file)
                } else if (window.webkitURL!=undefined) { // webkit or chrome
                    url = window.webkitURL.createObjectURL(file)
                }
                return url ;
            },
            /*提交图片*/
            submit(){
                for(let key in this.imgs){
                    let name=key.split('?')[0]
                    this.formData.append('multipartFiles',this.imgs[key],name)
                }
                this.$http.post('/opinion/feedback', this.formData,{
                    headers: {'Content-Type': 'multipart/form-data'}
                }).then(res => {
                    this.alertShow=true
                })
            },
        },
        mounted(){
        },
        watch:{

        }
    }
</script>

<style lang="less" type="text/less">
    @import "../../../public/common/until/less/extend";
    /*新建课程与课程列表*/
    .curriculumInfoUL{
        width:300px;
        margin-right:20px;
        display:inline-block;
        vertical-align:top;
        text-align:left;
        &:first-of-type{
            padding-right:20px;
            border-right:solid 1px #d52d81;
            box-sizing:content-box;
            -moz-box-sizing:content-box; /* Firefox */
            -webkit-box-sizing:content-box; /* Safari */
        }
        .curriculumInfoLi{
            margin-bottom:12%;
            height:22px;
            line-height:22px;
            .curr-nameImg{
                margin-right:5px;
                vertical-align:middle;
                position:relative;
                bottom:2px;
            }
            .curriculumInfoName{
                letter-spacing:5px;
                font-weight:500;
                font-size:14px;
                position:relative;
            }
            input{
                width:180px;
                vertical-align:middle;
                height:20px;
                position:relative;
                bottom:3px;
                text-align:center;
                border:solid 1px #d52d81;
            }
            .curr-curriculumName{
                border:none;
                border-bottom:solid 1px #d52d81;
            }
            .curr-curriculumDate{
            }
            .curr-curriculumTime{
                width:25%;
            }
            .time-line{
                display:inline-block;
                width:5%;
                height:1px;
                background:#d52d81;
                margin:0 5px;
                position:relative;
                bottom:4px;
            }
            .curr-coverImg{
                width:40% !important;
            }
            .chooseImg{
                width:20%;
                margin-left:5px;
                background-image:linear-gradient(#ededed,#cccccc);
                padding:0 5px;
                text-align:center;
            }
            .radioBox{
                label{
                    letter-spacing:0;
                }
                .curr-radio{
                    width:14px;
                    height:14px;
                    box-sizing:border-box;
                }
                input[type="radio"] + label::before {
                    content: "\a0"; /*不换行空格*/
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 14px;
                    width: 14px;
                    height: 14px;
                    margin-right: 5px;
                    border-radius: 50%;
                    border: 1px solid #d52d81;
                    text-indent: .15px;
                    line-height: 1;
                    box-sizing:border-box;
                }
                input[type="radio"]:checked + label::before {
                    background-color: #d52d81;
                    background-clip: content-box;
                    padding: 2px;
                    box-sizing:border-box;
                }
                input[type="radio"] {
                    position: absolute;
                    clip: rect(0, 0, 0, 0);
                }
            }
        }
        .curr-dateLi{
            label{
                margin-left:3px;
                margin-right:1px;
            }
            img{
                position:relative;
                top:4px;
            }
        }
        .curr-coverLi{
            height:110px;
            .coverBox{
                padding-top:10px;
                padding-left:20%;
                .coverImgBox{
                    width:90px;
                    height:60px;
                    line-height:60px;
                    overflow: hidden;
                    img{
                        width:100%;
                        vertical-align:middle;
                    }
                }
                .coverImgBoxBk{
                    background:#ffaed8;
                }
                .coverText{
                    width:120px;
                    margin-left:10px;
                    margin-top:10px;
                    line-height:14px;
                }
            }

            .coverTitleBox{
                label{
                    margin-right:3px;
                }
            }
            .fileBox{
                display:inline-block;
                width:60%;
                position:relative;
                height:24px;
                line-height:24px;
                overflow: hidden;
                .curr-nameImg{
                    margin-top:0;
                }
                .showFileText{
                    position:absolute;
                    left:0;
                    top:1px;
                    width:60%;
                }
                .chooseImgBtn{
                    color:#ffffff;
                    position:absolute;
                    right:0;
                    top:-2px;
                    background:#d52d81;
                    text-align:center;
                    padding:0 5px;
                    cursor:pointer;
                    font-size:14px;
                }
                .fileImg{
                    position:absolute;
                    width:100%;
                    left:0;
                    top:0;
                    z-index:999;
                    opacity:0;
                    cursor:pointer;
                }
            }
        }
        .curr-explainLi{
            height:46px;
            label{
                vertical-align:top;
                margin-right:7px;
            }
            .curr-nameImg{
                bottom:0px;
            }
            .curr-explain{
                width:180px;
                height:44px;
                border:solid 1px #d52d81;
            }

        }
        .curr-teachLi{
            .curr-teachText{
            }
            .isTeachBox{
                display:inline-block;
                .curriculumInfoName{
                    margin-right:20px;
                }

            }

        }
        .curr-addr{
            height:auto;
            .curr-addrInputBox{
                display:inline-block;
                input{
                    width:155px;
                }
                strong{
                    &:extend(.d52Button);
                    position:relative;
                   top:1px;
                }
            }
            .curr-addrText_delBox{
                padding-left:25px;
                margin-top:10px;
                .curr-addTextBox{
                    display:inline-block;
                    width:256px;
                    overflow: hidden;
                    .curr-addText{
                        width:230px;
                        font-size:12px;
                        height:20px;
                        line-height:20px;
                        -ms-text-overflow: ellipsis;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                    .delAddr{
                        &:extend(.d52Button);
                    }
                }

            }

        }
        .curr-typeLi{
            height:auto;
            .curr-typeBox{
                padding-left:30px;
                div{
                    label{
                        margin-right:20px;
                        vertical-align: middle;
                    }
                    img{
                        vertical-align: middle;
                    }
                }
            }
        }
        .curr-lvStarLi{
            .curr_lvStar{
                display:inline-block;
                height:20px;
                line-height:20px;
                img{
                    vertical-align:top;
                    position:relative;
                    bottom:2px;
                }
            }
        }
        .curr_discountLi{
            .discountBox{
                display:inline-block;
                input{
                    width:155px;
                }
                strong{
                    &:extend(.d52Button);
                    font-size:18px;
                }
            }
        }

    }
</style>