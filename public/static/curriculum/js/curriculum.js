//显示隐藏函数
toggleFun=function (clickClassName,toggleClassName,that) {
    $(clickClassName).removeClass(toggleClassName)
    $(that).addClass(toggleClassName)
}
//图片上传并预览
function previewImg(fileID,imgId,imgBoxId,showAddrId,that) {
    if (!(window.File || window.FileReader || window.FileList || window.Blob)) {//判断是否支持file
        alert('该浏览器不支持,请换用高版本浏览器！')
    }
    if (!that.files.length) return;
    var imgIdName = imgId.split('#')[1]
    var $filePath=URL.createObjectURL(that.files[0]);
    var coverImg = "<" + "img" + " id=" + imgIdName + ">"
    var files = Array.prototype.slice.call(that.files)
    files.forEach(function (file, i) {
        var jpgImgTest =/\/jpeg$/,
            jpegImgTest = /\/jpeg$/ ,
            pngImgTest = /\/png$/
        if (!(jpgImgTest.test(file.type) || jpegImgTest.test(file.type) || pngImgTest.test(file.type))){
            alert('请上传jpg,png,jpeg格式的图片')
            return
        }
        $(imgBoxId).append(coverImg)
        //console.log($('.coverImg').children())
        $(imgId).attr('src',$filePath)//预览图片
        $(imgBoxId).css('background','transparent')
        var uploadfile = $(fileID).val()
        $(showAddrId).val(uploadfile)//显示图片路
    })

}
//获取文件名
function getFileName(file){//获取文件名
    var pos=file.lastIndexOf("\\");//查找最后一个\的位置
    return file.substring(pos+1); //截取最后一个\位置到字符长度，也就是截取文件名
}
//课程列表切换显示
function switchSecondMenu(){
    $('.secondMenuLi').click(function () {
        var that = this
        var rightContent=$('.page-rightContent')[$(that).index()]
        toggleFun('.secondMenuLi','secondMenuActive',that)
       $('.page-rightContent').removeClass('block').addClass('none')
        newClass = rightContent.getAttribute('class').replace('none','block')
        rightContent.setAttribute('class',newClass)
        if($(that).index() === 1 || $(that).index() === 2){
           $('.page-thirdMenu').removeClass('none').addClass('block')
        }else {
            $('.page-thirdMenu').removeClass('block').addClass('none')
        }
    })
}
switchSecondMenu()
//三级菜单列表内容显示隐藏
function toggleShowThiedMenuList() {
    /*
    $('.page-thirdMenuUl').click(function (event) {
        var event = event || window.event
        var target =event.target || event.srcElement
        console.log(event)
    })*/

    $('.page-thirdMenuUl').on('click','.page-thirdMenuLi-time',function () {
        //$(this).parent().parent().children().children()[1].setAttribute('class','curriculum-detail-ul none')
        var childerenLiArr = $(this).parent().parent().children().children()
      // console.log($(this).parent().parent().children().length)
        //childerenLiArr.eq()
       // console.log(childerenLiArr.children())
        for(var i=0;i<childerenLiArr.length; i++){//课程名称显示隐藏
            if(i%2 !== 0){
                childerenLiArr[i].setAttribute('class','curriculum-detail-ul none')
               //console.log(childerenLiArr[i])
            }
        }
        //点开后清除所有课程名称选中样式，默认选择第一个
        var currNameArr = $(this).parent().children().children().children()
        for(var j=0;j<currNameArr.length;j++){
            if(j%2 === 0){
                currNameArr[j].setAttribute('class','curr-detail-text')
            }
            //console.log(currNameArr[j])
        }
        //console.log($(this).parent().children().children().children())
        $(this).parent().children().children().children()[0].setAttribute('class','curr-detail-text curr-detailActive')
        $(this).parent().children()[1].setAttribute('class','curriculum-detail-ul block')
    })

}
toggleShowThiedMenuList()
//课程列表的课程名称显示隐藏
function toggleShowCurrInfo() {
    $('.page-thirdMenuUl').on('click','.curr-detail-text',function () {
        var childerenLiArr = $(this).parent().parent().children().children()
       // console.log(childerenLiArr)
        for(var i=0;i<childerenLiArr.length;i++){
            if(i%2 === 0){
                childerenLiArr[i].setAttribute('class','curr-detail-text')
               // console.log(childerenLiArr[i])
            }
        }
        $(this).parent().children()[0].setAttribute('class','curr-detail-text curr-detailActive')
    })
}
toggleShowCurrInfo()
$('#curr-coverImg-new').change(function () {//新建课程图片上传预览
    var that = this
   previewImg('#curr-coverImg-new','#coverImgNew','#coverImgBox-new','#showFileTextNew',that)
})
$('#curr-coverImg-list').change(function () {//课程列表图片上传预览
    var that = this
    previewImg('#curr-coverImg-list','#coverImgList','#coverImgBox-list','#showFileTextList',that)
})

