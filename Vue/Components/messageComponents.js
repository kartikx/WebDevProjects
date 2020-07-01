/**
 * Components allow you to create custom
 * tag names, which enhance readabilty.
 */
Vue.component('message', {
    props: ['title', 'body'],

    data() {
        return {
            isVisible: true
        };
    },

    template: `
    <article class="message" v-show="isVisible">
        <div class="message-header">
        <p>{{title}}</p>
        <button @click="hideModal" class="delete"></button>
        </div>
        <div class="message-body">
            {{body}}
        </div>
    </article>
    `,

    methods: {
        hideModal() {
            // Using this variable is important in JS objects. Otherwise you'd instantiate a new var.
            this.isVisible = false;
        }
    }
});

        
let app = new Vue({
    el: '#root',
});