<template>
	<div id="">
		我是底
		<button @click="call">打电话给爸爸</button>
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