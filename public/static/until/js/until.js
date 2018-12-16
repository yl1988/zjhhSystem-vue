(function () {
    window.toggleFun=function (clickClassName,toggleClassName) {
        $(clickClassName).removeClass(toggleClassName)
        $(this).addClass(toggleClassName)
    }
})()