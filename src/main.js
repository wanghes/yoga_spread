import Vue from 'vue'
import Vant, { Image as VanImage } from 'vant';
import 'vant/lib/index.css';
import '@/assets/less/style.less';
import router from './router'
import { Notify } from 'vant';
import { Empty } from 'vant';
import { Lazyload } from 'vant';

// 全局注册
Vue.use(Vant);
Vue.use(Notify);
Vue.use(Lazyload);
Vue.use(Empty);
Vue.use(VanImage);
Vue.config.productionTip = false


import App from './App.vue'

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
