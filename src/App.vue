<template>
	<div id="app">
		<div id="top">
			<span>转向：</span>
			<!--1.使用 router-link 组件来导航.
				2.通过传入 `to` 属性指定链接.
				3.<router-link> 默认会被渲染成一个 `<a>` 标签
			-->
			<span id="span-link">
				<router-link to="/Test">go to test</router-link>
				<router-link to="/">go to HelloWorld</router-link>
				<router-link to="/FirstTest">go to FirstTest</router-link>
				<router-link to="/AllDemo">AllDemo</router-link>
				<router-link to="/test_ajax_axios">go to ajax请求</router-link>
				<router-link to="/parentVue">go to 父组件</router-link>
				<router-link to="/axios">Axios</router-link>
			</span>

		</div>

		<!--路由出口-->
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 10px;
	}
	
	
</style>