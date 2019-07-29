define(['vue'], function (Vue) {
    return Vue.extend({
        template: '<div>当前是{{pageName}}页面</div>',
        data() {
            return {
                pageName: "login"
            }
        }
    })
})