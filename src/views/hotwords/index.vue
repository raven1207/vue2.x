<template>

	<div class="outbox">
		<fn-header :title="hotkeyTitle"></fn-header>
         <ul class="nav_tab">
	        <li v-for="(item, index) in tabs" @click="changeTab(index+1)"><h2>{{item}}</h2></li>
        </ul>
    	<mt-tab-container v-model="selected" class="nav_tab_cnt">
    		<mt-tab-container-item id="tab-cnt-1">
    			<sale v-show="!isRenderNone" :is-current="isCurrent"></sale>
    			<fn-notfound v-show="isRenderNone"></fn-notfound>
    		</mt-tab-container-item>
    		<mt-tab-container-item id="tab-cnt-2">
    			<comment></comment>

    		</mt-tab-container-item>
    		<mt-tab-container-item id="tab-cnt-3">
    			<recommend></recommend>
    		</mt-tab-container-item>
    	</mt-tab-container>
		<fn-fixedbtn></fn-fixedbtn>
	</div>

</template>
<script>
	import { mapGetters, mapMutations, mapActions, mapState } from 'vuex'
	import {fnHeader, fnNotfound, fnFixedbtn} from '@/components/index'
	import {Sale, Recommend, Comment} from '@/components/hotwords/index'
	export default {
		data(){
			return {
				tabs: ['热销', '评论', '推荐'],
				selected:'tab-cnt-1',
				isCurrent: true
			}
		},
		mounted(){
			this.init()
		},
		computed: {
			...mapState({
				isRenderNone: state => state.hotwords.isRenderNone,
				solrParams: state => state.hotwords.solrParams
			}),
			hotkeyTitle(){
				let title = this.solrParams.hotkey || ''
				return title + '专题'
			}
		},
		methods: {
			...mapActions({
				renderPageData: 'renderPageData'
			}),
			...mapMutations({
				setTargetVal: 'SET_TARGET_VAL'
			}),
			changeTab(index){
				
				this.selected = 'tab-cnt-' + index

				let isLoading = index !== 1
				
				this.isCurrent = !isLoading

				this.setTargetVal({key: 'loading', val: isLoading})
				
			},
			init(){

				this.renderPageData(hotkeyData)
			}
		},
		components: {
			Sale,Recommend,Comment,
			fnNotfound,
			fnHeader,fnFixedbtn
		}
	}
</script>
<style>
	@import url(../../assets/css/hotwords/detail.less);
	.nav_tab_cnt {
		background: #fff;
	}
</style>