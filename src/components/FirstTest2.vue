<template>
	<div class="main">
		<span class="span-top">
		外部交换管理/外部系统定义
		</span>
		<hr color="#EEEEEE" />
		<div>
			<el-select v-model="value" filterable placeholder="请输入编号或名称">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<span class="more">更多</span>
			<span class="button">
				<el-button @click="add">
					新增
				</el-button>				
				<el-button >删除</el-button>
			</span>

		</div>
		<div class="table">
			<el-table ref="multipleTable" :data="tableData" stripe>
				<el-table-column type="selection" prop="box" />
				<el-table-column prop="num" label="外系统编号" />
				<el-table-column prop="name" label="外系统名称" />
				<el-table-column prop="type" label="系统类型" />
				<el-table-column prop="classfiy" label="系统分类" />
				<el-table-column prop="describe" label="外系统描述" />
				<el-table-column prop="version" label="外系统版本" />
				<el-table-column prop="direction" label="我方接口方向" />
				<el-table-column prop="method" label="接口方式" />
				<el-table-column prop="address" label="地址" />
				<el-table-column prop="operation" label="操作">
					<template slot-scope="scope">
						<el-button type="text" size="small">修改</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<!--引用子组件-->
		<addModule v-show="isShow" ></addModule>
	</div>
</template>

<script>
	//调用子组件对象      "./"表示同级目录
	import add from './myTest/addModule.vue';
	
	export default {
		data() {
			return {
				isShow: '',
				options: [{
					value: '选项1',
					label: '00000'
				}, {
					value: '选项2',
					label: '00001'
				}, {
					value: '选项3',
					label: '00002'
				}, {
					value: '选项4',
					label: '00003'
				}, {
					value: '选项5',
					label: '00004'
				}],
				value: '',
				tableData: [{
					num: '00000',
					name: 'xxx',
					type: 'xxx',
					classfiy: 'xxx',
					describe: 'xxx',
					version: 'xxx',
					direction: 'xxx',
					method: 'xxx',
					address: 'xxx'
				}, {
					num: '00001'
				}, {
					num: '00002'
				}, {
					num: '00003'
				}, {
					num: '00004'
				}]
			}
		},
		//注册子组件
		components: {
			"addModule": add
		},		
		methods: {
			/*给新增按钮添加事件实现“显示和隐藏”*/
			add() {
				this.isShow = !this.isShow
			}
		}
	}
</script>

<style>
	.main {
		width: 85%;
		margin: 0px auto;
		border: 1px solid #EEEEEE;
		padding: 20px;
		margin-top: 20px;
	}
	
	.span-top {
		display: block;
		text-align: left;
	}
	
	.el-select {
		display: inline-block;
		position: relative;
		float: left;
	}
	
	.more {
		display: inline-block;
		padding-top: 10px;
		margin-left: -700px
	}
	
	.button {
		float: right;
	}
	
	.cell {
		text-align: center;
	}
	
	.table {
		width: 100%;
	}
</style>