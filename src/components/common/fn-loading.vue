<template>
	<div>
	    <p class="loading_btm"><em></em><i>正在努力刷新数据中...</i></p>
	</div>
</template>
<script>

</script>
<style>
	.loading_btm {
	    text-align: center;
	    padding: 10px 0;
	    font-size: .32rem
	}

	.loading_btm b,
	.loading_btm em,
	.loading_btm i {
	    vertical-align: middle
	}

	.loading_btm em {
	    margin-right: .1rem;
	    display: inline-block;
	    height: .44rem;
	    width: .44rem;
	    overflow: hidden;
	    background: url(../../assets/img/loading.gif) no-repeat;
	    -webkit-background-size: .44rem .44rem;
	    background-size: .44rem .44rem
	}

	.loading_btm b {
	    margin-right: .1rem;
	    display: inline-block;
	    height: .44rem;
	    width: .44rem;
	    overflow: hidden;
	    background: url(../../assets/img/loading_txt.png) no-repeat;
	    -webkit-background-size: .44rem .44rem;
	    background-size: .44rem .44rem
	}

	.loading_btm b:before {
	    display: block;
	    height: 100%;
	    width: 100%;
	    vertical-align: middle;
	    content: "";
	    background: url(../../assets/img/loading.png) no-repeat;
	    -webkit-background-size: .44rem .44rem;
	    background-size: .44rem .44rem;
	    -webkit-animation: loading_rotate .8s linear infinite;
	    -o-animation: loading_rotate .8s linear infinite;
	    animation: loading_rotate .8s linear infinite
	}
</style>