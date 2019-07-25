var baseUrl = "./data";
var markNum = 1;

queryJson();
var stackCloudList = [];
var vueApp = new Vue({
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

function queryJson () {
    var url = baseUrl + markNum + ".json"
    $.ajax({
        "type": "GET",
        "url": url,
        "success": function (res) {
            markNum++;
            addData(res);
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

function addData (data) {
    if (stackCloudList.length === 0) {
        stackCloudList = data;
    } else {
        data.forEach(function (item) {
            var hasBusiness = false;
            stackCloudList.forEach(function (stackItem) {
                if (stackItem.businessName === item.businessName) {
                    stackItem.children = [...stackItem.children, ...item.children];
                    hasBusiness = true;
                }
            })
            if (!hasBusiness) {
                stackCloudList = [...stackCloudList, item];
            }
        })
    }
}
