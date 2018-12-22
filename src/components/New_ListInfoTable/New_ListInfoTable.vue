<template>
    <div style="text-align:center;">
        <ul class="curriculumInfoUL curriculumList curr_new-list">
            <li class="curriculumInfoLi">
                <img src="./images/icon_nc_name.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName">课程名称</label>
                <input type="text" class="curr-curriculumName" id="curr-curriculumName-list">
            </li>
            <li class="curriculumInfoLi curr-teachLi">
                <img src="./images/icon_nc_type.png" width="20" height="20" class="curr-nameImg">
                <label class="curr-teachText curriculumInfoName">授课类型</label>
                <div class="isTeachBox radioBox">
                    <input type="radio" name="isTeachList" id="teach-list" class="curr-isTeach" value=true checked>
                    <label class="curriculumInfoName" for="teach-list">老师授课</label>
                    <input type="radio" name="isTeachList" id="noteach-list" class="curr-isTeach" value=false>
                    <label class="curriculumInfoName" for="noteach-list">自习课</label>
                </div>
            </li>
            <li class="curriculumInfoLi curr-dateLi">
                <img src="./images/icon_nc_date.png" width="20" height="20" class="curr-nameImg-list">
                <label class="curriculumInfoName">开课日期</label>
                <input type="date" class="curr-curriculumDate" id="curr-curriculumDate-list">
            </li>
            <li class="curriculumInfoLi curr-timeLi">
                <img src="./images/icon_nc_time.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName">开课时间</label>
                <input type="time" class="curr-curriculumTime curr-firstTime" id="curr-firstTime-list">
                <span class="time-line"></span>
                <input type="time" class="curr-curriculumTime curr-lastTime" id="curr-lastTime-list">
            </li>
            <li class="curriculumInfoLi curr-coverLi clear">
                <div class="coverTitleBox left">
                    <img src="./images/icon_nc_cover.png" width="20" height="20" class="curr-nameImg">
                    <label class="curriculumInfoName">课程封面</label>
                </div>
                <div class="fileBox left" id="fileBox-list">
                    <input type="text" class="showFileText" id="showFileTextList">
                    <span class="chooseImgBtn" id="chooseImgBtn-list" style="">选择图片</span>
                    <input type="file" name="fileImgNew" id="curr-coverImg-list" class="fileImg" accept=".jpg,.jpeg,.png">
                </div>
                <div class="coverBox clear">
                    <div class="coverImgBox left" id="coverImgBox-list"></div>
                    <span class="coverText left">请上传小于1M，宽度大于高度的图片，支持格式为jpg,jpeg,png</span>
                </div>
            </li>
            <li class="curriculumInfoLi curr-explainLi clear">
                <img src="./images/icon_nc_explain.png" width="20" height="20" class="curr-nameImg left">
                <label class="curriculumInfoName left">课程说明</label>
                <textarea class="curr-explain left" id="curr-explainList"></textarea>
            </li>
        </ul>
        <ul class="curriculumInfoUL newCurriculum curr_new-list">
            <li class="curriculumInfoLi">
                <img src="./images/icon_nc_pepleNumber.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >容纳人数</label>
                <input type="number" id="curr-personNumberList">
            </li>
            <li class="curriculumInfoLi curr-addr">
                <img src="./images/icon_nc_addr.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >上课地点</label>
                <div class="curr-addrInputBox">
                    <input type="text" id="curr-addr-list">
                    <strong class="curr-sureAddr">+</strong>
                </div>
                <div class="curr-addrText_delBox clear">
                    <div class="curr-addTextBox clear">
                        <p class="curr-addText left">上海市松江区四钻公路333333333333333333333222号基金积极201</p>
                        <strong class="delAddr right">-</strong>
                    </div>
                </div>

            </li>
            <li class="curriculumInfoLi curr-typeLi">
                <img src="./images/icon_nc_type.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >课程类别</label>
                <div class="curr-typeBox radioBox">
                    <div>
                        <input type="radio" name="type1List" id="type1-list" class="curr-radio" value=true>
                        <label class="curriculumInfoName" for="type1-list"><img src="./images/icon_cu-sbs.png"></label>
                        <input type="radio" name="type1List" id="type2-list" class="curr-radio" value=false>
                        <label class="curriculumInfoName" for="type2-list"><img src="./images/icon_cu-ws.png"></label>
                        <input type="radio" name="type1List" id="type3-list" class="curr-radio" value=false>
                        <label class="curriculumInfoName" for="type3-list"><img src="./images/icon_cu-sc.png"></label>
                    </div>
                    <div>
                        <input type="radio" name="type1List" id="type4-list" class="curr-radio" value=true>
                        <label class="curriculumInfoName" for="type4-list"><img src="./images/icon_cu-heart.png"></label>
                        <input type="radio" name="type1List" id="type5-list" class="curr-radio" value=false>
                        <label class="curriculumInfoName" for="type5-list"><img src="./images/icon_cu-star.png"></label>
                    </div>

                </div>
            </li>
            <li class="curriculumInfoLi curr-lvStarLi">
                <img src="./images/icon_nc_lv.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >课程难度</label>
                <div class="curr_lvStar">
                    <img src="./images/icon_lvStar-dash.png">
                    <img src="./images/icon_lvStar-dash.png">
                    <img src="./images/icon_lvStar-dash.png">
                    <img src="./images/icon_lvStar-dash.png">
                    <img src="./images/icon_lvStar-dash.png">
                </div>
            </li>
            <li class="curriculumInfoLi">
                <img src="./images/icon_nc_price.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >课程单价</label>
                <input type="number" id="curr-price">
            </li>
            <li class="curriculumInfoLi curr_discountLi">
                <img src="./images/icon_nc_discount.png" width="20" height="20" class="curr-nameImg">
                <label class="curriculumInfoName" >多人折扣</label>
                <div class="discountBox">
                    <input type="number" id="curr-dicount">
                    <strong>%</strong>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
    export default {

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
                    background:#ffaed8;
                    overflow: hidden;
                    img{
                        width:100%;
                        vertical-align:middle;
                    }
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