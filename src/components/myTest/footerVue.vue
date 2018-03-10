<template>
	<div>
		我是底
		<button @click="call">打电话给爸爸</button>（显示结果在控制台中可以查看）
	</div>

</template>

<script>
	import connect from '@/js/connect.js';
	export default {
		data() {
			return {}
		},
		methods: {
			call() {
				//发射信号
				//this.$emit(事件名,数据)
				connect.$emit('phone', '62分钟后回来');
			}
		}
	}
</script>

<style scoped>
	div {
		height: 100px;
		background-color: yellowgreen;
	}
</style>