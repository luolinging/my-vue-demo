<template>
	<div>
		<div class="counter child">
			<span>
				子组件触发事件
			</span>
			<button v-on:click="incrementCounter">{{ counter }}</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				counter: 0
			}
		},
		methods: {
			incrementCounter() {
				this.counter += 2;
				this.$emit('increment');
			}
		}
	}
</script>

<style>

</style>