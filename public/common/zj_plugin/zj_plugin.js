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
                    let localStrInfo = JSON.parse(window.localStorage.getItem(item))
                    console.log(localStrInfo)
                    return localStrInfo
                }
            }
        }



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