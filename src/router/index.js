import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
    	path: '/hotkey_goods/:cate',
    	name: 'hotwords',
    	component: resolve => require(['@/views/hotwords/index.vue'], resolve)
    }]
})
