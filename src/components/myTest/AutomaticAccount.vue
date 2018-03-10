<template>
	<div class="main account">
		<div class="one">
			<el-row :gutter="15">
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/setting.png" />
						<span class="word-style">差旅申请</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/setting.png" />
						<span class="word-style">差旅借款</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/setting.png" />
						<span class="word-style">差旅报销</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/setting.png" />
						<span class="word-style">通用报销</span>
					</div>
				</el-col>
			</el-row>
		</div>

		<div class="two">
			<el-row :gutter="15">
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/setting.png" />
						<span class="word-style">客商预付款</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/setting.png" />
						<span class="word-style">客商报销单</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/setting.png" />
						<span class="word-style">还款单</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/setting.png" />
						<span class="word-style">设置	</span>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	
</script>

<style>
	body {
		background-color: #E5E9F2;
	}
	
	.account {
		margin: 50px 56px;
	}
	
	.el-row {
		margin-bottom: 12px;
	}
	
	.grid-content {
		border-radius: 4px;
	}
	
	.bg-purple {
		border: 1px solid #EEE;
		background: #fff;
		height: 120px;
		margin: 0 auto;
		width: 100%;		
	}
	
	img {
		width: 50px;
		height: 50px;
		position: relative;
		left: -30px;
		top: 35px;
	}
	
	.word-style {
		margin: 0 auto;
		display: inline-block;	
		vertical-align: middle;	
		width: 100px;
		padding-top: 23px;
		text-align: left;
		color: #2C3E50;
	}
</style>