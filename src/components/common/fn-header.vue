<template>
	<header class="topbox">
		<span class="topback" @click="goBack"></span>
		<h1>{{ title }}</h1>
	</header>
</template>
<script>
	export default {
		data(){
			return{

			}
		},
		methods: {
			goBack(){
				window.history.go(-1)
			}
		},
		props: ['title']
	}
</script>
<style scoped lang="less">
	.topbox {
		position: relative;
		height: .88rem;
		background-color: #fff!important;
		border-bottom: #d5d5d5 solid 1px;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-moz-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		.topback {
			position: relative;
		    left: auto;
		    top: auto;
			display: block;
			width: .8rem;
			height: .8rem;
		}
		.topback:after {
		    content: '';
		    position: absolute;
		    left: 40%;
		    top: 50%;
		    margin-top: -.16rem;
		    height: .3rem;
		    width: .3rem;
		    border-left: #333 solid .04rem;
		    border-bottom: #333 solid .04rem;
		    -webkit-transform: rotate(45deg);
		    -ms-transform: rotate(45deg);
		    transform: rotate(45deg);
		}
		h1 {
			color: #333;
		    width: 80%;
		    margin: 0 auto;
		    text-align: center;
		    font-size: .36rem;
		    line-height: .88rem;
		}		
	}

</style>