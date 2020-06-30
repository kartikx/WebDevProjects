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

function validateUser(username){
    if (username.length < 3){
        bg_error(false);
        return false;
    }else{
        bg_error(true);
        return true;
    }
}

function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email)){
        bg_error(true);
        return true;
    }else{
        bg_error(false);
        return false;
    }
}

function bg_error(error){
    if (error){
        document.body.classList.toggle('error-bg');
    }
}

function nextSlide(parent, nextForm){
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}
