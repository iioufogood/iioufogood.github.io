var baseUrl = "./data";
var markNum = 1;
var maxNum = 3;
var stackCloudList = [];
var vueApp = null;
//初始化
init();
function init () {
    stackCloudList = window.windowData ? window.windowData : [];
    vueApp = new Vue({
      el: '#levelTwoContent',
      data: function () {
        return {
            levelTwoTile: "学习资料",
            stackCloudList: stackCloudList,
            targetBusiness: {},
            activeBusinessName: "",
            activeChildName: "",
            childIndex: 0
        }
      },
      mounted: function () {
        //采用getData 方法是用
        // this.targetBusiness = stackCloudList[0].children[0];
        // this.activeBusinessName = stackCloudList[0].businessName;
        // this.activeChildName = stackCloudList[0].children[0].name;
      },
      methods: {
        goBackFn () {
            changeLevelTwoPage();
        },
        businessShowFn (businessName, childName, index) {
            this.targetBusiness = this.stackCloudList.find(item => {
                return item.businessName === businessName
            }).children.find((child, ind) => {
                return child.name === childName && ind === index;
            })
            this.activeBusinessName = businessName;
            this.activeChildName = childName;
            this.childIndex = index;
        }
      },
      watch: {
        targetBusiness: function (val, oldVal) {

        }
      }
    })
}

//ajax  请求json数据  json

queryJson();

function queryJson () {
    var url = baseUrl + markNum + ".json"
    $.ajax({
        "type": "GET",
        "url": url,
        "success": function (res) {
            markNum++;
            stackCloudList.length === 0 && (stackCloudList = res);
            stackCloudList.length !== 0 && addData(stackCloudList, res);
            //递归
            queryJson();
        },
        "error": function (e) {
            console.log("请求失败!  " + "status:" + e.status, "请求失败url：" + url);
            console.log(e);
            Vue.set(vueApp, "stackCloudList", stackCloudList);
            Vue.set(vueApp, "targetBusiness", stackCloudList[0].children[0]);
            Vue.set(vueApp, "activeBusinessName", stackCloudList[0].businessName);
            Vue.set(vueApp, "activeChildName", stackCloudList[0].children[0].name);
        }
    })
}

function addData (parentData, data) {
    data.forEach(function (item) {
        var hasBusiness = false;
        parentData.forEach(function (stackItem) {
            if (stackItem.businessName === item.businessName) {
                // stackItem.children = [...stackItem.children, ...item.children]; //手机不支持es6
                stackItem.children = stackItem.children.concat(item.children);
                hasBusiness = true;
            }
        })
        if (!hasBusiness) {
            // parentData = [...parentData, item];
            parentData.push(item);
        }
    })  
}
//坑
function addDataNew (data) {
    if (stackCloudList.length === 0) {
        stackCloudList = data;
        console.log(stackCloudList)
    } else {
        data.forEach(function (item) {
            var hasBusiness = false;
            stackCloudList.forEach(function (stackItem) {
                if (stackItem.businessName === item.businessName) {
                    // stackItem.children = [...stackItem.children, ...item.children]; //手机不支持es6
                    stackItem.children = stackItem.children.concat(item.children);
                    hasBusiness = true;
                }
            })
            if (!hasBusiness) {
                // stackCloudList = [...stackCloudList, item];
                stackCloudList.push(item);
            }
        })
    }
}

//script标签请求数据   js

// getData();

function getData () {
    getScript(window, document, "script", baseUrl + markNum + ".js", function (target) {
        $(document).find(target.target).remove();
        markNum++;
        if (markNum <= maxNum) {
            getData();
        } else {
            init();
        }
    })
}

function getScript(win, doc, tag, src, always) {
    var script = doc.createElement(tag),
        h = doc.getElementsByTagName(tag)[doc.getElementsByTagName(tag).length - 1];
    script.async = 1;
    if (tag === "script") {
        script.src = src;
    } else if (tag === "link") {
        script.href = src;
        script.rel = "stylesheet";
    }

    if (script.addEventListener) {
        script.addEventListener("load", always, false);
    } else if (script.attachEvent) {
        script.attachEvent("onreadystatechange", function () {
            var target = window.event.srcElement;
            if (target.readyState == "loaded" || target.readyState == "complete") {
                always.call(target);
            }
        });
    }
    if (h.parentNode.insertBefore) {
        h.parentNode.insertBefore(script, h);
    };
}


