Vue.component('task-list', {
    template: '<div><task v-for="task in tasks" v-text="task"></task></div>',
    data() {
        return{
            tasks: [
                'Go to the bank', 'Eat chips', 'Drink coffee'
            ]
        }
    }
});

Vue.component('task', {
    template: '<li></li>'
});

let app = new Vue({
    el: '#root'
});