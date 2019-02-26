import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'

/* 모든 전역에서 Vuex를 사용할 수 있도록 선언 */
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        todo
    }
});