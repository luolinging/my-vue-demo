<template>
	<div>
		<div class="test">
			<img src="../assets/setting.png" />
		</div>
		<div class="cube">
			<cube></cube>
		</div>

	</div>
</template>

<script>
	import cube from './cube'

	export default {
		components: {
			cube
		}
	}
</script>

<style>
	img {
		width: 50px;
		height: 50px;
		margin: 20px auto;
		transition: all 2s;/*播放的速度*/
	}
	
	.test {
		margin-left: -600px;
		width: 100%;
		height: 100%;
		perspective: 800px;/*辅助作用    产生近大远小的感觉*/
	}
	
	.test:hover img {
		transform: translateZ(200px);/*沿着Z轴移动200px*/
	}
</style>