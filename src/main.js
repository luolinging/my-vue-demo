import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

//引入ElementUI组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入子组件对象
import header from './components/myTest/headerVue.vue'
import body from './components/myTest/bodyVue.vue'
import footer from './components/myTest/footerVue.vue'

//使用ElementUI 组件
Vue.use(ElementUI)

//给vue原型挂载一个属性
Vue.prototype.$ajax = axios

//关闭生产模式下给出的提示
Vue.config.productionTip = false

//声明全局组件------vue.component('组件名称'，组件对象)
Vue.component('headerVue', header);
Vue.component('bodyVue', body);
Vue.component('footerVue', footer);

/* eslint-disable no-new */
new Vue({
	el: '#app', //对应index.html中id=app
	router, //路由
/*	axios, //一个打包好的XMLHttpRequests，也就是说，这个也是一个ajax库。*/
	components: {
		App
	}, //组件，现在是一个App.vue
	template: '<App/>' //<App />他就是App.vue，选择要加载的vue实例。最新的vue-cli脚手架模板现在是这个形式。App.vue是主程序，其他所有的.vue都是放在App.vue中，所以只需要加载App.vue就完全可以把其他的东西加载出来。
})