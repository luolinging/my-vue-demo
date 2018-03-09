<template>
	<div>
		<div class="parent-div">
			<!--使用声明的组件:子组件-->
			<!--<header-vue>这种写法是在angular.js中使用的，vue.js中也可以写成headerVue-->
			<header-vue textone="---父组件携带的常量"></header-vue><!--常量值-->
			<body-vue v-bind:texttwo="texttwo"></body-vue><!--变量值-->
			<!--使用自定义事件实现父子组件间的通信-->
			<footer-vue></footer-vue>
			<button @click="listen">爸爸接听电话</button>
		</div>
		<hr />
		<div class="new parent counter">
			<p>{{ total }}</p>
			<!--父组件在使用子组件的地方直接用 v-on 来监听子组件触发的事件（increment）-->
			<button-counter v-on:increment="incrementTotal"></button-counter>
			<button-counter @increment="incrementTotal"></button-counter>
		</div>
		<hr />
		<div>
			<!--message 定义在子组件的 props 中-->
			<p>通过props传值</p>
			<child :message="name"></child>
		</div>

	</div>
</template>

<script>
	import connect from '@/js/connect.js'
	import buttonCounter from './myTest/buttonCounter.vue'
	import child from './myTest/child.vue'

	/*//引入子组件对象
	import header from './myTest/headerVue.vue';
	import body from './myTest/bodyVue.vue';
	import footer from './myTest/footerVue.vue';*/

	export default {
		data() {
			return {
				texttwo: '---父组件携带的变量',
				total: 0,
				name: '罗玲玲'
			}
		},
		methods: {
			listen() {
				//this.$on(事件名,回调函数(参数))
				connect.$on('phone', function(msg) {
					/*alert(msg);*/
					console.log(msg);
				})
			},
			incrementTotal() {
				this.total += 1;
			}

		},
		/*//必须声明组件
		components: {
			//组件名（在模板中使用）：组件对象
			headerVue: header,
			body, //对应上面的简写
			footer
		}*/
		components: {
			buttonCounter: buttonCounter,
			child
		}
	}
</script>

<style>
	.parent-div {
		margin-top: 100px;
	}
</style>