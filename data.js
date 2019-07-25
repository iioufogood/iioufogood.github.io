var stackCloudListData = [
    {
        businessName: "多云统一管理",
        children: [
            {
                name: "js文件下载",
                detailOption: [
                    {
                        name: "1.通过a标签的方式来下载",
                        description: "<a href='' target='_blank'></a>"
                    },
                    {
                        name: "2.通过提交form表单的方式",
                        description:
`var $form = $('<form action="'+url+'" method="post" target="rfFrame"></form>');
angular.forEach(d,function(v,k){
    v = JSON.stringify(v);
    var $input = $('<input type="hidden" name="'+k+'"/>');
    $input.attr('value',v);
    $form.append($input);
});
$element.append($form);
$form.submit();
$form.remove();`
                    },                    
                    {
                        name: "3.通过http的请求拿到文件流的方式",
                        description: 
`$http({
    url : $scope.url,
    method : 'post',
    data : $scope.form.formdata,
    responseType : 'arraybuffer',
}).then(function(d){
    var data = d.data;
        var blob = new Blob([data], {type: "text/plain"});
       //var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});//xlsx
       //var blob = new Blob([data], {type: "application/vnd.ms-excel"});//xls
        var downloadTitle = '';
        if(d.headers('content-disposition').indexOf('filename') != -1){
            downloadTitle = d.headers('content-disposition').split(';')[1].split('=')[1];
            downloadTitle = decodeURI(downloadTitle);
        }
        if(typeof window.navigator.msSaveBlob !== 'undefined'){
            window.navigator.msSaveBlob(blob, downloadTitle);
        }else{
            var objectUrl = URL.createObjectURL(blob);
            var aForExcel = $("<a download='"+downloadTitle+"'><span class='forExcel'></span></a>").attr("href",objectUrl);
            $("body").append(aForExcel);
            $(".forExcel").click();
            aForExcel.remove();
        }
});`
                    },
                ]
                
            },
            {
                name: "多种类型云资源池",
                detailOption: [
                    {
                        name: "业务痛点1",
                        description: "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                    },
                    {
                        name: "业务痛点2",
                        description: "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                    },                    
                    {
                        name: "业务痛点3",
                        description: "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                    },
                ]
            },
            {
                name: "VMware纳管",
                detailOption: {
                    section1: {
                        name: "一云多池3",
                        description: "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署" ,
                        btnOptions: [
                            {
                                name: "立即体验",
                                url: "http://www.baidu.com"
                            }, {
                                name: "Follow Me",
                                url: "http://www.baidu.com"
                            }
                        ]                      
                    },
                    section2: {
                        name: "业务痛点3",
                        description: "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                    },
                    section3: {
                        name: "方案优势3",
                        swiperOptions: [
                            {
                                imgUrl: "http://www.baidu.com",
                                description: "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                            }, {
                                imgUrl: "http://www.baidu.com",
                                description: "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                            }, {
                                imgUrl: "http://www.baidu.com",
                                description: "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                            }
                        ]
                    },
                    section4: {
                        name: "业务价值3",
                        description: "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署,大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署,大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                    }
                }
            },
            {
                name: "混合云服务",
                detailOption: {
                    section1: {
                        name: "一云多池4",
                        description: "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署" ,
                        btnOptions: [
                            {
                                name: "立即体验",
                                url: "http://www.baidu.com"
                            }, {
                                name: "Follow Me",
                                url: "http://www.baidu.com"
                            }
                        ]                      
                    },
                    section2: {
                        name: "业务痛点4",
                        description: "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                    },
                    section3: {
                        name: "方案优势4",
                        swiperOptions: [
                            {
                                imgUrl: "http://www.baidu.com",
                                description: "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                            }, {
                                imgUrl: "http://www.baidu.com",
                                description: "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                            }, {
                                imgUrl: "http://www.baidu.com",
                                description: "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                            }
                        ]
                    },
                    section4: {
                        name: "业务价值4",
                        description: "大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署,大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署,大型企业区域分布广泛，会在多个地域同时开展业务，核心业务在私有云部署，同时会协同公有云资源，如何统一管理部署"
                    }
                }
            }                                               
        ]
    }
]

