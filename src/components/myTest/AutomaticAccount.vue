<template>
	<div class="main account">
		<div class="one">
			<el-row :gutter="10">
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/logo.png" />
						<span class="word-style">
							差旅申请
						</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/logo.png" />
						<span class="word-style">
							差旅借款
						</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/logo.png" />
						<span class="word-style">
							差旅报销
						</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/logo.png" />
						<span class="word-style">
							通用报销
						</span>
					</div>
				</el-col>
			</el-row>
		</div>

		<div class="two">
			<el-row :gutter="10">
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/logo.png" />
						<span class="word-style">
							客商预付款
						</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/logo.png" />
						<span class="word-style">
							客商报销单
						</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/logo.png" />
						<span class="word-style">
							还款单
						</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<img src="../../assets/logo.png" />
						<span class="word-style">
							设置
						</span>
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
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 2px;
	}
	
	.bg-purple {
		border: 1px solid #EEE;
		background: #fff;
		height: 120px;
	}
	
	img {
		width: 50px;
		height: 50px;
		position: relative;
		left: -30px;
		top: 35px;
	}
	
	.word-style {
		display: inline-block;
		width: 100px;
		vertical-align:middle;
		margin-top: 20px;
	}
	
	.context {}
</style>