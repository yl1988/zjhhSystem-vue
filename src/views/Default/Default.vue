<template>
    <div class="default-page-body page-body">
        <!--<div class="index-bodyTop"><img src="./images/indexMainImg.png"></div>-->
        <ul class="in-TextGroupUl">
            <li class="in-TextLi">
                <img src="./images/icon_guanwang.png" width="20" height="25" class="in-TextIcon">
                <span class="in-Text">官网预约：sip-n-paint.com  </span>
            </li>
            <li class="in-TextLi">
                <img src="./images/icon_tel.png" width="20" height="25" class="in-TextIcon">
                <span class="in-Text">电话：  13301724011 </span>
            </li>
            <li class="in-TextLi">
                <img src="./images/icon_location.png" width="20" height="25" class="in-TextIcon">
                <span class="in-Text">公司地址：  上海市徐汇区陕西南路368号3楼（地铁陕西南路站，6/8号出口） </span>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {}
</script>

<style lang="less" type="text/less">
    .default-page-body{
        background:url("./images/bkLarg.jpg") no-repeat;
        background-size:cover;
        background-position:center;
        position:relative;
        /*
        .index-bodyTop{
          img{
            margin-top:4%;
            width:58%;
          }
        }*/
        .in-TextGroupUl{
            position:absolute;
            bottom:10px;
            width:100%;
            .in-TextLi{
                text-align:center;
                img,span{
                    vertical-align:middle;
                    margin-right:7px;
                }
                span{
                    letter-spacing: 1px;
                    font-size:14px;
                }
                &:first-of-type{
                    span{
                        color:#2d8cf0;
                    }
                }
            }
        }
    }
    @media screen and (max-width:1200px){
        .default-page-body{
            .in-TextGroupUl{
                .in-TextLi{
                    span{
                        font-size:12px;
                    }
                }
            }
        }
    }
</style>