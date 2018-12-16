
    function login (event) {//登录
        var name = $('#name').val().trim()
        var pwd = $('#password').val().trim()
        var tipName = $('#tipTextName')
        var tipPwd = $('#tipTextPwd')
        var btn = $('#btn')
        trimFun('#name','#tipTextName',true)
        trimFun('#password','#tipTextPwd',true)
        //console.log(event)
        event &&event.preventDefault()
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
    }
    /*
    给错误提示文字赋值
     */
    function tipTextObj(inputId,textId,isServer) {
        var htmlObj = {
            '#name':'账户不能为空',
            '#password':'密码不能为空'
        }
        var htmlObjServer = {
            '#name':'账户不存在',
            '#password':'密码错误'
        }
        return isServer ? htmlObj[inputId] : htmlObjServer[inputId]
    }
    /*
    判断输入是否为空和提示函数
     */
    function trimFun (inputId,textId,isServer) {
        ;(isServer=== null) && (isServer = true)
        var val = $(inputId).val().trim()
        var tipText = $(textId)
        tipText.html(tipTextObj(inputId,textId,isServer))
        !val ? tipText.attr('class','red inline') : tipText.attr('class','red none')
    }
    $('#btn').click (login)
    $('input').keydown(function (e) {
        //console.log(e.keyCode)
        (e.keyCode === 13) && login()
    })
    $('#name').bind('input propertychange focus', function () {
       trimFun('#name','#tipTextName',true)
    })
    $('#password').bind('input propertychange focus', function () {
        trimFun('#password','#tipTextPwd',true)
    })
//})

