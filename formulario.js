


let click = document.querySelector('.click');

click.addEventListener('click',() => {
    let password = document.querySelector('.password');
    if(password.getAttribute('type') === 'password'){
        password.setAttribute('type','text');
    }
    else{
        password.setAttribute('type','password');
        
    }
})