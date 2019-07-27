define(['vue'], function (Vue) {
    return Vue.component('cmp', {
        template: '<div>component{{age}}</div>',
        data() {
            return {
                age: 20
            }
        }
    });
});