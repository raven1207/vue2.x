<template>
    <div>
        <ul class="list_ul" v-infinite-scroll="loadMore"
                          infinite-scroll-disabled="loading"
                          infinite-scroll-distance="10"
                          infinite-scroll-immediate-check=false>
            <li v-for="(item, index) in itemList">
                <div class="d_img">
                    <a :href='item.sku_seq | formatUrl' rel="nofollow">
                        <img :alt="item.sm_name" :title="item.sm_name" v-lazy="item.sm_pic"/>
                    </a>
                </div>
                <div class="d_adc">
                    <a :href='item.sku_seq | formatUrl'>
                        <div class="d_title prefix">
                            <i><img :src="item.item_type_icon"></i>
                            <p>{{item.sm_name}}</p>
                        </div>
                    </a>
                    <!-- 其他一些杂项 S -->
                    <div class="d_mix">
                        <div class="dm_1">
                            <!-- 价格 S -->
                            <div class="d_price" v-html="dealPrice(item)">
                            </div>
                        </div>
                    </div>
                    <!-- 店铺信息 -->
                    <p class="d_store">
                        <span v-if="item.good_rate">好评{{item.good_rate}}</span>
                        <span>{{item.store_name}}</span>
                    </p>
                </div>
            </li>
        </ul>
        <fn-pagination v-show="isPageShow" :cur='currentPage' :total='totalPage'></fn-pagination>

        <fn-loading v-show="loading"></fn-loading>
        <div class="nomore" v-show="noMore"><span>没有更多商品</span></div>
    </div>
</template>

<script>
    import _ from "lodash"
	import {mapActions, mapState} from 'vuex'
    import {fnLoading, fnPagination} from '../index'
    import config from '@/config/config'
    let timer = null
	export default {
		data(){
			return {
                pageSize: 10,
				currentPage: 1,
                isPageShow: false
			}
		},
        props: {
            isCurrent: Boolean
        },
        mounted(){
            window.addEventListener('scroll', _.throttle(this.fnScroll, 200))
        },
		computed: {
            ...mapState({
                itemList: state => state.hotwords.itemInfo,
                loading: state => state.hotwords.loading,
                sortParam: state => state.hotwords.solrParams,
                totalItem: state => state.hotwords.totalItem,
                noMore: state => state.hotwords.noMore
            }),
            totalPage(){
                return Math.ceil(this.totalItem / this.pageSize)
            }
		},
        filters: {
            formatUrl(itemId){
                return config.itemPath + '/' + itemId
            }
        },
		methods: {
            ...mapActions({
                loadMoreData: 'loadMoreData'
            }),
            fnScroll(){
                
                if (!this.isCurrent) {
                    return
                }
                this.isPageShow = true
                this.computeScanPage()
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(()=>{
                    this.isPageShow = false
                }, 1000)
            },
            dealPrice(item){
                let price = item.price,
                    itPrice = item.it_price,
                    tpl = '', arr;
                if (typeof price == 'undefined' || price == '') {
                    return '<span>暂无报价</span>';
                }
                arr = price.toString().split('.')
                
                tpl += '&yen;' + arr[0];
                
                if (arr[1] != undefined || arr[1] == '00' || arr[1] == '0') {
                    tpl += '<span>.' + arr[1] + '</span>'
                }

                if (parseFloat(price) < parseFloat(itPrice)) {
                    tpl += '<s>&yen;' + itPrice + '</s>'
                }
                return tpl

            },
            computeScanPage(){

                let curHeight = document.body.scrollTop + document.body.offsetHeight,
                    oLi = document.querySelectorAll('.list_ul li'),
                    oLiHeight = oLi[0].offsetHeight,
                    oLiLen = oLi.length,
                    oLiCount = Math.ceil(curHeight / oLiHeight);
                let computedPage = Math.ceil(oLiCount / this.pageSize)
                this.currentPage = computedPage > this.totalPage ? this.totalPage : computedPage

            },

            loadMore(){
                this.loadMoreData(this.sortParam)
            }
		},
        components: {
            fnLoading,
            fnPagination
        }
	}
</script>
<style lang="less">
	@import url(../../assets/css/hotwords/sale.less);
    // image[lazy=loading] {
    //     width: 40px;
    //     // height: 300px;
    //     margin: auto;
    //     background: #000;
    // }
    .list_ul .d_img img[lazy=error] {
        background: url(../../assets/img/err144x144.png);
        background-size: contain;
    }
</style>