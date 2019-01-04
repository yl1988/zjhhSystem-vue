<template>
    <div style="text-align:center;">
        <ul class="curriculumInfoUL curriculumList curr_new-list leftInfo">
            <li class="curriculumInfoLi">
                <img src="./images/icon_nc_name.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName">课程名称</label>
                <input type="text" class="curr-curriculumName" id="curr-curriculumName-list" v-model="currFormData.name">
            </li>
            <li class="curriculumInfoLi curr-teachLi">
                <img src="./images/icon_nc_type.png" width="20" height="20" class="curr-nameImg">
                <label class="curr-teachText curriculumInfoName">授课类型</label>
                <div class="isTeachBox radioBox">
                    <input type="radio" name="isTeachList" id="teach-list" class="curr-isTeach" value="1" v-model="currFormData.teachType">
                    <label class="curriculumInfoName" for="teach-list">老师授课</label>
                    <input type="radio" name="isTeachList" id="noteach-list" class="curr-isTeach" value="0" v-model="currFormData.teachType">
                    <label class="curriculumInfoName" for="noteach-list">自习课</label>
                </div>
            </li>
            <li class="curriculumInfoLi curr-dateLi">
                <img src="./images/icon_nc_date.png" width="20" height="20" class="curr-nameImg-list">
                <label class="curriculumInfoName">开课日期</label>
                <input type="date" class="curr-curriculumDate" id="curr-curriculumDate-list" v-model="currFormData.date">
            </li>
            <li class="curriculumInfoLi curr-timeLi">
                <img src="./images/icon_nc_time.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName">开课时间</label>
                <input type="time" class="curr-curriculumTime curr-firstTime" id="curr-firstTime-list" v-model="currFormData.firstTime">
                <span class="time-line"></span>
                <input type="time" class="curr-curriculumTime curr-lastTime" id="curr-lastTime-list" v-model="currFormData.lastTime">
            </li>
            <li class="curriculumInfoLi curr-coverLi clear" v-show="parseInt(currFormData.teachType) !== 0">
                <div class="coverTitleBox left">
                    <img src="./images/icon_nc_cover.png" width="20" height="20" class="curr-nameImg">
                    <label class="curriculumInfoName">课程封面</label>
                </div>
                <div class="fileBox left" id="fileBox-list">
                    <input type="text" class="showFileText" id="showFileTextList" v-model="previewImgSrc">
                    <span class="chooseImgBtn" id="chooseImgBtn-list">选择图片</span>
                    <input type="file" name="fileImgNew" class="fileImg" accept=".jpg,.jpeg,.png" @change="addImg" ref="inputer" >
                </div>
                <div class="coverBox clear">
                    <div class="coverImgBox left" id="coverImgBox-list" :class="{coverImgBoxBk:!(currFormData.currCover && currFormData.currCover.imgSrc)}">
                        <img v-if="currFormData.currCover && currFormData.currCover.imgSrc" :src="currFormData.currCover && currFormData.currCover.imgSrc" style="vertical-align:middle;">
                    </div>
                    <span class="coverText left">请上传小于1M，宽度大于高度的图片，支持格式为jpg,jpeg,png</span>
                </div>
            </li>
            <li class="curriculumInfoLi curr-explainLi clear">
                <img src="./images/icon_nc_explain.png" width="20" height="20" class="curr-nameImg left">
                <label class="curriculumInfoName left">课程说明</label>
                <textarea class="curr-explain left" id = 'editor' v-model="currFormData.explain"></textarea>
            </li>
        </ul>
        <ul class="curriculumInfoUL newCurriculum curr_new-list rightInfo">
            <li class="curriculumInfoLi">
                <img src="./images/icon_nc_pepleNumber.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >容纳人数</label>
                <input type="number" id="curr-personNumberList" v-model="currFormData.totalPersons">
            </li>
            <li class="curriculumInfoLi curr-addr">
                <img src="./images/icon_nc_addr.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >上课地点</label>
                <div class="curr-addrInputBox">
                    <input type="text" v-model="inputLocation">
                    <strong class="curr-sureAddr" @click="addLoacation">+</strong>
                </div>
                <div class="curr-addrText_delBox clear">
                    <div class="curr-addTextBox clear" v-for="(currLocation,index) in currFormData.currLocations" :key="index">
                        <p class="curr-addText left" >{{currLocation}}</p>
                        <strong class="delAddr right" @click="delLoation" :data-index="index">-</strong>
                    </div>
                </div>

            </li>
            <li class="curriculumInfoLi curr-typeLi" v-show="parseInt(currFormData.teachType) !== 0">
                <img src="./images/icon_nc_type.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >课程类别</label>
                <div class="curr-typeBox radioBox">
                    <div>
                        <input type="radio" name="type1List" id="type1-list" class="curr-radio" value="0" v-model="currFormData.courseType">
                        <label class="curriculumInfoName" for="type1-list"><img src="./images/icon_cu-sbs.png"></label>
                        <input type="radio" name="type1List" id="type2-list" class="curr-radio" value="1" v-model="currFormData.courseType">
                        <label class="curriculumInfoName" for="type2-list"><img src="./images/icon_cu-ws.png"></label>
                        <input type="radio" name="type1List" id="type3-list" class="curr-radio" value="2" v-model="currFormData.courseType">
                        <label class="curriculumInfoName" for="type3-list"><img src="./images/icon_cu-sc.png"></label>
                    </div>
                    <div>
                        <input type="radio" name="type1List" id="type4-list" class="curr-radio" value="3" v-model="currFormData.courseType">
                        <label class="curriculumInfoName" for="type4-list"><img src="./images/icon_cu-heart.png"></label>
                        <input type="radio" name="type1List" id="type5-list" class="curr-radio" value="4" v-model="currFormData.courseType">
                        <label class="curriculumInfoName" for="type5-list"><img src="./images/icon_cu-star.png"></label>
                    </div>

                </div>
            </li>
            <li class="curriculumInfoLi curr-lvStarLi" v-show="parseInt(currFormData.teachType) !== 0">
                <img src="./images/icon_nc_lv.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName">课程难度</label>
                <div class="curr_lvStar" @click="hardChoose">
                    <img :src="isList ? currHardImg0 : newCurrHardImgArr[0]"  data-index="0">
                    <img :src="isList ? currHardImg1 : newCurrHardImgArr[1]"  data-index="1">
                    <img :src="isList ? currHardImg2 : newCurrHardImgArr[2]"  data-index="2">
                    <img :src="isList ? currHardImg3 : newCurrHardImgArr[3]"  data-index="3">
                    <img :src="isList ? currHardImg4 : newCurrHardImgArr[4]"  data-index="4">
                </div>
            </li>
            <li class="curriculumInfoLi">
                <img src="./images/icon_nc_price.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >课程单价</label>
                <input type="number" id="curr-price" v-model="currFormData.price">
            </li>
            <li class="curriculumInfoLi curr_discountLi">
                <img src="./images/icon_nc_discount.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >多人折扣</label>
                <div class="discountBox">
                    <input type="number" id="curr-dicount" v-model="currFormData.discount">
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
              currListInfo: Object,
              isList:Boolean
        },
        data(){
            return{
                dashImg:require('./images/icon_lvStar-dash.png'),
                solidImg:require('./images/icon_lvStar-solid.png'),
                imgs: {},//上传的图片对象
                currFormData:{
                    name:'',
                    teachType:0,//授课还是自习课
                    date:0,
                    firstTime:0,
                    lastTime:0,
                    currCover:{
                        imgSrc:'',
                        id:''
                    },//图片预览
                    explain:'',
                    totalPersons:'',
                    currLocations:[],
                    courseType:0,
                    currHard:0,
                    price:'',
                    discount:''
                },
                previewImgSrc:'',//预览图片地址
                inputLocation:'',//输入的地址
                newCurrHardImgArr:[//新建课程难度选择
                    require('./images/icon_lvStar-dash.png'),
                    require('./images/icon_lvStar-dash.png'),
                    require('./images/icon_lvStar-dash.png'),
                    require('./images/icon_lvStar-dash.png'),
                    require('./images/icon_lvStar-dash.png')
                ],
            }
        },
        computed:{
            ...mapState(['currLists','appoinLists']),
            currHardImg0(){//ccccc第一颗星星
                return (this.isList && this.currFormData) ? this.solidImg : this.dashImg

            },
            currHardImg1(){//第二颗星星
                if(this.isList){
                    if(this.currFormData){
                        let currHard = this.currFormData.currHard
                        return (currHard === 0) ? this.dashImg : this.solidImg
                    }
                }else {
                    return this.dashImg
                }
            },
            currHardImg2(){//第三颗星星
                if(this.isList){
                    if(this.currFormData){
                        let currHard = this.currFormData.currHard
                        return ((currHard === 0) || (currHard === 1)) ? this.dashImg : this.solidImg
                    }
                } else{
                    return this.dashImg
                }
            },
            currHardImg3(){//第四颗星星
                if(this.isList){
                    if(this.currFormData){
                        let currHard = this.currFormData.currHard
                        return ((currHard === 3) || (currHard === 4)) ? this.solidImg : this.dashImg
                    }
                }else{
                    return this.dashImg
                }
            },
            currHardImg4(){//第五颗星星
                return (this.isList && (this.currFormData.currHard === 4)) ? this.solidImg : this.dashImg
            },
        },
        methods:{
            /*添加地址*/
            addLoacation(){
                //let location = this.currFormData.
                console.log('click')
                let {inputLocation,currFormData} = this
                if(inputLocation.trim()){
                    if(this.isList){
                        currFormData.currLocations.push(inputLocation)
                    }else {
                        !currFormData.currLocations && (currFormData.currLocations = [])
                        currFormData.currLocations.push(inputLocation)
                    }
                    this.inputLocation = ''
                }

            },
            /*删除地址*/
            delLoation(e){
                e = e || window.event
                let target = e.target || e.srcElement
                console.log(target)
                let index = target.dataset ? target.dataset.index : target.getAttribute('data-index')
                let {currFormData} = this
                window.confirm('确认删除？') && currFormData.currLocations.splice(index,1)
            },
            /*选择课程难度*/
            hardChoose(e){
                //console.log(e)
                e = e || window.event
                let target = e.target || e.srcElement
                //console.log(target)
                let index = target.dataset ? target.dataset.index.toString() : target.getAttribute('data-index').toString()
                let currHardObj = {
                    0:0,
                    1:1,
                    2:2,
                    3:3,
                    4:4
                }
                this.currFormData.currHard = currHardObj[index]
                if(!this.isList){
                    switch (parseInt(index)) {
                        case 4:
                            for(let i=0;i<this.newCurrHardImgArr.length;i++){
                                this.newCurrHardImgArr.splice(i,1,this.solidImg)
                            }
                            console.log(this.newCurrHardImgArr)
                            break
                        case 3:
                            for(let i=0;i<this.newCurrHardImgArr.length;i++){
                                i<4 && this.newCurrHardImgArr.splice(i,1,this.solidImg)
                                ;(i === 4) && this.newCurrHardImgArr.splice(i,1,this.dashImg)
                            }
                            break
                        case 2:
                            for(let i=0;i<this.newCurrHardImgArr.length;i++){
                                i<3 && this.newCurrHardImgArr.splice(i,1,this.solidImg)
                                ;(i >= 3) && this.newCurrHardImgArr.splice(i,1,this.dashImg)
                            }
                            break
                        case 1:
                            for(let i=0;i<this.newCurrHardImgArr.length;i++){
                                i<2 && this.newCurrHardImgArr.splice(i,1,this.solidImg)
                                ;(i >= 2) && this.newCurrHardImgArr.splice(i,1,this.dashImg)
                            }
                            break
                        case 0:
                            for(let i=0;i<this.newCurrHardImgArr.length;i++){
                                (i === 0) && this.newCurrHardImgArr.splice(i,1,this.solidImg)
                                ;(i > 0) && this.newCurrHardImgArr.splice(i,1,this.dashImg)
                            }
                            break
                        default:
                            this.newCurrHardImg0 = this.dashImg
                            break
                    }
                    console.log(this.currFormData)
                }

            },
            /*添加预览图*/
            addImg(){
                let inputDOM = this.$refs.inputer;
                // 通过DOM取文件数据
                this.fil = inputDOM.files
                let fileInfo = this.fil[0]
                console.log(this.fil)
                let size = Math.floor(fileInfo.size / 1024)
                let jpgImgTest =/\/jpeg$/,
                    jpegImgTest = /\/jpeg$/ ,
                    pngImgTest = /\/png$/
                if (!(jpgImgTest.test(fileInfo.type) || jpegImgTest.test(fileInfo.type) || pngImgTest.test(fileInfo.type))){//判断格式
                    alert('请上传jpg,png,jpeg格式的图片')
                    return
                }else {
                    if (size > 1024) {//判断尺寸
                        alert('请选择1M以内的图片！')
                        return false
                    }
                }
                this.$set(this.imgs,fileInfo.name+'?'+new Date().getTime(),fileInfo)
                let $filePath=URL.createObjectURL(this.fil[0])
                if(this.isList){
                    this.currFormData.currCover.imgSrc = $filePath
                }else {
                    !this.currFormData.currCover && (this.currFormData.currCover = {})
                    this.currFormData.currCover.imgSrc = $filePath
                }
                this.previewImgSrc= fileInfo.name//设置预览地址文字
                this.$emit('getImgs',this.imgs)
            },

        },
        mounted(){
            this.isList ? (this.currFormData = this.currListInfo) : (this.currFormData = {})
            console.log(this.currFormData)
            this.$nextTick(()=>{
            });

            //var editor = CKEDITOR.instances.editor2

        },
        watch:{
            currFormData:{//修改时监视本地数据变化
                deep: true,
                handler:function (value) {
                    //console.log(value)
                    this.currFormData = value
                    this.$emit('getFormInfo',value)
                    //console.log(this.currFormData)
                }
            },
            currListInfo(value){//后台数据发生改变是更新本地数据
                this.isList && (this.currFormData = value)
            },
            inputLocation(value){//监视输入地址
                this.inputLocation = value
            }
        }

    }
</script>

<style lang="less" type="text/less">
    @import "../../../public/common/until/less/extend";
    /*新建课程与课程列表*/
    .curriculumInfoUL{
        width:320px;
        //margin-right:20px;
        display:inline-block;
        vertical-align:top;
        text-align:left;
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
                padding-left:10%;
                text-align:left;
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