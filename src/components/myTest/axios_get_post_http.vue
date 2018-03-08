<template>
	<div>
		<button @click="getTest">get请求</button>
		<button @click="postTest">post请求</button>
		<button @click="httpTest">http请求</button>
		<p>{{msg}}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: ''
			}
		},
		methods: {
			/*get请求*/
			getTest() {
				this.$ajax.get("http://localhost:8080/static/wh.json", {
					params: {
						id: "123"
					},
					headers: {
						access_token: "abcd"
					},
					before: function() {
						console.log("before init.");
					}
				}).then(res => {
					this.msg = res.data;
				}).catch(err => {
					console.log("catch eroro" + err)
				})
			},
			/*post请求*/
			postTest() {
				this.$ajax.post("http://localhost:8080/static/wh.json", {
					userId: "123"
				}, {
					headers: {
						access_token: "abcd"
					},
					before: function() {
						console.log("before init.");
					}
				}).then(res => {
					this.msg = res.data;
				})
			},
			/*http请求*/
			httpTest() {
				this.$ajax({
					url: "http://localhost:8080/static/wh.json",
					method: "GET",
					data: {
						userId: "111"
					},
					headers: {
						token: "101"
					}
				}).then(res => {
					this.msg = res.data;
				})
			}
		}
	}
</script>

<style>

</style>