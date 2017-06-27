<template>
    <div class="paging">
        <span>{{pageScanInfo}}</span>
    </div>
</template>
<script>

    export default{
        props: {
            cur: Number,
            total: Number
        },
        computed:{
            //返回当前浏览页数信息
            pageScanInfo(){
                return this.cur + '/' + this.total;
            }
        }
    }
</script>
<style>

.paging {
    position: fixed;
    left: 0;
    bottom: .4rem;
    width: 100%;
    height: .4rem;
    text-align: center;
    z-index: 10
}

.paging span {
    display: inline-block;
    width: 1.06rem;
    line-height: .4rem;
    background: rgba(0, 0, 0, .4);
    font-size: .24rem;
    color: #fff;
    border-radius: 15px
}
</style>