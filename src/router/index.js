import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import FirstTest from '@/components/FirstTest'
import DataBinding from '@/components/DataBinding'
import test_ajax_axios from '@/components/myTest/test_ajax_axios' //@相当于/src
import axios from '@/components/myTest/axios_get_post_http'
import parentVue from '@/components/parentVue'

Vue.use(Router)

//定义路由
export default new Router({
	routes: [{
			path: '/', //浏览器网路请求走通之后默认就会去找域名下的根目录，
			name: 'HelloWorld', //默认页面
			component: HelloWorld
		},
		{
			path: '/Test',
			name: 'Test',
			component: Test
		},
		{
			path: '/FirstTest',
			name: 'FirstTest',
			component: FirstTest
		}, {
			path: '/DataBinding',
			name: 'DataBinding',
			component: DataBinding
		},
		{
			path: '/test_ajax_axios',
			name: 'test_ajax_axios',
			component: test_ajax_axios
		}, {
			path: '/parentVue',
			name: 'parentVue',
			component: parentVue
		}, {
			path: '/axios',
			name: 'axios',
			component: axios
		}
	]
})