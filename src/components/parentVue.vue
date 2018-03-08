<template>
	<div class="parent-div">
		<!--使用声明的组件:子组件-->
		<!--<header-vue>这种写法是在angular.js中使用的，vue.js中也可以写成headerVue-->
		<header-vue textone="---父组件携带的常量"></header-vue>
		<!--常量值-->
		<body-vue v-bind:texttwo="text"></body-vue>
		<!--变量值-->
		<footer-vue></footer-vue>
		<button @click="listen">爸爸接听电话</button>
	</div>
</template>

<script>
	import connect from '@/js/connect.js'
	/*//引入子组件对象
	import header from './myTest/headerVue.vue';
	import body from './myTest/bodyVue.vue';
	import footer from './myTest/footerVue.vue';*/

	export default {
		data() {
			return {
				text: '---父组件携带的变量'
			}
		},
		methods: {
			listen() {
				//this.$on(事件名,回调函数(参数))
				connect.$on('phone', function(msg) {
					console.log(msg);
				})
			}

		}
		/*//必须声明组件
		components: {
			//组件名（在模板中使用）：组件对象
			headerVue: header,
			body, //对应上面的简写
			footer
		}*/
	}
</script>

<style>
	.parent-div {
		margin-top: 100px;
	}
</style>