<template>

	<div class="demo">
		<div class="v-model">
			v-model:(对应script标签中的data数据，双向数据绑定，改变其中的值，下面两个会跟着改变)
			<input type="text" v-model="text" /> {{text}}
		</div>

		<div class="v-bind">
			v-bind:(单向数据绑定，改变其中的值不会影响其他)
			<input type="text" v-bind:value="text" />
		</div>
		<hr/>
		<div class="stu">
			一个学生数组：
			<ul>
				<li v-for="stu in stus" :class="{'A':'red','B':'green'}[stu.score]">
					{{stu.name}}
				</li>
			</ul>
		</div>

	</div>

</template>

<script>
	
	export default {
		data() {
			return {
				text: "bhbhh", //这里的text相当于定义的对象，template中使用的text就是这里定义的，如果上面使用了这里未定义的对象，则会报错
				stus: [{
					name: 'jack',
					score: 'A'
				}, {
					name: 'jack',
					score: 'B'
				}]
			}
		}
	}
</script>

<style>
	.demo {
		margin-top: 100px;
	}
	
	.red {
		background-color: red;
	}
	
	.green {
		background-color: green;
	}
	
	ul {
		margin: 0 400px
	}
</style>