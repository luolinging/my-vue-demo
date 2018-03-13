<template>
	<!--生成一个立方体-->
	<div class="cube">
		<div class="front">front</div>
		<div class="back">back</div>
		<div class="left">left</div>
		<div class="right">right</div>
		<div class="top">top</div>
		<div class="bottom">bottom</div>
	</div>
</template>

<script>
</script>

<style>
	.cube {
		width: 200px;
		height: 200px;
		margin: 50px 100px;
		position: relative;
		/*perspective: 1000px;*/
		/*opacity: 0.5;透明度*/
		transition: all 8s;
		transform-style: preserve-3d;/*将平面转换成一个立方体*/
		transform: rotateX(30deg) rotateY(60deg);
		
	}

	.front,
	.back,
	.left,
	.right,
	.top,
	.bottom {
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 200px;
		font-size: 20px;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.front {
		background-color: green;
		transform: translateZ(-100px);
	}
	
	.back {
		background-color: aquamarine;
		transform: translateZ(100px);
	}
	
	.left {
		background-color: red;
		transform: rotateY(90deg) translateZ(-100px);
	}
	
	.right {
		background-color: royalblue;
		transform: rotateY(90deg) translateZ(100px);
	}
	
	.top {
		background-color: gold;
		transform: rotateX(90deg) translateZ(-100px);
	}
	
	.bottom {
		background-color: chartreuse;
		transform: rotateX(90deg) translateZ(100px);
	}
	
	.cube:hover{
		transform: rotateX(360deg) rotateY(360deg);
	}
</style>