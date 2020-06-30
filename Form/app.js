function animateForm(){
    /**
     * First, get all down-arrows, and 
     * add event listeners.
     */
    const arrows = document.querySelectorAll('.fa-arrow-down');
    arrows.forEach(arrow => {
        const input = arrow.previousElementSibling;
        const parent = arrow.parentElement;
        const nextForm = parent.nextElementSibling;

        // Validate inputs
        if (input.type === 'text' && validateUser(input.value)){
            nextSlide(parent, nextForm);
        } else if (input.type === 'email' && validateEmail(input.value)){
            nextSlide(parent, nextForm);
        }
    });
}
