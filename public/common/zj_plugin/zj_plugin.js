export default {
    install(Vue,options){
        Vue.prototype.$zj_globalMethods={
            /*设置多种颜色的背景函数*/
            setBkCoror:function (className) {
                let colorArr = ['#ffe9e9', '#e9ffed', '#fbffe9', '#e9f7ff', '#f3e9ff']
                let childArr = []
                let target = document.querySelectorAll(className)
                function infoEach(isSurplus) {
                    for (let i = 0; i < target.length; i++) {
                        if (i % 2 !== 0) {
                            childArr.length < 5 && childArr.push(target[i])
                            if (childArr.length >= 5) {
                                for (let j = 0; j < colorArr.length; j++) {
                                    childArr[j].style.background = colorArr[j]
                                }
                                childArr = []
                            }
                            if (isSurplus) {
                                if(target.length !==5){
                                    let endIndex = parseInt((target.length / 5)) * 5 - 1
                                    if (i >= endIndex) {
                                        for (let n = 0; n < childArr.length; n++) {
                                            childArr[n].style.background = colorArr[n]
                                        }
                                    }
                                }else {//当元素刚好5个的时候
                                    for (let n = 0; n < childArr.length; n++) {
                                        childArr[n].style.background = colorArr[n]
                                    }
                                }

                            }

                        }
                    }
                }
                if ((target.length % 5 === 0) && (target.length !== 5)) {
                    infoEach(false)
                } else {
                    //console.log('isSurplus')
                    infoEach(true)
                }
            },
            /*将数据缓存到本地*/
            setLocalStorage:function (item,data) {
                if(!window.localStorage){//判断浏览器支持性
                    alert('您的浏览器版本过低，推荐使用高版本浏览器！')
                }else{
                    let localStr = JSON.stringify(data)
                    window.localStorage.setItem(item,localStr)
                }
            },
            /*从缓存中读取数据*/
            getLocalStorage:function (item) {
                if(!window.localStorage){//判断 浏览器支持性
                    alert('您的浏览器版本过低，推荐使用高版本浏览器！')
                }else{
                    return JSON.parse(window.localStorage.getItem(item))
                }
            },
            /*上传图片并预览*/
            previewImg:function(fileDom,imgsLength,imgObjs,imgSrcArr) {
                if (!(window.File || window.FileReader || window.FileList || window.Blob)) {//判断是否支持file
                    alert('该浏览器不支持,请换用高版本浏览器！')
                }
                //let inputDOM = this.$refs.fileRef
                // 通过DOM取文件数据
                this.fil = fileDom.files
                let size = Math.floor(this.fil[0].size / 1024)//图片大小
                /*判断格式*/
                let jpgImgTest =/\/jpeg$/,
                    jpegImgTest = /\/jpeg$/ ,
                    pngImgTest = /\/png$/
                if (!(jpgImgTest.test(this.fil[0].type) || jpegImgTest.test(this.fil[0].type) || pngImgTest.test(this.fil[0].type))){//判断格式
                    alert('请上传jpg,png,jpeg格式的图片')
                    return
                }else {
                    if (size > 1024) {//判断尺寸
                        alert('请选择1M以内的图片！')
                        return false
                    }
                }
                if(imgObjs.length<imgsLength){
                    //将上传的图片添加到图片数组对象中
                    let imgObj = {}
                    imgObj = this.fil
                    imgObjs.push(imgObj)
                    /*生成图片路径数组*/
                    let imgSrc=URL.createObjectURL(this.fil[0])
                    imgSrcArr.push(imgSrc)
                }
                console.log(imgSrcArr)//图片本地预览路径数组
                console.log(imgObjs)//图片对象数组
                fileDom.value = ''//清空File对象

            },
            /*点击删除图片*/
            delPreviewImg:function(e,imgSrcArr,imgObjs,fileDom){
                e = e || window.event
                let target = e.target || e.srcElement
                let index = target.dataset ? target.dataset.index : target.getAttribute('data-index')
                imgSrcArr.splice(index,1)
                imgObjs.splice(index,1)
                fileDom.value = ''//清空File对象
            },
        },




        Vue.directive('my-directive', {  // 2. 添加全局资源：指令/过滤器/过渡等，如 vue-touch
            bind (el, binding, vnode, oldVnode) {
                // 逻辑...
            }
        })

        Vue.mixin({
            created: function () {  // 3. 通过全局 mixin方法添加一些组件选项，如: vuex
                // 逻辑...
            }
        })

        Vue.prototype.$myMethod = function (options) {  // 4. 添加实例方法，通过把它们添加到 Vue.prototype 上实现
            // 逻辑...
        }
    }
}