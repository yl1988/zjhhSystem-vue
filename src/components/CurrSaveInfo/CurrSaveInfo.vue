<template>
    <div class="curr-saveInfo">
        <span class="curr-save" id="curr-save-new">保存</span>
    </div>
</template>

<script>
    export default {
        name: 'name',
    }
</script>

<style lang="less" type="text/less">
    .curr-saveInfo{
        margin:30px 0;
        text-align:center;
        span{
            text-align:center;
            display:inline-block;
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
            background:#505050;
            width:165px;
            height:22px;
            color:#ffffff;
            letter-spacing:20px;
            font-size:14px;
            text-indent:14px;
            cursor:pointer;
        }
    }
</style>