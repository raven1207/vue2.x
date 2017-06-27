import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

import hotwords from './modules/hotwords/index'

Vue.use(Vuex)

const store = new Vuex.Store({
	actions,
	modules: {
		hotwords
	}
})

export default store