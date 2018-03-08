<template>
	<div class="main">
		<div>
			<span class="span-top">
			外部交换管理/外部系统定义
			</span>
		</div>
		<hr/>

		<div>
			<el-select v-model="value" filterable placeholder="请输入编号或名称">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
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
						<el-button type="text" size="small" @click="modify">修改</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<!--引用子组件-->
		<addModule v-show="AddShow"></addModule>
		<modifyModule v-show="ModifyShow"></modifyModule>
	</div>
</template>

<script>
	//调用子组件对象      "./"表示同级目录
	import add from './myTest/addModule.vue';
	import modify from './myTest/modifyModule.vue';
	/*import axios from '@/js/axio-config.js'*/

	export default {
		data() {
			return {
				AddShow: '',
				ModifyShow: '',
				options: [],
				value: '',
				tableData: []
			}
		},
		//注册子组件
		components: {
			"addModule": add,
			"modifyModule": modify
		},
		methods: {
			/*给新增按钮添加事件实现“显示和隐藏”*/
			add() {
				this.AddShow = !this.AddShow
			},
			modify() {
				this.ModifyShow = !this.ModifyShow
			}
		},
		created() {
			this.$ajax({
					method: 'get',
					url: 'http://localhost:8080/static/tableData.json'
					/*data: {
						num: '',
						name: ''
					}*/
				}).then(res => {
					this.tableData = res.data.table;
				}),
				this.$ajax({
					method: 'get',
					url: 'http://localhost:8080/static/options.json'
					/*data: {
						value: '',
						lable: ''
					}*/
				}).then(res => {
					debugger
					this.options = res.data.options;
				})

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
	
	hr {
		border: 2px solid #EEEEEE;
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
		margin-left: -1050px
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