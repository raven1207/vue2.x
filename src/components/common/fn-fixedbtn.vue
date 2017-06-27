<template>
    <div>
        <ul class="fixedbtn">
	        <li class="search hide_it"></li>
	        <li class="homepage hide_it"></li>
	        <li class="footprint hide_it"></li>
            <li class="top" v-show="isBackTop" @click="backToTop"></li>
            <li class="cart hide_it"><b></b></li>
        </ul>
    </div>
</template>
<script>
	import _ from 'lodash'
	export default {
		data(){
			return{
				isBackTop: false
			}
		},
		mounted(){
			this.scroll()
			window.addEventListener('scroll', _.throttle(this.scroll, 200))
		},
		methods: {
			scroll(){
				this.isBackTop = document.body.scrollTop >= 100
			},
			backToTop(){
				document.body.scrollTop = 0
			}
		}
	}
</script>
<style>
	.fixedbtn {
	    position: fixed;
	    bottom: 1.12rem;
	    right: .24rem;
	    width: .72rem;
	    z-index: 1;
	}

	.fixedbtn li {
	    width: .68rem;
	    height: .68rem;
	    display: block;
	    margin-bottom: .18rem;
	    position: relative;
	    background: url(../../assets/img/fixedbtn.png) no-repeat;
	    -webkit-background-size: 100% auto;
	    background-size: 100% auto
	}

	.fixedbtn li b {
	    position: absolute;
	    right: .12rem;
	    top: .12rem;
	    width: .36rem;
	    height: .36rem;
	    line-height: .36rem;
	    display: block;
	    background: #c70034;
	    font-size: .2rem;
	    border-radius: 50%;
	    color: #fff;
	    font-weight: 400;
	    text-align: center
	}

	.fixedbtn li.search {
	    background-position: 0 0
	}

	.fixedbtn li.homepage {
	    background-position: 0 -.88rem
	}

	.fixedbtn li.footprint {
	    background-position: 0 -1.76rem
	}

	.fixedbtn li.cart {
	    background-position: 0 -2.04rem;
	}

	.fixedbtn li.top {
	    background-position: 0 -2.72rem
	}
    .fixedbtn li b {
        display: inline;
        transform-origin: 0px 0px 0px;
        opacity: 1;
        transform: scale(1, 1);
        position: absolute;
        right: .01rem;
        top: .01rem;
        min-width: .37rem;
        height: .37rem;
        line-height: .37rem;
        display: block;
        background: #c70034;
        font-size: .18rem;
        border-radius: 50%;
        color: #fff;
        font-weight: 400;
        text-align: center;
    }
</style>