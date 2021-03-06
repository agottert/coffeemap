// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

Vue.config.productionTip = false

// For the moment we will use this, then we will use the state
Vue.prototype.$getCoffees = null
Vue.prototype.$getNeighborhoods = null

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
