<template>
	<div class="music-box">
		fdfbdfb
	</div>
</template>

<script>
</script>

<style>
	.music-box {
		width: 200px;
		height: 200px;
		margin: 100px 300px;
		position: relative;
		perspective: 1000px;
		/*透视效果*/
	}
	
	.music-box::after,
	.music-box::before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
	/* after在before后面,层级比before高,即after压在before上面  */
	
	.music-box::after {
		background-image: url(../assets/2.png);
	}
	
	.music-box::before {
		background-image: url();
	}
</style>