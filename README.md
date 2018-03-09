# my-vue-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies（安装依赖关系）
npm install

# serve with hot reload at localhost:8080（在本地主机上提供热重载）
npm run dev

# build for production with minification（建立生产缩小）
npm run build

# build for production and view the bundle analyzer report（构建产品并查看包分析器报告）
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

* [关于如何工作的详细解释]For a detailed explanation on how things work, 
- check out the [guide](http://vuejs-templates.github.io/webpack/) 
- and [docs for vue-loader](http://vuejs.github.io/vue-loader).



* vue组件的加载流程
	- main.js
	- new vue({})
	- components:{App}
	- App.vue
	- <router-view/>(路由出口)   这一步设置的就是会调用index.js中的path路径上设置的加载页面，之后根据设置的路径加载helloworld.vue
	- index.js
	- path
	- HelloWorld.vue


### main.js中的new vue({})
	new Vue({
	 	el: '#app', //对应index.html中id=app
	 	router, //路由
	 	components: {App}, //组件，现在是一个App.vue
	 	template: '<App/>' //<App />他就是App.vue，选择要加载的vue实例。
	 					  //最新的vue-cli脚手架模板现在是这个形式。
	 					 //App.vue是主程序，其他所有的.vue都是放在App.vue中，
	 					//所以只需要加载App.vue就完全可以把其他的东西加载出来。
	})


* 实例方法/事件  --- 详解
	- 实例：组建内(xxx.vue)的  this  或者    new vue({})
	- 事件
	 + this.$on(事件名,回调函数(参数))
	 + this.$emit(事件名,数据)
	 + this.$once(事件名,回调函数(参数))   ---只触发一次
	 + this.$off(事件名)   ---取消事件
	 
	 
	 
* json文件结构
	- {} 双括号表示对象
	- [] 中括号表示数组
	- "" 双引号内是属性或值
	- :  冒号表示后者是前者的值(这个值可以是字符串、数字、也可以是另一个数组或对象)---类似键值对


* axios   ---Vue2.0的网络请求库
	- 解释：
	 + 就是一个基于ES6的Promise的网络请求库，
	 + 其实说干净了就是一个打包好的XMLHttpRequests，也就是说，这个也是一个ajax库。
	- 实现的功能：
	 + 所以它一样可以实现：
	 	+ 在浏览器里建立XHR
	 	+ 通过nodejs进行http请求
	 + 甚至可以实现！
	 	+ 转换或者拦截请求数据或响应数据
	 	+ 支持Promise的API
	 	+ 可以取消请求
	 	+ 自动转换JSON
	 	+ 可以防御XSRF攻击！
	 	

* 父子组件 
	- 传值：父组件--->子组件
	 + 在子组件中声明 ：props
	 + props可以是数组或对象，用于接收来自父组件的数据,父组件的数据需要通过 prop才能下发到子组件中
	 + 在父组件中调用(js中)----------import add from './myTest/child.vue';
	 + 在父组件中注册(js中)----------components: {"child": child},
	 + 在父组件中引用(template中)----<child></child>
	
	prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。修改子组件的 prop 值，是不会传回给父组件去更新视图的。 
	- 传值：子组件--->父组件（自定义事件）
	 + 父组件 $on(eventName)监听自定义事件，当子组件里 $emit(eventName) 触发该自定义事件的时候，父组件执行相应的操作。
	
* vue中双向数据绑定的原理-------数据劫持
	+ vue.js 采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。


* <a href="javascript: void(0);" @mouseenter="xxxx"></a>   解释这句话

	- href=”javascript:void(0);”
		+ 这个的含义是，让超链接去执行一个js函数，而不是去跳转到一个地址，
		+ 而void(0)表示一个空的方法，也就是不执行js函数。
				
	- 为什么要使用href=”javascript:void(0);”
		javascript:是伪协议，表示url的内容通过javascript执行。void(0)表示不作任何操作，这样会防止链接跳转到其他页面。这么做往往是为了保留链接的样式，但不让链接执行实际操作，
		
		<a href="javascript：void(0)" onClick="window.open()"> 点击链接后，页面不动，只打开链接
		
		<a href="#" onclick="javascript:return false;"> 作用一样，但不同浏览器会有差异。
	
	- href=”javascript:void(0);”与href=”#"的区别
		
		<a href="javascript:void(0)">点击</a>点击链接后不会回到网页顶部 <a href="#">点击</a> 点击后会回到网面顶部
		
		"＃"其实是包含了位置信息，例如默认的锚点是＃top 也就是网页的上端
		而javascript:void(0) 仅仅表示一个死链接这就是为什么有的时候页面很长浏览链接明明是＃可是跳动到了页首
		而javascript:void(0) 则不是如此所以调用脚本的时候最好用void(0)
		
	 # 补充：<a href="javascript:hanshu();"这样点击a标签就可以执行hanshu()函数了。
	 
* jQuery事件知识点
	- mouseenter：当鼠标指针进入（穿过）元素时触发，
	- mouseleave：当鼠标指针离开元素时触发
	
	- focus：当输入框获得焦点时触发
	- blur：当输入框失去焦点时触发
	
	- 给.header-search这个类    添加css中的定义的search-active类
		+ $('.header-search').addClass('search-active')
	- 从.header-search这个类中 删除css中的定义的search-active类
		+ $('.header-search').removeClass('search-active')
	 

* 绑定HTML class 解释
	- <div v-bind:class="{ active: isActive }"></div>
						             类名     ：    数据属性