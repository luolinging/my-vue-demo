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
				<router-link to="/DataBinding">双向数据绑定</router-link>
				<router-link to="/test_ajax_axios">Ajax请求</router-link>
				<router-link to="/parentVue">父子组件</router-link>
				<router-link to="/axios">Axios</router-link>
				<router-link to="/account">自动报账</router-link>
				<router-link to="/cssTest">css2D转换</router-link>
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