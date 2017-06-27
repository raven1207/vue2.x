import Vue from 'vue'
import cookie from '@/util/cookie'
import conf from '@/config/config'
import _ from 'lodash'

let baseRequestBody = {
	headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}
const URL = {
	fetchItemList: conf.list + '/hotkey/getHotKeyItemInfo',
	// fetchItemList: 'http://localhost:8080/m-list-view/hotkey/getHotKeyItemInfo',
	// fetchItemPrice: 'http://ac.feiniu.com/stocks/v2'
	fetchItemPrice: conf.acPath + '/stocks/v2'
}

export function fetchItemPrice(data){
	let obj = _.cloneDeep(baseRequestBody)

	let req = Object.assign({}, {
			falg: 'new',
			area: cookie.getH5('siteid').replace(/\-/g, '_') || '',
			itemid: ''
		}, data)
	let config = {
		url: URL.fetchItemPrice,
		method: 'jsonp',
		params: req
	}
	
	Object.assign(obj, config)

	return Vue.http(obj)

}

export function fetchItemList(data){
	let obj = _.cloneDeep(baseRequestBody)
	let config = {
		url: URL.fetchItemList,
		method: 'POST',
		body: 'data='+ JSON.stringify(data)

	}
	Object.assign(obj, config)
	
	return Vue.http(obj)
}