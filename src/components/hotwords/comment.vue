<template>
	<div>
		<div class="commentslist" v-if="commentList.length">
			<ul class="list">
			    <li v-for="(item, index) in commentList">
			        <div class="top">
			            <p class="head"><img :src="item.userPhoto ? item.userPhoto : defaultImg"></p>
			            <p class="username">{{item.userName}}</p>
			            <p class="star">
	                        <span v-for="n in 5" :class="{cur: n < item.commentStar}"></span>
			            </p>
			            <p class="date"><span>{{item.orderDate.split(' ')[0]}}</span>{{item.orderDate.split(' ')[1]}}</p>
			        </div>
			        <div class="highpraise">
			            <p class="impress">印象:</p>
			            <p class="type clearfix">
			            	<template v-if="item.productMark">
			            		<span v-for="i in item.productMark.split(',')">{{i}}</span>
			            	</template>
			            </p>
			        </div>

			        <p>{{item.commentText}}</p>
			        <div class="zan"><span class="cur"><i class="iconfont">&#xe642;</i>赞</span><b>({{item.niceCount}})</b></div>
			    </li>
			</ul>
			<div class="nomore"><span>没有更多评论</span></div>
		</div>	
		<div v-else>
			<div class="blank"><img :src="nofoundImg">
			    <p>这是一款<span>0</span>差评的商品呦</p>
			    <p>值得您购买！</p>
			</div>
		</div>	
	</div>


</template>
<script>
		import {mapState} from 'vuex'
		import blankImg from '@/assets/img/fn_head.png'
		import notfoundImg from '@/assets/img/nofound.png'
		export default {
			data(){
				return {
					defaultImg: blankImg,
					nofoundImg: notfoundImg
				}
			},
			computed: {
				...mapState({
	                commentList: state => state.hotwords.commentInfo
	            })
			},
			methods: {

			}
		}
</script>
<style>
	.commentslist {
		background-color: #fff;
	}
</style>