/**
 * Bulma provides Modal components.
 * You would like to display these when the user clicks on a button.
 * These should also be closed when the user presses the cross button
 * on the modal. Do this via Vue components.
 */

Vue.component("modal", {
    /**
     * Whether to use slots or props depends on your use case,
     * here we want to embed HTML inside the modal class, hence we
     * use slot.
     */
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <slot></slot>
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
