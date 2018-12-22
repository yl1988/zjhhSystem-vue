<template>
    <div class="paging clear">
        <div class="paging-left">
            <span @click="setCurrent(1)" class="">第一页</span>
            <span class="" @click="setCurrent(current - 1)">上一页</span>
        </div>
        <div class="paging-center">
            <span class="" v-for="(p,index) in grouplist" :class="{hoverPage: current === p.val}" @click="setCurrent(p.val)" :key="index">{{p.text}}</span>
        </div>
        <div class="paging-right">
            <span class="" @click="setCurrent(current + 1)">下一页</span>
            <span class="">共{{totalPage}}页</span>
            <span @click="setCurrent(totalPage)" class="">尾页</span>
            <input class="" v-model="inputPage">
            <button class="" @click="setCurrent(inputPage)">跳转</button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                current: this.currentPage,//当前页码
                display:10,//显示条数
                inputPage:''//输入页码
            }
        },
        props: {
            totalPage:Number,
            currentPage: {// 当前页码
                type: Number,
                default: 1
            },
            pagegroup: {// 分页条数
                type: Number,
                default: 5,
                coerce: function (v) {
                    v = v > 0 ? v : 5;
                    return v % 2 === 1 ? v : v + 1;
                }
            },
        },
        computed: {
            grouplist () { // 获取分页页码
                var len = this.totalPage,
                    temp = [],
                    list = [],
                    count = Math.floor(this.pagegroup / 2),
                    center = this.current
                if (len <= this.pagegroup) {
                    while (len--) {
                        temp.push({text: this.totalPage - len, val: this.totalPage - len})
                    }

                    return temp
                }
                while (len--) {
                    temp.push(this.totalPage - len)
                }
                var idx = temp.indexOf(center)
                ;(idx < count) && ( center = center + count - idx)
                ;(this.current > this.totalPage - count) && ( center = this.totalPage - count)
                temp = temp.splice(center - count - 1, this.pagegroup)
                do {
                    var t = temp.shift()
                    list.push({
                        text: t,
                        val: t
                    })
                } while (temp.length)
                if (this.totalPage > this.pagegroup) {
                    (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1})
                    ;(this.current < this.totalPage - count) && list.push({text: '...', val: list[list.length - 1].val + 1})
                }
                return list
            },
        },
        mounted(){
        },
        methods: {
            setCurrent(idx) {
                if (this.current !== idx && idx > 0 && idx < this.totalPage + 1) {
                    this.current = parseInt(idx)
                    this.$emit('pagechange', this.current)
                }
            },
        },
        updated(){
        }
    }
</script>

<style lang="less" type="text/less">
    /*翻页*/
    .height50{
        height:50px;
        line-height:50px;
    }
    .paging{
        text-align:center;
        background:rgba(255,255,255,0.6);
        margin-top:30px;
        width:90%;
        &:extend(.height50);
        span{
            font-size:14px;
            display:inline-block;
            cursor:pointer;
            height:16px;
            line-height: 16px;
            margin:0 5px;
            &:hover{
                color: #d52d81;
            }
        }
        .paging-left{
            display:inline-block;
            &:extend(.height50);
        }
        .paging-center{
            display:inline-block;
            &:extend(.height50);
            span{
                width:20px;
                height: 20px;
                border:solid 1px #333333;
            }
        }
        .paging-right{
            display:inline-block;
            &:extend(.height50);
            span{

            }
            input{
                width:30px;
                padding:3px;
                border:solid 1px #333333 !important;
            }
            button{
                padding:0 10px;
                cursor: pointer;
                &:hover{
                    color: #d52d81;
                }
            }
        }
    }

</style>
