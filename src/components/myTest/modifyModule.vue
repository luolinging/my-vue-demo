<template>
	<div class="add">
		<span class="span-top">
		外部交换管理/外部系统定义/修改
		</span>
		<hr/>
		<div class="form">
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<div class="topFirst">
					<el-form-item label="基本信息"></el-form-item>
				</div>
				<div class="div1">
					<el-form-item label="*"></el-form-item>
					<el-form-item label="外系统编码">
						<el-input v-model="formInline.num"></el-input>
					</el-form-item>
					<el-form-item label="*"></el-form-item>
					<el-form-item label="外系统名称">
						<el-input v-model="formInline.name"></el-input>
					</el-form-item>
				</div>
				<div class="div2">
					<el-form-item label="*"></el-form-item>
					<el-form-item label="系统类型">
						<el-select v-model="formInline.type">
							<el-option label="1" value="Windows"></el-option>
							<el-option label="2" value="IOS"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="*"></el-form-item>
					<el-form-item label="系统分类">
						<el-select v-model="formInline.classfiy">
							<el-option label="1" value="Windows"></el-option>
							<el-option label="2" value="IOS"></el-option>
						</el-select>
					</el-form-item>
				</div>
				<div class="div3">
					<el-form-item label="*"></el-form-item>
					<el-form-item label="外系统描述">
						<el-input v-model="formInline.describe"></el-input>
					</el-form-item>
					<el-form-item label="*"></el-form-item>
					<el-form-item label="外系统版本">
						<el-input v-model="formInline.version"></el-input>
					</el-form-item>
				</div>
				<div class="div4">
					<el-form-item label="*"></el-form-item>
					<el-form-item label="我方接口方向">
						<el-select v-model="formInline.direction">
							<el-option label="1" value="Windows"></el-option>
							<el-option label="2" value="IOS"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="*"></el-form-item>
					<el-form-item label="接口方式">
						<el-select v-model="formInline.method">
							<el-option label="1" value="Windows"></el-option>
							<el-option label="2" value="IOS"></el-option>
						</el-select>
					</el-form-item>
				</div>
				<div id="div5">
					<el-form-item label="*"></el-form-item>
					<el-form-item label="地址">
						<el-input v-model="formInline.version"></el-input>
					</el-form-item>
				</div>
				<div class="addModify">
					<el-button>更新</el-button>
				</div>

			</el-form>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				formInline: {
					num: '',
					name: '',
					type: '',
					classfiy: '',
					describe: '',
					version: '',
					direction: '',
					method: '',
					proof_type: '',
					source_sys: '',
					bi_zhong: '',
					rate: ''
				}
			}
		}
	}
</script>
<style>
	.add {
		margin-top: 50px;
	}
	
	hr {
		border: 2px solid #EEEEEE;
	}
	
	.span-top {
		display: block;
		text-align: left;
	}
	
	.topFirst {
		display: block;
		text-align: left;
	}
	
	.addModify {
		margin-top: 20px;
	}
</style>