function saveCurrInfo() {
    $('#curr-save-new').click(function () {
        var name=$('#curr-curriculumName-new').val().trim(),
            date=$('#curr-curriculumDate-new').val().trim(),
            startTime=$('#curr-firstTime-new').val().trim(),
            endTime=$('#curr-lastTime-new').val().trim(),
            explain=$('#curr-explainNew').val().trim(),
            personNumber=$('#curr-personNumberNew').val().trim(),
            isPublish=($('input[name="isPublishNew"]:checked').val() === 'true'),//判断选择了“是”还是“否”
            imgData = new FormData($('#curr-coverImg-new')[0])
        var infoObj={
            name:name,
            date:date,
            startTime:startTime,
            endTime:endTime,
            imgData:imgData,
            explain:explain,
            personNumber:personNumber,
            isPublish:isPublish
        }
        var uploading = false;
        if (uploading) {
            alert("文件正在上传中，请稍候");
            return false;
        }
        $.ajax({
           url: '',
           type: 'POST',
           cache: false,
           data: infoObj,
           processData: false,
           contentType: false,
           dataType:"json",
           beforeSend: function(){
               uploading = true;
           },
           success : function(data) {

               //清空界面信息
               $('#curr-curriculumName-new').val('')
               $('#curr-curriculumDate-new').val('')
               $('#curr-firstTime-new').val('')
               $('#curr-lastTime-new').val('')
               $('#curr-explainNew').val('')
               $('#curr-personNumberNew').val('')
               $('#showFileTextNew').val('')
               $('#coverImgNew').remove()
               $('#coverImgBox-new').css('background','#ffaed8')
               uploading = false;
           },
            error:function (err) {
               $('#curr-curriculumName-new').val('')
                $('#curr-curriculumDate-new').val('')
                $('#curr-firstTime-new').val('')
                $('#curr-lastTime-new').val('')
                $('#curr-explainNew').val('')
                $('#curr-personNumberNew').val('')
                $('#showFileTextNew').val('')
                $('#coverImgNew').remove()
                $('#coverImgBox-new').css('background','#ffaed8')
               //console.log(err)
            }

       })
    })
}
saveCurrInfo()
/*
设置预约界面课程背景颜色
 */
function showBkColor() {
    var colorArr=[
        '#ffe9e9','#e9ffed','#fbffe9','#e9f7ff','#f3e9ff'
    ]
    var childArr=[]
   //console.log($('.appo-table-info').length)
    function infoEach(isSurplus) {
        $('.appo-table-info').each(function (index,item) {
            console.log(index)
            if(index % 2 !== 0){
                childArr.length<5 && childArr.push(item)
               // console.log(childArr)
                if(childArr.length>=5){
                    for(var j=0; j<colorArr.length; j++){
                        childArr[j].style.background=colorArr[j]
                    }
                    childArr = []
                }
                if(isSurplus){
                    console.log(index)
                    var endIndex =parseInt(($('.appo-table-info').length / 5)) * 5 -1
                    if(index >= endIndex){
                        //console.log(childArr)
                         for(var n=0;n<childArr.length;n++){
                            childArr[n].style.background = colorArr[n]
                        }
                     }
                 }

            }
        })
    }
    if($('.appo-table-info').length % 5 === 0){
        infoEach(false)
    }else{
        //console.log('isSurplus')
        infoEach(true)
    }



}
showBkColor()