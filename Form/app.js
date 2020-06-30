function animateForm(){
    /**
     * First, get all down-arrows, and 
     * add event listeners.
     */
    const arrows = document.querySelectorAll('.fa-arrow-down');
    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            console.log('here');
            // Validate inputs
            if (input.type === 'text' && validateUser(input.value)){
                nextSlide(parent, nextForm);
            } else if (input.type === 'email' && validateEmail(input.value)){
                nextSlide(parent, nextForm);
            } else if(input.type === 'password'){
                nextSlide(parent, nextForm);
            }
        });
    });
}

function validateUser(username){
    console.log('validating user');
    if (username.length < 3){
        bg_error(true);
        return false;
    }else{
        bg_error(false);
        return true;
    }
}

function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email)){
        bg_error(false);
        return true;
    }else{
        bg_error(true);
        return false;
    }
}

function bg_error(error){
    if (error){
        // document.body.classList.add('error-bg');
        document.body.style.backgroundImage = 'linear-gradient(120deg, rgb(172, 5, 5), rgb(61, 2, 2))'
    }else{
        document.body.style.backgroundImage = 'linear-gradient(120deg, rgb(34, 185, 34), rgb(32, 80, 212))'
    }
}

function nextSlide(parent, nextForm){
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

animateForm();