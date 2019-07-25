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
                    "name": "多种类型云资源池",
                    "detailOption": [
                        {
                            "name": "业务痛点1",
                            "description": "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                        },
                        {
                            "name": "业务痛点2",
                            "description": "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                        },                    
                        {
                            "name": "业务痛点3",
                            "description": "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
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


