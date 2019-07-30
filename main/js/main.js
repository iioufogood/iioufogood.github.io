require.config({
//设置公共文件前缀路径
    baseUrl:"lib",
    paths:{
    //由于element-ui 内部写的 define("ELEMENT",["vue"],xxx)
    //所以它的别名必须叫ELEMENT 也必须有一个叫vue的依赖才能加载
    "ELEMENT":"https://unpkg.com/element-ui@2.0.9/lib/index",
    "src": "../src"
    },
    shim:{
    "testTwo":{
        //依赖
        deps:[],
        //导出某个方法或者变量
        exports:"hello"
    }
    }
});
require(['vue','src/component/component','ELEMENT', 'vue-router', 'src/routes/routes'], function (Vue, cmp, ELEMENT, VueRouter, routes) {
    //从testTwo中导出的方法
    // hello();
    Vue.use(ELEMENT);
    Vue.use(VueRouter);

    const router = new VueRouter({
        routes,
        // mode: "history"
    })

    new Vue({
    el: "#app",
    data() {
        return {
        name: "test"
        }
    },
    created(){
        this.$message("欢迎来到iioutogood的页面！");
        console.log(this.getName());
    },
    methods:{
        getName(){
        return "test"
        }
    },
    components:{
        cmp
    },
    router
    })
});    
