<template>
	<div id="">
		我是中间部分{{texttwo}}{{textone}}
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		////接收父组件的属性
		props: ['texttwo','textone']

	}
</script>

<style scoped>
	div {
		height: 100px;
		background-color: pink;
	}
</style>