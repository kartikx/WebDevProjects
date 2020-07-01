/**
 * Bulma provides Modal components.
 * You would like to display these when the user clicks on a button.
 * These should also be closed when the user presses the cross button
 * on the modal. Do this via Vue components.
 */

Vue.component("modal", {
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consectetur ullam perferendis rerum,
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
    `,
});

let app = new Vue({
    el: "#root",
    data: {
        showModal: false
    }
});
