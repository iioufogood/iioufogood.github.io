//切换二级页面
var onOff = true;
function changeLevelTwoPage (onOff) {
    //打开二级页面
    onOff && $(".level-two-left").addClass("recovery");
    onOff && $(".level-two-right").addClass("recovery");
    onOff && $("#levelTwoContent").addClass("Zindex");
    //关闭二级页面
    !onOff && $(".level-two-left").removeClass("recovery");
    !onOff && $(".level-two-right").removeClass("recovery");
    !onOff && $("#levelTwoContent").removeClass("Zindex");
}

// setTimeout(function () {
//     changeLevelTwoPage(true);
// }, 2000)
var stackCloudList = stackCloudListData;

var swiper = null;

var vueApp = new Vue({
  el: '#levelTwoContent',
  data: function () {
    return {
        levelTwoTile: "学习资料",
        stackCloudList: stackCloudList,
        targetBusiness: {},
        activeBusinessName: "",
        activeChildName: ""
    }
  },
  mounted: function () {
    this.targetBusiness = stackCloudList[0].children[0];
    this.activeBusinessName = stackCloudList[0].businessName;
    this.activeChildName = stackCloudList[0].children[0].name;
  },
  methods: {
    goBackFn () {
        changeLevelTwoPage();
    },
    businessShowFn (businessName, childName) {
        this.targetBusiness = this.stackCloudList.find(item => {
            return item.businessName === businessName
        }).children.find(child => {
            return child.name === childName;
        })
        this.activeBusinessName = businessName;
        this.activeChildName = childName;
    }
  },
  watch: {
    targetBusiness: function (val, oldVal) {
 
    }
  }
})

$(document).on("click", ".animation-trigger a", function (e) {
    var e = e || event;
    var $target = $(e.target).is("a") ? $(e.target) : $(e.target).parents("a");
    var dataForArr = $target.attr("data-for").split("|");
    //展示二级页面
    changeLevelTwoPage(true);
    //初始化vue实例的数据
    var targetBusiness = stackCloudList.find(item => {
            return item.businessName === dataForArr[0]
    }).children.find(child => {
            return child.name === dataForArr[1];
    })
    Vue.set(vueApp, "activeBusinessName", dataForArr[0]);
    Vue.set(vueApp, "activeChildName", dataForArr[1]);
    Vue.set(vueApp, "targetBusiness", targetBusiness);

})
