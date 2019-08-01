define(['vue', 'src/service/service'], function (Vue, service) {
    return Vue.component('cmp', {
        template: 
	        `<el-container>
			  <el-header>Header</el-header>
			  <br>
			  <el-container>
			    <el-aside width="300px">
			        <el-row class="tac">
			        	<el-col :span="24">
						    <el-menu
						      default-active="0-0-0"
						      :default-openeds="defaultOpen"
						      class="el-menu-vertical-demo"
						      @open="handleOpen"
						      @close="handleClose"
						      background-color="#6699CC"
						      text-color="#fff"
						      active-text-color="#ffd04b">
						      <template v-for="(item, index) in leftMenuData">
							      <el-submenu :index="index.toString()" v-if="item.label === 'Learning summary'">
							        <template slot="title">
							          <i class="el-icon-location"></i>
							          <span>{{item.label}}</span>
							        </template>
							        <el-submenu :index="index.toString() + '-' + index2.toString()" v-for="(business, index2) in item.listData" :key="business.name">
							          <template slot="title">{{business.businessName}}</template>
							          <el-menu-item @click="menuFn(item, child)" :index="index.toString() + '-' + index2.toString() + '-' + index3.toString()" v-for="(child, index3) in business.children" :key="child.name">{{child.name}}</el-menu-item>
							        </el-submenu>
							      </el-submenu>
							      <el-menu-item :index="index.toString()" v-else @click="menuFn(item)">
							        <i class="el-icon-menu"></i>
							        <span slot="title">{{item.label}}</span>
							      </el-menu-item>
						      </template>
						    </el-menu>
					    </el-col>
					</el-row>
			    </el-aside>
			    <el-main>
				    <div class="level-two-right-content" v-if="targetBusiness.detailOption">
	                    <div class="section" v-for="item in targetBusiness.detailOption">
	                        <div class="section-title">
	                            <span class="section-point"></span>
	                            <span class="title-content">{{item.name}}</span>
	                        </div>
	                        <p v-html="item.description.trim()"></p>
	                    </div>
	                </div>
	                <router-view class="router" v-else></router-view>
			    </el-main>
			  </el-container>
			</el-container>
			`,
        data() {
            return {
                pageName: "home",
                targetBusiness: {detailOption: []},
                defaultOpen: [],
                leftMenuData: [
                	{
                		label: "Learning summary",
                		listData: []
                	},
                	{
                		label: "文本带格式转换成字符串",
                		path: "/home/transformstr"
									},
                	{
                		label: "element-ui文档",
                		path: "/home/element-ui"
									}									
                ]
            }
        },
        beforeMount () {
        	window.windowData = [];
        	service.getData((data) => {
        		this.leftMenuData.find(function (item) {
        			return item.label === "Learning summary"
        		}).listData = data;
	            this.targetBusiness = data[0].children[0];    		        		
        	})
        },
	    methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	        var newKeyPath = key.split("-").reduce(function (item, key) {
		        	item.length === 0 ? item.push(key) : item.push(item[item.length - 1] + "-" + key);
		        	return item;
	        }, [])
	        this.defaultOpen = newKeyPath;
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      menuFn (item, child) {
	      	if (item.label === "Learning summary") {
	      		this.targetBusiness = child;
	      		this.$router.replace({path:"/home"})
	      	} else {
	      		this.targetBusiness = {};
	      		this.$router.replace({path:item.path})
	      	}
	      }
        }
    });
});
