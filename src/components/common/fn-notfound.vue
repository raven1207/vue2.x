<template>
	<div class="blank" >
	    <img :src="blankImg" class="blank_img" />
	    <p class="blank_txt">很抱歉，没有找到您搜索的相关商品信息！</p>
	    <a href="//m.feiniu.com" class="blank_btn">去逛逛</a>
	</div>
</template>
<script>
	import blankImg from '@/assets/img/blank_icon.png'
	export default {
		data(){
			return {
				blankImg: blankImg
			}
		}
	}
</script>
<style>
	.blank {
	  padding-top: 2rem;
	  padding-bottom: 0.2rem;
	}
	.blank .blank_img {
	  width: 100%;
	}
	.blank .blank_txt {
	  margin: 1rem 0 0.5rem 0;
	  text-align: center;
	  color: #6c6c6c;
	  font-size: 0.28rem;
	}
	.blank .blank_btn {
	  height: 0.84rem;
	  display: block;
	  background-color: #d7063b;
	  color: #fff;
	  line-height: 0.84rem;
	  font-size: 0.36rem;
	  text-align: center;
	  -webkit-border-radius: 0.06rem;
	          border-radius: 0.06rem;
	  margin: 0.3rem 0.2rem;
	}
</style>