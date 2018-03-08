<template>
	<div>
		我是头{{textone}}
		<br/>
		<button @click="show">显示js中的属性参数</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		//接收父组件参数的设置
		props: ['textone'],
		methods: {
			show() {
				alert(this.textone);
			}
		}

	}
</script>

<style scoped>
	div {
		height: 100px;
		background-color: cadetblue;
	}
</style>