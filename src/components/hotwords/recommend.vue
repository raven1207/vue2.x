
<template>
	<div class="category_box bee">
		<template v-if="relateList">
			<dl class="second_category" v-for="item in relateList" v-if="item.list.length">
			    <div class="wrapper">
			        <h3>{{item.title}}</h3>
			        <ul class="clearfix">
			            <li v-for="child in item.list">
			                <a :href="formatUrl(child, item.type)">{{getHotkey(child, item.type)}}</a>
			            </li>
			        </ul>
			    </div>
			</dl>
		</template>
		<template v-else>
			<fn-notfound></fn-notfound>
		</template>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	import {fnNotfound} from '@/components/index'
	import config from '@/config/config'
	export default {
		data(){
			return {

			}
		},
		computed: {
			...mapGetters({
				relateList: 'getRelateList'
			})

		},
		/**
		 * 0：brand
		 * 1: category
		 * 2: hotkey
		 * @type {Object}
		 */
		methods: {
			formatUrl(child, type){
				switch(type){
					case 0: 
						return config.mDomain + '/cbrand/' + child.avseq;
						break;
					case 1: 
						return config.list + '/category/' + child.siSeq;
						break;
					case 2: 
						return config.list + '/search?kw=' + child.hotkey;
						break;
				}
				
			},
			getHotkey(child, type){
				switch(type){
					case 0: 
						return child.brandName;
						break;
					case 1: 
						return child.cpName;
						break;
					case 2: 
						return child.hotkey;
						break;
				}
			}
		},
		components: {
			fnNotfound
		}
	}
</script>
<style>
	@charset "utf-8";
	/* CSS Document */
	.category_box .sort_tit {
	  padding: 0.4rem 0.24rem;
	  border-bottom: 1px solid #d5d5d5;
	  background-color: #FFF;
	}
	.category_box .sort_tit:after {
	  clear: both;
	  content: "";
	  display: block;
	  height: 0;
	  overflow: hidden;
	}
	.category_box .sort_tit img {
	  float: left;
	  width: 0.8rem;
	  height: 0.8rem;
	  margin-right: 0.2rem;
	}
	.category_box .sort_tit div.desc {
	  float: left;
	  width: 75%;
	}
	.category_box .sort_tit div.desc h2 {
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  overflow: hidden;
	  font-size: 0.32rem;
	  color: #333333;
	}
	.category_box .sort_tit div.desc p {
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  overflow: hidden;
	  font-size: 0.24rem;
	  padding-top: 0.12rem;
	  color: #888;
	}
	.category_box .sort_tit i.li_arrow {
	  font-size: 0.3rem;
	  line-height: 0.28rem;
	  float: right;
	}
	.category_box .sort_tit i.li_arrow::after {
	  font-family: "iconfont" !important;
	  font-size: 0.28rem;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -webkit-text-stroke-width: 0.2px;
	  -moz-osx-font-smoothing: grayscale;
	  content: '\e621';
	}
	.category_box .sort_tit i.li_arrow.turnup::after {
	  content: '\e623';
	}
	.category_box .second_category {
	  background-color: #e5e5e5;
	}
	.category_box .second_category .wrapper {
	  padding: 0.4rem 0.24rem;
	}
	.category_box .second_category .wrapper p {
	  font-size: 0.28rem;
	  margin-top: 0.4rem;
	  color: #333333;
	}
	.category_box .second_category .wrapper p:nth-child(1) {
	  margin-top: 0;
	}
	.category_box .second_category .wrapper ul {
	  width: 100%;
	}
	.category_box .second_category .wrapper ul .clearfix::after {
	  display: block;
	  clear: both;
	  overflow: hidden;
	  height: 0;
	  content: ' ';
	}
	.category_box .second_category .wrapper ul .clearfix {
	  zoom: 1;
	}
	.category_box .second_category .wrapper ul li {
	  font-size: 0.24rem;
	  float: left;
	  width: 33.33333333%;
	  margin-top: 0.2rem;
	  padding-right: 0.26rem;
	  color: #333333;
	}
	.category_box .second_category .wrapper ul li a {
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  display: block;
	  overflow: hidden;
	  text-align: center;
	  height: 0.6rem;
	  padding: 0.15rem 0.1rem;
	  -webkit-border-radius: 0.04rem;
	          border-radius: 0.04rem;
	  background-color: #fff;
	}
	.category_box .second_category .wrapper ul li a span {
	  display: block;
	  height: 0;
	  width: 0;
	  overflow: hidden;
	}
	.category_box .second_category .wrapper ul li:nth-child(3n) {
	  padding-right: 0;
	}
</style>