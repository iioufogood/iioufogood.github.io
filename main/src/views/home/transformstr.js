define(['vue', 'transform'], function (Vue) {
    return Vue.extend({
        template: 
            `<div class="container">
		        <el-row class="row text-center">
		        	<el-col :span="24">
		        		<h2>文本带格式转换成字符串<small>支持粘贴拖拽图片</small></h2>
		        	</el-col>
		        </el-row>
		        <el-row class="row">
		            <el-col :span="24" class="col-md-12" contenteditable="true" id="inputContent" placeholder="请输入或者粘贴文本" style="background: #CCCCCC; min-height: 200px; max-height: 400px; overflow: auto;"></el-col>
		        </el-row>
		        <br>
		        <el-row class="row text-center" type="flex" justify="center">
		            <el-button type="primary" round @click="transformFn()">转换</el-button>
		        </el-row>
		        <br>
		        <el-row class="row">
		            <textarea id="textareaContent" class="form-control" style="background: #FFFFCC; min-height: 200px; max-height: 400px; overflow: auto; width: 100%"></textarea>
		        </el-row>
		    </div>
		    `,
        data() {
            return {
                pageName: "transformstr"
            }
        },
        methods: {
        	transformFn () {
	            if ($("#inputContent").html()) {
	                $("#textareaContent").val(JSON.stringify($("#inputContent").html()));           
	            }       		
        	}
        },
        mounted () {
	        $(function () {
	            $("#inputContent").pasteUploadImage("./test", function ($this, file, imgData) {
	                //do something
	            })
	        })        	
        }
    });
});
