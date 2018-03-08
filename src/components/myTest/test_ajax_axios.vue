<template>
	<div>
		<button @click="show">显示ajax请求数据的过程</button>
		<span>
			{{jsonStr}}
		</span>
		<!--<ul>
			<li v-for="animal in jsonStr">
				{{animal.name}}
			</li>
		</ul>-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				/*jsonStr: [{
					name: '',
					age: '',
					sex: ''
				}]*/
				jsonStr: ''
			}
		},
		methods: {
			show() {
				debugger //为了方便debug，不写则直接执行
				this.$ajax({
					method: 'get',
					url: 'http://localhost:8080/static/wh.json',
					//参数传递方式：requestbody方式,get请求
					/*data: {
						name: '',
						age: ''
					}*/
					//参数传递方式：requestparam方式，post请求
					/*params:{
						name: '',
						age: ''
					}*/
				}).then(response => {
					debugger
					/*data：代表wh.json中的animals这个对象*/
					this.jsonStr = response.data.animals.dog[0].name;
				})
			}
		}

	}
</script>

<style scoped>
	div {
		height: 100px;
		background-color: cadetblue;
	}
</style>