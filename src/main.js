import Vue from 'vue'
import App from './App.vue'
/* Vuex 사용을 위한 store 프로퍼티 등록 */
import {
  store
} from './store/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store // import된 store 프로퍼티를 실제 전역으로 사용할 수 있도록 Vue 인스턴스 내 선언
}).$mount('#app')