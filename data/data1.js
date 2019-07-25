$(function(){
    var data = [
        {
            "businessName": "javascript相关",
            "children": [
                {
                    "name": "js文件下载",
                    "detailOption": [
                        {
                            "name": "1.通过a标签的方式来下载",
                            "description": "&lt;a href='' target='_blank'&gt;&lt;/a&gt;<br>"
                        },
                        {
                            "name": "2.通过提交form表单的方式",
                            "description":"<div>var $form = $(\"&lt;form action='\"+url+\"' method='post' target='rfFrame'&gt;&lt;/form&gt;\");</div><div>angular.forEach(d,function(v,k){</div><div>&nbsp; &nbsp; v = JSON.stringify(v);</div><div>&nbsp; &nbsp; var $input = $(\"&lt;input type='hidden' name='\"+k+\"'/&gt;\");</div><div>&nbsp; &nbsp; $input.attr(\"value\",v);</div><div>&nbsp; &nbsp; $form.append($input);</div><div>});</div><div>$element.append($form);</div><div>$form.submit();</div><div>$form.remove();</div>"
                        },
                        {
                            "name": "3.通过http的请求拿到文件流的方式",
                            "description": "<div>$http({</div><div>&nbsp; &nbsp; url : $scope.url,</div><div>&nbsp; &nbsp; method : \"post\",</div><div>&nbsp; &nbsp; data : $scope.form.formdata,</div><div>&nbsp; &nbsp; responseType : \"arraybuffer\",</div><div>}).then(function(d){</div><div>&nbsp; &nbsp; var data = d.data;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; var blob = new Blob([data], {type: 'text/plain'});</div><div>&nbsp; &nbsp; &nbsp; &nbsp;//var blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});//xlsx</div><div>&nbsp; &nbsp; &nbsp; &nbsp;//var blob = new Blob([data], {type: 'application/vnd.ms-excel'});//xls</div><div>&nbsp; &nbsp; &nbsp; &nbsp; var downloadTitle = \"\";</div><div>&nbsp; &nbsp; &nbsp; &nbsp; if(d.headers(\"content-disposition\").indexOf(\"filename\") != -1){</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; downloadTitle = d.headers(\"content-disposition\").split(\";\")[1].split(\"=\")[1];</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; downloadTitle = decodeURI(downloadTitle);</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; if(typeof window.navigator.msSaveBlob !== \"undefined\"){</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; window.navigator.msSaveBlob(blob, downloadTitle);</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }else{</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var objectUrl = URL.createObjectURL(blob);</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var aForExcel = $('&lt;a download=\"'+downloadTitle+'\"&gt;&lt;span class=\"forExcel\"&gt;&lt;/span&gt;&lt;/a&gt;').attr('href',objectUrl);</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $('body').append(aForExcel);</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $('.forExcel').click();</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; aForExcel.remove();</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>});</div>"
                        }
                    ]
                },
                {
                    "name": "简易富文本图片上传",
                    "detailOption": [
                        {
                            "name": "使用方法",
                            "description": "<div><span style=\"font-size: 14px;\">//ctrl + c&nbsp; &nbsp;ctrl + v</span></div><div><span style=\"font-size: 14px;\">$(\"#fb_content\").pasteUploadImage(\"后台上传图片接口\", function ($this, file, imgData) {</span></div><div><span style=\"white-space: pre; font-size: 14px;\">		</span></div><div>})</div>"
                        },
                        {
                            "name": "注意事项",
                            "description": "作用div元素添加可编辑属性  contenteditable=\"true\""
                        },
                        {
                            "name": "源码",
                            "description": "<div><span style=\"font-size: 14px;\">(function ($) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; var $this;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; var $ajaxUrl = \'\';</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; $.fn.pasteUploadImage = function (ajaxUrl, callBack) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; $this = $(this);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; $ajaxUrl = ajaxUrl;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; $this.on(\'paste\', function (event) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var filename, image, pasteEvent, text;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; pasteEvent = event.originalEvent;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if (pasteEvent.clipboardData &amp;&amp; pasteEvent.clipboardData.items) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; image = isImage(pasteEvent);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if (image) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; event.preventDefault();</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; filename = getFilename(pasteEvent) || \"image.png\";</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; filename = splitFileName(filename);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; text = \"{{\" + filename + \"(uploading...)}}\";</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; pasteText(text);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return uploadFile(image.getAsFile(), filename, $this, event, callBack);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; });</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; $this.on(\'drop\', function (event) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var filename, image, pasteEvent, text;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; pasteEvent = event.originalEvent;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if (pasteEvent.dataTransfer &amp;&amp; pasteEvent.dataTransfer.files) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; image = isImageForDrop(pasteEvent);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if (image) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; event.preventDefault();</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; filename = pasteEvent.dataTransfer.files[0].name || \"image.png\";</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; filename = splitFileName(filename);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; text = \"{{\" + filename + \"(uploading...)}}\";</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; pasteText(text);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return uploadFile(image, filename, $this, event, callBack);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; });</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; };</span></div><div><span style=\"font-size: 14px;\"><br></span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; pasteText = function (text) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; // var afterSelection, beforeSelection, caretEnd, caretStart, textEnd;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; // caretStart = $this[0].selectionStart;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; // caretEnd = $this[0].selectionEnd;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; // textEnd = $this.val().length;&nbsp;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; // beforeSelection = $this.val().substring(0, caretStart);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; // afterSelection = $this.val().substring(caretEnd, textEnd);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; // $this.val(beforeSelection + text + afterSelection);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; // $this.get(0).setSelectionRange(caretStart + text.length, caretEnd + text.length);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; // return $this.trigger(\"input\");</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; };</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; isImage = function (data) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; var i, item;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; i = 0;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; while (i &lt; data.clipboardData.items.length) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; item = data.clipboardData.items[i];</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if (item.type.indexOf(\"image\") !== -1) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return item;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; i++;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; return false;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; };</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; isImageForDrop = function (data) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; var i, item;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; i = 0;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; while (i &lt; data.dataTransfer.files.length) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; item = data.dataTransfer.files[i];</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if (item.type.indexOf(\"image\") !== -1) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return item;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; i++;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; return false;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; };</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; getFilename = function (e) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; var value;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; if (window.clipboardData &amp;&amp; window.clipboardData.getData) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; value = window.clipboardData.getData(\"Text\");</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; } else if (e.clipboardData &amp;&amp; e.clipboardData.getData) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; value = e.clipboardData.getData(\"text/plain\");</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; value = value.split(\"\r\");</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; return value[0];</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; };</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; getMimeType = function (file, filename) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; var mimeType = file.type;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; var extendName = filename.substring(filename.lastIndexOf(\'.\') + 1);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; if (mimeType != \'image/\' + extendName) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return \'image/\' + extendName;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; return mimeType</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; };</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; uploadFile = function (file, filename, $this, event, callBack) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; // var formData = new FormData();</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; // formData.append(\'imageFile\', file);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; // formData.append(\"mimeType\", getMimeType(file, filename));</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; var reader=new FileReader()</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; reader.onload=function (e) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $.ajax({</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; url: $ajaxUrl,</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // data: formData,</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; data: JSON.stringify({</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; \"file_name\": filename,</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; \"image_data\": e.target.result</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }),&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; type: \'post\',</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; processData: false,</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; contentType: false,</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; dataType: \'json\',</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; xhrFields: {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; withCredentials: true</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; success: function (data) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; typeof callBack === \"function\" &amp;&amp; callBack($this, file, {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; id: data.id,</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; img_data: e.target.result</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; });</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if (data.id) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return insertToImg($(event.target), e.target.result, data.id);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // return replaceLoadingTest(filename);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; error: function (xOptions, textStatus) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; typeof callBack === \"function\" &amp;&amp; callBack($this, file, {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; id: (new Date()).getTime(),</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; img_data: e.target.result</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; });</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; insertToImg($(event.target), e.target.result, (new Date()).getTime())</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // replaceLoadingTest(filename);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; //测试用</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // insertToTextArea(filename,&nbsp; (new Date()).getTime())</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; console.log(xOptions.responseText);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; });&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; reader.readAsDataURL(file);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; };</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; insertToTextArea = function (filename, url) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; return $this.val(function (index, val) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return val.replace(\"{{\" + filename + \"(uploading...)}}\", \"![\" + filename + \"](\" + url + \")\" + \"\n\");</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; });</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; };</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; replaceLoadingTest = function (filename) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; return $this.val(function (index, val) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return val.replace(\"{{\" + filename + \"(uploading...)}}\", filename + \"\n\");</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; });</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; };</span></div><div><span style=\"font-size: 14px;\"><br></span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; insertToImg = function ($target, imgData, imgId) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; var img = $(\"&lt;div&gt;&lt;img img-id=\'\" + imgId + \"\' src=\'\" + imgData + \"\'&gt;&lt;/div&gt;\");</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; if ($target.hasClass(\"form-input\")) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $target.prepend(img);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; if ($target.is(\"br\")) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $target.parent().append(img);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; if ($target.is(\"img\")) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if ($target.parent().hasClass(\"form-input\")) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $target.parent().prepend(img);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }&nbsp;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $target.parent().append(img);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; }&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; $target.append(img);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; function splitFileName (str) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; var newStr = \'\';</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; var arr = str.split(\'.\');</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; var cha = 9 - arr[arr.length - 1].length;</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; if (arr[0].length &gt; cha) {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; newStr = arr[0].slice(0, cha);</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; } else {</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; newStr = arr[0];</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; return newStr + \".\" + arr[arr.length - 1];</span></div><div><span style=\"font-size: 14px;\">&nbsp; &nbsp; }&nbsp;</span></div><div><span style=\"font-size: 14px;\">})(jQuery);</span></div><div><br></div>"
                        }
                    ]
                }                                               
            ]
        }
    ]

    //更新windowData
    window.windowData &&  addData(window.windowData, data);
    !window.windowData && (window.windowData = data);
})


