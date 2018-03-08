<template>
	<div class="add">
		<div>
			<span class="span-top">
			外部交换管理/外部系统定义/新增
			</span>
		</div>
		<hr/>

		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<div class="topFirst">
				<el-form-item label="基本信息"></el-form-item>
			</div>
			<div class="div1">
				<el-form-item label="*"></el-form-item>
				<el-form-item label="外系统编码">
					<el-input v-model="formInline.num" placeholder="请输入"></el-input>
				</el-form-item>
				<el-form-item label="*"></el-form-item>
				<el-form-item label="外系统名称">
					<el-input v-model="formInline.name" placeholder="请输入"></el-input>
				</el-form-item>
			</div>
			<div class="div2">
				<el-form-item label="*"></el-form-item>
				<el-form-item label="系统类型">
					<el-select v-model="formInline.type" placeholder="请选择">
						<el-option label="1" value="Windows"></el-option>
						<el-option label="2" value="IOS"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="*"></el-form-item>
				<el-form-item label="系统分类">
					<el-select v-model="formInline.classfiy" placeholder="请选择">
						<el-option label="1" value="Windows"></el-option>
						<el-option label="2" value="IOS"></el-option>
					</el-select>
				</el-form-item>
			</div>
			<div class="div3">
				<el-form-item label="*"></el-form-item>
				<el-form-item label="外系统描述">
					<el-input v-model="formInline.describe" placeholder="请输入"></el-input>
				</el-form-item>
				<el-form-item label="*"></el-form-item>
				<el-form-item label="外系统版本">
					<el-input v-model="formInline.version" placeholder="请输入"></el-input>
				</el-form-item>
			</div>
			<div class="div4">
				<el-form-item label="*"></el-form-item>
				<el-form-item label="我方接口方向">
					<el-select v-model="formInline.direction" placeholder="请选择">
						<el-option label="1" value="Windows"></el-option>
						<el-option label="2" value="IOS"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="*"></el-form-item>
				<el-form-item label="接口方式">
					<el-select v-model="formInline.method" placeholder="请选择">
						<el-option label="1" value="Windows"></el-option>
						<el-option label="2" value="IOS"></el-option>
					</el-select>
				</el-form-item>
			</div>
			<div class="topTwo">
				<el-form-item label="对外接口默认设置"></el-form-item>
				<el-form-item label="|"></el-form-item>
				<el-form-item label="当我方接口方向为“接口”时,该栏目展示，否则不展示"></el-form-item>
			</div>
			<div class="div5">
				<el-form-item label="*"></el-form-item>
				<el-form-item label="凭证类别">
					<el-input v-model="formInline.proof_type" placeholder="请输入"></el-input>
				</el-form-item>
				<el-form-item label="*"></el-form-item>
				<el-form-item label="来源系统">
					<el-input v-model="formInline.source_sys" placeholder="请输入"></el-input>
				</el-form-item>
			</div>
			<div class="div6">
				<el-form-item label="*"></el-form-item>
				<el-form-item label="币种">
					<el-input v-model="formInline.bi_zhong" placeholder="请输入"></el-input>
				</el-form-item>
				<el-form-item label="*"></el-form-item>
				<el-form-item label="汇率">
					<el-input v-model="formInline.rate" placeholder="请输入"></el-input>
				</el-form-item>
			</div>
			<div class="addButton">
				<el-button >添加</el-button>
			</div>
			
		</el-form>
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
		width: 100%;
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
	
	.topTwo {
		display: block;
		text-align: left;
	}
	.addButton{
		margin-top: 20px;
	}
</style>